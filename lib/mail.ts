import nodemailer from 'nodemailer'

export interface OrderItem {
  name: string
  slug: string
  category: string
  price: number
  quantity: number
  image?: string
}

export interface ShippingAddress {
  fullName: string
  phone: string
  email?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  landmark?: string
}

export interface OrderPayload {
  orderId: string
  orderDate: string
  items: OrderItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  subtotal: number
  shippingFee: number
  totalAmount: number
  status?: string
}

function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '465', 10)
  const secure = process.env.SMTP_SECURE !== 'false'
  const user = process.env.SMTP_USER || 'maatariniastrovision@gmail.com'
  const pass = process.env.SMTP_PASS || ''

  if (!pass) {
    console.warn('[SMTP] Notice: SMTP_PASS is empty in .env.local. Configure Gmail App Password to enable live email delivery.')
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

export function buildAdminOrderEmail(order: OrderPayload): { subject: string; html: string } {
  const address = order.shippingAddress
  const itemsRows = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">
          <strong>${item.name}</strong><br/>
          <span style="font-size: 12px; color: #6b7280; text-transform: uppercase;">Category: ${item.category}</span>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1f2937; text-align: center;">
          ${item.quantity}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1f2937; text-align: right;">
          ₹${item.price}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #92400e; font-weight: bold; text-align: right;">
          ₹${item.price * item.quantity}
        </td>
      </tr>
    `
    )
    .join('')

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Order Alert - ${order.orderId}</title>
  </head>
  <body style="margin: 0; padding: 24px; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #fef08a; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
      
      <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
        <div style="display: inline-block; background: #fbbf24; color: #000000; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 12px; border-radius: 999px; margin-bottom: 8px;">
          Cash on Delivery Order Alert
        </div>
        <h1 style="margin: 4px 0 0 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
          Maa Tarini Astro Vision
        </h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #cbd5e1;">
          New Order ID: <strong style="color: #fde047; font-family: monospace;">${order.orderId}</strong>
        </p>
      </div>

      <div style="padding: 24px;">

        <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 12px; font-weight: 700; color: #854d0e; text-transform: uppercase;">Total Cash to Collect</div>
            <div style="font-size: 26px; font-weight: 900; color: #78350f;">₹${order.totalAmount}</div>
          </div>
          <div style="text-align: right;">
            <span style="display: inline-block; background: #dcfce7; color: #166534; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 6px;">
              ${order.paymentMethod}
            </span>
            <div style="font-size: 11px; color: #6b7280; margin-top: 4px;">Zero Advance Paid</div>
          </div>
        </div>

        <h2 style="font-size: 15px; font-weight: 800; color: #111827; margin: 0 0 12px 0; text-transform: uppercase;">
          Customer Dispatch Details
        </h2>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 14px; color: #334155; line-height: 1.6;">
          <p style="margin: 0 0 6px 0;"><strong>Name:</strong> ${address.fullName}</p>
          <p style="margin: 0 0 6px 0;"><strong>Phone:</strong> <a href="tel:${address.phone}" style="color: #2563eb; font-weight: bold;">${address.phone}</a> &bull; <a href="https://wa.me/${address.phone.replace(/\D/g, '')}" style="color: #16a34a; font-weight: bold;">Chat on WhatsApp</a></p>
          ${address.email ? `<p style="margin: 0 0 6px 0;"><strong>Email:</strong> ${address.email}</p>` : ''}
          <p style="margin: 0 0 6px 0;"><strong>Address:</strong> ${address.addressLine1}${address.addressLine2 ? ', ' + address.addressLine2 : ''}</p>
          ${address.landmark ? `<p style="margin: 0 0 6px 0;"><strong>Landmark:</strong> ${address.landmark}</p>` : ''}
          <p style="margin: 0;"><strong>City / State / PIN:</strong> ${address.city}, ${address.state} - <strong>${address.pincode}</strong></p>
        </div>

        <h2 style="font-size: 15px; font-weight: 800; color: #111827; margin: 0 0 12px 0; text-transform: uppercase;">
          Ordered Sacred Items (${order.items.length})
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left;">
              <th style="padding: 10px 12px; font-size: 12px; color: #475569; font-weight: 700; text-transform: uppercase;">Item</th>
              <th style="padding: 10px 12px; font-size: 12px; color: #475569; font-weight: 700; text-transform: uppercase; text-align: center;">Qty</th>
              <th style="padding: 10px 12px; font-size: 12px; color: #475569; font-weight: 700; text-transform: uppercase; text-align: right;">Unit Price</th>
              <th style="padding: 10px 12px; font-size: 12px; color: #475569; font-weight: 700; text-transform: uppercase; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows}
          </tbody>
        </table>

        <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 14px 16px; border-radius: 4px; font-size: 13px; color: #1e3a8a;">
          <strong>Action Required:</strong> Please contact the customer to confirm dispatch, perform Vedic abhimantrit rituals for the ordered items, and ship within 24-48 hours.
        </div>

      </div>

      <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b;">
        Maa Tarini Astro Vision &bull; HIG 5/6, BDA Colony, Chandrasekharpur, Bhubaneswar, Odisha &bull; Helpline: +91 7325925333
      </div>

    </div>
  </body>
  </html>
  `;

  return {
    subject: `🚨 [New Order Alert] ${order.orderId} - ₹${order.totalAmount} (COD) - ${address.fullName}`,
    html,
  };
}

export function buildCustomerOrderEmail(order: OrderPayload): { subject: string; html: string } {
  const address = order.shippingAddress;
  const itemsRows = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #1f2937;">
          <strong>${item.name}</strong><br/>
          <span style="font-size: 11px; color: #6b7280;">100% Vedic Certified & Energized</span>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #1f2937; text-align: center;">
          ${item.quantity}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #92400e; font-weight: bold; text-align: right;">
          ₹${item.price * item.quantity}
        </td>
      </tr>
    `
    )
    .join('');

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Order Confirmed - Maa Tarini Astro Vision</title>
  </head>
  <body style="margin: 0; padding: 24px; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #fef08a; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
      
      <div style="background: linear-gradient(135deg, #78350f 0%, #451a03 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 26px; font-weight: 900; color: #fbbf24; letter-spacing: -0.5px;">
          Maa Tarini Astro Vision
        </h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #fed7aa;">
          Spiritual Guidance & Vedic Remedial Solutions
        </p>
        <div style="margin-top: 16px; display: inline-block; background: #22c55e; color: #ffffff; font-size: 12px; font-weight: 800; padding: 6px 16px; border-radius: 9999px;">
          Order Confirmed Successfully
        </div>
      </div>

      <div style="padding: 24px;">

        <p style="font-size: 16px; color: #1f2937; margin: 0 0 12px 0;">
          Namaste <strong>${address.fullName}</strong>,
        </p>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">
          Thank you for choosing <strong>Maa Tarini Astro Vision</strong>. Your sacred order has been received and our Vedic priests are preparing your authentic items for ritual energization (Prana Pratishtha) before dispatch.
        </p>

        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 13px; color: #92400e;">Order Reference ID:</span>
            <strong style="font-family: monospace; font-size: 14px; color: #78350f;">${order.orderId}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 13px; color: #92400e;">Payment Mode:</span>
            <strong style="font-size: 13px; color: #166534;">Cash on Delivery (COD)</strong>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px dashed #fcd34d;">
            <span style="font-size: 15px; font-weight: bold; color: #78350f;">Total Amount to Pay:</span>
            <span style="font-size: 20px; font-weight: 900; color: #92400e;">₹${order.totalAmount}</span>
          </div>
          <div style="font-size: 11px; color: #78350f; text-align: right; margin-top: 4px;">
            (Pay in cash when delivery executive arrives)
          </div>
        </div>

        <h2 style="font-size: 14px; font-weight: 800; color: #111827; margin: 0 0 10px 0; text-transform: uppercase;">
          Order Summary
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #f8fafc; text-align: left;">
              <th style="padding: 10px; font-size: 12px; color: #475569; font-weight: 700;">Product</th>
              <th style="padding: 10px; font-size: 12px; color: #475569; font-weight: 700; text-align: center;">Qty</th>
              <th style="padding: 10px; font-size: 12px; color: #475569; font-weight: 700; text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows}
          </tbody>
        </table>

        <h2 style="font-size: 14px; font-weight: 800; color: #111827; margin: 0 0 10px 0; text-transform: uppercase;">
          Delivery Destination
        </h2>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 13px; color: #334155; line-height: 1.5; margin-bottom: 24px;">
          <strong>${address.fullName}</strong><br/>
          ${address.addressLine1}${address.addressLine2 ? ', ' + address.addressLine2 : ''}<br/>
          ${address.landmark ? 'Landmark: ' + address.landmark + '<br/>' : ''}
          ${address.city}, ${address.state} - <strong>${address.pincode}</strong><br/>
          Phone: <strong>${address.phone}</strong>
        </div>

        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 14px 16px; margin-bottom: 24px; font-size: 13px; color: #065f46;">
          <strong>Next Steps:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px; line-height: 1.6;">
            <li>Our support team will verify dispatch details with you.</li>
            <li>Your parcel will be handed over to express courier within 24-48 hours.</li>
            <li>Please keep ₹${order.totalAmount} ready in cash for the delivery person.</li>
          </ul>
        </div>

        <div style="text-align: center; padding: 16px 0 8px 0; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 13px; color: #6b7280; margin: 0 0 8px 0;">Have questions about your order?</p>
          <a href="https://wa.me/917325925333" style="display: inline-block; background: #25d366; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: bold; padding: 8px 20px; border-radius: 9999px;">
            Chat with our Vedic Helpdesk
          </a>
        </div>

      </div>

      <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
        Maa Tarini Astro Vision &bull; Bhubaneswar, Odisha &bull; Helpline: +91 7325925333
      </div>

    </div>
  </body>
  </html>
  `;

  return {
    subject: `Order Confirmed: ${order.orderId} - Maa Tarini Astro Vision`,
    html,
  };
}

export async function sendOrderEmails(order: OrderPayload): Promise<{
  adminSent: boolean
  customerSent: boolean
  errors: string[]
}> {
  const transporter = getTransporter();
  const results = {
    adminSent: false,
    customerSent: false,
    errors: [] as string[],
  };

  if (!transporter) {
    const msg = '[SMTP] Email sending skipped: SMTP_PASS is missing in environment variables.';
    console.warn(msg);
    results.errors.push(msg);
    return results;
  }

  const fromAddress = process.env.SMTP_FROM || `"Maa Tarini Astro Vision" <${process.env.SMTP_USER || 'maatariniastrovision@gmail.com'}>`;
  const adminRecipient = process.env.ADMIN_EMAIL || 'maatariniastrovision@gmail.com';

  const adminEmail = buildAdminOrderEmail(order);
  try {
    await transporter.sendMail({
      from: fromAddress,
      to: adminRecipient,
      subject: adminEmail.subject,
      html: adminEmail.html,
    });
    console.log(`[SMTP] Admin order email successfully sent to ${adminRecipient}`);
    results.adminSent = true;
  } catch (err: any) {
    const errText = `Failed to send admin email: ${err?.message || String(err)}`;
    console.error('[SMTP]', errText);
    results.errors.push(errText);
  }

  if (order.shippingAddress.email && order.shippingAddress.email.includes('@')) {
    const customerEmail = buildCustomerOrderEmail(order);
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: order.shippingAddress.email.trim(),
        subject: customerEmail.subject,
        html: customerEmail.html,
      });
      console.log(`[SMTP] Customer confirmation email sent to ${order.shippingAddress.email}`);
      results.customerSent = true;
    } catch (err: any) {
      const errText = `Failed to send customer email: ${err?.message || String(err)}`;
      console.error('[SMTP]', errText);
      results.errors.push(errText);
    }
  }

  return results;
}

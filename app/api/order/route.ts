import { NextRequest, NextResponse } from 'next/server'
import { sendOrderEmails, OrderPayload } from '@/lib/mail'

export async function POST(req: NextRequest) {
  try {
    const body: OrderPayload = await req.json()

    if (!body || !body.orderId || !body.shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Invalid order payload. Missing orderId or shippingAddress.' },
        { status: 400 }
      )
    }

    // Trigger emails in background / parallel
    const emailResults = await sendOrderEmails(body)

    return NextResponse.json({
      success: true,
      orderId: body.orderId,
      emailResults,
    })
  } catch (error: any) {
    console.error('[API /api/order] Error processing order:', error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to process order email notifications.',
      },
      { status: 500 }
    )
  }
}

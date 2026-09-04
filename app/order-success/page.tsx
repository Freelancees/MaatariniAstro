'use client'

import React, { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  CheckCircle,
  Truck,
  MapPin,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Package,
  Banknote,
  Loader2
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || 'MTA-CONFIRMED'
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('current_order')
      if (stored) {
        setOrderDetails(JSON.parse(stored))
      }
    } catch (e) {
      console.error('Error loading order from session:', e)
    }
  }, [])

  const whatsappMessage = encodeURIComponent(
    `Namaste Maa Tarini Astro Vision Team,\n\nI have placed a Cash on Delivery (COD) order on your website!\n\n*Order ID:* ${orderId}\n*COD Amount:* ₹${orderDetails?.totalAmount || '999'}\n*Customer Name:* ${orderDetails?.shippingAddress?.fullName || 'Valued Customer'}\n*Delivery City:* ${orderDetails?.shippingAddress?.city || 'India'}\n\nPlease confirm dispatch and share the tracking number. Thank you!`
  )

  const whatsappUrl = `https://wa.me/917325925333?text=${whatsappMessage}`

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-yellow-200 text-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Success Icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30 mb-6 animate-bounce">
          <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto mb-6">
          Har Har Mahadev! Your sacred order has been received. Our team will energize your spiritual products with sacred Vedic rituals and dispatch it promptly.
        </p>

        {/* Order ID Banner */}
        <div className="inline-flex items-center gap-3 bg-amber-50 border border-yellow-300 px-5 py-2.5 rounded-full text-slate-900 text-sm font-bold mb-8">
          <span className="text-gray-500 font-normal">Order Reference:</span>
          <span className="font-mono text-amber-900">{orderId}</span>
        </div>

        {/* Order Details Card */}
        {orderDetails && (
          <div className="bg-gray-50/90 rounded-2xl p-5 sm:p-6 border border-gray-200 text-left mb-8 max-w-2xl mx-auto space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="font-bold text-gray-900">Payment Mode</span>
              <span className="inline-flex items-center gap-1.5 font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs">
                <Banknote className="w-3.5 h-3.5 text-emerald-700" />
                <span>{orderDetails.paymentMethod}</span>
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="font-bold text-gray-900">Cash to Pay on Delivery</span>
              <span className="text-xl font-black text-amber-800">
                ₹{orderDetails.totalAmount}
              </span>
            </div>

            {orderDetails.shippingAddress && (
              <div className="space-y-1.5 border-b border-gray-200 pb-3 text-xs sm:text-sm">
                <span className="font-bold text-gray-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Delivery Destination</span>
                </span>
                <p className="text-gray-700 font-medium pl-5">
                  {orderDetails.shippingAddress.fullName} ({orderDetails.shippingAddress.phone})
                </p>
                <p className="text-gray-600 pl-5">
                  {orderDetails.shippingAddress.addressLine}
                  {orderDetails.shippingAddress.landmark && `, Near ${orderDetails.shippingAddress.landmark}`}
                </p>
                <p className="text-gray-600 pl-5">
                  {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} - {orderDetails.shippingAddress.pincode}
                </p>
              </div>
            )}

            {/* Ordered items preview */}
            {orderDetails.items && (
              <div className="space-y-2 text-xs">
                <span className="font-bold text-gray-900 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-amber-700" />
                  <span>Items Ordered ({orderDetails.items.length})</span>
                </span>
                <ul className="divide-y divide-gray-200 pl-5 space-y-1 text-gray-700">
                  {orderDetails.items.map((it: any, idx: number) => (
                    <li key={idx} className="pt-1 first:pt-0 flex justify-between">
                      <span>{it.quantity} × {it.name}</span>
                      <span className="font-semibold text-gray-900">₹{it.price * it.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Delivery Estimate & Instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto mb-8">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <Calendar className="w-5 h-5 text-amber-600 mb-2" />
            <h4 className="font-bold text-xs text-gray-900">Estimated Delivery</h4>
            <p className="text-xs text-gray-600 mt-0.5">3 - 5 Business Days via Express Courier</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <Truck className="w-5 h-5 text-emerald-600 mb-2" />
            <h4 className="font-bold text-xs text-gray-900">Cash on Delivery</h4>
            <p className="text-xs text-gray-600 mt-0.5">Keep exact cash ready for the delivery person</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
            <Phone className="w-5 h-5 text-blue-600 mb-2" />
            <h4 className="font-bold text-xs text-gray-900">Verification Call</h4>
            <p className="text-xs text-gray-600 mt-0.5">Our support will reach out to confirm your address</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* WhatsApp Direct Tracking */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition transform active:scale-98"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Confirm on WhatsApp</span>
          </a>

          <Link
            href="/products"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold text-sm shadow-lg shadow-yellow-500/20 transition"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Need assistance? Call / WhatsApp our Vedic Helpdesk at +91 7325925333</span>
        </div>
      </div>
    </main>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 flex flex-col items-center justify-center text-slate-800">
          <Loader2 className="w-10 h-10 animate-spin text-yellow-500 mb-4" />
          <p className="font-semibold text-sm">Loading order details...</p>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  )
}

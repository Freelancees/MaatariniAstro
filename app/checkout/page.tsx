'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  MapPin,
  Phone,
  User,
  Mail,
  Home,
  Building,
  RotateCcw,
  Lock,
  ArrowRight,
  Sparkles,
  Banknote,
  Package
} from 'lucide-react'
import { useCart, ShippingAddress } from '@/context/CartContext'

const INDIAN_STATES = [
  "Odisha", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh"
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, totalAmount, totalCount, clearCart, savedAddress, saveAddress } = useCart()

  // Form state
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    email: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: 'Odisha',
    pincode: ''
  })

  const [hasLoadedSavedAddress, setHasLoadedSavedAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'ONLINE'>('COD')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Auto-fetch previously entered address from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('maa_tarini_shipping_address')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.fullName && parsed.addressLine) {
          setFormData(parsed)
          setHasLoadedSavedAddress(true)
        }
      } else if (savedAddress) {
        setFormData(savedAddress)
        setHasLoadedSavedAddress(true)
      }
    } catch (e) {
      console.error('Error fetching saved address:', e)
    }
  }, [savedAddress])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClearSaved = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      addressLine: '',
      landmark: '',
      city: '',
      state: 'Odisha',
      pincode: ''
    })
    setHasLoadedSavedAddress(false)
    localStorage.removeItem('maa_tarini_shipping_address')
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    // Form validations
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }
    const cleanPhone = formData.phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for delivery verification.')
      return
    }
    if (!formData.addressLine.trim() || formData.addressLine.trim().length < 5) {
      setErrorMessage('Please enter a detailed delivery address (House/Flat No, Street).')
      return
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city.')
      return
    }
    const cleanPin = formData.pincode.replace(/\D/g, '')
    if (cleanPin.length !== 6) {
      setErrorMessage('Please enter a valid 6-digit Indian PIN code.')
      return
    }

    if (items.length === 0) {
      setErrorMessage('Your cart is empty. Please add products before checking out.')
      return
    }

    setIsSubmitting(true)

    try {
      // 1. Save address to localStorage for future 1-click checkout
      saveAddress(formData)

      // 2. Generate unique Order ID
      const randomSuffix = Math.floor(100000 + Math.random() * 900000)
      const orderId = `MTA-${randomSuffix}`

      // 3. Create order payload
      const newOrder = {
        orderId,
        orderDate: new Date().toISOString(),
        items: items.map((i) => ({
          name: i.product.name,
          slug: i.product.slug,
          category: i.product.category,
          price: i.product.price,
          quantity: i.quantity,
          image: i.product.images[0]
        })),
        shippingAddress: formData,
        paymentMethod: paymentMethod === 'COD' ? 'Cash on Delivery (COD)' : 'Prepaid Online',
        subtotal,
        shippingFee: 0,
        totalAmount,
        status: 'Confirmed - Preparing for Dispatch'
      }

      // 4. Save to orders history in localStorage
      const existingOrders = JSON.parse(localStorage.getItem('maa_tarini_orders') || '[]')
      existingOrders.unshift(newOrder)
      localStorage.setItem('maa_tarini_orders', JSON.stringify(existingOrders))

      // 5. Store current order for the order success page
      sessionStorage.setItem('current_order', JSON.stringify(newOrder))

      // 6. Trigger automated email notifications to admin and customer
      try {
        await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newOrder),
        })
      } catch (mailErr) {
        console.warn('Background email dispatch error (order recorded locally):', mailErr)
      }

      // 7. Clear cart
      clearCart()

      // 8. Redirect to confirmation
      router.push(`/order-success?orderId=${orderId}`)
    } catch (err) {
      console.error('Order creation error:', err)
      setErrorMessage('An unexpected error occurred while placing your order. Please try again.')
      setIsSubmitting(false)
    }
  }

  // If cart is empty and not submitting, show helper
  if (items.length === 0 && !isSubmitting) {
    return (
      <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-yellow-100 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-amber-800 mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No Items to Checkout</h1>
          <p className="text-sm text-gray-600 mb-6">
            Your shopping cart is currently empty. Please add items to proceed with Cash on Delivery checkout.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm shadow transition"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-amber-800 transition">Home</Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-amber-800 transition">Cart</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold">Cash on Delivery Checkout</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex flex-wrap items-center gap-3">
          <span>Checkout & Delivery</span>
          <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-300">
            <Banknote className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cash on Delivery Available</span>
          </span>
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Complete your order with zero advance payment. Pay cash when your sacred energized products arrive.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
          <span className="font-bold">Error:</span> {errorMessage}
        </div>
      )}

      {/* Saved Address Auto-fetched Notification */}
      {hasLoadedSavedAddress && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50/90 border border-yellow-300 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Welcome back! Saved Delivery Address Loaded
              </p>
              <p className="text-xs text-slate-600">
                We automatically retrieved your address so you can checkout quickly. Feel free to edit below.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClearSaved}
            className="text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline flex items-center gap-1 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Enter Different Address</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Delivery Address & Payment */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Contact & Address */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400/40 text-amber-900 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-700" />
                <span>Shipping & Delivery Address</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Subha Ranjan Panda"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  10-Digit Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Required for delivery courier OTP & updates</p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-gray-400 font-normal">(for receipt)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  House / Flat No., Building & Street Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={2}
                    name="addressLine"
                    required
                    value={formData.addressLine}
                    onChange={handleInputChange}
                    placeholder="e.g. Plot No 123, Gayatri Vihar, Near Big Bazaar, Patia"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* Landmark */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nearby Landmark <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. Near Shiv Temple"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  City / District <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Bhubaneswar"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  maxLength={6}
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="e.g. 751024"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400/40 text-amber-900 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                Payment Option
              </h2>
            </div>

            {/* COD Option Card (Primary) */}
            <label
              className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                paymentMethod === 'COD'
                  ? 'border-yellow-500 bg-yellow-50/50 shadow-xs'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
                className="mt-1 w-4 h-4 text-amber-600 focus:ring-yellow-400"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    Cash on Delivery (COD)
                  </span>
                  <span className="text-[11px] font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Pay cash directly to the courier executive upon physical delivery at your door. No advance payment required!
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-amber-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Advance • Free Verification • Pay Only After Receiving</span>
                </div>
              </div>
            </label>

            {/* Online / UPI Option */}
            <label
              className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                paymentMethod === 'ONLINE'
                  ? 'border-yellow-500 bg-yellow-50/50 shadow-xs'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="ONLINE"
                checked={paymentMethod === 'ONLINE'}
                onChange={() => setPaymentMethod('ONLINE')}
                className="mt-1 w-4 h-4 text-amber-600 focus:ring-yellow-400"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">
                    Prepaid (UPI / PhonePe / GPay / NetBanking)
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Fast-track dispatch. You will receive a secure payment QR on WhatsApp after placing the order.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Right Form: Order Summary & Place Order */}
        <div className="lg:col-span-5">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-yellow-200 p-6 sticky top-28 space-y-6">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-xs font-normal text-gray-500">{totalCount} items</span>
            </h2>

            {/* Items list preview */}
            <div className="max-h-64 overflow-y-auto space-y-3 pr-1 divide-y divide-gray-100">
              {items.map(({ product, quantity }) => (
                <div key={product.slug} className="pt-2 first:pt-0 flex items-center gap-3">
                  <div className="relative w-14 h-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center p-1">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Qty: {quantity} × ₹{product.price}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-gray-900">
                    ₹{product.price * quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2.5 text-sm pt-4 border-t border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Items Subtotal</span>
                <span className="font-semibold text-gray-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery (All India)</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Payment Method</span>
                <span className="font-semibold text-amber-800">
                  {paymentMethod === 'COD' ? 'Cash on Delivery (₹0 extra)' : 'Online UPI'}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline">
                <span className="text-base font-bold text-gray-900">Total Amount to Pay</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-amber-800">₹{totalAmount}</span>
                  <p className="text-[11px] text-gray-500">Collect in cash at delivery</p>
                </div>
              </div>
            </div>

            {/* Cash on Delivery Guarantee box */}
            <div className="bg-amber-50/90 rounded-xl p-3 border border-amber-200 text-xs text-amber-950 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Package className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Express Dispatch Within 24-48 Hours</span>
              </p>
              <p className="text-amber-900/80 text-[11px]">
                Your package will be energized and packed safely. Our team will contact you via phone/WhatsApp to confirm dispatch.
              </p>
            </div>

            {/* Place Order CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-extrabold text-base shadow-xl shadow-yellow-500/30 transition transform active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Placing Your Sacred Order...</span>
              ) : (
                <>
                  <span>Confirm Cash on Delivery Order</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Trust highlights */}
            <div className="space-y-2 pt-2 text-xs text-gray-600 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Vedic Abhimantrit & Certified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Advance Risk • Pay Cash After Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

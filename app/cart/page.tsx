'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Truck, ArrowRight, ArrowLeft, Banknote } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalAmount,
    totalCount
  } = useCart()

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-amber-800 transition">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-800 transition">Products</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold">Shopping Cart</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Shopping Cart
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {totalCount > 0
              ? `You have ${totalCount} spiritual ${totalCount === 1 ? 'item' : 'items'} in your cart`
              : 'Your cart is currently empty'}
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline self-start sm:self-auto"
          >
            Clear All Items
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 sm:p-14 text-center shadow-lg border border-yellow-100 max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-yellow-100/80 flex items-center justify-center text-amber-800 mx-auto mb-5">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Sacred Cart is Empty</h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-8">
            You haven't added any spiritual energized products yet. Browse our authentic certified gemstones, rudrakshas, crystals, and vastu items.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold text-sm shadow-lg shadow-yellow-500/20 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Products</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-sm text-emerald-900">
              <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Free All-India Delivery Unlocked!</span> Cash on Delivery (COD) is supported on this order.
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 divide-y divide-gray-100 overflow-hidden">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.slug}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between hover:bg-amber-50/20 transition"
                >
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/product/${product.slug}`}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center p-2"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain hover:scale-105 transition"
                      />
                    </Link>

                    <div>
                      <Link
                        href={`/product/${product.slug}`}
                        className="text-base font-bold text-gray-900 hover:text-amber-800 transition line-clamp-1"
                      >
                        {product.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 font-medium capitalize">
                          {product.category}
                        </span>
                        <span className="text-xs text-emerald-700 font-medium">
                          In Stock • Certified
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-2 sm:hidden">
                        <span className="text-lg font-extrabold text-gray-900">₹{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    <div className="hidden sm:block text-right">
                      <div className="text-lg font-extrabold text-gray-900">₹{product.price}</div>
                      {product.oldPrice && (
                        <div className="text-xs text-gray-400 line-through">₹{product.oldPrice}</div>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-xs">
                      <button
                        onClick={() => updateQuantity(product.slug, quantity - 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-bold text-gray-800 min-w-[28px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.slug, quantity + 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[70px]">
                      <span className="text-sm sm:text-base font-bold text-amber-800">
                        ₹{product.price * quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.slug)}
                      className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition"
                      title="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-amber-800 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-yellow-200/80 p-6 sticky top-28 space-y-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Price ({totalCount} items)</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Cash on Delivery (COD)</span>
                  <span className="text-emerald-600 font-medium">Free Available</span>
                </div>

                <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline">
                  <span className="text-base font-bold text-gray-900">Total Payable</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-800">₹{totalAmount}</div>
                    <span className="text-xs text-gray-500 font-normal">Inclusive of all taxes</span>
                  </div>
                </div>
              </div>

              {/* COD Feature Card */}
              <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 shrink-0 mt-0.5">
                  <Banknote className="w-4 h-4 text-slate-950" />
                </div>
                <div className="text-xs text-amber-950">
                  <p className="font-bold">Zero Risk Cash on Delivery</p>
                  <p className="text-amber-800/80 mt-0.5">
                    Pay in cash when your package is delivered to your doorstep. No prepayment required!
                  </p>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold text-base shadow-xl shadow-yellow-500/25 transition transform active:scale-98"
              >
                <span>Proceed to Checkout (COD)</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Security badges */}
              <div className="space-y-2 pt-2 text-xs text-gray-600 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>100% Genuine, Certified & Energized Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dispatched in 24 Hours • Safe Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

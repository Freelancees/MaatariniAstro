'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Truck, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalCount,
    subtotal,
    totalAmount
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white text-slate-900 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-yellow-400/30 flex items-center justify-center text-amber-800">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Your Sacred Cart</h2>
                    <p className="text-xs text-gray-600">
                      {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="p-2 rounded-full hover:bg-gray-200/60 transition-colors text-gray-500 hover:text-gray-900"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Delivery Callout */}
              <div className="bg-emerald-50 border-b border-emerald-100 px-4 py-2 flex items-center gap-2 text-xs font-medium text-emerald-800">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Special Offer: <strong>FREE Express Delivery</strong> & Cash on Delivery Available!</span>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4">
                      <ShoppingBag className="w-10 h-10 opacity-70" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Your cart is empty</h3>
                    <p className="text-sm text-gray-500 max-w-xs mb-6">
                      Explore our handpicked Vedic energized gemstones, rudrakshas, crystals, and vastu items.
                    </p>
                    <button
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold text-sm shadow-md transition"
                    >
                      Browse All Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map(({ product, quantity }) => (
                      <div
                        key={product.slug}
                        className="flex gap-3 p-3 bg-gray-50/80 rounded-xl border border-gray-100 hover:border-yellow-200 transition"
                      >
                        {/* Product Image */}
                        <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                                {product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(product.slug)}
                                className="text-gray-400 hover:text-red-600 transition ml-2 p-1"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                              {product.oldPrice && (
                                <span className="text-xs text-gray-400 line-through">
                                  ₹{product.oldPrice}
                                </span>
                              )}
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden shadow-xs">
                              <button
                                onClick={() => updateQuantity(product.slug, quantity - 1)}
                                className="p-1 px-2 hover:bg-gray-100 text-gray-600 transition"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold text-gray-800 min-w-[20px] text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.slug, quantity + 1)}
                                className="p-1 px-2 hover:bg-gray-100 text-gray-600 transition"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery (All India)</span>
                      <span className="text-emerald-600 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                      <span>Total (COD Payable)</span>
                      <span className="text-lg text-amber-700">₹{totalAmount}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 bg-white py-1.5 px-2 rounded-md border border-gray-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Pay Cash on Delivery • 100% Energized & Genuine</span>
                  </div>

                  {/* Primary Checkout Button */}
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold text-sm shadow-lg shadow-yellow-500/20 transition transform active:scale-98"
                  >
                    <span>Proceed to Checkout (COD)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="w-full block text-center py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:underline"
                  >
                    View Cart Details
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

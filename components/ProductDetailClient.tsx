'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Share2,
  Heart,
  Banknote,
  Flame
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetailClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    router.push('/checkout')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Maa Tarini Astro Vision:`,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const whatsappInquiryUrl = `https://wa.me/917325925333?text=${encodeURIComponent(
    `Hello Maa Tarini Astro Vision! I am interested in purchasing ${product.name} (₹${product.price}). Is Cash on Delivery available for my PIN code?`
  )}`

  return (
    <div className="space-y-12">
      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Images */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border border-yellow-200/70 group flex items-center justify-center p-6">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                100% Vedic Certified
              </span>
              <span className="bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                In Stock • COD Available
              </span>
            </div>

            <button
              onClick={handleShare}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition"
              title="Share product"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {copied && (
              <span className="absolute top-16 right-4 z-10 bg-slate-900 text-white text-xs px-3 py-1 rounded-md shadow-lg">
                Link copied!
              </span>
            )}

            <Image
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-contain p-6 group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Thumbnail row if multiple images */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl bg-white border-2 overflow-hidden shrink-0 transition ${
                    selectedImageIndex === idx ? 'border-amber-500 shadow-md' : 'border-gray-200 opacity-70'
                  }`}
                >
                  <Image src={img} alt={`${product.name} thumbnail`} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          )}

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 text-center shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-gray-900">Vedic Energized</p>
              <p className="text-[10px] text-gray-500">Consecrated by Purohits</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 text-center shadow-xs">
              <Truck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-gray-900">Free All-India Delivery</p>
              <p className="text-[10px] text-gray-500">Dispatched in 24h</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 text-center shadow-xs">
              <ShieldCheck className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-gray-900">Cash on Delivery</p>
              <p className="text-[10px] text-gray-500">Pay at Doorstep</p>
            </div>
          </div>
        </div>

        {/* Right: Details & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating || 4.9}</span>
                <span className="text-gray-400">({product.reviewCount || 120}+ reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {product.name}
            </h1>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 p-5 rounded-2xl border border-yellow-200/90 shadow-xs">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-amber-900">
                ₹{product.price}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Save 50%
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes & Vedic Abhishek energization</p>

            {/* COD Callout */}
            <div className="mt-3.5 pt-3 border-t border-yellow-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span className="flex items-center gap-1.5">
                <Banknote className="w-4 h-4 text-emerald-700" />
                <span>Cash on Delivery (COD) Available</span>
              </span>
              <span className="text-slate-700 font-medium">Free Shipping</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-300 rounded-xl bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-gray-100 text-gray-700 transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-black text-gray-900 min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-gray-100 text-gray-700 transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ready for express dispatch</span>
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white border-2 border-yellow-400 hover:bg-yellow-50 text-slate-900 font-bold text-base shadow-md transition transform active:scale-98"
              >
                <ShoppingBag className="w-5 h-5 text-amber-700" />
                <span>Add to Cart</span>
              </button>

              {/* Buy Now (Direct to COD checkout) */}
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-extrabold text-base shadow-xl shadow-yellow-500/25 transition transform active:scale-98"
              >
                <span>Buy Now with COD</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* WhatsApp Inquiry */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs transition"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-600" />
              <span>Have questions? Chat with our Astrologer on WhatsApp</span>
            </a>
          </div>

          {/* Benefits */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="bg-white/80 rounded-2xl p-5 border border-gray-100 space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Astrological Benefits</span>
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Specifications & Usage Guide Tabs */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-lg border border-yellow-200 space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-gray-100">
            Vedic Specifications & Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.specifications.map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 text-xs sm:text-sm"
              >
                <span className="font-semibold text-gray-600">{spec.label}</span>
                <span className="font-bold text-slate-900 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wearing / Placement Instructions */}
        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            Vedic Ritual & How to Use
          </h3>
          <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
            <p className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Pre-Consecrated:</strong> This product is ritually cleansed with Gangajal and energized with sacred Vedic mantras by Vedic Purohits at Maa Tarini Astro Vision before dispatch.</span>
            </p>
            <p className="flex items-start gap-2">
              <Flame className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Activation at Home:</strong> Upon receiving your delivery, place it in your home puja altar, light an incense stick (dhoop) or ghee lamp, and chant the presiding deity mantra 11 or 108 times for maximum cosmic alignment.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                You May Also Like
              </h2>
              <p className="text-xs text-gray-600">
                Popular energized spiritual items in this collection
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-md hover:shadow-xl transition flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/product/${rel.slug}`}
                    className="relative w-full h-40 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden mb-3 block"
                  >
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition duration-300"
                    />
                  </Link>

                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-yellow-50 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>

                  <Link
                    href={`/product/${rel.slug}`}
                    className="block text-sm font-bold text-slate-900 mt-1 line-clamp-1 hover:text-amber-800 transition"
                  >
                    {rel.name}
                  </Link>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-base font-extrabold text-slate-900">₹{rel.price}</span>
                    {rel.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">₹{rel.oldPrice}</span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                  <button
                    onClick={() => addToCart(rel, 1)}
                    className="flex-1 py-2 px-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-xs shadow-xs transition"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/product/${rel.slug}`}
                    className="py-2 px-3 rounded-lg border border-gray-300 text-slate-700 text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200 p-3 px-4 sm:hidden flex items-center justify-between shadow-2xl">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-slate-900">₹{product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
            )}
          </div>
          <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <Banknote className="w-3 h-3" />
            <span>Cash on Delivery</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="p-3 rounded-xl border border-yellow-400 bg-yellow-50 text-slate-900 font-bold text-xs"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4 text-amber-800" />
          </button>
          <button
            onClick={handleBuyNow}
            className="py-3 px-5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-black text-xs shadow-md"
          >
            Buy Now (COD)
          </button>
        </div>
      </div>
    </div>
  )
}

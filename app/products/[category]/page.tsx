'use client'

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  gemstoneSubcategories,
  rudrakshaSubcategories,
  vastuSubcategories,
  crystalSubcategories,
  yantraSubcategories
} from "@/lib/subcategories"
import { products } from "@/lib/products"
import { CategoryParams } from "@/types"
import { ShoppingBag, Star, ArrowRight, ShieldCheck, Banknote, Truck } from "lucide-react"
import { useCart } from "@/context/CartContext"

const categoryMeta: Record<string, { title: string; desc: string }> = {
  gemstones: {
    title: "Vedic Certified Gemstones",
    desc: "100% natural, lab-certified astrological gemstones energized for planetary pacification and wealth."
  },
  rudraksha: {
    title: "Sacred Nepali Rudraksha Beads & Malas",
    desc: "Authentic Himalayan Rudraksha beads blessed by Lord Shiva for divine protection, peace, and health."
  },
  bracelets: {
    title: "Chakra Healing & Gemstone Bracelets",
    desc: "Powerful energy bracelets handcrafted from genuine crystals for all-day aura shielding and confidence."
  },
  vastu: {
    title: "Vastu Shastra Energy Rectifiers",
    desc: "Pyramids, Swastiks, and brass corrections to rectify residential and commercial energy flows without renovations."
  },
  crystals: {
    title: "Natural Healing Crystals & Clusters",
    desc: "High vibrational raw and polished crystals for manifestation, deep meditation, and negative energy clearance."
  },
  yantras: {
    title: "Sacred Consecrated Vedic Yantras",
    desc: "Precision sacred geometric copper and brass yantras invoking Goddess Lakshmi, Durga, and Lord Kuber."
  },
  fengshui: {
    title: "Feng Shui Prosperity & Chi Enhancers",
    desc: "Harmonizing Laughing Buddhas, wind chimes, and wealth frogs to stimulate positive Chi and abundance."
  },
  mala: {
    title: "Sacred 108 Beads Japa Malas",
    desc: "Original Karungali, Tulasi, Sphatik, and Rudraksha malas for daily meditation, prayer, and stress detox."
  },
  herbs: {
    title: "Sacred Ayurvedic & Puja Samagri Herbs",
    desc: "Pure Himalayan Gangajal, Kashmiri Kesar, and natural sandalwood for sacred Havans and daily puja."
  }
}

export default function CategoryPage({
  params,
}: {
  params: CategoryParams
}) {
  const category = params.category?.toLowerCase()
  const { addToCart } = useCart()

  const meta = categoryMeta[category]
  if (!meta) {
    return notFound()
  }

  // Find subcategories if any
  let subcategories: { name: string; slug: string; image: string }[] = []
  if (category === "gemstones") subcategories = gemstoneSubcategories
  if (category === "rudraksha") subcategories = rudrakshaSubcategories
  if (category === "vastu") subcategories = vastuSubcategories
  if (category === "crystals") subcategories = crystalSubcategories
  if (category === "yantras") subcategories = yantraSubcategories

  // Filter products for this category
  const categoryProducts = products.filter((p) => p.category.toLowerCase() === category)

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-amber-800 transition">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-800 transition">Products</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold capitalize">{category}</span>
      </nav>

      {/* Header */}
      <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-yellow-200/90 shadow-lg mb-10">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-yellow-100 px-3 py-1 rounded-full">
            Category Collection
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 mb-2">
            {meta.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {meta.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
              <Banknote className="w-3.5 h-3.5 text-emerald-700" />
              <span>All at Flat ₹999</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>100% Vedic Abhimantrit & Certified</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free All-India COD Delivery</span>
            </span>
          </div>
        </div>
      </div>

      {/* Subcategories (if present) */}
      {subcategories && subcategories.length > 0 && (
        <section className="mb-14">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
            <span>Explore by Type</span>
            <span className="text-xs font-normal text-gray-500">
              {subcategories.length} varieties
            </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/products/${category}/${sub.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 hover:border-yellow-300"
              >
                <div className="relative w-full h-28 sm:h-32 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-2.5 text-center bg-white">
                  <h3 className="text-xs font-bold text-slate-900 truncate">
                    {sub.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Products in Category */}
      <section>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Available Energized Items ({categoryProducts.length})
          </h2>
          <span className="text-xs text-gray-500">
            Consecrated by Purohits
          </span>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white/80 rounded-2xl p-10 text-center text-gray-500">
            No specific items currently listed in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
            {categoryProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border border-yellow-200/80 flex flex-col justify-between group"
              >
                <div>
                  <Link href={`/product/${product.slug}`} className="block relative">
                    <div className="relative w-full h-44 sm:h-48 bg-white flex items-center justify-center p-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>

                  <div className="p-3.5 sm:p-4">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 hover:text-amber-800 transition">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 text-amber-500 text-[11px] font-semibold my-1.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{product.rating || 4.9}</span>
                      <span className="text-gray-400">({product.reviewCount || 80}+)</span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-base sm:text-lg font-black text-slate-900">
                        ₹{product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.oldPrice}
                        </span>
                      )}
                      <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded ml-auto">
                        COD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 pt-0 space-y-1.5">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-950 text-xs font-bold py-2.5 rounded-xl shadow-xs transition active:scale-95"
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Cart</span>
                  </button>

                  <Link
                    href={`/product/${product.slug}`}
                    className="w-full block text-center text-[11px] font-bold text-slate-600 hover:text-slate-900 py-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
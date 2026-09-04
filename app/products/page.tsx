"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ShoppingBag, Search, Star, ArrowRight, Banknote } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"

const allCategories = [
  { id: "all", title: "All Products" },
  { id: "gemstones", title: "Gemstones" },
  { id: "rudraksha", title: "Rudraksha" },
  { id: "bracelets", title: "Bracelets" },
  { id: "vastu", title: "Vastu Materials" },
  { id: "crystals", title: "Crystals" },
  { id: "yantras", title: "Sacred Yantras" },
  { id: "fengshui", title: "Feng Shui" },
  { id: "mala", title: "Holy Malas" },
  { id: "herbs", title: "Sacred Herbs" },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const { addToCart } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category.toLowerCase() === activeCategory.toLowerCase()
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="relative min-h-screen w-full pt-36 sm:pt-40 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest bg-yellow-300/70 text-slate-900 px-3.5 py-1.5 rounded-full border border-yellow-400/50 shadow-xs">
            Authentic Vedic Spiritual Store
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3 mb-3 text-slate-900 tracking-tight">
            Vedic Energized Products
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            Handpicked natural gemstones, authentic Nepali rudrakshas, crystal pyramids, and sacred yantras.
            All products consecrated by Vedic Purohits • <strong>Flat ₹999</strong> • Cash on Delivery (COD) Available
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gemstones, rudraksha, yantras..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/95 border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm shadow-md transition"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition shadow-xs ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-yellow-400 shadow-md scale-105"
                  : "bg-white/80 hover:bg-white text-slate-800 border border-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-800 font-semibold border-b border-slate-700/20 pb-3">
          <span>
            Showing <strong>{filteredProducts.length}</strong> spiritual items
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full font-bold">
            <Banknote className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cash on Delivery Available</span>
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-12 text-center max-w-md mx-auto my-12 shadow-lg">
            <p className="text-lg font-bold text-slate-900 mb-2">No products found</p>
            <p className="text-sm text-gray-600 mb-4">
              We couldn't find any items matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="px-5 py-2 rounded-full bg-yellow-400 font-bold text-xs shadow hover:bg-yellow-500 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.slug}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border border-yellow-200/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <Link href={`/product/${product.slug}`} className="block relative">
                    <div className="relative w-full h-44 sm:h-52 bg-white flex items-center justify-center overflow-hidden p-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-3 group-hover:scale-108 transition duration-500"
                      />
                    </div>

                    <span className="absolute top-2.5 left-2.5 bg-yellow-400/90 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                      {product.category}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="p-3.5 sm:p-4">
                    <Link href={`/product/${product.slug}`}>
                      <h2 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 hover:text-amber-800 transition">
                        {product.name}
                      </h2>
                    </Link>

                    <div className="flex items-center gap-1 text-amber-500 text-[11px] font-semibold my-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating || 4.9}</span>
                      <span className="text-gray-400">({product.reviewCount || 90}+)</span>
                    </div>

                    <p className="text-[11px] text-gray-600 line-clamp-2 mb-2 leading-tight">
                      {product.description}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-base sm:text-lg font-black text-slate-900">
                        ₹{product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.oldPrice}
                        </span>
                      )}
                      <span className="text-[9px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded ml-auto">
                        50% OFF
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-3.5 sm:p-4 pt-0 space-y-1.5">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-950 text-xs font-extrabold py-2.5 rounded-xl shadow-xs transition transform active:scale-95"
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
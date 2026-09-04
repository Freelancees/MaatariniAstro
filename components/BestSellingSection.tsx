"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { getProductBySlug } from "@/lib/products"

const bestSelling = [
  {
    slug: "8-directions-booster",
    name: "8 Directions Booster with Yantra",
    description: "Rectifies multi-directional space defects and amplifies meditation energy.",
    image: "/image/best selling/8 Directions Booster with Yantra.png",
    price: 999,
    oldPrice: 1999,
    badge: "Best Seller"
  },
  {
    slug: "brass-trishakti",
    name: "Brass Trishakti (Trishul, Om & Swastik)",
    description: "Balance planetary energies and triple-shield your home entrance.",
    image: "/image/best selling/Brass Trishakti.png",
    price: 999,
    oldPrice: 1999,
    badge: "Trending"
  },
  {
    slug: "five-element-tape",
    name: "Five Element Vastu Correction Tape",
    description: "Elemental color space programming without structural breaking.",
    image: "/image/best selling/Five Element Tape.png",
    price: 999,
    oldPrice: 1999,
    badge: "50% OFF"
  },
  {
    slug: "multipurpose-rods",
    name: "Copper Multipurpose Energy Rods",
    description: "Neutralizes geopathic stress and improves space energy flow.",
    image: "/image/best selling/Multipurpose Rods.png",
    price: 999,
    oldPrice: 1999,
    badge: "Trending"
  },
  {
    slug: "relationship-booster",
    name: "Relationship & Love Harmony Booster",
    description: "Deepens marital companionship, peace, and spiritual clarity.",
    image: "/image/best selling/Relationship Booster.png",
    price: 999,
    oldPrice: 1999,
    badge: "Best Seller"
  }
]

export default function BestSellingSection() {
  const { addToCart } = useCart()

  const handleAdd = (slug: string) => {
    const prod = getProductBySlug(slug)
    if (prod) {
      addToCart(prod, 1)
    }
  }

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10 px-4">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-yellow-300/60 px-3 py-1 rounded-full">
          Customer Favorites
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2 text-slate-900">
          Best Selling Spiritual Products
        </h2>
        <p className="text-slate-700 text-sm max-w-xl mx-auto">
          Most loved Vedic energized remedies across India • All at unified ₹999 with Free COD Delivery
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {bestSelling.map((product) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group relative border border-yellow-200/80 flex flex-col justify-between overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full z-10 shadow-xs">
                {product.badge}
              </div>

              {/* Product Image */}
              <Link href={`/product/${product.slug}`} className="block">
                <div className="relative w-full h-[190px] overflow-hidden bg-white/70 p-4 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-1 hover:text-amber-800 transition">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-black text-slate-900">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                      COD
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAdd(product.slug)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-950 font-bold text-xs py-2.5 rounded-xl shadow-xs transition active:scale-95"
                    >
                      <ShoppingBag size={14} />
                      <span>Add to Cart</span>
                    </button>

                    <Link
                      href={`/product/${product.slug}`}
                      className="text-center text-xs font-bold border border-gray-300 hover:border-gray-400 text-slate-800 py-2.5 px-3 rounded-xl transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
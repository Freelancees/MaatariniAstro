'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const categories = [
  { name: "Gemstones", slug: "gemstones", desc: "Certified Natural Gemstones", image: "/image/productcomp/gemstone.png" },
  { name: "Rudraksha", slug: "rudraksha", desc: "1 to 21 Mukhi Nepali Beads", image: "/image/productcomp/rudrakhs.png" },
  { name: "Bracelets", slug: "bracelets", desc: "Chakra & Energy Healing", image: "/image/productcomp/braclet.png" },
  { name: "Vastu Materials", slug: "vastu", desc: "Pyramids & Sacred Yantras", image: "/image/productcomp/Vastu.png" },
  { name: "Crystals", slug: "crystals", desc: "Raw & Polished Quartz", image: "/image/productcomp/Crystals.png" },
  { name: "Sacred Yantras", slug: "yantras", desc: "Copper & Brass Geometries", image: "/image/productcomp/yantras.png" },
  { name: "Feng Shui", slug: "fengshui", desc: "Prosperity & Chi Enhancers", image: "/image/productcomp/fengshui.png" },
  { name: "Sacred Malas", slug: "mala", desc: "108 Japa Meditation Beads", image: "/image/mala/rudraksha.jpg" },
  { name: "Puja Herbs", slug: "herbs", desc: "Kesar, Ganga Jal & Chandan", image: "/image/productcomp/herbs.png" },
]

export default function ProductsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-yellow-400/30 border border-yellow-400/50 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Vedic Catalog</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Spiritual Categories
        </h2>

        <p className="text-slate-700 text-sm mt-2">
          Explore handpicked spiritual categories energized for your journey • All at unified ₹999 with Free COD Delivery
        </p>
      </div>

      {/* Grid: 9 categories cleanly balanced in responsive columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-yellow-200/80 flex flex-col justify-between"
            >
              <Link href={`/products/${cat.slug}`} className="block">
                {/* Image */}
                <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden bg-white/60 flex items-center justify-center p-3">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition" />
                  <span className="absolute top-3 left-3 bg-yellow-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                    Flat ₹999
                  </span>
                </div>

                {/* Caption */}
                <div className="p-4 bg-white/90">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </Link>

              <div className="px-4 pb-4 bg-white/90 pt-0">
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 group-hover:translate-x-1 transition-transform"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/25 transition transform hover:scale-105 active:scale-95"
          >
            <span>View All Spiritual Products (₹999)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { useCart } from '@/context/CartContext'
import { getProductBySlug } from '@/lib/products'

const newArrivals = [
  { name: 'Maha Laxmi Golden Pyramid', slug: 'laxmi-pyramid', image: '/image/best selling/laxmi pyramid.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: 'Crystal Dowsing Pendulum', slug: 'pendulum', image: '/image/best selling/Pendulum.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: 'Sacred Himalayan Sea Salt Powder', slug: 'sea-salt-powder', image: '/image/best selling/Sea Salt Powder.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: 'Money Magnet Pyrite Pyramid', slug: 'money-magnet-pyrite-pyramid', image: '/image/best selling/Money Magnet Pyrite Pyramid.png', price: 999, oldPrice: 1999, badge: 'Trending' },
  { name: '9 Planets Sacred Ritual Oil', slug: '9-planets-oil', image: '/image/best selling/9 Planets Oil.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: 'Vastu Purush Brahmasthan Plate', slug: 'vastu-purush-brahmasthan-plate', image: '/image/best selling/Vastu purush brahmasthan plate.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: 'Green Aventurine Zibu Pyramid', slug: 'green-zebu-pyramid', image: '/image/best selling/Green Zebu Pyramid.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
  { name: '3D Meru Prushtha Shree Yantra', slug: 'meru-shree-yantra', image: '/image/best selling/meru shree yantra.png', price: 999, oldPrice: 1999, badge: 'New Arrival' },
]

export default function NewArrivalsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const { addToCart } = useCart()

  const scroll = (direction: string) => {
    if (!sliderRef.current) return
    const scrollAmount = 360
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const handleAdd = (slug: string) => {
    const prod = getProductBySlug(slug)
    if (prod) {
      addToCart(prod, 1)
    }
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Star Particles */}
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
      <div className="text-center mb-10 relative z-10 px-4">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-yellow-300/60 px-3 py-1 rounded-full">
          Fresh Consecrations
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2 text-slate-900">
          New Vedic Arrivals
        </h2>
        <p className="text-slate-700 text-sm max-w-xl mx-auto">
          Freshly consecrated spiritual essentials • Limited batch energized by Vedic Purohits • All at ₹999
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 shadow-xl p-3 rounded-full z-20 transition border border-gray-200"
          aria-label="Previous Slide"
        >
          <MdArrowBackIos size={16} className="translate-x-0.5" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 shadow-xl p-3 rounded-full z-20 transition border border-gray-200"
          aria-label="Next Slide"
        >
          <MdArrowForwardIos size={16} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
        >
          {newArrivals.map((product) => (
            <motion.div
              key={product.slug}
              whileHover={{ y: -6 }}
              className="min-w-[240px] max-w-[260px] bg-white/80 backdrop-blur-md rounded-2xl border border-yellow-200/90 shadow-md hover:shadow-2xl transition relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full z-10 shadow-xs">
                {product.badge}
              </div>

              <div>
                <Link href={`/product/${product.slug}`}>
                  <div className="relative w-full h-[180px] overflow-hidden bg-white/70 p-4 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </Link>

                <div className="p-4 pb-2">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1 hover:text-amber-800 transition">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-black text-slate-900 text-base">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                      COD
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-2">
                <button
                  onClick={() => handleAdd(product.slug)}
                  className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-950 text-xs font-bold py-2.5 rounded-xl shadow-xs transition active:scale-95"
                >
                  <ShoppingBag size={14} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
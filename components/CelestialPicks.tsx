'use client'

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const celestialItems = [
  { name: "Feng Shui Items", category: "fengshui", link: "/products/fengshui", img: "/image/fengsui.png", desc: "Removes obstacles and clears stagnant home Chi." },
  { name: "Healing Crystals", category: "crystals", link: "/products/crystals", img: "/image/crystals/5.jpg", desc: "Balances chakras and amplifies positive intentions." },
  { name: "Chakra Bracelets", category: "bracelets", link: "/products/bracelets", img: "/image/gemstone.png", desc: "Harness planetary vibrations for continuous aura protection." },
  { name: "Vastu Materials", category: "vastu", link: "/products/vastu", img: "/image/image.png", desc: "Harmonize architectural energies without demolition." },
  { name: "Sphatik Mala", category: "mala", link: "/products/mala", img: "/image/mala.png", desc: "Cooling quartz crystal beads for peace and focus." },
  { name: "Certified Gemstones", category: "gemstones", link: "/products/gemstones", img: "/image/gamestone1.png", desc: "Enhance life path and pacify planetary doshas." },
  { name: "Sacred Yantras", category: "yantras", link: "/products/yantras", img: "/image/nabagraha.png", desc: "Sacred geometric copper plates for cosmic abundance." },
  { name: "Rudraksha Beads", category: "rudraksha", link: "/products/rudraksha", img: "/image/rudraksha.png", desc: "Blessed Himalayan beads for physical and spiritual stamina." },
]

export default function CelestialPicks() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const offset = 320
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-yellow-400/30 border border-yellow-400/50 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Cosmic Essentials</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Celestial Picks
            </h2>

            <p className="text-sm text-slate-700 mt-1 max-w-lg">
              Handpicked spiritual essentials for your journey • All at unified ₹999 with Free COD Delivery
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-yellow-200 shadow-md flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 shadow-md shadow-yellow-500/20 flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {celestialItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="min-w-[260px] max-w-[280px] bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-yellow-200/90 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <Link href={item.link} className="block">
                  <div className="relative w-full h-44 bg-white/70 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-3 border border-yellow-100">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain p-2 group-hover:scale-108 transition duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-yellow-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                      ₹999 COD
                    </span>
                  </div>
                </Link>

                <Link href={item.link}>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition">
                    {item.name}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  { name: "Rudraksha Mala", img: "/image/rudraksha.jpg", back: "Enhances spiritual energy and meditation focus." },
  { name: "Navagraha Yantra", img: "/image/yantra.jpg", back: "Balances the nine planetary energies in life." },
  { name: "Gemstone Bracelet", img: "/image/gemstone.jpg", back: "Harness planetary vibrations with gemstones." },
  { name: "Vastu Pyramid", img: "/image/pyramid.jpg", back: "Improves energy balance in home & workspace." },
  { name: "Sphatik Mala", img: "/image/sphatik.jpg", back: "Promotes peace, clarity and spiritual awareness." },
  { name: "Shree Yantra", img: "/image/shreeyantra.jpg", back: "Attracts prosperity and divine blessings." },
  { name: "Navratna Ring", img: "/image/navratna.jpg", back: "Balances all nine planetary influences." },
  { name: "Healing Crystal", img: "/image/crystal.jpg", back: "Supports emotional healing and positivity." },
  { name: "Ketu Yantra", img: "/image/ketu.jpg", back: "Removes obstacles and spiritual blockages." },
  { name: "Astrology Pendant", img: "/image/pendant.jpg", back: "Protective charm aligned with cosmic energies." },
]

export default function CelestialPicks() {

  const sliderRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  /* Auto Scroll */
  useEffect(() => {

    const slider = sliderRef.current
    const indicator = indicatorRef.current

    if (!slider) return

    let scroll = 0

    const auto = setInterval(() => {

      scroll += 1
      slider.scrollLeft = scroll

      if (indicator) {
        indicator.style.transform = `translateX(${scroll/5}px)`
      }

      if (scroll >= slider.scrollWidth - slider.clientWidth) {
        scroll = 0
      }

    }, 20)

    return () => clearInterval(auto)

  }, [])

  return (
    <section className="relative py-20 overflow-hidden">

      {/* ⭐ Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80 animate-pulse"
            style={{
              width: `${Math.random()*3}px`,
              height: `${Math.random()*3}px`,
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animationDelay: `${Math.random()*4}s`
            }}
          />
        ))}
      </div>

      {/* ⭐ Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-white/30 rounded-full"
        >
          <div className="absolute -top-3 left-1/2 w-6 h-6 bg-purple-400 rounded-full blur-[1px]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-yellow-200/30 rounded-full"
        >
          <div className="absolute -top-3 left-1/2 w-8 h-8 bg-yellow-300 rounded-full blur-[2px]" />
        </motion.div>

      </div>

      {/* ⭐ Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Celestial Picks
        </h2>
      </div>

      {/* ⭐ Product Slider */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll no-scrollbar px-8 relative z-10"
      >

        {products.map((p, i) => (

          <Link
            href="/product"
            key={i}
            className="min-w-[240px] h-[280px] perspective"
          >

            <div className="relative w-full h-full duration-700 preserve-3d hover:rotate-y-180">

              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-xl">

                <Image
                  src={p.img}
                  alt={p.name}
                  width={240}
                  height={180}
                  className="rounded-lg object-cover"
                />

                <h3 className="text-center mt-3 font-semibold text-gray-900">
                  {p.name}
                </h3>

              </div>

              {/* Back */}
              <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white/80 backdrop-blur-md rounded-xl p-4 flex items-center justify-center text-center text-gray-900 font-medium">

                {p.back}

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* ⭐ Slider Indicator */}
      <div className="mt-10 flex justify-center">

        <div className="w-[300px] h-[4px] bg-white/30 rounded-full relative overflow-hidden">

          <div
            ref={indicatorRef}
            className="absolute w-[80px] h-full bg-yellow-400 rounded-full transition-transform"
          />

        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>

    </section>
  )
}
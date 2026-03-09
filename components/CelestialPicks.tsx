'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  {
    name: "Rudraksha Mala",
    img: "/image/rudraksha.jpg",
    back: "Enhances spiritual energy and meditation focus.",
  },
  {
    name: "Navagraha Yantra",
    img: "/image/yantra.jpg",
    back: "Balances the nine planetary energies in life.",
  },
  {
    name: "Gemstone Bracelet",
    img: "/image/gemstone.jpg",
    back: "Harness planetary vibrations with gemstones.",
  },
  {
    name: "Vastu Pyramid",
    img: "/image/pyramid.jpg",
    back: "Improves energy balance in home & workspace.",
  },
]

export default function CelestialPicks() {

  const sliderRef = useRef<HTMLDivElement>(null)

  /* Infinite Auto Scroll */
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let scroll = 0

    const auto = setInterval(() => {
      scroll += 1
      slider.scrollLeft = scroll

      if (scroll >= slider.scrollWidth / 2) {
        scroll = 0
      }
    }, 20)

    return () => clearInterval(auto)
  }, [])

  return (
    <section className="relative py-16 overflow-hidden">

      {/* Twinkling Stars */}
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

      {/* Orbiting Planets */}
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

      {/* Title */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Celestial Picks
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar px-6 relative z-10"
      >
        {[...products, ...products].map((p, i) => (

          <div
            key={i}
            className="min-w-[220px] h-[260px] perspective"
          >

            <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">

              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-xl">

                <Image
                  src={p.img}
                  alt={p.name}
                  width={220}
                  height={180}
                  className="rounded-lg"
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

          </div>

        ))}
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
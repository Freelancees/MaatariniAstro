'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const products = [
  { name: "Feng Shui Items", link: "/products#fengshui", img: "/image/fengsui.png", back: "Removes obstacles and spiritual blockages." },
  { name: "Crystals", link: "/products#crystals", img: "/image/crystals/5.jpg", back: "Balances planetary energies." },
  { name: "Bracelet", link: "/products#bracelets", img: "/image/gemstone.png", back: "Harness planetary vibrations." },
  { name: "Vastu Materials", link: "/products#vastu", img: "/image/image.png", back: "Improves home energy flow." },
  { name: "Sphatik Mala", link: "/products#rudraksha", img: "/image/mala.png", back: "Promotes peace and clarity." },
  { name: "Gemstone", link: "/products#gemstones", img: "/image/gamestone1.png", back: "Enhance life through gemstones." },
  { name: "Yantra", link: "/products#yantras", img: "/image/nabagraha.png", back: "Balances cosmic forces." },
  { name: "Rudraksha Mala", link: "/products#rudraksha", img: "/image/rudraksha.png", back: "Boosts spiritual energy." },
]

export default function CelestialPicks() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationFrame: number

    const scroll = () => {
      if (!isHovering.current) {
        slider.scrollLeft += 0.5

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0
        }
      }

      animationFrame = requestAnimationFrame(scroll)
    }

    scroll()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">

      {/* ✨ TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display text-black">
          Celestial Picks
        </h2>
        <p className="text-black/70 mt-2">
          Handpicked spiritual essentials for your journey
        </p>
      </div>

      {/* 🎯 SLIDER */}
      <div
        ref={sliderRef}
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
        className="flex gap-8 overflow-x-scroll no-scrollbar px-8"
      >

        {products.map((p, i) => (
          <Link
            href={p.link}
            key={i}
            className="min-w-[260px] h-[330px] perspective group py-4"
          >

            <div className="
              relative w-full h-full duration-700 preserve-3d
              group-hover:rotate-y-180
            ">

              {/* FRONT */}
              <div className="
                absolute w-full h-full backface-hidden
                bg-white/70 backdrop-blur-xl
                rounded-2xl p-5
                border border-yellow-300/30
                shadow-lg
                transition-all duration-300
                flex flex-col
                group-hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]
                group-hover:scale-105
              ">

                <div className="w-full h-[180px] flex items-center justify-center">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={200}
                    height={160}
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-black text-base">
                    {p.name}
                  </h3>
                </div>

              </div>

              {/* BACK */}
              <div className="
                absolute w-full h-full rotate-y-180 backface-hidden
                bg-gradient-to-br from-yellow-100 to-white
                rounded-2xl p-6
                flex items-center justify-center
                text-center text-black font-medium text-sm
                border border-yellow-400/40
                shadow-[0_0_30px_rgba(255,215,0,0.4)]
              ">
                {p.back}
              </div>

            </div>

          </Link>
        ))}

      </div>

      {/* 🎨 STYLES */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .perspective {
          perspective: 1200px;
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

        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

    </section>
  )
}
'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  { name: "Feng Shui Items", link: "/products#fengshui", img: "/image/fengsui.png", back: "Removes obstacles and spiritual blockages." },
  { name: "Crystals", link: "/products#crystals", img: "/image/crystals/5.jpg", back: "Balances the nine planetary energies in life." },
  { name: "Gemstone Bracelet", link: "/products#bracelets", img: "/image/gemstone.png", back: "Harness planetary vibrations with gemstones." },
  { name: "Vastu Materials", link: "/products#vastu", img: "/image/image.png", back: "Improves energy balance in home & workspace." },
  { name: "Sphatik Mala", link: "/products#rudraksha", img: "/image/mala.png", back: "Promotes peace, clarity and spiritual awareness." },
  { name: "Gemstone", link: "/products#gemstones", img: "/image/gamestone1.png", back: "Harness planetary vibrations with gemstones." },
  { name: "Navagraha Yantra", link: "/products#yantras", img: "/image/nabagraha.png", back: "Balances the nine planetary energies in life." },
  { name: "Rudraksha Mala", link: "/products#rudraksha", img: "/image/rudraksha.png", back: "Enhances spiritual energy and meditation focus." },
]

export default function CelestialPicks() {

  const sliderRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const slider = sliderRef.current
    const indicator = indicatorRef.current

    if (!slider) return

    let scroll = 0

    const auto = setInterval(() => {

      scroll += 1
      slider.scrollLeft = scroll

      if (indicator) {
        indicator.style.transform = `translateX(${scroll / 5}px)`
      }

      if (scroll >= slider.scrollWidth - slider.clientWidth) {
        scroll = 0
      }

    }, 20)

    return () => clearInterval(auto)

  }, [])

  return (
    <section className="relative py-24 overflow-hidden">

      <div
        ref={sliderRef}
        className="flex gap-10 overflow-x-scroll no-scrollbar px-8 relative z-10"
      >

        {products.map((p, i) => (

          <Link
            href={p.link}
            key={i}
            className="min-w-[240px] h-[310px] perspective"
          >

            <div className="relative w-full h-full duration-700 preserve-3d hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden 
              bg-white/60 backdrop-blur-xl 
              rounded-xl p-5 
              border border-yellow-300/40
              shadow-lg
              hover:shadow-[0_0_35px_rgba(255,215,0,0.45)]
              transition-all duration-300
              flex flex-col">

                <div className="w-full h-[170px] flex items-center justify-center">

                  <Image
                    src={p.img}
                    alt={p.name}
                    width={200}
                    height={160}
                    className="object-contain max-h-full"
                  />

                </div>

                <div className="mt-4 text-center">

                  <h3 className="font-semibold text-black text-sm leading-tight">
                    {p.name}
                  </h3>

                </div>

              </div>

              {/* BACK */}
              <div className="absolute w-full h-full rotate-y-180 backface-hidden 
              bg-white/95 backdrop-blur-md 
              rounded-xl p-6 
              flex items-center justify-center 
              text-center text-black font-medium text-sm
              border border-yellow-300/50
              shadow-[0_0_25px_rgba(255,215,0,0.3)]">

                {p.back}

              </div>

            </div>

          </Link>

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
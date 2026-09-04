'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'

interface Highlight {
  title: string
  category: string
  description: string
  image: string
  button: string
  route: string
}

export default function HighlightsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const highlights: Highlight[] = [
    {
      title: 'Scientific Soil Testing',
      category: 'Land & Agriculture',
      description: 'Advanced geopathic and soil testing to assess cosmic fertility, land energy, and construction potential.',
      image: '/image/soiltest.jpg',
      button: 'Book Soil Test',
      route: '/contact',
    },
    {
      title: 'Vedic Astrology Training',
      category: 'Professional Academy',
      description: 'Master ancient Vedic astrology, horoscope reading, and gemstone science from certified scholars.',
      image: '/image/astrotraining.jpg',
      button: 'Explore Training',
      route: '/training',
    },
    {
      title: 'Digital Borewell Water Detector',
      category: 'Underground Water Scan',
      description: 'Precision digital frequency scanning equipment to locate productive groundwater streams accurately.',
      image: '/image/digital-borewell.jpg',
      button: 'Schedule Survey',
      route: '/contact',
    },
    {
      title: 'Digital Aura & Chakra Scanner',
      category: 'Biofield Analysis',
      description: 'Advanced electromagnetic resonance scanner for measuring human aura radiance and chakra blockages.',
      image: '/image/digital-aura-scanner.jpg',
      button: 'Get Aura Scan',
      route: '/contact',
    },
    {
      title: 'Sacred Dowsing L-Rods',
      category: 'Radiesthesia Tool',
      description: 'High-conductivity brass L-rods engineered for geopathic stress detection and directional readings.',
      image: '/image/l-rod.jpg',
      button: 'Consult Expert',
      route: '/contact',
    },
    {
      title: 'Crystal Dowsing Pendulum',
      category: 'Energy Reading',
      description: 'Weighted natural crystal pendulum used for energetic diagnosis, answering inquiries, and clearing chakras.',
      image: '/image/dowser-pendulum.jpg',
      button: 'Explore Tool',
      route: '/product/pendulum',
    },
    {
      title: 'German Lecher Antenna',
      category: 'Frequency Science',
      description: 'Precision instrument calibrated in nanometers for detecting subtle environmental energies and telluric currents.',
      image: '/image/lecher-antenna.jpg',
      button: 'Learn More',
      route: '/contact',
    },
  ]

  const total = highlights.length

  const scrollToIndex = useCallback((index: number) => {
    const container = sliderRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('[data-highlight-card]')
    const targetCard = cards[index]
    if (!targetCard) return

    const scrollPos = targetCard.offsetLeft - container.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2

    container.scrollTo({
      left: Math.max(0, scrollPos),
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % total
    scrollToIndex(next)
  }, [activeIndex, total, scrollToIndex])

  const prevSlide = useCallback(() => {
    const prev = (activeIndex - 1 + total) % total
    scrollToIndex(prev)
  }, [activeIndex, total, scrollToIndex])

  // Smooth step-by-step auto-slide every 4.5s (no pixel-by-pixel jitter)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [isHovered, nextSlide])

  // Update active index when user manually scrolls or swipes
  const handleScroll = () => {
    const container = sliderRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('[data-highlight-card]')
    if (cards.length === 0) return

    const center = container.scrollLeft + container.clientWidth / 2
    let closestIdx = 0
    let minDiff = Infinity

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2
      const diff = Math.abs(center - cardCenter)
      if (diff < minDiff) {
        minDiff = diff
        closestIdx = idx
      }
    })

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx)
    }
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/30 border border-yellow-400/50 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Scientific & Vedic Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Premier <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-sm text-slate-700 mt-1 max-w-lg">
              Combining ancient Vedic intuition with cutting-edge aura, soil, and dowsing instruments.
            </p>
          </div>

          {/* Controls: Prev / Next */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-yellow-200 shadow-md flex items-center justify-center transition active:scale-95"
              aria-label="Previous Highlight"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 shadow-md shadow-yellow-500/20 flex items-center justify-center transition active:scale-95"
              aria-label="Next Highlight"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              data-highlight-card
              whileHover={{ y: -6 }}
              className={`snap-center shrink-0 w-[290px] sm:w-[350px] md:w-[380px] bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between ${
                activeIndex === idx ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-yellow-100'
              }`}
            >
              {/* Image & Index Banner */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-3.5 left-3.5 bg-yellow-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-full shadow-md">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3.5 left-3.5 bg-black/60 backdrop-blur-md text-yellow-300 border border-yellow-400/40 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={item.route}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 hover:text-amber-700 group/btn transition"
                  >
                    <span>{item.button}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Verified Service
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-amber-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
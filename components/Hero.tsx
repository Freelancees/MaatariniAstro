'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, ShieldCheck, Banknote, Truck } from 'lucide-react'

const heroTexts = [
  "Astrology for Life's Journey",
  'Guiding You with Cosmic Wisdom',
  'Authentic Vedic Energized Products',
  'Vision Beyond the Stars',
  'Transformative Spiritual Blessings',
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* BACKGROUND VIDEO & OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/space-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/80 via-blue-from-blue-300/70 to-blue-from-blue-300/90" />
      </div>

      {/* SOFT RADIANT GLOW */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[180px]" />
      </div>

      {/* LIGHT PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-pulse"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* SHOOTING STARS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: -200,
              y: Math.random() * 300,
              opacity: 0,
            }}
            animate={{
              x: '120vw',
              y: '+=120',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              delay: i * 3.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="absolute w-40 h-[2px] bg-gradient-to-r from-yellow-200 via-white to-transparent"
          />
        ))}
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >


          {/* Rotating Headline */}
          <div className="relative h-28 sm:h-36 flex items-center justify-center">
            {heroTexts.map((text, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{
                  opacity: currentTextIndex === index ? 1 : 0,
                  y: currentTextIndex === index ? 0 : 20,
                  filter: currentTextIndex === index ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              >
                {text}
              </motion.h1>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-xl text-yellow-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
          >
            Discover your destiny through ancient Vedic insights, certified abhimantrit gemstones, energized rudraksha beads, and powerful vastu remedies.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary: Shop Products */}
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 rounded-full font-black text-sm sm:text-base shadow-xl shadow-yellow-500/30 transition transform hover:scale-105 active:scale-95"
            >
              <span>Shop All Products (₹999)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary: Book Consultation */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition backdrop-blur-md"
            >
              <span>Book Astrologer Consultation</span>
            </Link>
          </motion.div>

          {/* Value Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              100% Original & Vedic Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-yellow-400" />
              <span>Cash on Delivery Available Across India</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-yellow-400" />
              <span>Free 24-48h Express Dispatch</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
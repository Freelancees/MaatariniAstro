'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const heroTexts = [
  "Astrology for Life's Journey",
  'Guiding You with Cosmic Wisdom',
  'Clarity, Insight, Direction',
  'Vision Beyond the Stars',
  'Celestial Guidance Awaits You',
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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120a06] to-[#1a0f0a]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Starfield Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Rotating Headline */}
            <div className="mb-8 relative h-32 flex items-center justify-center">
              {heroTexts.map((text, index) => (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentTextIndex === index ? 1 : 0,
                    y: currentTextIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8 }}
                  className={`absolute text-4xl md:text-6xl lg:text-7xl font-display font-bold glow ${
                    currentTextIndex === index ? 'gradient-text' : ''
                  }`}
                  style={{
                    pointerEvents: currentTextIndex === index ? 'auto' : 'none',
                  }}
                >
                  {text}
                </motion.h1>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-12 italic"
            >
              Discover Your Destiny Through Ancient Wisdom
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="btn-primary text-lg">
                Book Consultation
              </button>
              <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary hover:text-[#1a0f0a] transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

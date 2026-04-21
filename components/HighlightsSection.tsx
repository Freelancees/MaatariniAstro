'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HighlightsRow() {
  const [showCTA, setShowCTA] = useState(false)
  const router = useRouter()

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">

      {/* 🔵 FLOATING GRADIENT BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[350px] h-[350px] bg-sky-300/20 blur-[100px] rounded-full bottom-[-80px] right-[-80px] animate-pulse" />
      </div>

      {/* ✨ HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 px-6 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent animate-[gradient_6s_linear_infinite] bg-[length:200%_auto]">
            Our Highlights
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Discover our key initiatives that make us stand out
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 px-6 md:px-10 relative z-10">

        {/* SOIL TEST */}
        <motion.div
          onClick={() => setShowCTA(true)}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group cursor-pointer flex flex-col h-[360px] rounded-2xl overflow-hidden 
          bg-white/70 backdrop-blur-lg border border-white/50 
          shadow-md hover:shadow-2xl transition-all duration-300 relative"
        >
          <div className="absolute inset-0 rounded-2xl border border-blue-400/20 group-hover:border-blue-500/40 transition" />

          <div className="relative h-[55%] overflow-hidden">
            <Image
              src="/images/soil-test.jpg"
              alt="Soil Testing"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition" />
          </div>

          <div className="p-5 flex flex-col justify-center h-[45%] relative">
            <p className="text-blue-600 text-xs font-semibold mb-1">
              🇮🇳 First Time in India
            </p>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Soil Testing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced soil testing to analyze fertility, quality, and land potential.
            </p>

            {/* CTA BUTTON */}
            <AnimatePresence>
              {showCTA && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push('/contact')
                  }}
                  className="mt-4 w-fit px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Get Consultation
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* TRAINING CENTER */}
        <motion.div
          onClick={() => router.push('/training')}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group cursor-pointer flex flex-col h-[360px] rounded-2xl overflow-hidden 
          bg-white/70 backdrop-blur-lg border border-white/50 
          shadow-md hover:shadow-2xl transition-all duration-300 relative"
        >
          <div className="absolute inset-0 rounded-2xl border border-blue-400/20 group-hover:border-blue-500/40 transition" />

          <div className="relative h-[55%] overflow-hidden">
            <Image
              src="/images/training-center.jpg"
              alt="Training Center"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition" />
          </div>

          <div className="p-5 flex flex-col justify-center h-[45%]">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Training Center
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hands-on training programs designed to build skills, knowledge,
              and real-world expertise.
            </p>
          </div>
        </motion.div>

      </div>

      {/* 🎯 GRADIENT ANIMATION */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

    </section>
  )
}
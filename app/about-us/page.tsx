'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6] text-[#1a0f0a]">

      {/* Soft Cosmic Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-[150px]" />

      {/* Floating Planets */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-sm opacity-70 animate-pulse" />
      <div className="absolute bottom-24 right-24 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-sm opacity-70 animate-pulse" />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-white/30 backdrop-blur-lg">

              <div className="w-full h-full flex items-center justify-center">

                <div className="text-center">
                  <div className="text-8xl mb-6">🕉️</div>
                  <p className="text-3xl font-semibold text-orange-500">
                    Utkal Gems
                  </p>
                </div>

              </div>

              {/* Decorative Corners */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-orange-400" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-orange-400" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              About Utkala Gems
            </h2>

            <div className="space-y-5 text-lg text-black/70 leading-relaxed">

              <p>
                Welcome to Utkala Gems, where ancient Vedic wisdom
                meets modern spiritual guidance. Based in the sacred city of
                Bhubaneswar, we help individuals discover clarity, balance,
                and purpose through the powerful science of astrology.
              </p>

              <p>
                Our experienced astrologers combine traditional knowledge
                passed down through generations with modern interpretation
                to deliver meaningful insights for life decisions, career,
                relationships and spiritual growth.
              </p>

              <p>
                Each consultation is personalized according to your unique
                birth chart and planetary positions, offering remedies,
                guidance and spiritual solutions aligned with your life path.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  15+
                </div>
                <div className="text-sm text-black/70">
                  Years Experience
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  5000+
                </div>
                <div className="text-sm text-black/70">
                  Happy Clients
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  98%
                </div>
                <div className="text-sm text-black/70">
                  Satisfaction Rate
                </div>
              </div>

            </div>

            {/* CTA */}
            <button className="mt-10 px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:scale-105 transition transform duration-300">
              Book Your Consultation
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  )
}
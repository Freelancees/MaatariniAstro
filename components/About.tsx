'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl">
              <Image
                src="/image/omm image.jpg"
                alt="Maa Tarini"
                fill
                className="object-cover"
              />

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-yellow-400" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-yellow-400" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About Maa Tarini Astro-Vision
            </h2>

            <div className="space-y-4 text-lg text-black/80 leading-relaxed">
              <p>
                Welcome to Maa Tarini Astro-Vision, where ancient wisdom meets modern understanding.
                Based in the spiritual heart of Bhubaneswar, we help individuals navigate life’s
                journey through the profound insights of Vedic astrology.
              </p>

              <p>
                Our experienced astrologers combine traditional knowledge passed down through
                generations with contemporary interpretations to provide accurate, meaningful,
                and actionable guidance for all aspects of your life.
              </p>

              <p>
                Whether you seek clarity on career decisions, relationship matters, health concerns,
                or spiritual growth, we offer personalized consultations tailored to your unique
                birth chart and life circumstances.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="text-center bg-white/40 backdrop-blur-lg rounded-xl py-4 shadow-md">
                <div className="text-4xl font-bold text-yellow-500 mb-1">15+</div>
                <div className="text-sm text-black/70">Years Experience</div>
              </div>

              <div className="text-center bg-white/40 backdrop-blur-lg rounded-xl py-4 shadow-md">
                <div className="text-4xl font-bold text-yellow-500 mb-1">5000+</div>
                <div className="text-sm text-black/70">Happy Clients</div>
              </div>

              <div className="text-center bg-white/40 backdrop-blur-lg rounded-xl py-4 shadow-md">
                <div className="text-4xl font-bold text-yellow-500 mb-1">98%</div>
                <div className="text-sm text-black/70">Satisfaction Rate</div>
              </div>

            </div>

            {/* Button */}
            <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition">
              Book Your Consultation
            </button>

          </motion.div>

        </div>
      </div>

    </section>
  )
}
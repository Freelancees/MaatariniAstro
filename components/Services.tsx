'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Vedic Astrology',
    description: 'Ancient wisdom to guide your life path and understand planetary influences',
    image: '/image/vedic.jpg',
  },
  {
    title: 'Tarot Reading',
    description: 'Unveil hidden truths and gain clarity on your present and future',
    image: '/image/tarot.webp',
  },
  {
    title: 'Palmistry',
    description: 'Read the lines of your hands to discover your destiny',
    image: '/image/palm.png',
  },
  {
    title: 'Numerology',
    description: 'Decode the mystical significance of numbers in your life',
    image: '/image/numerology.jpg',
  },
  {
    title: 'Vastu Shastra',
    description: 'Harmonize your space with ancient architectural principles',
    image: '/image/vastu.webp',
  },
  {
    title: 'Gemstone Consultation',
    description: 'Find the perfect gemstone to enhance your cosmic energy',
    image: '/image/gamestonecol.jpg',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a0f0a] to-[#2a1f1a]">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our range of mystical services designed to illuminate your path
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300"
            >
              
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold flex items-center gap-2">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
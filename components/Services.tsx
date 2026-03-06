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
    <section className="py-24">

      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Our Services
          </h2>

          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Explore our range of mystical services designed to illuminate your path
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/40 hover:border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-yellow-500 mb-3">
                  {service.title}
                </h3>

                <p className="text-black/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <button className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">

                  Learn More

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"/>
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
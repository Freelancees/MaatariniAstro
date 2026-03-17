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
    title: 'Numerology',
    description: 'Decode the mystical significance of numbers in your life',
    image: '/image/numerology.jpg',
  },
  {
    title: 'Gemstone Consultation',
    description: 'Find the perfect gemstone to enhance your cosmic energy',
    image: '/image/gamestonecol.jpg',
  },
  {
    title: 'Vastu Consultation',
    description: 'Harmonize your space with ancient architectural principles',
    image: '/image/product3.jpg',
  },
  {
    title: 'Personal Horoscope Report',
    description: 'Unveil hidden truths and gain clarity on your present and future',
    image: '/image/product1.jpg',
  },
  {
    title: 'Soil Testing',
    description: 'Read the lines of your hands to discover your destiny',
    image: '/image/soil.jpg',
  },
  {
    title: 'Career Astrology',
    description: 'Insights to excel in your profession.',
    image: '/image/product4.jpg',
  },
  {
    title: 'Remedy Suggestions',
    description: 'Spiritual solutions & rituals.',
    image: '/image/product6.jpg',
  },
  {
    title: 'Marriage Horoscope',
    description: 'Find compatibility & auspicious dates.',
    image: '/image/product5.jpg',
  },
]

const firstRow = services.slice(0, 5)
const secondRow = services.slice(5, 9)

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Services
          </h2>

          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Explore our range of mystical services designed to illuminate your path
          </p>
        </motion.div>

        {/* FIRST ROW */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {firstRow.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-wrap justify-center gap-8">
          {secondRow.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* CARD COMPONENT */

function ServiceCard({ service, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      group
      w-full
      sm:w-[45%]
      md:w-[30%]
      lg:w-[18%]
      bg-white/60
      backdrop-blur-md
      rounded-2xl
      overflow-hidden
      border
      border-white/40
      hover:border-yellow-400
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >

      {/* Image */}
      <div className="relative h-48 overflow-hidden">

        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-lg md:text-xl font-bold text-yellow-500 mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-black/80 mb-4 leading-relaxed">
          {service.description}
        </p>

        <button className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">

          Learn More

          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>

        </button>

      </div>

    </motion.div>
  )
}
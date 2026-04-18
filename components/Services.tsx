'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    description: 'Understand land energy before construction',
    image: '/image/soil.jpg',
  },
  {
    title: 'Career Astrology',
    description: 'Insights to excel in your profession',
    image: '/image/product4.jpg',
  },
  {
    title: 'Remedy Suggestions',
    description: 'Spiritual solutions & powerful rituals',
    image: '/image/product6.jpg',
  },
  {
    title: 'Marriage Horoscope',
    description: 'Compatibility & auspicious timing guidance',
    image: '/image/product5.jpg',
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-display text-black mb-4">
            Our Services
          </h2>

          <p className="text-sm md:text-lg text-black/70 max-w-2xl mx-auto">
            Explore powerful spiritual services designed to guide, protect, and elevate your life journey
          </p>
        </motion.div>

        {/* 🎯 GRID */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>

        {/* 🔘 VIEW ALL BUTTON */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <button className="
              px-8 py-3
              rounded-full
              bg-yellow-400 text-black
              font-semibold
              hover:bg-yellow-300
              hover:scale-105
              transition-all duration-300
              shadow-md hover:shadow-lg
            ">
              View All Services
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

/* 💎 CARD COMPONENT */

function ServiceCard({ service, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="
      group
      w-full
      sm:w-[45%]
      md:w-[30%]
      lg:w-[18%]
      bg-white/70
      backdrop-blur-lg
      rounded-2xl
      overflow-hidden
      border border-white/30
      hover:border-yellow-400/60
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      "
    >

      {/* 🖼 IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* 📄 CONTENT */}
      <div className="p-5 flex flex-col justify-between h-[180px]">

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-black/80 leading-relaxed">
            {service.description}
          </p>
        </div>

      </div>

    </motion.div>
  )
}
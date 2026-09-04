'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Vedic Astrology & Kundali',
    slug: 'vedic',
    description: 'Comprehensive birth chart analysis to decode planetary yogas, doshas, and career/finance timeline.',
    image: '/image/vedic.jpg',
  },
  {
    title: 'Numerology Reading',
    slug: 'numerology',
    description: 'Decode the mystical vibrational significance of your birth date and name for ultimate luck alignment.',
    image: '/image/numerology.jpg',
  },
  {
    title: 'Gemstone Recommendation',
    slug: 'gemstone',
    description: 'Discover the exact astrological gemstone to neutralize malefic planets and amplify personal fortune.',
    image: '/image/gamestonecol.jpg',
  },
  {
    title: 'Scientific Soil & Energy Testing',
    slug: 'soil',
    description: 'Assess land fertility, positive vibrational frequency, and underground cosmic currents before construction.',
    image: '/image/soil.jpg',
  },
  {
    title: 'Vastu Shastra Consultation',
    slug: 'vastu',
    description: 'Harmonize residential and commercial spaces using 16-zone Vedic architectural rectifications.',
    image: '/image/product3.jpg',
  },
  {
    title: 'Horoscope Report & Future Guidance',
    slug: 'horoscope',
    description: 'Deep astrological predictions providing clarity on upcoming Mahadashas and opportunities.',
    image: '/image/product1.jpg',
  },
  {
    title: 'Career & Business Astrology',
    slug: 'career',
    description: 'Strategic cosmic insights to excel in competitive exams, corporate promotions, and entrepreneurial ventures.',
    image: '/image/product4.jpg',
  },
  {
    title: 'Sacred Remedies & Puja Vidhi',
    slug: 'remedies',
    description: 'Prescribed Vedic mantras, gemstone remedies, and divine rituals to dissolve karmic obstacles.',
    image: '/image/product6.jpg',
  },
  {
    title: 'Kundali Milan (Marriage Horoscope)',
    slug: 'marriage',
    description: 'Ashtakoot Guna Milan, Manglik Dosha pacification, and auspicious wedding muhurat selection.',
    image: '/image/product5.jpg',
  },
]

export default function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 bg-yellow-400/30 border border-yellow-400/50 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Divine Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Astrological Services
          </h2>

          <p className="text-sm sm:text-base text-slate-700 mt-2">
            Explore authentic Vedic astrology, vastu shastra, and energy testing services guided by renowned scholars.
          </p>
        </motion.div>

        {/* Clean Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white/85 backdrop-blur-md rounded-2xl overflow-hidden border border-yellow-200/80 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  In-Person & Online
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Booking Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/25 transition transform hover:scale-105 active:scale-95"
          >
            <span>Explore All Astrology Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
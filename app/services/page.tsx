'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Best Astrology & Spiritual Services in India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-black/70 max-w-3xl mx-auto text-lg"
        >
          Discover authentic Vedic astrology services, numerology consultation, gemstone recommendations,
          and Vastu guidance designed to bring clarity, success, and positivity into your life.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="pb-20 px-6 max-w-5xl mx-auto space-y-24">

        {/* SERVICE BLOCK (Reusable Pattern) */}
        {[
          {
            title: "Vedic Astrology Consultation",
            image: "/image/vedic.jpg",
            alt: "Vedic Astrology Consultation India",
            content: [
              "Vedic Astrology, also known as Jyotish Shastra, is one of the most powerful systems for understanding life and destiny.",
              "By analyzing your birth chart, we provide insights into career, marriage, health, and finances.",
              "If you are searching for the best astrologer in India, our consultation offers clarity and direction."
            ]
          },
          {
            title: "Numerology Consultation",
            image: "/image/numerology.jpg",
            alt: "Numerology Consultation India",
            content: [
              "Numerology reveals the hidden influence of numbers on your life and destiny.",
              "We calculate your life path and destiny numbers to uncover patterns and opportunities.",
              "Perfect for guidance in career, relationships, and financial decisions."
            ]
          },
          {
            title: "Gemstone Consultation",
            image: "/image/gamestonecol.jpg",
            alt: "Gemstone Consultation India",
            content: [
              "Gemstones carry powerful cosmic vibrations that influence your life.",
              "We recommend the right gemstone based on your horoscope.",
              "Helps improve luck, confidence, and protection."
            ]
          },
          {
            title: "Vastu Consultation",
            image: "/image/product3.jpg",
            alt: "Vastu Consultation India",
            content: [
              "Vastu Shastra balances energies in your living space.",
              "We suggest practical corrections to improve energy flow.",
              "Brings peace, prosperity, and success."
            ]
          },
          {
            title: "Career Astrology",
            image: "/image/product4.jpg",
            alt: "Career Astrology India",
            content: [
              "Career Astrology helps you choose the right professional path.",
              "We guide you on jobs, business, and financial growth.",
              "Make confident career decisions with clarity."
            ]
          },
          {
            title: "Marriage Horoscope & Compatibility",
            image: "/image/product5.jpg",
            alt: "Marriage Horoscope India",
            content: [
              "Marriage compatibility is essential for long-term happiness.",
              "We perform detailed kundli matching.",
              "Helps build strong and harmonious relationships."
            ]
          },
          {
            title: "Astrology Remedies & Solutions",
            image: "/image/product6.jpg",
            alt: "Astrology Remedies India",
            content: [
              "Astrology remedies reduce negative planetary effects.",
              "Includes mantras, rituals, and gemstone solutions.",
              "Brings peace and positive transformation."
            ]
          },
          {
            title: "Soil Testing & Land Energy Analysis",
            image: "/image/soil.jpg",
            alt: "Soil Testing Vastu India",
            content: [
              "Land energy plays a crucial role before construction.",
              "We analyze soil and vastu alignment.",
              "Ensures a strong and positive foundation."
            ]
          }
        ].map((service, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="space-y-6"
          >

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-yellow-500">
              {service.title}
            </h2>

            {/* PARAGRAPHS */}
            {service.content.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-black/70 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

          </motion.div>

        ))}

      </section>

    </main>
  )
}
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

export default function ServicesPage() {

  const services = [
    {
      title: "Vedic Astrology Consultation",
      image: "/image/vedic.jpg",
      content: [
        "Ancient Jyotish Shastra reveals your life path through planetary positions.",
        "Your Kundli acts as a cosmic blueprint of your destiny and karma.",
        "Get clarity on career, finance, relationships, and major life decisions.",
        "Understand the right timing (Muhurat) to take powerful actions."
      ]
    },
    {
      title: "Numerology Consultation",
      image: "/image/numerology.jpg",
      content: [
        "Numbers shape your personality, decisions, and destiny.",
        "We analyze Life Path, Destiny, and Name Numbers.",
        "Perfect for business naming, branding, and key decisions.",
        "Align your life with powerful numerical vibrations."
      ]
    },
    {
      title: "Gemstone Consultation",
      image: "/image/gamestonecol.jpg",
      content: [
        "Gemstones enhance positive planetary energies.",
        "Personalized recommendation based on your Kundli.",
        "Includes metal, finger, and wearing process.",
        "Boost confidence, luck, and protection."
      ]
    },
    {
      title: "Vastu Consultation",
      image: "/image/product3.jpg",
      content: [
        "Balance the five elements in your space.",
        "Improve energy flow in home or office.",
        "No demolition — only smart corrections.",
        "Enhance peace, prosperity, and success."
      ]
    },
    {
      title: "Career Astrology",
      image: "/image/product4.jpg",
      content: [
        "Find your ideal career path using astrology.",
        "Job vs business — know what suits you.",
        "Predict growth, promotions, and timing.",
        "Perfect for students & professionals."
      ]
    },
    {
      title: "Marriage Compatibility",
      image: "/image/product5.jpg",
      content: [
        "Kundli matching using Ashta-Koota system.",
        "Analyze emotional, financial, and life compatibility.",
        "Detect doshas and provide remedies.",
        "Ensure long-term harmony and stability."
      ]
    },
    {
      title: "Astrology Remedies",
      image: "/image/product6.jpg",
      content: [
        "Simple yet powerful solutions for life problems.",
        "Mantras, fasting, donations, and yantras.",
        "Reduce negative planetary effects.",
        "Bring peace, clarity, and transformation."
      ]
    },
    {
      title: "Land & Soil Analysis",
      image: "/image/soil.jpg",
      content: [
        "Check land energy before construction.",
        "Analyze soil strength and vibrations.",
        "Ensure Vastu alignment for success.",
        "Build on a foundation of prosperity."
      ]
    }
  ]

  return (
    <main className="bg-black text-white">

      <Header />

      {/* 🌟 HERO */}
      <section className="pt-36 pb-24 text-center px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Premium Astrology Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          Experience deep spiritual insights with authentic astrology,
          designed to guide your life with clarity, confidence, and success.
        </motion.p>

      </section>

     
{/* ✨ SERVICES (BALANCED SIZE) */}
<motion.section
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="pb-20"
>
  {services.map((service, index) => {

    const isReverse = index % 2 === 1

    return (
      <motion.div
        key={index}
        variants={fadeUp}
        className="grid md:grid-cols-2 items-center gap-10 py-12 px-6 md:px-16 border-b border-white/10"
      >

        {/* 🖼 IMAGE */}
        <div className={`${isReverse ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 📝 TEXT */}
        <div className={`${isReverse ? 'md:order-1' : 'md:order-2'}`}>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
            {service.title}
          </h2>

          <div className="space-y-2">
            {service.content.slice(0, 2).map((text, i) => (
              <p key={i} className="text-white/70 text-sm md:text-base">
                {text}
              </p>
            ))}
          </div>

          <button className="mt-4 px-5 py-2 text-sm bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">
            Book Consultation
          </button>

        </div>

      </motion.div>
    )
  })}
</motion.section>
 </main>
  )
}
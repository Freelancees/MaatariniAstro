'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ServicesPage() {

  const [activeImage, setActiveImage] = useState<string | null>(null)

  const services = [
    {
      title: "Vedic Astrology Consultation",
      image: "/image/vedic.jpg",
      content: [
        "Ancient Jyotish Shastra reveals your life path.",
        "Your Kundli is your cosmic blueprint.",
      ],
      description: [
        "Vedic Astrology is a timeless science that decodes the influence of planetary movements on human life. Through precise birth chart analysis, we uncover patterns that shape your destiny, karma, and life events.",
        "This consultation helps you make confident decisions by understanding the right timing, opportunities, and challenges ahead. It provides clarity in relationships, career, finances, and personal growth."
      ],
      extra: [
        "Marriage & Kundli Matching",
        "New Jatak Creation",
        "Career Guidance",
        "Business Growth",
        "Love Analysis",
        "Health Predictions",
        "Dasha Analysis",
        "Remedies"
      ]
    },
    {
      title: "Numerology Consultation",
      image: "/image/numerology.jpg",
      content: [
        "Numbers shape your destiny and personality.",
        "Align with powerful vibrations."
      ],
      description: [
        "Numerology reveals the hidden energy behind numbers that influence your life decisions, personality, and success patterns. Each number carries a vibration that can either support or block your growth.",
        "Through name correction, number alignment, and personalized guidance, we help you tune into the right frequency for success, health, and prosperity."
      ],
      extra: [
        "Name Correction",
        "Phone Number Alignment",
        "Business Naming",
        "Car Number Selection",
        "Health Numbers",
        "Aura Correction",
        "Lucky Numbers",
        "Growth Guidance"
      ]
    },
    {
      title: "Gemstone Consultation",
      image: "/image/gamestonecol.jpg",
      content: [
        "Enhance planetary energies with gemstones.",
        "Boost luck and protection."
      ],
      description: [
        "Gemstones act as powerful tools to strengthen weak planets and enhance positive energies in your life. When chosen correctly, they can bring confidence, success, and emotional balance.",
        "Our consultation ensures you wear the right stone with proper activation, maximizing its benefits while avoiding negative effects."
      ],
      extra: [
        "Gem Recommendation",
        "Planet Analysis",
        "Metal & Finger Guide",
        "Activation Method",
        "Compatibility Check",
        "Substitute Stones",
        "Energy Activation",
        "Protection Boost"
      ]
    },
    {
      title: "Vastu Consultation",
      image: "/image/product3.jpg",
      content: [
        "Balance energy in your space.",
        "Improve peace & prosperity."
      ],
      description: [
        "Vastu Shastra harmonizes your living and working environment with natural energies. Proper alignment of directions and elements enhances success, health, and overall well-being.",
        "We provide practical solutions, including soil testing and home planning, ensuring your space supports growth without requiring major structural changes."
      ],
      extra: [
        "Home Vastu",
        "Office Vastu",
        "Soil Testing",
        "Plot Selection",
        "Home Planning",
        "Room Placement",
        "No Demolition Fix",
        "Energy Flow Balance"
      ]
    },
    {
      title: "Career Astrology",
      image: "/image/product4.jpg",
      content: [
        "Find your perfect career path.",
        "Timing is everything."
      ],
      description: [
        "Choosing the right career path is one of the most important decisions in life. Astrology helps identify your natural strengths, talents, and suitable professions.",
        "We guide you through career choices, job vs business decisions, and the perfect timing for growth, ensuring long-term success."
      ],
      extra: [
        "Career Direction",
        "Job vs Business",
        "Govt Job Chances",
        "Promotion Timing",
        "Foreign Career",
        "Skill Analysis",
        "Education Path",
        "Remedies"
      ]
    },
    {
      title: "Marriage Compatibility",
      image: "/image/product5.jpg",
      content: [
        "Match Kundlis for harmony.",
        "Ensure long-term compatibility."
      ],
      description: [
        "Marriage is a lifelong partnership, and compatibility plays a crucial role in its success. Through detailed Kundli matching, we analyze emotional, financial, and spiritual compatibility.",
        "We also identify potential challenges and provide remedies to ensure harmony, understanding, and long-term stability."
      ],
      extra: [
        "Kundli Matching",
        "Guna Milan",
        "Manglik Check",
        "Emotional Match",
        "Financial Match",
        "Marriage Timing",
        "Problem Detection",
        "Remedies"
      ]
    },
    {
      title: "Astrology Remedies",
      image: "/image/product6.jpg",
      content: [
        "Simple solutions for big problems.",
        "Transform your life."
      ],
      description: [
        "Astrology remedies are powerful tools to reduce negative planetary effects and enhance positivity. These remedies are simple, practical, and deeply effective when followed correctly.",
        "We provide personalized solutions including mantras, fasting, donations, and spiritual practices to bring balance and transformation in your life."
      ],
      extra: [
        "Mantras",
        "Fasting",
        "Donations",
        "Yantras",
        "Dosha Remedies",
        "Daily Rituals",
        "Energy Cleansing",
        "Spiritual Growth"
      ]
    },
    {
      title: "Land & Soil Analysis",
      image: "/image/soil.jpg",
      content: [
        "Check land before building.",
        "Ensure strong foundation."
      ],
      description: [
        "Before construction, it is essential to evaluate both the physical and energetic qualities of land. Soil strength and energy vibrations directly impact long-term success and stability.",
        "Our analysis ensures your land is suitable, aligned with Vastu, and free from negative influences, helping you build on a strong and prosperous foundation."
      ],
      extra: [
        "Soil Strength",
        "Energy Testing",
        "Land Suitability",
        "Construction Check",
        "Direction Check",
        "Water Analysis",
        "Negative Energy",
        "Prosperity Alignment"
      ]
    }
  ]

  return (
    <main className="bg-black text-white">

      <Header />

      {/* HERO */}
      <section className="pt-36 pb-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Premium Astrology Services
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Deep insights. Clear direction. Powerful transformation.
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 pb-20 space-y-20">

        {services.map((service, i) => {
          const reverse = i % 2 === 1

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400 transition`}>

                {/* IMAGE */}
                <div onClick={() => setActiveImage(service.image)} className="w-full md:w-1/2 flex items-center justify-center relative py-10 cursor-pointer">

                  <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-yellow-400/20 blur-3xl" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-yellow-400/40 group"
                  >
                    <Image src={service.image} alt="" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </motion.div>

                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-center">

                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                    {service.title}
                  </h2>

                  {/* SHORT POINTS */}
                  <div className="space-y-2 mb-4">
                    {service.content.map((t, idx) => (
                      <p key={idx} className="text-white/70">{t}</p>
                    ))}
                  </div>

                  {/* PARAGRAPHS */}
                  <div className="space-y-3 mb-6">
                    {service.description.map((p, idx) => (
                      <p key={idx} className="text-white/60 text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* EXTRA */}
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.extra.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <Sparkles size={14} className="text-yellow-400" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
  <button className="mt-6 w-fit px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">
    Book Consultation
  </button>
</Link>
                </div>

              </div>
            </motion.div>
          )
        })}

      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div onClick={() => setActiveImage(null)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <motion.div className="max-w-3xl w-full p-4">
              <Image src={activeImage} alt="" width={800} height={600} className="rounded-xl object-contain w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
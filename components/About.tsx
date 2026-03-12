
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Zodiac background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/image/zodiac-bg.png')] bg-center bg-cover"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 70 / 30 GRID */}
        <div className="grid lg:grid-cols-[7fr_3fr] gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            {/* ABOUT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-black mb-6">
                About Utkala Gems
              </h2>

              <p className="text-lg text-black/80 leading-relaxed mb-4">
                Welcome to Utkala Gems, where ancient wisdom meets modern
                understanding. Based in the spiritual city of Bhubaneswar,
                we guide individuals using the sacred knowledge of Vedic
                astrology and gemstone science.
              </p>

              <p className="text-lg text-black/80 leading-relaxed">
                Our mission is to provide clarity and direction in life
                through authentic astrology consultations, personalized
                gemstone recommendations, and powerful spiritual remedies
                aligned with your birth chart.
              </p>
            </motion.div>


            {/* BIG OM IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[320px] rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-lg"
            >
              <Image
                src="/image/om.png"
                alt="Om Symbol"
                fill
                className="object-contain p-10"
              />
            </motion.div>

          </div>



          {/* RIGHT SIDE */}
          <div className="space-y-8 text-center">

            {/* OWNER PHOTO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >

              <div className="
                relative
                w-[240px]
                h-[240px]
                rounded-2xl
                overflow-hidden
                border-2 border-yellow-400
                shadow-xl
                transition
                duration-300
                hover:shadow-yellow-400/40
                hover:scale-[1.03]
              ">
                <Image
                  src="/image/Sir2.jpeg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

            </motion.div>


            {/* OWNER QUOTE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-sm mx-auto"
            >
              <p className="text-lg italic text-black/80 leading-relaxed">
                "Astrology is not about predicting destiny,
                but understanding the cosmic energies guiding
                our life journey."
              </p>

              <p className="mt-4 text-yellow-500 font-semibold">
                — Founder, Utkala Gems
              </p>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}
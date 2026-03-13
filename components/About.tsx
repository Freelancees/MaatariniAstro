'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Zodiac background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/image/zodiac-bg.png')] bg-center bg-cover"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING ABOVE BOX */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          About Utkala Gems
        </h2>

        {/* 70 / 30 GRID */}
        <div className="grid lg:grid-cols-[7fr_3fr] gap-14 items-stretch">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* ABOUT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/30"
            >

              <p className="text-gray-800 leading-relaxed mb-5 text-lg">
                Welcome to <span className="font-semibold">Utkala Gems</span>, where ancient wisdom
                meets modern understanding. Based in the spiritual city of
                Bhubaneswar, we guide individuals using the sacred knowledge
                of Vedic astrology and gemstone science.
              </p>

              <p className="text-gray-800 leading-relaxed text-lg">
                Our mission is to provide clarity and direction in life through
                authentic astrology consultations, personalized gemstone
                recommendations, and powerful spiritual remedies aligned
                with your birth chart.
              </p>
            </motion.div>


            {/* COSMIC IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/40"
            >
              <Image
                src="/image/omm image.jpg"
                alt="Cosmic Energy"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

          </div>


          {/* RIGHT SIDE */}
          <div className="h-full">

            {/* FOUNDER CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/30 text-center h-full flex flex-col justify-between"
            >

              <div>

                {/* Founder Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                    <Image
                      src="/image/Sir2.jpeg"
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* NAME BELOW IMAGE */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Niranjan Mahanta
                </h3>

                <p className="text-yellow-500 font-medium mb-5">
                  Founder, Utkala Gems
                </p>

                {/* Quote */}
                <p className="text-gray-800 italic leading-relaxed mb-6">
                  ❝ Astrology is not about predicting destiny,
                  but understanding the cosmic energies guiding
                  our life journey. ❞
                </p>

              </div>

              {/* Bottom Text */}
              <p className="text-gray-700 leading-relaxed text-sm">
                With decades of experience in Vedic astrology and gemstone
                consultation, our founder has guided thousands of individuals
                towards clarity, harmony, and success. The vision of Utkala
                Gems is to combine traditional astrological wisdom with
                modern understanding, helping people make confident
                decisions in career, relationships, health, and spiritual
                growth.
              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}
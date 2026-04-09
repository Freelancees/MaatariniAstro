'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6] text-black">

      <Header />

      {/* Soft Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-white rounded-full blur-[200px] opacity-30" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Planets */}
      <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-sm opacity-70 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-sm opacity-70 animate-pulse"></div>

      {/* HERO */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1a0f0a]">
              About Utkala Gems
            </h1>

            <p className="text-xl md:text-2xl text-black/70">
              Illuminating Your Path Through Ancient Cosmic Wisdom
            </p>

          </motion.div>

        </div>
      </section>
<motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

          

            <div className="space-y-5 text-lg text-black/70 leading-relaxed">

              <p>
                Welcome to Utkala Gems, where ancient Vedic wisdom
                meets modern spiritual guidance. Based in the sacred city of
                Bhubaneswar, we help individuals discover clarity, balance,
                and purpose through the powerful science of astrology.
              </p>

              <p>
                Our experienced astrologers combine traditional knowledge
                passed down through generations with modern interpretation
                to deliver meaningful insights for life decisions, career,
                relationships and spiritual growth.
              </p>

              <p>
                Each consultation is personalized according to your unique
                birth chart and planetary positions, offering remedies,
                guidance and spiritual solutions aligned with your life path.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  15+
                </div>
                <div className="text-sm text-black/70">
                  Years Experience
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  5000+
                </div>
                <div className="text-sm text-black/70">
                  Happy Clients
                </div>
              </div>

              <div className="text-center bg-white/50 backdrop-blur-md rounded-xl py-6 border border-white/40 shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  98%
                </div>
                <div className="text-sm text-black/70">
                  Satisfaction Rate
                </div>
              </div>

            </div>

            {/* CTA */}
            <button className="mt-10 px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:scale-105 transition transform duration-300">
              Book Your Consultation
            </button>

          </motion.div>
      {/* STORY */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl font-bold text-[#1a0f0a] mb-8">
              Our Story
            </h2>

            <div className="space-y-6 text-lg text-black/70 leading-relaxed">

              <p>
                Founded in the spiritual city of Bhubaneswar, Utkala Gems
                was born from a deep reverence for Vedic knowledge and a calling
                to help people navigate life's complexities through astrology.
              </p>

              <p>
                Our journey began over 15 years ago with a mission to provide
                authentic and meaningful astrological guidance to people
                seeking clarity and direction.
              </p>

              <p>
                Today we have helped thousands of individuals understand
                their life path using traditional Vedic astrology methods.
              </p>

            </div>

          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-10 shadow-lg"
            >

              <div className="text-5xl mb-4">🎯</div>

              <h3 className="text-3xl font-bold mb-4 text-[#1a0f0a]">
                Our Mission
              </h3>

              <p className="text-black/70">
                To empower individuals with cosmic insights that illuminate
                their life path and help them make better decisions.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-10 shadow-lg"
            >

              <div className="text-5xl mb-4">🔮</div>

              <h3 className="text-3xl font-bold mb-4 text-[#1a0f0a]">
                Our Vision
              </h3>

              <p className="text-black/70">
                To become the most trusted name in Vedic astrology while
                preserving ancient knowledge and helping modern seekers.
              </p>

            </motion.div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 relative z-10">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-[#1a0f0a]">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { title: "Authenticity", icon: "✨", desc: "Traditional Vedic astrology practiced with integrity." },
              { title: "Compassion", icon: "❤️", desc: "Every consultation guided with empathy." },
              { title: "Accuracy", icon: "🎯", desc: "Precise readings through detailed chart analysis." },
              { title: "Confidentiality", icon: "🔒", desc: "Your personal details remain private." },
              { title: "Empowerment", icon: "💪", desc: "Helping you take control of your life path." },
              { title: "Excellence", icon: "⭐", desc: "Continuous improvement and learning." }
            ].map((value, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
              >

                <div className="text-5xl mb-4">{value.icon}</div>

                <h3 className="text-xl font-semibold mb-3 text-[#1a0f0a]">
                  {value.title}
                </h3>

                <p className="text-black/70">
                  {value.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
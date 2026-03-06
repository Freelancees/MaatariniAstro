'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">

      {/* Soft glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Ready to Discover Your Path?
            </h2>

            <p className="text-xl text-black/70">
              Book your personalized consultation today and unlock the wisdom of the cosmos
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/50 backdrop-blur-md rounded-xl p-6 border border-white/40 text-center shadow"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Call Us</h3>
              <p className="text-black/70">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/50 backdrop-blur-md rounded-xl p-6 border border-white/40 text-center shadow"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Email Us</h3>
              <p className="text-black/70">info@maatariniastro.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/50 backdrop-blur-md rounded-xl p-6 border border-white/40 text-center shadow"
            >
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Visit Us</h3>
              <p className="text-black/70">Bhubaneswar, Odisha</p>
            </motion.div>

          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/40 shadow-xl"
          >
            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-black/70 mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-black/70 mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-orange-400"
                  />
                </div>

              </div>

              <div>
                <label className="block text-black/70 mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block text-black/70 mb-2 font-semibold">
                  Select Service
                </label>
                <select className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-orange-400">
                  <option>Vedic Astrology</option>
                  <option>Tarot Reading</option>
                  <option>Palmistry</option>
                  <option>Numerology</option>
                  <option>Vastu Shastra</option>
                  <option>Gemstone Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-black/70 mb-2 font-semibold">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-orange-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:scale-105 transition transform duration-300 shadow-lg"
              >
                Book Your Consultation Now
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
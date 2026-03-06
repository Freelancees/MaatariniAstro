'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden">

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
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
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
              className="bg-white/40 backdrop-blur-lg rounded-xl p-6 border border-yellow-300 text-center shadow-lg"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Call Us</h3>
              <p className="text-black/70">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-lg rounded-xl p-6 border border-yellow-300 text-center shadow-lg"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Email Us</h3>
              <p className="text-black/70">info@maatariniastro.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/40 backdrop-blur-lg rounded-xl p-6 border border-yellow-300 text-center shadow-lg"
            >
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Visit Us</h3>
              <p className="text-black/70">Bhubaneswar, Odisha</p>
            </motion.div>

          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-yellow-300 shadow-xl"
          >
            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-black mb-2 font-semibold">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-black mb-2 font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-yellow-400"
                  />
                </div>

              </div>

              <div>
                <label className="block text-black mb-2 font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-black mb-2 font-semibold">
                  Select Service
                </label>

                <select className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black focus:outline-none focus:border-yellow-400">
                  <option>Vedic Astrology</option>
                  <option>Tarot Reading</option>
                  <option>Palmistry</option>
                  <option>Numerology</option>
                  <option>Vastu Shastra</option>
                  <option>Gemstone Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-black mb-2 font-semibold">
                  Your Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-yellow-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-full transition"
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
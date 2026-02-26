'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 bg-[#1a0f0a] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
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
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-white/80 font-body">
              Book your personalized consultation today and unlock the wisdom of the cosmos
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-xl p-6 border border-secondary/20 text-center card-hover"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Call Us</h3>
              <p className="text-white/70">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-xl p-6 border border-secondary/20 text-center card-hover"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Email Us</h3>
              <p className="text-white/70">info@maatariniastro.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-xl p-6 border border-secondary/20 text-center card-hover"
            >
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Visit Us</h3>
              <p className="text-white/70">Bhubaneswar, Odisha</p>
            </motion.div>
          </div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#3a2f2a]/30 to-[#2a1f1a]/30 rounded-2xl p-8 md:p-12 border border-secondary/30 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#1a0f0a]/50 border border-primary/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 bg-[#1a0f0a]/50 border border-primary/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#1a0f0a]/50 border border-primary/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-semibold">Select Service</label>
                <select className="w-full px-4 py-3 bg-[#1a0f0a]/50 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-secondary transition-colors">
                  <option>Vedic Astrology</option>
                  <option>Tarot Reading</option>
                  <option>Palmistry</option>
                  <option>Numerology</option>
                  <option>Vastu Shastra</option>
                  <option>Gemstone Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-semibold">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 bg-[#1a0f0a]/50 border border-primary/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Book Your Consultation Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-[#1a0f0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-secondary/30">
              <Image
  src="/image/omm image.jpg"
  alt="Maa Tarini"
  fill
  className="object-cover"
/>
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-secondary" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-secondary" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
              About Maa Tarini Astro-Vision
            </h2>
            <div className="space-y-4 text-lg text-white/80 font-body leading-relaxed">
              <p>
                Welcome to Maa Tarini Astro-Vision, where ancient wisdom meets modern understanding. 
                Based in the spiritual heart of Bhubaneswar, we are dedicated to helping individuals 
                navigate life's journey through the profound insights of Vedic astrology.
              </p>
              <p>
                Our experienced astrologers combine traditional knowledge passed down through generations 
                with contemporary interpretations to provide accurate, meaningful, and actionable guidance 
                for all aspects of your life.
              </p>
              <p>
                Whether you seek clarity on career decisions, relationship matters, health concerns, or 
                spiritual growth, we offer personalized consultations tailored to your unique birth chart 
                and life circumstances.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-white/70">Satisfaction Rate</div>
              </div>
            </div>

            <button className="btn-primary mt-8">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

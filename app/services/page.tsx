'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1a0f0a] to-[#2a1f1a] relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6">
              About Maa Tarini Astro-Vision
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-body">
              Illuminating Your Path Through Ancient Cosmic Wisdom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#1a0f0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-secondary mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-white/80 font-body leading-relaxed">
                <p>
                  Founded in the spiritual city of Bhubaneswar, Maa Tarini Astro-Vision was born from a 
                  deep reverence for Vedic knowledge and a calling to help people navigate life's complexities 
                  through the timeless wisdom of astrology.
                </p>
                <p>
                  Our journey began over 15 years ago with a simple mission: to make authentic, accurate, 
                  and actionable astrological guidance accessible to everyone seeking clarity and direction 
                  in their lives. Named after the revered Goddess Maa Tarini, our practice embodies her 
                  divine grace and protective energy.
                </p>
                <p>
                  Today, we stand as one of Odisha's most trusted names in Vedic astrology, having guided 
                  thousands of individuals through life's challenges and opportunities. Our predictions and 
                  consultations are rooted in traditional methodologies passed down through generations, 
                  combined with a compassionate understanding of modern life's demands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#1a0f0a] to-[#2a1f1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-2xl p-8 border border-secondary/20"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-white/80 font-body leading-relaxed">
                To empower individuals with cosmic insights that illuminate their path, helping them make 
                informed decisions and live more fulfilling lives through the profound wisdom of Vedic astrology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-2xl p-8 border border-secondary/20"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-white/80 font-body leading-relaxed">
                To be the most trusted and respected name in Vedic astrology, preserving ancient wisdom 
                while making it accessible and relevant to modern seekers of truth and spiritual guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1a0f0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Authenticity',
                icon: '✨',
                description: 'We practice traditional Vedic astrology with genuine expertise and integrity',
              },
              {
                title: 'Compassion',
                icon: '❤️',
                description: 'We approach every consultation with empathy and understanding',
              },
              {
                title: 'Accuracy',
                icon: '🎯',
                description: 'We provide precise readings based on detailed chart analysis',
              },
              {
                title: 'Confidentiality',
                icon: '🔒',
                description: 'Your personal information and consultations remain completely private',
              },
              {
                title: 'Empowerment',
                icon: '💪',
                description: 'We guide you to make your own informed decisions',
              },
              {
                title: 'Excellence',
                icon: '⭐',
                description: 'We continuously refine our knowledge and service quality',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#3a2f2a]/30 to-[#2a1f1a]/30 rounded-xl border border-primary/20"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-white/70 font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

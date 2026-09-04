'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Mishra',
    location: 'Bhubaneswar, Odisha',
    service: 'Vedic Kundali & Gemstone Consultation',
    rating: 5,
    text: 'The Blue Sapphire and Kundali guidance provided by Maa Tarini Astro Vision completely transformed my career trajectory. Within 2 months, obstacles cleared and I received a long-awaited executive promotion. Truly grateful!',
  },
  {
    name: 'Rajesh Kumar Mohanty',
    location: 'Cuttack, Odisha',
    service: 'Vastu Shastra Rectification',
    rating: 5,
    text: 'We had persistent health and financial stress in our new house. The Vastu Purusha and copper pyramid remedies installed without any wall demolition restored peaceful sleep and business profits. Exceptional Vedic expertise!',
  },
  {
    name: 'Dr. Ananya Patel',
    location: 'Puri, Odisha',
    service: 'Original 1 Mukhi Rudraksha',
    rating: 5,
    text: 'Received the 1 Mukhi Rudraksha with genuine certificate and Abhimantrit blessings via Cash on Delivery within 3 days. The spiritual calmness and concentration I experience during meditation is beyond words.',
  },
  {
    name: 'Sanjay Sahoo',
    location: 'Rourkela, Odisha',
    service: 'Business Horoscope & Kuber Yantra',
    rating: 5,
    text: 'Accurate predictions and pure guidance without fear-mongering. The energized Kuber Yantra at ₹999 arrived safely and brought steady cashflow to our wholesale store. Highly recommended!',
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[index]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Title */}
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-yellow-300/60 px-3.5 py-1 rounded-full border border-yellow-400/40">
          Devotee Experiences
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-3 mb-10 tracking-tight flex items-center justify-center gap-2">
          <span>Client Blessings & Testimonials</span>
          <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
        </h2>

        {/* Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5 }}
          className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-yellow-200/90 relative text-left"
        >
          <Quote className="w-10 h-10 text-yellow-400/60 absolute top-6 right-6" />

          {/* Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-2">5.0 Verified Experience</span>
          </div>

          {/* Text */}
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed italic mb-6">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                <span>{current.name}</span>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs text-slate-500">
                {current.location}
              </div>
            </div>

            <span className="text-xs font-semibold text-amber-900 bg-yellow-100/80 px-3 py-1 rounded-full self-start sm:self-auto">
              {current.service}
            </span>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-amber-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
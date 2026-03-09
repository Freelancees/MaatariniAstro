'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Priya Mishra',
    location: 'Bhubaneswar',
    text: 'The consultation was incredibly accurate and helpful.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Cuttack',
    text: 'Amazing experience! The gemstone recommendation worked.',
  },
  {
    name: 'Ananya Patel',
    location: 'Puri',
    text: 'Predictions were shockingly accurate. Highly recommend.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 relative overflow-hidden">

      {/* twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80 animate-pulse"
            style={{
              width: `${Math.random()*3}px`,
              height: `${Math.random()*3}px`,
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animationDelay: `${Math.random()*4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-8">
          Client Blessings ✨
        </h2>

        {/* Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateX: 6, rotateY: -6 }}
          className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/40"
        >

          {/* Stars */}
          <div className="flex justify-center mb-3 text-yellow-500">
            ★★★★★
          </div>

          {/* Text */}
          <p className="text-black/80 text-lg italic mb-4">
            "{testimonials[index].text}"
          </p>

          {/* Name */}
          <div className="text-sm font-semibold text-black">
            {testimonials[index].name}
          </div>

          <div className="text-xs text-black/60">
            {testimonials[index].location}
          </div>

        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'bg-yellow-500 w-6'
                  : 'bg-black/30 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Priya Mishra',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'The consultation I received was incredibly accurate and helpful. The astrologer provided deep insights into my career path that have proven true. Highly recommended!',
    image: '👩',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Cuttack',
    rating: 5,
    text: 'Amazing experience! The gemstone recommendation has brought positive changes in my life. The team is professional and genuinely cares about their clients.',
    image: '👨',
  },
  {
    name: 'Ananya Patel',
    location: 'Puri',
    rating: 5,
    text: 'I was skeptical at first, but the accuracy of the predictions amazed me. The Vastu consultation for my new home was particularly valuable.',
    image: '👩',
  },
  {
    name: 'Sanjay Mishra',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'Excellent service and genuine guidance. The astrologer took time to explain everything in detail and answered all my questions patiently.',
    image: '👨',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-[#2a1f1a] to-[#1a0f0a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">
            Real experiences from real people
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#3a2f2a]/50 to-[#2a1f1a]/50 rounded-3xl p-8 md:p-12 border border-secondary/20 backdrop-blur-sm"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-white/90 text-center mb-8 font-body italic leading-relaxed">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center text-4xl border-2 border-secondary/50">
                {testimonials[activeIndex].image}
              </div>
              <div>
                <div className="text-xl font-semibold text-secondary">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-white/60">{testimonials[activeIndex].location}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="w-12 h-12 rounded-full bg-primary/30 border border-secondary/50 flex items-center justify-center hover:bg-primary/50 transition-all"
            >
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
              }
              className="w-12 h-12 rounded-full bg-primary/30 border border-secondary/50 flex items-center justify-center hover:bg-primary/50 transition-all"
            >
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

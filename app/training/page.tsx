'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    title: 'Vastu Course',
    desc: 'Learn the science of energy alignment and space harmony.',
  },
  {
    title: 'Digital Aura Scanner Training',
    desc: 'Understand aura reading with modern digital techniques.',
  },
  {
    title: '7 Chakra Training',
    desc: 'Deep dive into chakra balancing and energy healing.',
  },
  {
    title: 'L-Rod Training',
    desc: 'Master dowsing techniques using L-Rods.',
  },
  {
    title: 'Lecher Antenna Training',
    desc: 'Advanced energy detection using Lecher antenna tools.',
  },
  {
    title: 'Pendulum Training',
    desc: 'Learn pendulum dowsing for answers and healing.',
  },
  {
    title: 'Numerology Training',
    desc: 'Decode numbers and their influence on life and destiny.',
  },
]

export default function TrainingPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">

      {/* HEADING */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
            Training Courses
          </span>
        </h1>
        <p className="text-gray-600 mt-4">
          Explore our professional training programs and enhance your skills
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">

        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group p-6 rounded-2xl bg-white/70 backdrop-blur-lg 
            border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-blue-400/20 group-hover:border-blue-500/40 transition" />

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {course.title}
            </h3>

            <p className="text-gray-600 text-sm mb-5">
              {course.desc}
            </p>

            {/* CTA */}
            <Link href="/contact">
              <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
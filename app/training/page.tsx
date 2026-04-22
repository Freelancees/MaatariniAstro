'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    title: 'Vastu Course',
    desc: 'Learn the science of energy alignment and space harmony.',
    image: '/image/Training/Vastu.jpg',
  },
  {
    title: 'Digital Aura Scanner Training',
    desc: 'Understand aura reading with modern digital techniques.',
    image: '/image/Training/aura.jpg',
  },
  {
    title: '7 Chakra Training',
    desc: 'Deep dive into chakra balancing and energy healing.',
    image: '/image/Training/7 chakra.jpg',
  },
  {
    title: 'L-Rod Training',
    desc: 'Master dowsing techniques using L-Rods.',
    image: '/image/Training/l rod.jpg',
  },
  {
    title: 'Lecher Antenna Training',
    desc: 'Advanced energy detection using Lecher antenna tools.',
    image: '/image/Training/lecker.jpg',
  },
  {
    title: 'Pendulum Training',
    desc: 'Learn pendulum dowsing for answers and healing.',
    image: '/image/Training/Pendulum.jpg',
  },
  {
    title: 'Numerology Training',
    desc: 'Decode numbers and their influence on life and destiny.',
    image: '/image/Training/numerology.jpg',
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
            className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-lg 
            border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="relative w-full h-[180px] overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {course.desc}
              </p>

              <Link href="/contact">
                <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </Link>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  )
}
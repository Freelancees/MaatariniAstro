'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    name: "Gemstones",
    slug: "gemstones",
    image: "/image/categories/gemstones.jpg",
  },
  {
    name: "Rudraksha",
    slug: "rudraksha",
    image: "/image/categories/rudraksha.jpg",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    image: "/image/categories/bracelets.jpg",
  },
  {
    name: "Vastu Materials",
    slug: "vastu",
    image: "/image/categories/vastu.jpg",
  },
  {
    name: "Crystals",
    slug: "crystals",
    image: "/image/categories/crystals.jpg",
  },
  {
    name: "Yantras",
    slug: "yantras",
    image: "/image/categories/yantras.jpg",
  },
  {
    name: "Feng Shui",
    slug: "fengshui",
    image: "/image/categories/fengshui.jpg",
  },
  {
    name: "Herbs",
    slug: "herbs",
    image: "/image/categories/herbs.jpg",
  },
  {
    name: "Mala",
    slug: "Mala",
    image: "/image/categories/Mala.jpg",
  },
]

export default function ProductsSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16 px-8 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Our Categories
        </h2>

        <p className="text-black/70 text-lg">
          Explore powerful spiritual categories crafted for your journey.
        </p>
      </div>

      <div className="px-8 lg:px-16">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition group"
            >

              <Link href={`/products/${category.slug}`}>

                {/* Image */}
                <div className="relative w-full h-[160px] overflow-hidden rounded-t-xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Name */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-black">
                    {category.name}
                  </h3>
                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>

      {/* View All */}
      <div className="text-center mt-20">
        <Link
          href="/products"
          className="inline-block bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-lg"
        >
          View All Categories
        </Link>
      </div>

    </section>
  )
}
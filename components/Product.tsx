'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    name: "Gemstones",
    slug: "gemstones",
    image: "/image/productcomp/gemstone.png",
  },
  {
    name: "Rudraksha",
    slug: "rudraksha",
    image: "/image/productcomp/rudrakhs.png",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    image: "/image/productcomp/braclet.png",
  },
  {
    name: "Vastu Materials",
    slug: "vastu",
    image: "/image/productcomp/Vastu.png",
  },
  {
    name: "Crystals",
    slug: "crystals",
    image: "/image/productcomp/Crystals.png",
  },
  {
    name: "Yantras",
    slug: "yantras",
    image: "/image/productcomp/yantras.png",
  },
  {
    name: "Feng Shui",
    slug: "fengshui",
    image: "/image/productcomp/fengshui.png",
  },
  {
    name: "Herbs",
    slug: "herbs",
    image: "/image/productcomp/herbs.png",
  },
  {
    name: "Mala",
    slug: "Mala",
    image: "/image/productcomp/mala.png",
  },
]

export default function ProductsSection() {

  const firstRow = categories.slice(0, 5)
  const secondRow = categories.slice(5, 9)

  const Card = ({ category }: any) => (
    <motion.div
      key={category.slug}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
    >
      <Link href={`/products/${category.slug}`}>

        {/* Image */}
        <div className="relative w-full h-[180px] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden rounded-t-2xl">
          <Image
            src={category.image}
            alt={category.name}
            width={170}
            height={170}
            className="object-contain group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Name */}
        <div className="py-3 text-center">
          <h3 className="text-sm font-semibold text-black">
            {category.name}
          </h3>
        </div>

      </Link>
    </motion.div>
  )

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

      <div className="px-8 lg:px-16 space-y-8">

        {/* Row 1 - 5 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {firstRow.map((category) => (
            <Card key={category.slug} category={category} />
          ))}
        </div>

        {/* Row 2 - 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {secondRow.map((category) => (
            <Card key={category.slug} category={category} />
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
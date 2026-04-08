'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  { name: "Gemstones", slug: "gemstones", image: "/image/productcomp/gemstone.png" },
  { name: "Rudraksha", slug: "rudraksha", image: "/image/productcomp/rudrakhs.png" },
  { name: "Bracelets", slug: "bracelets", image: "/image/productcomp/braclet.png" },
  { name: "Vastu Materials", slug: "vastu", image: "/image/productcomp/Vastu.png" },
  { name: "Crystals", slug: "crystals", image: "/image/productcomp/Crystals.png" },
  { name: "Yantras", slug: "yantras", image: "/image/productcomp/yantras.png" },
  { name: "Feng Shui", slug: "fengshui", image: "/image/productcomp/fengshui.png" },
  { name: "Herbs", slug: "herbs", image: "/image/productcomp/herbs.png" },
  { name: "Mala", slug: "mala", image: "/image/productcomp/mala.png" },
]

export default function ProductsSection() {

  const firstRow = categories.slice(0, 6)
  const secondRow = categories.slice(6, 9)

  const Card = ({ category }: any) => (
    <motion.div
      key={category.slug}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-yellow-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-yellow-200"
    >
      <Link href={`/products/${category.slug}`}>

        {/* Image */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Caption */}
        <div className="bg-white py-3 text-center">
          <h3 className="text-sm font-semibold text-black">
            {category.name}
          </h3>
        </div>

      </Link>
    </motion.div>
  )

  return (
    <section className="relative py-10 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16 px-8 lg:px-16">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-black">
          Our Categories
        </h2>

        <p className="text-black/70 text-sm md:text-base">
          Explore powerful spiritual categories crafted for your journey.
        </p>
      </div>

      <div className="px-2 lg:px-4 space-y-4">

        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {firstRow.map((category) => (
            <Card key={category.slug} category={category} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {secondRow.map((category) => (
            <Card key={category.slug} category={category} />
          ))}
        </div>

      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <Link
          href="/products"
          className="inline-block bg-yellow-400 text-black px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-500 transition shadow-md"
        >
          View All Categories
        </Link>
      </div>

    </section>
  )
}
"use client"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  { title: "Gemstones", folder: "gemstones" },
  { title: "Rudraksha", folder: "rudraksha" },
  { title: "Bracelets", folder: "bracelets" },
  { title: "Vastu Materials", folder: "vastu" },
  { title: "Crystals", folder: "crystals" },
  { title: "Yantras", folder: "yantras" },
  { title: "Feng Shui Items", folder: "fengshui" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export default function ProductGrid() {
  return (
    <main className="relative min-h-screen w-full pt-32 pb-24 px-2 overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">

      <div className="relative z-10">

        {/* header */}
        <section className="text-center mb-20">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            Our Spiritual Products
          </h1>
        </section>

        {categories.map((category, catIndex) => (
          <section key={catIndex} className="mb-24">

            <h2 className="text-3xl font-bold mb-10 text-black">
              {category.title}
            </h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
            >

              {products
                .filter((p) => p.category === category.folder)
                .map((product, index) => (

                  <Link
                    key={product.slug}
                    href={`/products/${product.category}/${product.slug}`} // ✅ FIXED
                  >

                    <motion.div
                      variants={card}
                      // whileHover={{ scale: 1.05 }}
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                    >

                      {/* IMAGE */}
                      <div className="relative w-full h-52 bg-white flex items-center justify-center">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-3">

                        <h3 className="text-sm font-semibold mb-2 text-black">
                          {product.name}
                        </h3>

                        <ul className="text-[11px] text-gray-600 space-y-1 mb-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-yellow-500" />
                            Energized & Certified
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-yellow-500" />
                            Premium Quality
                          </li>
                        </ul>

                        <button className="w-full bg-yellow-400 text-black py-3 rounded-full text-sm font-semibold hover:bg-yellow-300 transition shadow-lg">
                          Add to cart
                        </button>

                      </div>

                    </motion.div>

                  </Link>
                ))}

            </motion.div>

          </section>
        ))}

      </div>
    </main>
  )
}
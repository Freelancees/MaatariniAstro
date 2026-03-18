"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart } from "lucide-react"

const bestSelling = [
  {
    slug: "8-directions-booster",
    name: "8 Directions Booster with Yantra",
    description: "Enhances meditation energy.",
    image: "/image/best selling/8 Directions Booster with Yantra.png",
    price: "₹799",
    oldPrice: "₹1199",
    badge: "Best Seller"
  },
  {
    slug: "brass-trishakti",
    name: "Brass Trishakti",
    description: "Balance planetary energies.",
    image: "/image/best selling/Brass Trishakti.png",
    price: "₹999",
    oldPrice: "₹1399",
    badge: "Trending"
  },
  {
    slug: "five-element-tape",
    name: "Five Element Tape",
    description: "Planetary gemstone healing.",
    image: "/image/best selling/Five Element Tape.png",
    price: "₹699",
    oldPrice: "₹999",
    badge: "20% OFF"
  },
  {
    slug: "multipurpose-rods",
    name: "Multipurpose Rods",
    description: "Improves space energy flow.",
    image: "/image/best selling/Multipurpose Rods.png",
    price: "₹899",
    oldPrice: "₹1299",
    badge: "Trending"
  },
  {
    slug: "relationship-booster",
    name: "Relationship Booster",
    description: "Peace and spiritual clarity.",
    image: "/image/best selling/Relationship Booster.png",
    price: "₹749",
    oldPrice: "₹1099",
    badge: "Best Seller"
  }
]

export default function BestSellingSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-pulse"
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

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-black">
          Best Selling Products
        </h2>
        <p className="text-black/70">
          Most loved spiritual products by our customers
        </p>
      </div>

      <div className="px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {bestSelling.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/50 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-2xl transition group relative border border-yellow-300"
            >

              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded z-10">
                {product.badge}
              </div>

              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-10">
                <Heart size={16} />
              </button>

              {/* ✅ IMAGE CLICK */}
              <Link href={`/products/${product.slug}`}>
                <div className="relative w-full h-[180px] overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </Link>

              <div className="p-4">
                <h3 className="text-sm font-semibold mb-1 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-700 mb-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-black">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
                <div className="flex gap-2">

                  <button className="flex-1 flex items-center justify-center gap-1 bg-yellow-400 text-black text-sm py-2 rounded-md">
                    <ShoppingCart size={16} />
                    Cart
                  </button>

                  {/* ✅ VIEW BUTTON */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center text-sm border border-gray-300 py-2 rounded-md"
                  >
                    View
                  </Link>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
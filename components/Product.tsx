'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'

const products = [
  {
    name: 'Personal Horoscope',
    description: 'Birth chart insights.',
    image: '/image/product1.jpg',
    price: '₹999',
    oldPrice: '₹1499',
    badge: 'Trending'
  },
  {
    name: 'Gemstone Advice',
    description: 'Right gemstone for you.',
    image: '/image/product2.jpg',
    price: '₹799',
    oldPrice: '₹1199',
    badge: '20% OFF'
  },
  {
    name: 'Vastu Consultation',
    description: 'Energy balance in spaces.',
    image: '/image/product3.jpg',
    price: '₹1299',
    oldPrice: '₹1699',
    badge: 'Trending'
  },
  {
    name: 'Career Astrology',
    description: 'Career guidance.',
    image: '/image/product4.jpg',
    price: '₹899',
    oldPrice: '₹1299',
    badge: 'Offer'
  },
  {
    name: 'Remedy Solutions',
    description: 'Spiritual problem remedies.',
    image: '/image/product5.jpg',
    price: '₹699',
    oldPrice: '₹999',
    badge: 'Trending'
  },
  {
    name: 'Marriage Matching',
    description: 'Compatibility analysis.',
    image: '/image/product6.jpg',
    price: '₹1099',
    oldPrice: '₹1499',
    badge: '25% OFF'
  },
  {
    name: 'Numerology Report',
    description: 'Understand power of numbers.',
    image: '/image/product7.jpg',
    price: '₹799',
    oldPrice: '₹1199',
    badge: 'Trending'
  },
  {
    name: 'Business Astrology',
    description: 'Cosmic business strategy.',
    image: '/image/product8.jpg',
    price: '₹1399',
    oldPrice: '₹1799',
    badge: 'Offer'
  },
  {
    name: 'Health Astrology',
    description: 'Planetary health insights.',
    image: '/image/product9.jpg',
    price: '₹899',
    oldPrice: '₹1199',
    badge: 'Trending'
  },
  {
    name: 'Kundali Matching',
    description: 'Marriage compatibility check.',
    image: '/image/product10.jpg',
    price: '₹1199',
    oldPrice: '₹1599',
    badge: '20% OFF'
  },
  {
    name: 'Yantra Energization',
    description: 'Activate sacred yantras.',
    image: '/image/product11.jpg',
    price: '₹999',
    oldPrice: '₹1399',
    badge: 'Offer'
  },
  {
    name: 'Rudraksha Guide',
    description: 'Choose the right bead.',
    image: '/image/product12.jpg',
    price: '₹699',
    oldPrice: '₹999',
    badge: 'Trending'
  }
]

export default function ProductsSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10 px-8 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Our Products
        </h2>

        <p className="text-black/70 text-lg">
          Astrology tools and spiritual solutions for every journey.
        </p>
      </div>

      <div className="px-8 lg:px-16 relative z-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition group relative"
            >

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded z-10">
                {product.badge}
              </div>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
                <Heart size={16} />
              </button>

              {/* Product Image */}
              <Link href="/product">
                <div className="relative w-full h-[180px] overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-sm font-semibold mb-1 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">

                  <span className="text-lg font-bold text-black">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>

                </div>

                {/* Buttons */}
                <div className="flex gap-2">

                  <button className="flex-1 flex items-center justify-center gap-1 bg-yellow-400 text-black text-sm py-2 rounded-md hover:bg-yellow-500 transition">
                    <ShoppingCart size={16} />
                    Cart
                  </button>

                  <Link
                    href="/product"
                    className="flex-1 text-center text-sm border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    View
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* View More */}
      <div className="text-center mt-20 relative z-10">
        <Link
          href="/product"
          className="inline-block bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-lg"
        >
          View More Products
        </Link>
      </div>

    </section>
  )
}
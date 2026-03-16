'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'

const bestSelling = [
  {
    name: 'Rudraksha Mala',
    description: 'Enhances meditation energy.',
    image: '/image/rudraksha.png',
    price: '₹799',
    oldPrice: '₹1199',
    badge: 'Best Seller'
  },
  {
    name: 'Navagraha Yantra',
    description: 'Balance planetary energies.',
    image: '/image/yantra.png',
    price: '₹999',
    oldPrice: '₹1399',
    badge: 'Trending'
  },
  {
    name: 'Gemstone Bracelet',
    description: 'Planetary gemstone healing.',
    image: '/image/gemstone.png',
    price: '₹699',
    oldPrice: '₹999',
    badge: '20% OFF'
  },
  {
    name: 'Vastu Pyramid',
    description: 'Improves space energy flow.',
    image: '/image/pyramid.jpg',
    price: '₹899',
    oldPrice: '₹1299',
    badge: 'Trending'
  },
  {
    name: 'Sphatik Mala',
    description: 'Peace and spiritual clarity.',
    image: '/image/sphatik.png',
    price: '₹749',
    oldPrice: '₹1099',
    badge: 'Best Seller'
  },
  {
    name: 'Shree Yantra',
    description: 'Prosperity and divine blessings.',
    image: '/image/shreeyantra.jpg',
    price: '₹1099',
    oldPrice: '₹1499',
    badge: 'Trending'
  },
  {
    name: 'Navratna Ring',
    description: 'Balances nine planets.',
    image: '/image/navratna.jpg',
    price: '₹1499',
    oldPrice: '₹1999',
    badge: 'Offer'
  },
  {
    name: 'Healing Crystal',
    description: 'Promotes positivity and healing.',
    image: '/image/crystal.jpg',
    price: '₹599',
    oldPrice: '₹899',
    badge: 'Best Seller'
  },
  {
    name: 'Ketu Yantra',
    description: 'Removes obstacles.',
    image: '/image/ketu.jpg',
    price: '₹699',
    oldPrice: '₹999',
    badge: 'Trending'
  },
  {
    name: 'Astrology Pendant',
    description: 'Cosmic protection charm.',
    image: '/image/pendant.jpg',
    price: '₹799',
    oldPrice: '₹1199',
    badge: 'Offer'
  }
]

export default function BestSellingSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ⭐ Cosmic Stars Background */}
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

      {/* Section Header */}
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

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded z-10">
                {product.badge}
              </div>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
                <Heart size={16} />
              </button>

              {/* Image */}
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

    </section>
  )
}
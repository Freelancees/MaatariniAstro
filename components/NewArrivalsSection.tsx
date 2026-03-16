'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'

const newArrivals = [
  { name: 'Rudraksha Bracelet', image: '/image/rudraksha.png', price: '₹599', badge: 'New' },
  { name: 'Navgraha Yantra', image: '/image/yantra.png', price: '₹899', badge: 'New' },
  { name: 'Healing Crystal', image: '/image/crystal.jpg', price: '₹499', badge: 'New' },
  { name: 'Sphatik Mala', image: '/image/sphatik.png', price: '₹699', badge: 'New' },
  { name: 'Shree Yantra', image: '/image/shreeyantra.jpg', price: '₹999', badge: 'New' },
  { name: 'Navratna Ring', image: '/image/navratna.jpg', price: '₹1299', badge: 'New' },
  { name: 'Ketu Yantra', image: '/image/ketu.jpg', price: '₹799', badge: 'New' },
  { name: 'Astrology Pendant', image: '/image/pendant.jpg', price: '₹699', badge: 'New' },
  { name: 'Vastu Pyramid', image: '/image/pyramid.jpg', price: '₹899', badge: 'New' },
  { name: 'Gemstone Bracelet', image: '/image/gemstone.png', price: '₹599', badge: 'New' },
]

export default function NewArrivalsSection() {

  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (!sliderRef.current) return

    const scrollAmount = 300

    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Cosmic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
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
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-black mb-3">
          New Arrivals
        </h2>

        <p className="text-black/70">
          Fresh spiritual products just added
        </p>
      </div>

      {/* Slider Controls */}
      <div className="relative px-8 lg:px-16 z-10">

        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20"
        >
          ←
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20"
        >
          →
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >

          {newArrivals.map((product, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="min-w-[180px] bg-white/60 backdrop-blur-xl rounded-xl border border-yellow-300 shadow-lg hover:shadow-2xl transition relative group"
            >

              {/* Badge */}
              <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded z-10">
                {product.badge}
              </div>

              {/* Wishlist */}
              <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow z-10">
                <Heart size={14} />
              </button>

              <Link href="/product">

                {/* Image */}
                <div className="relative w-full h-[140px] overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-3">

                  <h3 className="text-sm font-semibold line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mt-2">

                    <span className="font-bold text-black text-sm">
                      {product.price}
                    </span>

                    <button className="bg-yellow-400 p-1.5 rounded-md hover:bg-yellow-500">
                      <ShoppingCart size={14} />
                    </button>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  )
}
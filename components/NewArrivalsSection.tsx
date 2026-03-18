'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'

const newArrivals = [
  { name: 'Laxmi Pyramid', slug: 'laxmi-pyramid', image: '/image/best selling/laxmi pyramid.png', price: '₹599', badge: 'New' },
  { name: 'Pendulum', slug: 'pendulum', image: '/image/best selling/Pendulum.png', price: '₹899', badge: 'New' },
  { name: 'Sea Salt Powder', slug: 'sea-salt-powder', image: '/image/best selling/Sea Salt Powder.png', price: '₹499', badge: 'New' },
  { name: 'Money Magnet Pyrite Pyramid', slug: 'money-magnet-pyrite-pyramid', image: '/image/best selling/Money Magnet Pyrite Pyramid.png', price: '₹699', badge: 'New' },
  { name: '9 Planets Oil', slug: '9-planets-oil', image: '/image/best selling/9 Planets Oil.png', price: '₹1299', badge: 'New' },
  { name: 'Vastu purush brahmasthan plate', slug: 'vastu-purush-brahmasthan-plate', image: '/image/best selling/Vastu purush brahmasthan plate.png', price: '₹999', badge: 'New' },
  { name: 'Green Zebu Pyramid', slug: 'green-zebu-pyramid', image: '/image/best selling/Green Zebu Pyramid.png', price: '₹799', badge: 'New' },
  { name: 'meru shree yantra', slug: 'meru-shree-yantra', image: '/image/best selling/meru shree yantra.png', price: '₹699', badge: 'New' },
]

export default function NewArrivalsSection() {

  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (!sliderRef.current) return

    const scrollAmount = 400

    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}
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

      {/* Slider */}
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

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth"
        >

          {newArrivals.map((product, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="min-w-[240px] bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-300 shadow-lg hover:shadow-2xl transition relative group"
            >

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded z-10">
                {product.badge}
              </div>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-10">
                <Heart size={16} />
              </button>

              <Link href={`/products/${product.slug}`}>

                {/* Image */}
                <div className="relative w-full h-[180px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">

                  <h3 className="text-base font-semibold line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mt-3">

                    <span className="font-bold text-black text-base">
                      {product.price}
                    </span>

                    <button className="bg-yellow-400 p-2 rounded-md hover:bg-yellow-500">
                      <ShoppingCart size={16} />
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
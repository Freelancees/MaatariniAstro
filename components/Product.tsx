'use client'

import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    name: 'Personal Horoscope Report',
    description: 'Detailed birth chart & life guidance.',
    image: '/image/product1.jpg',
  },
  {
    name: 'Gemstone Recommendation',
    description: 'Get astrologically suited gemstones.',
    image: '/image/product2.jpg',
  },
  {
    name: 'Vastu Consultation',
    description: 'Harmonize your home or office.',
    image: '/image/product3.jpg',
  },
  {
    name: 'Career Astrology',
    description: 'Insights to excel in your profession.',
    image: '/image/product4.jpg',
  },
  {
     name: 'Remedy Suggestions',
    description: 'Spiritual solutions & rituals.',
    image: '/image/product6.jpg',
  },
  {
    name: 'Marriage Horoscope',
    description: 'Find compatibility & auspicious dates.',
    image: '/image/product5.jpg',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Products</h2>
        <p className="text-gray-400">
          Explore our astrology products and solutions designed for your life.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1a0f0a] rounded-2xl overflow-hidden border border-white/10 hover:border-secondary transition-all"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {product.name}
              </h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single View More Button */}
      <div className="text-center mt-12">
        <Link
          href="/product"
          className="inline-block bg-secondary text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          View More Products
        </Link>
      </div>
    </section>
  )
}

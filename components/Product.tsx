
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  { name: 'Personal Horoscope', description: 'Birth chart insights.', image: '/image/product1.jpg' },
  { name: 'Gemstone Advice', description: 'Right gemstone for you.', image: '/image/product2.jpg' },
  { name: 'Vastu Consultation', description: 'Energy balance in spaces.', image: '/image/product3.jpg' },
  { name: 'Career Astrology', description: 'Career guidance.', image: '/image/product4.jpg' },
  { name: 'Remedy Solutions', description: 'Spiritual remedies.', image: '/image/product5.jpg' },
  { name: 'Marriage Matching', description: 'Compatibility analysis.', image: '/image/product6.jpg' },
  { name: 'Numerology Report', description: 'Power of numbers.', image: '/image/product7.jpg' },
  { name: 'Business Astrology', description: 'Cosmic business advice.', image: '/image/product8.jpg' },
  { name: 'Health Astrology', description: 'Planetary health clues.', image: '/image/product9.jpg' },
  { name: 'Kundali Matching', description: 'Marriage compatibility.', image: '/image/product10.jpg' },
  { name: 'Yantra Energization', description: 'Activate sacred yantras.', image: '/image/product11.jpg' },
  { name: 'Rudraksha Guide', description: 'Choose the right bead.', image: '/image/product12.jpg' },
  { name: 'Planetary Dosha', description: 'Identify imbalances.', image: '/image/product13.jpg' },
  { name: 'Meditation Guidance', description: 'Spiritual clarity.', image: '/image/product14.jpg' },
  { name: 'Lucky Name Fix', description: 'Name numerology.', image: '/image/product15.jpg' },
  { name: 'Vastu Correction', description: 'Fix energy flow.', image: '/image/product16.jpg' },
]

export default function ProductsSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ⭐ Cosmic Background */}
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
      <div className="text-center mb-16 relative z-10 px-8 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Our Products
        </h2>

        <p className="text-black/70 text-lg">
          Astrology tools and spiritual solutions for every journey.
        </p>
      </div>

      {/* ⭐ Grid Container with side spacing */}
      <div className="px-8 lg:px-16 relative z-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >

              <Link href="/product">

                <div className="aspect-square bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-yellow-300 shadow-lg hover:shadow-2xl transition relative">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none border border-yellow-400 shadow-[0_0_20px_rgba(255,200,0,0.6)]"></div>

                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-3">

                    <h3 className="text-white text-sm font-semibold mb-1">
                      {product.name}
                    </h3>

                    <p className="text-white/80 text-xs">
                      {product.description}
                    </p>

                  </div>

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Button */}
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

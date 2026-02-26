import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Products | Maa Tarini Astro-Vision',
  description:
    'Explore astrology products, remedies, gemstones, and spiritual solutions offered by Maa Tarini Astro-Vision.',
}

const products = [
  {
    name: 'Personal Horoscope Report',
    description:
      'A detailed birth chart analysis covering career, marriage, health, and life guidance.',
    price: '₹999',
    features: ['Birth chart analysis', 'Career & marriage insights', 'PDF report'],
  },
  {
    name: 'Gemstone Recommendation',
    description:
      'Astrologically recommended gemstones tailored to your planetary positions.',
    price: '₹1,499',
    features: ['Planet analysis', 'Gemstone suggestion', 'Wearing method'],
  },
  {
    name: 'Vastu Consultation',
    description:
      'Improve harmony, prosperity, and peace in your home or office with expert Vastu advice.',
    price: '₹2,499',
    features: ['Home & office vastu', 'Dosha correction', 'Detailed guidance'],
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-4">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Astrology Products
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Powerful astrological tools and remedies designed to bring clarity,
          balance, and success into your life.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1a0f0a] border border-white/10 rounded-2xl p-6 hover:border-secondary transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-400 mb-4">{product.description}</p>

            <ul className="space-y-2 mb-6">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{product.price}</span>
              <button className="bg-secondary text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Need a Custom Astrology Solution?
        </h3>
        <p className="text-gray-400 mb-6">
          Contact us for personalized consultations and remedies tailored
          specifically for you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}

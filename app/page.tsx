'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ProductsSection from '@/components/Product'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">

      {/* Cosmic Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-white rounded-full blur-[200px] opacity-30" />
      </div>

      {/* Floating Golden Astrology Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-[900px] h-[900px] border border-yellow-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[1100px] h-[1100px] border border-yellow-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[1300px] h-[1300px] border border-yellow-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Constellation Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <line x1="200" y1="200" x2="300" y2="300" stroke="white" />
        <line x1="300" y1="300" x2="400" y2="250" stroke="white" />
        <line x1="400" y1="250" x2="500" y2="350" stroke="white" />

        <line x1="700" y1="200" x2="800" y2="260" stroke="white" />
        <line x1="800" y1="260" x2="760" y2="360" stroke="white" />
        <line x1="760" y1="360" x2="660" y2="320" stroke="white" />
      </svg>

      {/* Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <ProductsSection />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

    </main>
  )
}
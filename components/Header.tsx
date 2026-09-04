'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const { totalCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 40)

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -120 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-lg shadow-xl border-b border-white/10'
          : 'bg-slate-950/40 backdrop-blur-md'
      }`}
    >
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-[70px] h-[50px] bg-yellow-400/50 rounded-full blur-lg" />
            <Image
              src="/image/logo1.png"
              width={55}
              height={55}
              className="object-contain relative z-10"
              alt="Maa Tarini Astro Vision Logo"
            />
          </motion.div>

          <div className="leading-tight">
            <div className="text-sm md:text-base font-semibold text-white tracking-wide">
              Maa Tarini
            </div>
            <div className="text-xl md:text-2xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Astro Vision
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 bg-slate-800/80 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-white/20">
          <NavLink href="/" label="Home" />
          <NavLink href="/products" label="Products" />

          {/* EXPLORE DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-yellow-400 font-semibold transition-colors text-sm">
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-52 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden py-1">
              <DropdownLink href="/services" label="All Astrological Services" />
              <DropdownLink href="/products/gemstones" label="Energized Gemstones" />
              <DropdownLink href="/products/rudraksha" label="Sacred Rudraksha" />
              <DropdownLink href="/products/vastu" label="Vastu Yantras" />
            </div>
          </div>

          <NavLink href="/about-us" label="About Us" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* RIGHT CONTROLS: CART & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          {/* CART BUTTON */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-bold px-3.5 py-2 rounded-full shadow-md shadow-yellow-500/20 transition transform active:scale-95"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">Cart</span>
            {totalCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-yellow-400 text-[11px] font-black flex items-center justify-center border border-yellow-400">
                {totalCount}
              </span>
            )}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-5 space-y-4">
              <MobileLink href="/" label="Home" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/products" label="Spiritual Products (All ₹999)" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/services" label="Astrology Services" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/about-us" label="About Astrologer" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/contact" label="Contact & Puja Booking" close={() => setIsMobileMenuOpen(false)} />

              {/* Mobile Quick Cart Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-yellow-400 font-bold text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Cart ({totalCount} items)</span>
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-yellow-400 text-slate-900 text-xs font-black px-4 py-2 rounded-full"
                >
                  Checkout (COD)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-yellow-400 font-semibold transition-colors text-sm"
    >
      {label}
    </Link>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-yellow-400/20 transition-colors"
    >
      {label}
    </Link>
  )
}

function MobileLink({
  href,
  label,
  close,
}: {
  href: string
  label: string
  close: () => void
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="text-gray-100 hover:text-yellow-400 text-base font-semibold transition-colors block py-1"
    >
      {label}
    </Link>
  )
}
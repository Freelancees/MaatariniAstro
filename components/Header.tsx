'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a0f0a]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* NAVBAR */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold gradient-text">
            Maa Tarini Astro-Vision
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/product" label="Product" />

          {/* EXPLORE DROPDOWN */}
          <div className="relative group">
            <button className="text-white hover:text-secondary font-semibold transition-colors">
              Explore
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#2a1f1a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <DropdownLink href="/services" label="Our Services" />
              <DropdownLink href="/horoscope" label="Daily Horoscope" />
              <DropdownLink href="/blog" label="Blog" />
            </div>
          </div>

          <NavLink href="/about-us" label="About Us" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a0f0a]/98 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <MobileLink href="/" label="Home" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/product" label="Product" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/services" label="Our Services" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/about-us" label="About Us" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/contact" label="Contact" close={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* =========================
   REUSABLE COMPONENTS
========================= */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-secondary font-semibold transition-colors"
    >
      {label}
    </Link>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-white hover:bg-primary/20 transition-colors"
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
      className="text-white text-lg hover:text-secondary transition-colors"
    >
      {label}
    </Link>
  )
}

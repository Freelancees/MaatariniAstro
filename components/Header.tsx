'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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
          ? 'bg-white/70 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-8 py-4">

        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3">

          {/* GLOWING LOGO */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(255,215,0,0.3)",
                "0 0 25px rgba(255,215,0,0.7)",
                "0 0 10px rgba(255,215,0,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="rounded-full"
          >
            <Image
              src="/image/logo.png"
              alt="Utkala Gems"
              width={60}
              height={60}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>

          {/* BRAND TEXT */}
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-wide text-black">
              Utkala
            </div>
            <div className="text-xl font-bold tracking-widest text-yellow-600">
              Gems
            </div>
          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="/" label="Home" />
          <NavLink href="/products" label="Products" />

          {/* EXPLORE */}
          <div className="relative group">
            <button className="text-black hover:text-yellow-500 font-semibold transition-colors">
              Explore
            </button>

            <div className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              <MobileLink href="/" label="Home" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/products" label="Products" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/services" label="Our Services" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/horoscope" label="Daily Horoscope" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/blog" label="Blog" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/about-us" label="About Us" close={() => setIsMobileMenuOpen(false)} />
              <MobileLink href="/contact" label="Contact" close={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* NAV LINKS */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-black hover:text-yellow-500 font-semibold transition-colors"
    >
      {label}
    </Link>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-black hover:bg-yellow-400/20 transition-colors"
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
      className="text-black text-lg font-medium hover:text-yellow-500 transition-colors"
    >
      {label}
    </Link>
  )
}
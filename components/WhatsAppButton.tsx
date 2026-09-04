'use client'

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917325925333?text=Namaste%20Maa%20Tarini%20Astro%20Vision%20Team!%20I%20would%20like%20to%20consult%20or%20inquire%20about%20spiritual%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
      fixed bottom-6 right-6 z-50
      bg-emerald-600 hover:bg-emerald-700
      text-white
      p-3.5 sm:p-4 rounded-full
      shadow-2xl hover:shadow-emerald-500/50
      transition-all duration-300
      hover:scale-110 active:scale-95
      flex items-center gap-2 group
      border-2 border-white/80
      "
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pl-0 group-hover:pl-1">
        Chat with Astrologer
      </span>
    </a>
  )
}
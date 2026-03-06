import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maa Tarini Astro-Vision | Bhubaneswar',
  description: "Astrology for Life's Journey - Guiding You with Cosmic Wisdom",
  keywords: 'astrology, horoscope, tarot, palmistry, vastu, numerology, Bhubaneswar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="
        min-h-screen
        bg-gradient-to-b
        from-[#eaf4fb]
        via-[#9fc9ea]
        to-[#6fa8d6]
        text-black
        "
      >
        {children}
      </body>
    </html>
  )
}
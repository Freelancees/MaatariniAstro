import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maa Tarini Astro-Vision | Bhubaneswar',
  description: 'Astrology for Life\'s Journey - Guiding You with Cosmic Wisdom',
  keywords: 'astrology, horoscope, tarot, palmistry, vastu, numerology, Bhubaneswar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

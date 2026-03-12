import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'   // import header
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Utkala Gems | Bhubaneswar',
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
        <Header />
        <main>
          {children}
        </main>
<Footer />
      </body>
    </html>
  )
}
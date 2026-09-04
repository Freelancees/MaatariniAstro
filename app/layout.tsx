import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://maatariniastrovision.com'),
  title: {
    default: 'Maa Tarini Astro Vision | Buy Original Vedic Energized Products ₹999 | Bhubaneswar',
    template: '%s | Maa Tarini Astro Vision',
  },
  description:
    'Maa Tarini Astro Vision - Premier Vedic Astrology and Spiritual Center in Bhubaneswar. Buy 100% authentic energized gemstones, certified rudraksha, vastu items, and sacred yantras at ₹999 with Cash on Delivery (COD) across India.',
  keywords: [
    'astrology bhubaneswar',
    'vedic astrology',
    'buy gemstones online',
    'original rudraksha',
    'vastu yantra',
    'crystals and bracelets',
    'cash on delivery astrology products',
    'spiritual shop odisha',
    'maa tarini astro vision',
  ],
  authors: [{ name: 'Maa Tarini Astro Vision' }],
  creator: 'Maa Tarini Astro Vision',
  publisher: 'Maa Tarini Astro Vision',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://maatariniastrovision.com',
    siteName: 'Maa Tarini Astro Vision',
    title: 'Maa Tarini Astro Vision | Buy Authentic Energized Products ₹999',
    description:
      'Buy 100% authentic energized gemstones, certified rudrakshas, vastu items, and yantras at ₹999 with Cash on Delivery (COD) across India.',
    images: [
      {
        url: '/image/logo1.png',
        width: 800,
        height: 800,
        alt: 'Maa Tarini Astro Vision Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Maa Tarini Astro Vision',
    image: 'https://maatariniastrovision.com/image/logo1.png',
    '@id': 'https://maatariniastrovision.com',
    url: 'https://maatariniastrovision.com',
    telephone: '+91 7325925333',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhubaneswar',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751024',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.2961,
      longitude: 85.8245,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`
        ${playfair.variable} ${inter.variable}
        min-h-screen
        bg-gradient-to-b
        from-[#eaf4fb]
        via-[#9fc9ea]
        to-[#6fa8d6]
        text-black
        font-sans
        `}
      >
        <CartProvider>
          <Header />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
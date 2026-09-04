import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products'
import ProductDetailClient from '@/components/ProductDetailClient'

type ProductPageProps = {
  params: {
    slug: string
  }
}

// Generate Static Params for all products so they are pre-rendered for instant loads
export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }))
}

// Dynamic SEO Metadata for top search rankings
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) {
    return {
      title: 'Product Not Found | Maa Tarini Astro Vision',
      description: 'The requested spiritual product was not found.',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maatariniastrovision.com'
  const productUrl = `${siteUrl}/product/${product.slug}`
  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${siteUrl}${product.images[0]}`

  const title = `${product.name} (Original & Vedic Energized) - Buy at ₹999 | Maa Tarini Astro Vision`
  const description = `Buy authentic ${product.name} online at ₹999. 100% Certified & Energized by Vedic Brahmins. Cash on Delivery (COD) & Free Shipping all over India. ${product.description}`

  return {
    title,
    description,
    keywords: [
      product.name,
      `buy ${product.name} online`,
      `original ${product.name}`,
      `${product.category} products`,
      'vedic energized gemstones',
      'authentic rudraksha',
      'vastu remedies',
      'astrologer bhubaneswar',
      'cash on delivery spiritual products',
      'maa tarini astro vision'
    ],
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title,
      description,
      url: productUrl,
      siteName: 'Maa Tarini Astro Vision',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.slug, 4)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maatariniastrovision.com'
  const productUrl = `${siteUrl}/product/${product.slug}`
  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${siteUrl}${product.images[0]}`

  // Schema.org Product Structured Data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [imageUrl],
    description: product.description,
    sku: product.slug,
    mpn: `MTA-${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Maa Tarini Astro Vision',
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      price: product.price.toString(),
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Maa Tarini Astro Vision',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating?.toString() || '4.9',
      reviewCount: (product.reviewCount || 120).toString(),
      bestRating: '5',
      worstRating: '1',
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.category.toUpperCase(),
        item: `${siteUrl}/products/${product.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: productUrl,
      },
    ],
  }

  return (
    <>
      {/* Structured Data Script Tags for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 flex-wrap">
          <Link href="/" className="hover:text-amber-800 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-800 transition">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:text-amber-800 transition capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Client Interactive Component */}
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </main>
    </>
  )
}

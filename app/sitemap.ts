import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maatariniastrovision.com'

  // Core static pages
  const staticPages = [
    '',
    '/products',
    '/services',
    '/about-us',
    '/contact',
    '/privacy',
    '/terms',
    '/refund',
    '/cart',
  ]

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Category pages
  const categories = [
    'gemstones',
    'rudraksha',
    'bracelets',
    'vastu',
    'crystals',
    'yantras',
    'fengshui',
    'herbs',
    'mala'
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteUrl}/products/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }))

  // Individual product pages (Priority 1.0 for top ranking in Google Shopping & Search)
  const productRoutes: MetadataRoute.Sitemap = products.map((prod) => ({
    url: `${siteUrl}/product/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}

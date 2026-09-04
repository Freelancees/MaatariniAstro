import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products"
import ProductDetailClient from "@/components/ProductDetailClient"
import { CategoryParams } from "@/types"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Required<CategoryParams>
}): Promise<Metadata> {
  const product =
    getProductBySlug(params.slug) ||
    products.find((p) => p.slug.toLowerCase() === params.slug.toLowerCase())

  if (!product) {
    return { title: "Product Not Found | Maa Tarini Astro Vision" }
  }

  return {
    title: `${product.name} (Vedic Energized) - ₹999 | Maa Tarini Astro Vision`,
    description: `Buy ${product.name} online at ₹999. 100% Certified authentic with Cash on Delivery across India. ${product.description}`,
  }
}

export default function SubcategoryProductPage({
  params,
}: {
  params: Required<CategoryParams>
}) {
  const product =
    getProductBySlug(params.slug) ||
    products.find((p) => p.slug.toLowerCase() === params.slug.toLowerCase())

  if (!product) return notFound()

  const relatedProducts = getRelatedProducts(product.slug, 4)

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  )
}
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { CategoryParams } from "@/types"
import { ShieldCheck, ArrowRight } from "lucide-react"

export default function SubcategoryPage({
  params,
}: {
  params: Required<Pick<CategoryParams, "category" | "subcategory">>
}) {
  const category = params.category.toLowerCase()
  const subcategory = params.subcategory.toLowerCase()

  let filtered = products.filter(
    (p) =>
      p.category.toLowerCase() === category &&
      p.subcategory?.toLowerCase() === subcategory
  )

  // Fallback if specific subcategory has no direct mapping
  if (filtered.length === 0) {
    filtered = products.filter((p) => p.category.toLowerCase() === category)
  }

  const title = subcategory.replace(/-/g, " ")

  return (
    <main className="min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-amber-800 transition">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-800 transition">Products</Link>
        <span>/</span>
        <Link href={`/products/${category}`} className="hover:text-amber-800 transition capitalize">{category}</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold capitalize">{title}</span>
      </nav>

      {/* Header */}
      <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-yellow-200 shadow-md mb-8">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 capitalize">
          {title} Collection
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Genuine Vedic energized {title} items • Certified by Vedic Purohits • Flat ₹999 with Free COD
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transition border border-yellow-200/80 group flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-44 mb-3 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition duration-300"
                />
              </div>

              <h2 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-amber-800 transition">
                {product.name}
              </h2>

              <p className="text-[11px] text-gray-500 line-clamp-2 my-1.5">
                {product.description}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-base font-black text-slate-900">
                  ₹{product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through ml-1.5">
                    ₹{product.oldPrice}
                  </span>
                )}
              </div>

              <span className="text-xs font-bold text-amber-800 bg-yellow-100 px-2 py-1 rounded-lg flex items-center gap-1">
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
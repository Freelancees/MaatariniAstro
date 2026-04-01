import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CategoryParams } from "@/types"

export default function SubcategoryPage({
  params,
}: {
  params: Required<Pick<CategoryParams, "category" | "subcategory">>
}) {

  const filtered = products.filter(
    (p) =>
      p.category === params.category &&
      p.subcategory === params.subcategory
  )

  if (filtered.length === 0) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <h1 className="text-3xl font-bold mb-10 capitalize">
        {params.subcategory.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.category}/${product.subcategory}/${product.slug}`}
            className="border rounded-xl p-4 bg-white hover:shadow-xl transition"
          >

            <div className="relative w-full h-40 mb-3">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-sm font-semibold">
              {product.name}
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              ₹{product.price}
            </p>

          </Link>
        ))}

      </div>
    </div>
  )
}
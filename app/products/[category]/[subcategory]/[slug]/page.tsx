import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CategoryParams } from "@/types"

export default function ProductPage({
  params,
}: {
  params: Required<CategoryParams>
}) {

  const product = products.find(
    (p) =>
      p.slug === params.slug &&
      p.category === params.category &&
      p.subcategory === params.subcategory
  )

  if (!product) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <div className="text-2xl font-bold mb-6">
            ₹{product.price}
          </div>

          <button className="bg-yellow-400 px-6 py-3 rounded-md hover:bg-yellow-500 transition">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  )
}
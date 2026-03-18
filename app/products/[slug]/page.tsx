import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { products } from "@/lib/products"

export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {

  const product = products.find((p) => p.slug === params.slug)

  if (!product) return notFound()

  const offerPrice = Math.floor(product.price * 0.9)

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT - IMAGE */}
        <div className="border rounded-xl p-6 bg-white shadow">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* CENTER - INFO */}
        <div>

          <h1 className="text-2xl font-semibold">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[1,2,3,4,5].map((s)=>(
              <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
            ))}
            <span className="text-sm text-gray-500 ml-2">(12 reviews)</span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-red-600">
              ₹{offerPrice}
            </span>
            <span className="line-through text-gray-400 ml-3">
              ₹{product.price}
            </span>
            <span className="text-green-600 ml-3">
              10% OFF
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-400 px-6 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
              Buy Now
            </button>
          </div>

        </div>

        {/* RIGHT - REVIEWS */}
        <div className="border rounded-xl p-6 shadow">

          <h2 className="text-lg font-semibold mb-4">
            Customer Reviews
          </h2>

          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map((s)=>(
              <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400"/>
            ))}
            <span className="text-sm text-gray-500 ml-2">
              4.8 out of 5
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Based on 12 reviews
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            <p>✔ Excellent quality</p>
            <p>✔ Fast delivery</p>
            <p>✔ Highly recommended</p>
          </div>

        </div>

      </div>

      {/* PRODUCT DETAILS */}
      <div className="mt-20">

        <h2 className="text-xl font-semibold mb-6">
          Product Details
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="font-semibold mb-3">
              Description
            </h3>
            <p className="text-gray-600">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Specifications
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              {product.specifications.length > 0 ? (
                product.specifications.map((spec, i) => (
                  <li key={i} className="flex justify-between border-b pb-1">
                    <span className="font-medium">{spec.label}</span>
                    <span>{spec.value}</span>
                  </li>
                ))
              ) : (
                <p>No specifications available</p>
              )}
            </ul>

          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-20">

        <h2 className="text-2xl font-semibold mb-8">
          Related Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {relatedProducts.map((item) => (

            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >

              <Image
                src={item.images[0]}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-contain"
              />

              <h3 className="mt-3 font-medium text-gray-800">
                {item.name}
              </h3>

              <p className="text-red-600 font-semibold mt-1">
                ₹{item.price}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </div>
  )
}
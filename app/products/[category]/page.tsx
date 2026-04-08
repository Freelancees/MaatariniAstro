'use client'

import Link from "next/link"
import Image from "next/image"
import {
  gemstoneSubcategories,
  rudrakshaSubcategories,
  vastuSubcategories,
  crystalSubcategories,
} from "@/lib/subcategories"
import { yantraSubcategories } from "@/lib/subcategories"
import { products } from "@/lib/products"
import { CategoryParams } from "@/types"
import { notFound } from "next/navigation"

export default function CategoryPage({
  params,
}: {
  params: CategoryParams
}) {

  const category = params.category.toLowerCase()

  // ✅ NEW: GET IMAGE FROM PRODUCTS
  function getSubcategoryImage(category: string, sub: string) {
    const product = products.find(
      (p) =>
        p.category.toLowerCase() === category &&
        p.subcategory?.toLowerCase() === sub.toLowerCase()
    )

    return product?.images?.[0] || "/fallback.png"
  }

  // 🟡 GEMSTONES
  if (category === "gemstones") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Gemstones</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {gemstoneSubcategories.map((sub) => (
            <Link
              key={sub}
              href={`/products/gemstones/${sub}`}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-[140px]">
                <Image
                  src={getSubcategoryImage("gemstones", sub)}
                  alt={sub}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-2 text-center">
                <h3 className="text-sm font-semibold">
                  {sub.replace(/-/g, " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // 🟡 RUDRAKSHA
  if (category === "rudraksha") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Rudraksha</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {rudrakshaSubcategories.map((sub) => (
            <Link
              key={sub}
              href={`/products/rudraksha/${sub}`}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-[140px]">
                <Image
                  src={getSubcategoryImage("rudraksha", sub)}
                  alt={sub}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-2 text-center">
                <h3 className="text-sm font-semibold">
                  {sub.replace(/-/g, " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // 🟡 VASTU
  if (category === "vastu") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Vastu Materials</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {vastuSubcategories.map((sub) => (
            <Link
              key={sub}
              href={`/products/vastu/${sub}`}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-[140px]">
                <Image
                  src={getSubcategoryImage("vastu", sub)}
                  alt={sub}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-2 text-center">
                <h3 className="text-sm font-semibold">
                  {sub.replace(/-/g, " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // 🟡 CRYSTALS
  if (category === "crystals") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Crystals</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {crystalSubcategories.map((sub) => (
            <Link
              key={sub}
              href={`/products/crystals/${sub}`}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-[140px]">
                <Image
                  src={getSubcategoryImage("crystals", sub)}
                  alt={sub}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-2 text-center">
                <h3 className="text-sm font-semibold">
                  {sub.replace(/-/g, " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // 🟡 YANTRAS
  if (category === "yantras") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Yantras</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {yantraSubcategories.map((sub) => (
            <Link
              key={sub}
              href={`/products/yantras/${sub}`}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-[140px]">
                <Image
                  src={getSubcategoryImage("yantras", sub)}
                  alt={sub}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-2 text-center">
                <h3 className="text-sm font-semibold">
                  {sub.replace(/-/g, " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

if (params.category === "herbs") {

  const filtered = products.filter(
    (p) => p.category === "herbs"
  )

  if (filtered.length === 0) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <h1 className="text-3xl font-bold mb-10">
        Herbs
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/herbs/${product.slug}`}
            className="border rounded-xl p-4 bg-white hover:shadow-lg transition"
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

            <p className="text-sm text-gray-500">
              ₹{product.price}
            </p>

          </Link>
        ))}

      </div>

    </div>
  )
}

// 🟢 FENG SHUI (DIRECT PRODUCTS)
if (params.category === "fengshui") {

  const filtered = products.filter(
    (p) => p.category === "fengshui"
  )

  if (filtered.length === 0) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <h1 className="text-3xl font-bold mb-10">
        Feng Shui Items
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/fengshui/${product.slug}`}
            className="border rounded-xl p-4 bg-white hover:shadow-lg transition"
          >

            {/* Image */}
            <div className="relative w-full h-40 mb-3">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Name */}
            <h2 className="text-sm font-semibold">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-sm text-gray-500">
              ₹{product.price}
            </p>

          </Link>
        ))}

      </div>

    </div>
  )
}

  // ❌ UNKNOWN CATEGORY
  return notFound()
}
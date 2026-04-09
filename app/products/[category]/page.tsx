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

function getSubcategoryImage(category: string, sub: any) {
  const subSlug =
    typeof sub === "string"
      ? sub.toLowerCase()
      : sub?.slug?.toLowerCase()

  const product = products.find(
    (p) =>
      p.category.toLowerCase() === category &&
      p.subcategory?.toLowerCase() === subSlug
  )

  // ✅ if product image exists
  if (product?.images?.[0]) return product.images[0]

  // ✅ FIXED PATH
  return `/image/productcomp/${category}/${subSlug}.jpg`
}

  // 🟡 GEMSTONES
  if (category === "gemstones") {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-10">Gemstones</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
         {gemstoneSubcategories.map((sub) => (
  <Link
    key={sub.slug}
    href={`/products/gemstones/${sub.slug}`}
    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
  >
    <div className="relative w-full h-[140px]">
      <Image
        src={sub.image}
        alt={sub.name}
        fill
        className="object-cover"
      />
    </div>

    <div className="py-2 text-center">
      <h3 className="text-sm font-semibold">
        {sub.name}
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
            key={sub.slug}
            href={`/products/rudraksha/${sub.slug}`}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
          >
            <div className="relative w-full h-[140px]">
              <Image
                src={sub.image}
                alt={sub.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="py-2 text-center">
              <h3 className="text-sm font-semibold">
                {sub.name}
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
  <Link key={sub.slug} href={`/products/vastu/${sub.slug}`}>
    <Image src={sub.image} alt={sub.name} fill />
    <h3>{sub.name}</h3>
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
  <Link key={sub.slug} href={`/products/crystals/${sub.slug}`}>
    <Image src={sub.image} alt={sub.name} fill />
    <h3>{sub.name}</h3>
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
  <Link key={sub.slug} href={`/products/yantras/${sub.slug}`}>
    <Image src={sub.image} alt={sub.name} fill />
    <h3>{sub.name}</h3>
  </Link>
))}
        </div>
      </div>
    )
  }

// 🟡 Herbs
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

// 🟣 BRACELETS (DIRECT PRODUCTS)
if (category === "bracelets") {

  const filtered = products.filter(
    (p) => p.category === "bracelets"
  )

  if (filtered.length === 0) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <h1 className="text-3xl font-bold mb-10">
        Bracelets
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/bracelets/${product.slug}`}
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
  // ❌ UNKNOWN CATEGORY
  return notFound()
}
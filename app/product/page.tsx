import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Products | Maa Tarini Astro-Vision",
  description:
    "Explore gemstones, rudraksha, bracelets, vastu materials, crystals, herbs, yantras and feng shui products.",
}

const categories = [
  {
    title: "Gemstones",
    folder: "gemstones",
    items: [
      "Blue Sapphire",
      "Ruby Stone",
      "Emerald Stone",
      "Yellow Sapphire",
      "Red Coral",
      "Pearl Stone",
      "Hessonite Garnet",
      "Cat’s Eye",
      "Opal Stone",
      "Amethyst",
    ],
  },
  {
    title: "Rudraksha",
    folder: "rudraksha",
    items: [
      "1 Mukhi Rudraksha",
      "2 Mukhi Rudraksha",
      "3 Mukhi Rudraksha",
      "4 Mukhi Rudraksha",
      "5 Mukhi Rudraksha",
      "Ganesh Rudraksha (Nepali)",
      "Trijuti Rudraksha ",
      "Gauri Sankar Rudraksha (Nepali)",
      "Garbh Gauri Rudraksha",
      "9 Mukhi Rudraksha ",
    ],
  },
  {
    title: "Bracelets",
    folder: "bracelets",
    items: [
      "7 Chakra Bracelet",
      "Black Tourmaline Bracelet",
      "Tiger Eye Bracelet",
      "Rose Quartz Bracelet",
      "Citrine Bracelet",
      "Pyrite Bracelet",
      "Lava Stone Bracelet",
      "Amethyst Bracelet",
      "Moonstone Bracelet",
      "Rudraksha Bracelet",
    ],
  },
  {
    title: "Vastu Materials",
    folder: "vastu",
    items: [
      "Vastu Pyramid",
      "Copper Swastik",
      "Vastu Tortoise",
      "Panchadhatu Kamdhenu",
      "Vastu Shree Yantra",
      "Vastu Fish",
      "Vastu Compass",
      "Brass Sun",
      "Vastu Strip",
      "Crystal/Spatik Tortoise",
    ],
  },
  {
    title: "Crystals",
    folder: "crystals",
    items: [
      "Clear Quartz",
      "Rose Quartz",
      "Black Obsidian",
      "Selenite",
      "Citrine Crystal",
      "Green Aventurine",
      "Labradorite",
      "Carnelian",
      "Fluorite",
      "Smoky Quartz",
    ],
  },

  {
    title: "Yantras",
    folder: "yantras",
    items: [
      "Shree Yantra",
      "Kuber Yantra",
      "Mahalakshmi Yantra",
      "Navgraha Yantra",
      "Baglamukhi Yantra",
      "Saraswati Yantra",
      "Vastu Yantra",
      "Mahamrityunjaya Yantra",
      "Durga Yantra",
      "Hanuman Yantra",
    ],
  },
  {
    title: "Feng Shui Items",
    folder: "fengshui",
    items: [
      "Laughing Buddha",
      "Money Frog",
      "Feng Shui Turtle",
      "Wind Chime",
      "Dragon Statue",
      "Crystal Ball",
      "Lucky Coins",
      "Bamboo Plant",
      "Mandarin Ducks",
      "Three Legged Toad",
    ],
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white pt-32 pb-24 px-6">
      
      {/* HEADER */}
      <section className="w-full text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our Spiritual Products
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Authentic energized products crafted to enhance prosperity, protection,
          harmony and spiritual growth.
        </p>
      </section>

      {categories.map((category, catIndex) => (
        <section key={catIndex} className="w-full mb-24">

          {/* CATEGORY TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-white/10 pb-4">
            {category.title}
          </h2>

          {/* 5 + 5 GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a0f0a] border border-white/10 rounded-2xl overflow-hidden hover:border-secondary transition-all hover:-translate-y-2 duration-300"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={`/image/${category.folder}/${index + 1}.jpg`}
                    alt={item}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-md font-semibold mb-2">{item}</h3>

                  <ul className="text-xs text-gray-400 space-y-1 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      Energized & Certified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      Premium Quality
                    </li>
                  </ul>

                  <button className="w-full bg-secondary text-black py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>
      ))}

      {/* CTA */}
      <section className="w-full text-center mt-24">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Need Personal Astrology Guidance?
        </h3>
        <p className="text-gray-400 mb-8 text-lg">
          Contact us for customized remedies and spiritual consultations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-10 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  )
}
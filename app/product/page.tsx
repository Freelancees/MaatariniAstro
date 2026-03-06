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
      "Trijuti Rudraksha",
      "Gauri Sankar Rudraksha (Nepali)",
      "Garbh Gauri Rudraksha",
      "9 Mukhi Rudraksha",
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
    <main className="relative min-h-screen w-full pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">

      {/* Cosmic Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-white rounded-full blur-[200px] opacity-30" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Planets */}
      <div className="absolute w-20 h-20 bg-yellow-300 rounded-full blur-sm opacity-70 top-20 left-20 animate-pulse"></div>
      <div className="absolute w-14 h-14 bg-yellow-200 rounded-full blur-sm opacity-70 bottom-40 right-20 animate-pulse"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <section className="w-full text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Spiritual Products
          </h1>
          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            Authentic energized products crafted to enhance prosperity,
            protection, harmony and spiritual growth.
          </p>
        </section>

        {categories.map((category, catIndex) => (
          <section key={catIndex} className="w-full mb-24">

            {/* CATEGORY TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-black/10 pb-4 text-black">
              {category.title}
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all hover:-translate-y-2 duration-300 shadow-lg"
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
                    <h3 className="text-md font-semibold mb-2 text-black">
                      {item}
                    </h3>

                    <ul className="text-xs text-black/70 space-y-1 mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-yellow-500" />
                        Energized & Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-yellow-500" />
                        Premium Quality
                      </li>
                    </ul>

                    <button className="w-full bg-yellow-400 text-black py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition shadow-md">
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
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Need Personal Astrology Guidance?
          </h3>
          <p className="text-black/70 mb-8 text-lg">
            Contact us for customized remedies and spiritual consultations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Contact Us
          </a>
        </section>

      </div>
    </main>
  )
}
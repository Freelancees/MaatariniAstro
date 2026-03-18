"use client"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

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
      "5 Mukhi Rudraksha Mala",
      "7 Mukhi Rudraksha Mala",
      "9 Mukhi Rudraksha Mala",
      "108 Beads Rudraksha Mala",
      "Nepali Rudraksha Mala",
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export default function ProductGrid() {
  return (
    <main className="relative min-h-screen w-full pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#eaf4fb] via-[#9fc9ea] to-[#6fa8d6]">

      {/* glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] bg-white rounded-full blur-[200px] opacity-30"/>
      </div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              width: `${Math.random()*3}px`,
              height: `${Math.random()*3}px`,
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Spiritual Products
          </h1>
          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            Authentic energized products crafted to enhance prosperity,
            protection, harmony and spiritual growth.
          </p>
        </section>

        {categories.map((category, catIndex)=>(
          <section key={catIndex} id={category.folder} className="mb-24 scroll-mt-32">

            <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-black/10 pb-4 text-black">
              {category.title}
            </h2>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >

             {products
  .filter((p) => p.category === category.folder)
  .map((products, index) => (
               <Link href={`/products/${products.slug}`}>
  <motion.div
                  key={index}
                  variants={card}
                  whileHover={{ rotateX:6, rotateY:-6, scale:1.05 }}
                  className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-200/50 transition-all duration-300"
                >

                  {/* 🔥 AUTO FIT IMAGE SYSTEM */}
                  <div className="relative w-full h-52 bg-white flex items-center justify-center overflow-hidden">

                    {/* inner wrapper for better scaling */}
                    <div className="relative w-full h-full flex items-center justify-center p-4">

                      <Image
                       src={products.images[0]}
                       alt={products.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />

                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 sparkle pointer-events-none"/>
                  </div>

                  <div className="p-3">

                    <h3 className="text-sm font-semibold mb-2 text-black">
                    {products.name}
                    </h3>

                    <ul className="text-[11px] text-black/70 space-y-1 mb-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-yellow-500"/>
                        Energized & Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-yellow-500"/>
                        Premium Quality
                      </li>
                    </ul>

                    <motion.button
                      whileHover={{scale:1.06}}
                      whileTap={{scale:0.95}}
                      className="w-full bg-yellow-400 text-black py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-300 transition shadow-md"
                    >
                      Buy Now
                    </motion.button>

                  </div>

                  </motion.div>
</Link>
              ))}

            </motion.div>

          </section>
        ))}

      </div>
    </main>
  )
}
type Specification = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: string
  price: number
  description: string
  specifications: Specification[]
  isNew?: boolean
  isBestSelling?: boolean
   oldPrice?: number // ✅ optional
  images: string[]
  image?: string // ✅ optional (for old data compatibility)
  badge?: string // ✅ optional
}

export const products: Product[] = [
  
  // GEMSTONES
  { slug: "blue-sapphire", name: "Blue Sapphire", category: "gemstones", price: 1999, images: ["/image/gemstones/1.jpg"], description: "Powerful gemstone for Saturn.", specifications: [] },
  { slug: "ruby-stone", name: "Ruby Stone", category: "gemstones", price: 1499, images: ["/image/gemstones/2.jpg"], description: "Enhances confidence and leadership.", specifications: [] },
  { slug: "emerald-stone", name: "Emerald Stone", category: "gemstones", price: 1599, images: ["/image/gemstones/3.jpg"], description: "Improves intellect and communication.", specifications: [] },
  { slug: "yellow-sapphire", name: "Yellow Sapphire", category: "gemstones", price: 1799, images: ["/image/gemstones/4.jpg"], description: "Brings wealth and wisdom.", specifications: [] },
  { slug: "red-coral", name: "Red Coral", category: "gemstones", price: 1399, images: ["/image/gemstones/5.jpg"], description: "Boosts courage and strength.", specifications: [] },
  { slug: "pearl-stone", name: "Pearl Stone", category: "gemstones", price: 999, images: ["/image/gemstones/6.jpg"], description: "Calms emotions and mind.", specifications: [] },
  { slug: "hessonite-garnet", name: "Hessonite Garnet", category: "gemstones", price: 1299, images: ["/image/gemstones/7.jpg"], description: "Removes Rahu dosha.", specifications: [] },
  { slug: "cats-eye", name: "Cat’s Eye", category: "gemstones", price: 1499, images: ["/image/gemstones/8.jpg"], description: "Protects from negative energy.", specifications: [] },
  { slug: "opal-stone", name: "Opal Stone", category: "gemstones", price: 1399, images: ["/image/gemstones/9.jpg"], description: "Enhances creativity.", specifications: [] },
  { slug: "amethyst", name: "Amethyst", category: "gemstones", price: 899, images: ["/image/gemstones/10.jpg"], description: "Spiritual protection stone.", specifications: [] },

  // RUDRAKSHA
  { slug: "1-mukhi-rudraksha", name: "1 Mukhi Rudraksha", category: "rudraksha", price: 2999, images: ["/image/rudraksha/1.jpg"], description: "Rare and powerful bead.", specifications: [] },
  { slug: "2-mukhi-rudraksha", name: "2 Mukhi Rudraksha", category: "rudraksha", price: 1999, images: ["/image/rudraksha/2.jpg"], description: "Improves relationships.", specifications: [] },
  { slug: "3-mukhi-rudraksha", name: "3 Mukhi Rudraksha", category: "rudraksha", price: 999, images: ["/image/rudraksha/3.jpg"], description: "Burns past karma.", specifications: [] },
  { slug: "4-mukhi-rudraksha", name: "4 Mukhi Rudraksha", category: "rudraksha", price: 899, images: ["/image/rudraksha/4.jpg"], description: "Boosts intelligence.", specifications: [] },
  { slug: "5-mukhi-rudraksha", name: "5 Mukhi Rudraksha", category: "rudraksha", price: 499, images: ["/image/rudraksha/5.jpg"], description: "Peace and stability.", specifications: [] },
  { slug: "ganesh-rudraksha-nepali", name: "Ganesh Rudraksha (Nepali)", category: "rudraksha", price: 2499, images: ["/image/rudraksha/6.jpg"], description: "Removes obstacles.", specifications: [] },
  { slug: "trijuti-rudraksha", name: "Trijuti Rudraksha", category: "rudraksha", price: 3999, images: ["/image/rudraksha/7.jpg"], description: "Unity and harmony.", specifications: [] },
  { slug: "gauri-sankar-rudraksha-nepali", name: "Gauri Sankar Rudraksha (Nepali)", category: "rudraksha", price: 2999, images: ["/image/rudraksha/8.jpg"], description: "Strengthens relationships.", specifications: [] },
  { slug: "garbh-gauri-rudraksha", name: "Garbh Gauri Rudraksha", category: "rudraksha", price: 2599, images: ["/image/rudraksha/9.jpg"], description: "Blessings for motherhood.", specifications: [] },
  { slug: "9-mukhi-rudraksha", name: "9 Mukhi Rudraksha", category: "rudraksha", price: 1799, images: ["/image/rudraksha/10.jpg"], description: "Energy of Durga.", specifications: [] },
  { slug: "5-mukhi-rudraksha-mala", name: "5 Mukhi Rudraksha Mala", category: "rudraksha", price: 999, images: ["/image/rudraksha/11.jpg"], description: "Meditation mala.", specifications: [] },
  { slug: "7-mukhi-rudraksha-mala", name: "7 Mukhi Rudraksha Mala", category: "rudraksha", price: 1199, images: ["/image/rudraksha/12.jpg"], description: "Wealth attraction.", specifications: [] },
  { slug: "9-mukhi-rudraksha-mala", name: "9 Mukhi Rudraksha Mala", category: "rudraksha", price: 1399, images: ["/image/rudraksha/13.jpg"], description: "Divine energy mala.", specifications: [] },
  { slug: "108-beads-rudraksha-mala", name: "108 Beads Rudraksha Mala", category: "rudraksha", price: 1599, images: ["/image/rudraksha/14.jpg"], description: "Full japa mala.", specifications: [] },
  { slug: "nepali-rudraksha-mala", name: "Nepali Rudraksha Mala", category: "rudraksha", price: 1999, images: ["/image/rudraksha/15.jpg"], description: "Premium Nepali beads.", specifications: [] },

  // BRACELETS
{ slug: "7-chakra-bracelet", name: "7 Chakra Bracelet", category: "bracelets", price: 799, images: ["/image/bracelets/1.jpg"], description: "Balances chakras.", specifications: [] },
{ slug: "black-tourmaline-bracelet", name: "Black Tourmaline Bracelet", category: "bracelets", price: 899, images: ["/image/bracelets/2.jpg"], description: "Protection bracelet.", specifications: [] },
{ slug: "tiger-eye-bracelet", name: "Tiger Eye Bracelet", category: "bracelets", price: 699, images: ["/image/bracelets/3.jpg"], description: "Confidence booster.", specifications: [] },
{ slug: "rose-quartz-bracelet", name: "Rose Quartz Bracelet", category: "bracelets", price: 799, images: ["/image/bracelets/4.jpg"], description: "Love energy.", specifications: [] },
{ slug: "citrine-bracelet", name: "Citrine Bracelet", category: "bracelets", price: 899, images: ["/image/bracelets/5.jpg"], description: "Wealth attraction.", specifications: [] },
{ slug: "pyrite-bracelet", name: "Pyrite Bracelet", category: "bracelets", price: 999, images: ["/image/bracelets/6.jpg"], description: "Money magnet.", specifications: [] },
{ slug: "lava-stone-bracelet", name: "Lava Stone Bracelet", category: "bracelets", price: 599, images: ["/image/bracelets/7.jpg"], description: "Grounding energy.", specifications: [] },
{ slug: "amethyst-bracelet", name: "Amethyst Bracelet", category: "bracelets", price: 799, images: ["/image/bracelets/8.jpg"], description: "Spiritual calmness.", specifications: [] },
{ slug: "moonstone-bracelet", name: "Moonstone Bracelet", category: "bracelets", price: 899, images: ["/image/bracelets/9.jpg"], description: "Emotional balance.", specifications: [] },
{ slug: "rudraksha-bracelet", name: "Rudraksha Bracelet", category: "bracelets", price: 699, images: ["/image/bracelets/10.jpg"], description: "Spiritual protection.", specifications: [] },

//Vastu
  { slug: "vastu-pyramid", name: "Vastu Pyramid", category: "vastu", price: 599, images: ["/image/vastu/1.jpg"], description: "Enhances positive energy in your space.", specifications: [] },
  { slug: "copper-swastik", name: "Copper Swastik", category: "vastu", price: 499, images: ["/image/vastu/2.jpg"], description: "Symbol of prosperity and good luck.", specifications: [] },
  { slug: "vastu-tortoise", name: "Vastu Tortoise", category: "vastu", price: 699, images: ["/image/vastu/3.jpg"], description: "Promotes stability and wealth.", specifications: [] },
  { slug: "panchadhatu-kamdhenu", name: "Panchadhatu Kamdhenu", category: "vastu", price: 1299, images: ["/image/vastu/4.jpg"], description: "Blessings for abundance and happiness.", specifications: [] },
  { slug: "vastu-shree-yantra", name: "Vastu Shree Yantra", category: "vastu", price: 999, images: ["/image/vastu/5.jpg"], description: "Attracts wealth, success, and positivity.", specifications: [] },
  { slug: "vastu-fish", name: "Vastu Fish", category: "vastu", price: 599, images: ["/image/vastu/6.jpg"], description: "Symbolizes prosperity and good fortune.", specifications: [] },
  { slug: "vastu-compass", name: "Vastu Compass", category: "vastu", price: 799, images: ["/image/vastu/7.jpg"], description: "Helps align your home according to Vastu.", specifications: [] },
  { slug: "brass-sun", name: "Brass Sun", category: "vastu", price: 699, images: ["/image/vastu/8.jpg"], description: "Represents energy, power, and positivity.", specifications: [] },
  { slug: "vastu-strip", name: "Vastu Strip", category: "vastu", price: 399, images: ["/image/vastu/9.jpg"], description: "Balances energy flow in your home.", specifications: [] },
  { slug: "crystal-spatik-tortoise", name: "Crystal/Spatik Tortoise", category: "vastu", price: 1199, images: ["/image/vastu/10.jpg"], description: "Enhances spiritual and material balance.", specifications: [] },

//Crystals
  { slug: "clear-quartz", name: "Clear Quartz", category: "crystals", price: 599, images: ["/image/crystals/1.jpg"], description: "Amplifies energy and clarity.", specifications: [] },
  { slug: "rose-quartz", name: "Rose Quartz", category: "crystals", price: 699, images: ["/image/crystals/2.jpg"], description: "Promotes love and emotional healing.", specifications: [] },
  { slug: "black-obsidian", name: "Black Obsidian", category: "crystals", price: 799, images: ["/image/crystals/3.jpg"], description: "Provides protection and grounding.", specifications: [] },
  { slug: "selenite", name: "Selenite", category: "crystals", price: 599, images: ["/image/crystals/4.jpg"], description: "Cleanses negative energy and aura.", specifications: [] },
  { slug: "citrine-crystal", name: "Citrine Crystal", category: "crystals", price: 899, images: ["/image/crystals/5.jpg"], description: "Attracts wealth and abundance.", specifications: [] },
  { slug: "green-aventurine", name: "Green Aventurine", category: "crystals", price: 699, images: ["/image/crystals/6.jpg"], description: "Brings luck and prosperity.", specifications: [] },
  { slug: "labradorite", name: "Labradorite", category: "crystals", price: 799, images: ["/image/crystals/7.jpg"], description: "Enhances intuition and protection.", specifications: [] },
  { slug: "carnelian", name: "Carnelian", category: "crystals", price: 599, images: ["/image/crystals/8.jpg"], description: "Boosts confidence and motivation.", specifications: [] },
  { slug: "fluorite", name: "Fluorite", category: "crystals", price: 699, images: ["/image/crystals/9.jpg"], description: "Improves focus and mental clarity.", specifications: [] },
  { slug: "smoky-quartz", name: "Smoky Quartz", category: "crystals", price: 799, images: ["/image/crystals/10.jpg"], description: "Protects against negativity.", specifications: [] },

//  Yantras 
  { slug: "shree-yantra", name: "Shree Yantra", category: "yantras", price: 1299, images: ["/image/yantras/1.jpg"], description: "Brings wealth, success, and positivity.", specifications: [] },
  { slug: "kuber-yantra", name: "Kuber Yantra", category: "yantras", price: 999, images: ["/image/yantras/2.jpg"], description: "Attracts financial prosperity and abundance.", specifications: [] },
  { slug: "mahalakshmi-yantra", name: "Mahalakshmi Yantra", category: "yantras", price: 1199, images: ["/image/yantras/3.jpg"], description: "Invokes blessings of Goddess Lakshmi.", specifications: [] },
  { slug: "navgraha-yantra", name: "Navgraha Yantra", category: "yantras", price: 1099, images: ["/image/yantras/4.jpg"], description: "Balances planetary influences for harmony.", specifications: [] },
  { slug: "baglamukhi-yantra", name: "Baglamukhi Yantra", category: "yantras", price: 1299, images: ["/image/yantras/5.jpg"], description: "Provides protection and control over enemies.", specifications: [] },
  { slug: "saraswati-yantra", name: "Saraswati Yantra", category: "yantras", price: 899, images: ["/image/yantras/6.jpg"], description: "Enhances knowledge, learning, and creativity.", specifications: [] },
  { slug: "vastu-yantra", name: "Vastu Yantra", category: "yantras", price: 999, images: ["/image/yantras/7.jpg"], description: "Balances energy and removes negative vibrations.", specifications: [] },
  { slug: "mahamrityunjaya-yantra", name: "Mahamrityunjaya Yantra", category: "yantras", price: 1299, images: ["/image/yantras/8.jpg"], description: "Brings health, protection, and longevity.", specifications: [] },
  { slug: "durga-yantra", name: "Durga Yantra", category: "yantras", price: 1099, images: ["/image/yantras/9.jpg"], description: "Invokes the power and protection of Goddess Durga.", specifications: [] },
  { slug: "hanuman-yantra", name: "Hanuman Yantra", category: "yantras", price: 999, images: ["/image/yantras/10.jpg"], description: "Provides courage, protection, and strength.", specifications: [] },

  //fengShuiItems
  { slug: "laughing-buddha", name: "Laughing Buddha", category: "fengshui", price: 799, images: ["/image/fengshui/1.jpg"], description: "Brings happiness, wealth, and prosperity.", specifications: [] },
  { slug: "money-frog", name: "Money Frog", category: "fengshui", price: 699, images: ["/image/fengshui/2.jpg"], description: "Attracts wealth and abundance.", specifications: [] },
  { slug: "feng-shui-turtle", name: "Feng Shui Turtle", category: "fengshui", price: 899, images: ["/image/fengshui/3.jpg"], description: "Promotes stability and protection.", specifications: [] },
  { slug: "wind-chime", name: "Wind Chime", category: "fengshui", price: 599, images: ["/image/fengshui/4.jpg"], description: "Enhances positive energy and harmony.", specifications: [] },
  { slug: "dragon-statue", name: "Dragon Statue", category: "fengshui", price: 1299, images: ["/image/fengshui/5.jpg"], description: "Symbol of power, courage, and protection.", specifications: [] },
  { slug: "crystal-ball", name: "Crystal Ball", category: "fengshui", price: 999, images: ["/image/fengshui/6.jpg"], description: "Brings clarity, energy, and good fortune.", specifications: [] },
  { slug: "lucky-coins", name: "Lucky Coins", category: "fengshui", price: 499, images: ["/image/fengshui/7.jpg"], description: "Attracts wealth and prosperity.", specifications: [] },
  { slug: "bamboo-plant", name: "Bamboo Plant", category: "fengshui", price: 599, images: ["/image/fengshui/8.jpg"], description: "Promotes luck, harmony, and growth.", specifications: [] },
  { slug: "mandarin-ducks", name: "Mandarin Ducks", category: "fengshui", price: 699, images: ["/image/fengshui/9.jpg"], description: "Enhances love and marital harmony.", specifications: [] },
  { slug: "three-legged-toad", name: "Three Legged Toad", category: "fengshui", price: 899, images: ["/image/fengshui/10.jpg"], description: "Brings wealth and protects from financial loss.", specifications: [] },





  {
    slug: "laxmi-pyramid",
    name: "Laxmi Pyramid",
    category: "vastu",
    price: 599,
    images: ["/image/best selling/laxmi pyramid.png"],
    description: "Brings wealth and prosperity.",
    specifications: [],
    isNew: true,
  },
  // {
  //   slug: "pendulum",
  //   name: "Pendulum",
  //   category: "crystals",
  //   price: 899,
  //   images: ["/image/best selling/Pendulum.png"],
  //   description: "Used for dowsing and energy reading.",
  //   specifications: [],
  //   isNew: true,
  // },
  {
    slug: "sea-salt-powder",
    name: "Sea Salt Powder",
    category: "vastu",
    price: 499,
    images: ["/image/best selling/Sea Salt Powder.png"],
    description: "Removes negative energy.",
    specifications: [],
    isNew: true,
  },
  // {
  //   slug: "money-magnet-pyrite-pyramid",
  //   name: "Money Magnet Pyrite Pyramid",
  //   category: "crystals",
  //   price: 699,
  //   images: ["/image/best selling/Money Magnet Pyrite Pyramid.png"],
  //   description: "Attracts wealth and success.",
  //   specifications: [],
  //   isNew: true,
  // },
  {
    slug: "9-planets-oil",
    name: "9 Planets Oil",
    category: "yantras",
    price: 1299,
    images: ["/image/best selling/9 Planets Oil.png"],
    description: "Balances planetary energies.",
    specifications: [],
    isNew: true,
  },
  {
    slug: "vastu-purush-brahmasthan-plate",
    name: "Vastu Purush Brahmasthan Plate",
    category: "vastu",
    price: 999,
    images: ["/image/best selling/Vastu purush brahmasthan plate.png"],
    description: "Corrects vastu defects.",
    specifications: [],
    isNew: true,
  },
  {
    slug: "green-zebu-pyramid",
    name: "Green Zebu Pyramid",
    category: "vastu",
    price: 799,
    images: ["/image/best selling/Green Zebu Pyramid.png"],
    description: "Enhances positive energy.",
    specifications: [],
    isNew: true,
  },
  {
    slug: "meru-shree-yantra",
    name: "Meru Shree Yantra",
    category: "yantras",
    price: 699,
    images: ["/image/best selling/meru shree yantra.png"],
    description: "Powerful spiritual yantra.",
    specifications: [],
    isNew: true,
  },

  // 🔥 Best Selling (NOW ADDED PROPERLY)
  {
    slug: "8-directions-booster",
    name: "8 Directions Booster with Yantra",
    category: "vastu",
    price: 799,
    images: ["/image/best selling/8 Directions Booster with Yantra.png"],
    description: "Enhances meditation energy.",
    specifications: [],
    isBestSelling: true,
  },
  {
    slug: "brass-trishakti",
    name: "Brass Trishakti",
    category: "vastu",
    price: 999,
    images: ["/image/best selling/Brass Trishakti.png"],
    description: "Balance planetary energies.",
    specifications: [],
    isBestSelling: true,
  },
  {
    slug: "five-element-tape",
    name: "Five Element Tape",
    category: "vastu",
    price: 699,
    images: ["/image/best selling/Five Element Tape.png"],
    description: "Planetary gemstone healing.",
    specifications: [],
    isBestSelling: true,
  },
  {
    slug: "multipurpose-rods",
    name: "Multipurpose Rods",
    category: "vastu",
    price: 899,
    images: ["/image/best selling/Multipurpose Rods.png"],
    description: "Improves space energy flow.",
    specifications: [],
    isBestSelling: true,
  },
  {
    slug: "relationship-booster",
    name: "Relationship Booster",
    category: "vastu",
    price: 749,
    images: ["/image/best selling/Relationship Booster.png"],
    description: "Peace and spiritual clarity.",
    specifications: [],
    isBestSelling: true,
  }, 
// {
//   slug: "7-chakra-bracelet",
//   name: "7 Chakra Bracelet",
//   category: "bracelets",
//   price: 799,
//   images: ["/image/bracelets/7-chakra.png"],
//   description: "Balances all chakras.",
//   specifications: [],
// },
{
  slug: "vastu-pyramid",
  name: "Vastu Pyramid",
  category: "vastu",
  price: 599,
  images: ["/image/vastu/pyramid.png"],
  description: "Removes vastu dosh.",
  specifications: [],
},
// {
//   slug: "clear-quartz",
//   name: "Clear Quartz",
//   category: "crystals",
//   price: 699,
//   images: ["/image/crystals/clear-quartz.png"],
//   description: "Master healing crystal.",
//   specifications: [],
// },
// {
//   slug: "shree-yantra",
//   name: "Shree Yantra",
//   category: "yantras",
//   price: 999,
//   images: ["/image/yantras/shree-yantra.png"],
//   description: "Brings wealth and prosperity.",
//   specifications: [],
// },
// {
//   slug: "laughing-buddha",
//   name: "Laughing Buddha",
//   category: "fengshui",
//   price: 899,
//   images: ["/image/fengshui/laughing-buddha.png"],
//   description: "Symbol of happiness and wealth.",
//   specifications: [],
// }
]
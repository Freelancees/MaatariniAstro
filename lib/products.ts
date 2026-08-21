import {
  gemstoneSubcategories,
  rudrakshaSubcategories,
  vastuSubcategories,
  crystalSubcategories,
  yantraSubcategories
} from "./subcategories"


type Specification = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: string
  subcategory?: string
  price: number
  description: string
  specifications: Specification[]
  isNew?: boolean
  isBestSelling?: boolean
  oldPrice?: number
  images: string[]
} 

export const products: Product[] = [

// GEMSTONES
{ slug: "blue-sapphire", name: "Blue Sapphire", category: "gemstones", subcategory: "blue-sapphire", price: 1999, images: ["/image/gemstones/1.jpg"], description: "Powerful gemstone for Saturn.", specifications: [] },
{ slug: "ruby-stone", name: "Ruby Stone", category: "gemstones", subcategory: "ruby-manik", price: 1499, images: ["/image/gemstones/2.jpg"], description: "Enhances confidence and leadership.", specifications: [] },
{ slug: "emerald-stone", name: "Emerald Stone", category: "gemstones", subcategory: "emerald", price: 1599, images: ["/image/gemstones/3.jpg"], description: "Improves intellect and communication.", specifications: [] },
{ slug: "yellow-sapphire", name: "Yellow Sapphire", category: "gemstones", subcategory: "yellow-sapphire", price: 1799, images: ["/image/gemstones/4.jpg"], description: "Brings wealth and wisdom.", specifications: [] },
{ slug: "red-coral", name: "Red Coral", category: "gemstones", subcategory: "red-coral", price: 1399, images: ["/image/gemstones/5.jpg"], description: "Boosts courage and strength.", specifications: [] },
{ slug: "pearl-stone", name: "Pearl Stone", category: "gemstones", subcategory: "pearl", price: 999, images: ["/image/gemstones/6.jpg"], description: "Calms emotions and mind.", specifications: [] },
{ slug: "hessonite-garnet", name: "Hessonite Garnet", category: "gemstones", subcategory: "hessonite", price: 1299, images: ["/image/gemstones/7.jpg"], description: "Removes Rahu dosha.", specifications: [] },
{ slug: "cats-eye", name: "Cat’s Eye", category: "gemstones", subcategory: "cats-eye", price: 1499, images: ["/image/gemstones/8.jpg"], description: "Protects from negative energy.", specifications: [] },
{ slug: "opal-stone", name: "Opal Stone", category: "gemstones", subcategory: "opal", price: 1399, images: ["/image/gemstones/9.jpg"], description: "Enhances creativity.", specifications: [] },
{ slug: "amethyst", name: "Amethyst", category: "gemstones", subcategory: "amethyst", price: 899, images: ["/image/gemstones/10.jpg"], description: "Spiritual protection stone.", specifications: [] },

// EXTRA GEMSTONE PRODUCTS
{ slug: "ruby-manik-5-carat", name: "Ruby / Manik (5 Carat)", category: "gemstones", subcategory: "ruby-manik", price: 5000, images: ["/image/gemstones/ruby.jpg"], description: "Powerful Sun stone", specifications: [] },
{ slug: "tigers-eye-6-carat", name: "Tiger's Eye (6 Carat)", category: "gemstones", subcategory: "tigers-eye", price: 500, images: ["/image/gemstones/tiger.jpg"], description: "Confidence and protection stone", specifications: [] },
{ slug: "basra-pearl-1", name: "Basra Pearl (Premium)", category: "gemstones", subcategory: "basra-pearl", price: 12000, oldPrice: 13200, images: ["/image/gemstones/pearl.jpg"], description: "Rare high-quality pearl", specifications: [] },
  
// RUDRAKSHA 
  { slug: "1-mukhi-rudraksha", name: "1 Mukhi Rudraksha", category: "rudraksha", price: 2999, images: ["/image/rudraksha/1.jpg"], description: "Rare and powerful bead.", specifications: [] },
  { slug: "2-mukhi-rudraksha", name: "2 Mukhi Rudraksha", category: "rudraksha", price: 1999, images: ["/image/rudraksha/2.jpg"], description: "Improves relationships.", specifications: [] },
  { slug: "3-mukhi-rudraksha", name: "3 Mukhi Rudraksha", category: "rudraksha", price: 999, images: ["/image/rudraksha/3.jpg"], description: "Burns past karma.", specifications: [] },
  { slug: "4-mukhi-rudraksha", name: "4 Mukhi Rudraksha", category: "rudraksha", price: 899, images: ["/image/rudraksha/4.jpg"], description: "Boosts intelligence.", specifications: [] },
  { slug: "5-mukhi-rudraksha", name: "5 Mukhi Rudraksha", category: "rudraksha", subcategory: "1-to-21-mukhi", price: 499, images: ["/image/rudraksha/5.jpg"], description: "Peace and stability", specifications: [] },
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

  { slug: "laxmi-pyramid", name: "Laxmi Pyramid", category: "vastu", price: 599, images: ["/image/best selling/laxmi pyramid.png"], description: "Brings wealth and prosperity.", specifications: [], isNew: true },
  { slug: "sea-salt-powder", name: "Sea Salt Powder", category: "vastu", price: 499, images: ["/image/best selling/Sea Salt Powder.png"], description: "Removes negative energy.", specifications: [], isNew: true },
  { slug: "9-planets-oil", name: "9 Planets Oil", category: "yantras", price: 1299,  images: ["/image/best selling/9 Planets Oil.png"], description: "Balances planetary energies.", specifications: [],isNew: true },
  { slug: "vastu-purush-brahmasthan-plate",  name: "Vastu Purush Brahmasthan Plate",  category: "vastu", price: 999, images: ["/image/best selling/Vastu purush brahmasthan plate.png"], description: "Corrects vastu defects.", specifications: [], isNew: true },
  { slug: "green-zebu-pyramid", name: "Green Zebu Pyramid", category: "vastu", price: 799, images: ["/image/best selling/Green Zebu Pyramid.png"], description: "Enhances positive energy.", specifications: [], isNew: true },
  { slug: "meru-shree-yantra", name: "Meru Shree Yantra", category: "yantras", price: 699, images: ["/image/best selling/meru shree yantra.png"], description: "Powerful spiritual yantra.", specifications: [], isNew: true },

  // 🔥 Best Selling 
{ slug: "8-directions-booster", name: "8 Directions Booster with Yantra", category: "vastu", price: 799, images: ["/image/best selling/8 Directions Booster with Yantra.png"], description: "Enhances meditation energy.", specifications: [], isBestSelling: true },
{ slug: "brass-trishakti", name: "Brass Trishakti", category: "vastu", price: 999, images: ["/image/best selling/Brass Trishakti.png"], description: "Balance planetary energies.", specifications: [], isBestSelling: true },
{ slug: "five-element-tape", name: "Five Element Tape", category: "vastu", price: 699, images: ["/image/best selling/Five Element Tape.png"], description: "Planetary gemstone healing.", specifications: [], isBestSelling: true },
{ slug: "multipurpose-rods", name: "Multipurpose Rods", category: "vastu", price: 899, images: ["/image/best selling/Multipurpose Rods.png"], description: "Improves space energy flow.", specifications: [], isBestSelling: true },
{ slug: "relationship-booster", name: "Relationship Booster", category: "vastu", price: 749, images: ["/image/best selling/Relationship Booster.png"], description: "Peace and spiritual clarity.", specifications: [], isBestSelling: true },
{ slug: "vastu-pyramid-basic", name: "Vastu Pyramid", category: "vastu", price: 599, images: ["/image/vastu/pyramid.png"], description: "Removes vastu dosh.", specifications: [] },

//Products- Gemstone 
{ slug: "ruby-manik-5-carat", name: "Ruby / Manik (5 Carat)", category: "gemstones", subcategory: "ruby-manik", price: 5000, images: ["/image/gemstones/ruby.jpg"], description: "Powerful Sun stone", specifications: [] },
{ slug: "tigers-eye-6-carat", name: "Tiger's Eye (6 Carat)", category: "gemstones", subcategory: "tigers-eye", price: 500, images: ["/image/gemstones/tiger.jpg"], description: "Confidence and protection stone", specifications: [] },
{ slug: "basra-pearl-1", name: "Basra Pearl (Premium)", category: "gemstones", subcategory: "basra-pearl", price: 12000, oldPrice: 13200, images: ["/image/gemstones/pearl.jpg"], description: "Rare high-quality pearl", specifications: [] },


// GANESH
{ slug: "ganesh-rudraksha-nepali", name: "Ganesh Rudraksha (Nepali)", category: "rudraksha", subcategory: "ganesh", price: 2499, images: ["/image/rudraksha/6.jpg"], description: "Removes obstacles", specifications: [] },

// TRIJUTI
{ slug: "trijuti-rudraksha", name: "Trijuti Rudraksha", category: "rudraksha", subcategory: "trijuti", price: 3999, images: ["/image/rudraksha/7.jpg"], description: "Unity and harmony", specifications: [] },

// GAURI SHANKAR
{ slug: "gauri-shankar-rudraksha", name: "Gauri Shankar Rudraksha", category: "rudraksha", subcategory: "gauri-shankar", price: 2999, images: ["/image/rudraksha/8.jpg"], description: "Strengthens relationships", specifications: [] },

// GARBH GAURI
{ slug: "garbh-gauri-rudraksha", name: "Garbh Gauri Rudraksha", category: "rudraksha", subcategory: "garbh-gauri", price: 2599, images: ["/image/rudraksha/9.jpg"], description: "Blessings for motherhood", specifications: [] },

// MALA
{ slug: "5-mukhi-rudraksha-mala", name: "5 Mukhi Rudraksha Mala", category: "rudraksha", subcategory: "mala", price: 999, images: ["/image/rudraksha/11.jpg"], description: "Meditation mala", specifications: [] },

// BRACELET
{ slug: "rudraksha-bracelet", name: "Rudraksha Bracelet", category: "rudraksha", subcategory: "bracelet", price: 699, images: ["/image/bracelets/10.jpg"], description: "Spiritual protection", specifications: [] },



// 🟡 BRACELETS 
{ slug: "labradorite-bracelet", name: "Labradorite Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/labradorite.jpg"], description: "Enhances intuition and protection.", specifications: [] },
{ slug: "serpentine-bracelet", name: "Serpentine Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/serpentine.jpg"], description: "Healing and detox energy.", specifications: [] },
{ slug: "rose-quartz-bracelet-2", name: "Rose Quartz Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/rose-quartz.jpg"], description: "Love and emotional healing.", specifications: [] },
{ slug: "red-jasper-bracelet", name: "Red Jasper Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/red-jasper.jpg"], description: "Grounding and stability.", specifications: [] },
{ slug: "pyrite-bracelet-2", name: "Pyrite Bracelet", category: "bracelets", price: 999, images: ["/image/productcomp/bracelets/pyrite.jpg"], description: "Money and wealth attraction.", specifications: [] },
{ slug: "malachite-bracelet", name: "Malachite Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/malachite.jpg"], description: "Protection and transformation.", specifications: [] },
{ slug: "lapis-lazuli-bracelet", name: "Lapis Lazuli Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/lapis.jpg"], description: "Wisdom and truth.", specifications: [] },
{ slug: "amethyst-bracelet-2", name: "Amethyst Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/amethyst.jpg"], description: "Calmness and spirituality.", specifications: [] },
{ slug: "green-aventurine-bracelet-2", name: "Green Aventurine Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/aventurine.jpg"], description: "Luck and prosperity.", specifications: [] },
{ slug: "black-agate-bracelet", name: "Black Agate Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/black-agate.jpg"], description: "Protection from negativity.", specifications: [] },
{ slug: "aquamarine-bracelet", name: "Aquamarine Bracelet", category: "bracelets", price: 999, images: ["/image/productcomp/bracelets/aquamarine.jpg"], description: "Calm and clarity.", specifications: [] },
{ slug: "triple-protection-bracelet", name: "Triple Protection Bracelet", category: "bracelets", price: 999, images: ["/image/productcomp/bracelets/triple-protection.jpg"], description: "Protection with 3 powerful stones.", specifications: [] },
{ slug: "evil-eye-bracelet", name: "Evil Eye Protection Bracelet", category: "bracelets", price: 599, images: ["/image/productcomp/bracelets/evil-eye.jpg"], description: "Protects from evil eye.", specifications: [] },
{ slug: "howlite-bracelet", name: "Howlite Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/howlite.jpg"], description: "Calmness and stress relief.", specifications: [] },
{ slug: "green-jade-bracelet", name: "Green Jade Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/jade.jpg"], description: "Harmony and luck.", specifications: [] },
{ slug: "lava-stone-bracelet-2", name: "Lava Stone Bracelet", category: "bracelets", price: 599, images: ["/image/productcomp/bracelets/lava.jpg"], description: "Grounding energy.", specifications: [] },
{ slug: "moonstone-bracelet-2", name: "Moonstone Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/moonstone.jpg"], description: "Emotional balance.", specifications: [] },
{ slug: "peridot-bracelet", name: "Peridot Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/peridot.jpg"], description: "Positivity and growth.", specifications: [] },
{ slug: "black-obsidian-bracelet", name: "Black Obsidian Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/obsidian.jpg"], description: "Strong protection stone.", specifications: [] },
{ slug: "smoky-quartz-bracelet", name: "Smoky Quartz Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/smoky.jpg"], description: "Removes negativity.", specifications: [] },
{ slug: "clear-quartz-bracelet", name: "Clear Quartz Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/clear-quartz.jpg"], description: "Amplifies energy.", specifications: [] },
{ slug: "seven-chakra-bracelet", name: "Seven Chakra Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/7chakra.jpg"], description: "Balances all chakras.", specifications: [] },
{ slug: "rudraksha-bracelet-2", name: "Rudraksha Bracelet", category: "bracelets", price: 699, images: ["/image/productcomp/bracelets/rudraksha.jpg"], description: "Spiritual protection.", specifications: [] },
{ slug: "citrine-bracelet-2", name: "Yellow Citrine Bracelet", category: "bracelets", price: 899, images: ["/image/productcomp/bracelets/citrine.jpg"], description: "Wealth and success.", specifications: [] },
{ slug: "sulemani-hakik-bracelet", name: "Sulemani Hakik Bracelet", category: "bracelets", price: 799, images: ["/image/productcomp/bracelets/hakik.jpg"], description: "Protection and grounding.", specifications: [] },
{ slug: "sandalwood-bracelet", name: "Sandalwood Bracelet", category: "bracelets", price: 499, images: ["/image/productcomp/bracelets/sandalwood.jpg"], description: "Calmness and spiritual focus.", specifications: [] },

//vastu section
{ slug: "stainless-steel-vastu-strip", name: "Stainless Steel Vastu Strip", category: "vastu", subcategory: "vastu-strip", price: 399, images: ["/image/vastu/strip1.jpg"], description: "Balances energy flow.", specifications: [] },
{ slug: "copper-vastu-strip", name: "Copper Vastu Strip", category: "vastu", subcategory: "vastu-strip", price: 499, images: ["/image/vastu/strip2.jpg"], description: "Removes vastu defects.", specifications: [] },
{ slug: "brass-vastu-strip", name: "Brass Vastu Strip", category: "vastu", subcategory: "vastu-strip", price: 499, images: ["/image/vastu/strip3.jpg"], description: "Energy balancing strip.", specifications: [] },
{ slug: "five-metal-strip", name: "5 Metal Vastu Strip", category: "vastu", subcategory: "vastu-strip", price: 699, images: ["/image/vastu/strip4.jpg"], description: "Multi-metal vastu correction.", specifications: [] },
{ slug: "amethyst-tree", name: "Amethyst Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree1.jpg"], description: "Spiritual energy tree.", specifications: [] },
{ slug: "pyrite-tree", name: "Pyrite Tree", category: "vastu", subcategory: "tree", price: 999, images: ["/image/vastu/tree2.jpg"], description: "Wealth attracting tree.", specifications: [] },
{ slug: "seven-chakra-tree", name: "7 Chakra Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree3.jpg"], description: "Balances all chakras.", specifications: [] },
{ slug: "green-aventurine-tree", name: "Green Aventurine Tree", category: "vastu", subcategory: "tree", price: 799, images: ["/image/vastu/tree4.jpg"], description: "Brings luck.", specifications: [] },
{ slug: "black-obsidian-tree", name: "Black Obsidian Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree5.jpg"], description: "Protection tree.", specifications: [] },

//pyramid
{ slug: "pyrite-pyramid", name: "Pyrite Pyramid", category: "vastu", subcategory: "pyramid", price: 899, images: ["/image/vastu/pyramid1.jpg"], description: "Wealth attracting pyramid.", specifications: [] },
{ slug: "amethyst-pyramid", name: "Amethyst Pyramid", category: "vastu", subcategory: "pyramid", price: 799, images: ["/image/vastu/pyramid2.jpg"], description: "Spiritual healing pyramid.", specifications: [] },
{ slug: "clear-quartz-pyramid", name: "Clear Quartz Pyramid", category: "vastu", subcategory: "pyramid", price: 699, images: ["/image/vastu/pyramid3.jpg"], description: "Energy amplifier.", specifications: [] },
{ slug: "green-aventurine-pyramid", name: "Green Aventurine Pyramid", category: "vastu", subcategory: "pyramid", price: 699, images: ["/image/vastu/pyramid4.jpg"], description: "Luck and prosperity.", specifications: [] },
{ slug: "nine-pyramid-strip", name: "9 Pyramid Strip", category: "vastu", subcategory: "pyramid", price: 599, images: ["/image/vastu/pyramid5.jpg"], description: "Vastu correction strip.", specifications: [] },
{ slug: "81-pyramid-strip", name: "81 Pyramid Strip", category: "vastu", subcategory: "pyramid", price: 999, images: ["/image/vastu/pyramid6.jpg"], description: "Advanced vastu correction.", specifications: [] },

//tree
{ slug: "amethyst-tree", name: "Amethyst Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree1.jpg"], description: "Spiritual energy tree.", specifications: [] },
{ slug: "pyrite-tree", name: "Pyrite Tree", category: "vastu", subcategory: "tree", price: 999, images: ["/image/vastu/tree2.jpg"], description: "Wealth attracting tree.", specifications: [] },
{ slug: "seven-chakra-tree", name: "7 Chakra Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree3.jpg"], description: "Balances all chakras.", specifications: [] },
{ slug: "green-aventurine-tree", name: "Green Aventurine Tree", category: "vastu", subcategory: "tree", price: 799, images: ["/image/vastu/tree4.jpg"], description: "Brings luck.", specifications: [] },
{ slug: "black-obsidian-tree", name: "Black Obsidian Tree", category: "vastu", subcategory: "tree", price: 899, images: ["/image/vastu/tree5.jpg"], description: "Protection tree.", specifications: [] },

//bagua 
{ slug: "bagua-mirror", name: "Bagua / Pakua Mirror", category: "vastu", subcategory: "bagua-mirror", price: 699, images: ["/image/vastu/mirror.jpg"], description: "Protects from negative energy.", specifications: [] },

//wind chimes
{ slug: "wind-chime-basic", name: "Wind Chime", category: "vastu", subcategory: "wind-chimes", price: 599, images: ["/image/vastu/chime1.jpg"], description: "Brings harmony.", specifications: [] },
{ slug: "copper-wind-chime", name: "Copper Wind Chime", category: "vastu", subcategory: "wind-chimes", price: 799, images: ["/image/vastu/chime2.jpg"], description: "Enhances positive energy.", specifications: [] },
{ slug: "evil-eye-wind-chime", name: "Evil Eye Wind Chime", category: "vastu", subcategory: "wind-chimes", price: 699, images: ["/image/vastu/chime3.jpg"], description: "Protection from evil eye.", specifications: [] },

// 🔵 MALA 
{ slug: "rudraksha-mala", name: "Rudraksha Mala", category: "mala", price: 999, images: ["/image/mala/rudraksha.jpg"], description: "Spiritual mala for meditation", specifications: [] },
{ slug: "karungali-mala", name: "Karungali Mala", category: "mala", price: 899, images: ["/image/mala/karungali.jpg"], description: "Protective energy mala", specifications: [] },
{ slug: "silver-karungali-mala", name: "Silver Coated Karungali Mala", category: "mala", price: 1199, images: ["/image/mala/silver-karungali.jpg"], description: "Premium coated karungali mala", specifications: [] },
{ slug: "karungali-rudraksha-mala", name: "Karungali with Rudraksha Mala", category: "mala", price: 1299, images: ["/image/mala/karungali-rudraksha.jpg"], description: "Combination mala for protection", specifications: [] },
{ slug: "agate-mala", name: "Agate Mala", category: "mala", price: 799, images: ["/image/mala/agate.jpg"], description: "Balance and grounding energy", specifications: [] },
{ slug: "vaijayanti-mala", name: "Vaijayanti Mala", category: "mala", price: 699, images: ["/image/mala/vaijayanti.jpg"], description: "Sacred mala for Lord Vishnu", specifications: [] },
{ slug: "tulasi-mala", name: "Tulasi Mala", category: "mala", price: 499, images: ["/image/mala/tulasi.jpg"], description: "Holy basil mala for devotion", specifications: [] },
{ slug: "amethyst-mala", name: "Amethyst Mala", category: "mala", price: 999, images: ["/image/mala/amethyst.jpg"], description: "Spiritual protection mala", specifications: [] },
{ slug: "pearl-mala", name: "Pearl Mala", category: "mala", price: 1499, images: ["/image/mala/pearl.jpg"], description: "Calming and soothing mala", specifications: [] },
{ slug: "moonstone-mala", name: "Moonstone Mala", category: "mala", price: 1199, images: ["/image/mala/moonstone.jpg"], description: "Emotional balance mala", specifications: [] },
{ slug: "lapis-lazuli-mala", name: "Lapis Lazuli Mala", category: "mala", price: 1399, images: ["/image/mala/lapis.jpg"], description: "Wisdom and truth stone mala", specifications: [] },
{ slug: "garnet-mala", name: "Garnet Mala", category: "mala", price: 999, images: ["/image/mala/garnet.jpg"], description: "Energy and vitality mala", specifications: [] },
{ slug: "spatik-mala", name: "Spatik (Crystal) Mala", category: "mala", price: 899, images: ["/image/mala/spatik.jpg"], description: "Cooling and healing crystal mala", specifications: [] },
{ slug: "sandalwood-mala", name: "Sandalwood Mala", category: "mala", price: 799, images: ["/image/mala/sandalwood.jpg"], description: "Calming meditation mala", specifications: [] },
{ slug: "tiger-eye-mala", name: "Tiger Eye Mala", category: "mala", price: 999, images: ["/image/mala/tiger.jpg"], description: "Confidence and strength mala", specifications: [] },

// 🌿 HERBS
{ slug: "black-sandal", name: "Black Sandal", category: "herbs", price: 299, images: ["/image/herbs/1.jpg"], description: "Premium black sandalwood", specifications: [] },
{ slug: "ganga-jal", name: "Ganga Jal", category: "herbs", price: 199, images: ["/image/herbs/2.jpg"], description: "Holy Ganga water", specifications: [] },
{ slug: "red-sandal", name: "Red Sandal", category: "herbs", price: 349, images: ["/image/herbs/3.jpg"], description: "Pure red sandalwood", specifications: [] },
{ slug: "gugul-dhoop", name: "Gugul Dhoop", category: "herbs", price: 249, images: ["/image/herbs/4.jpg"], description: "Natural gugul incense", specifications: [] },
{ slug: "jaiphal", name: "Jaiphal", category: "herbs", price: 199, images: ["/image/herbs/5.jpg"], description: "Pure jaiphal for rituals", specifications: [] },
{ slug: "kashmiri-kesar", name: "Kashmiri Kesar", category: "herbs", price: 599, images: ["/image/herbs/6.jpg"], description: "Authentic saffron", specifications: [] },
{ slug: "kumkum-seed", name: "Kumkum Seed", category: "herbs", price: 149, images: ["/image/herbs/7.jpg"], description: "Used in pooja rituals", specifications: [] },
{ slug: "ajmoda", name: "Ajmoda", category: "herbs", price: 149, images: ["/image/herbs/8.jpg"], description: "Ayurvedic herb", specifications: [] },
{ slug: "akarakar-root", name: "Akarakar Root", category: "herbs", price: 199, images: ["/image/herbs/9.jpg"], description: "Traditional healing root", specifications: [] },

// 🔱 YANTRAS WITH SUBCATEGORY
{ slug: "gold-yantra", name: "Gold Colour Metal Yantra", category: "yantras", subcategory: "gold-metal", price: 999, images: ["/image/yantras/gold.jpg"], description: "Premium gold finish yantra", specifications: [] },
{ slug: "gold-yantra-frame", name: "Gold Metal Yantra (With Frame)", category: "yantras", subcategory: "gold-metal-frame", price: 1299, images: ["/image/yantras/gold-frame.jpg"], description: "Framed gold yantra", specifications: [] },
{ slug: "brass-yantra", name: "Brass Yantra Without Frame", category: "yantras", subcategory: "brass-without-frame", price: 799, images: ["/image/yantras/brass.jpg"], description: "Pure brass yantra", specifications: [] },
{ slug: "brass-yantra-frame", name: "Brass Yantra With Frame", category: "yantras", subcategory: "brass-with-frame", price: 1099, images: ["/image/yantras/brass-frame.jpg"], description: "Framed brass yantra", specifications: [] },
{ slug: "copper-yantra-frame", name: "Copper Yantra With Frame", category: "yantras", subcategory: "copper-with-frame", price: 999, images: ["/image/yantras/copper-frame.jpg"], description: "Copper yantra framed", specifications: [] },
{ slug: "copper-yantra", name: "Copper Yantra Without Frame", category: "yantras", subcategory: "copper-without-frame", price: 799, images: ["/image/yantras/copper.jpg"], description: "Copper yantra", specifications: [] },

]
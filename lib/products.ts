import {
  gemstoneSubcategories,
  rudrakshaSubcategories,
  vastuSubcategories,
  crystalSubcategories,
  yantraSubcategories
} from "./subcategories"

export type Specification = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: string
  subcategory?: string
  price: number
  oldPrice?: number
  description: string
  specifications: Specification[]
  isNew?: boolean
  isBestSelling?: boolean
  images: string[]
  benefits?: string[]
  rating?: number
  reviewCount?: number
}

// Default standard Vedic specifications
const defaultSpecs: Specification[] = [
  { label: "Purity & Authenticity", value: "100% Genuine, Natural & Certified" },
  { label: "Sanctification", value: "Energized / Abhimantrit by Vedic Purohits" },
  { label: "Origin & Sourcing", value: "Ethically Sourced Sacred Materials" },
  { label: "Payment Mode", value: "Cash on Delivery (COD) Available" },
  { label: "Shipping & Delivery", value: "Free Express Shipping Across India (3-5 Days)" },
  { label: "Returns", value: "7 Days Easy Replacement Guarantee" },
]

export const products: Product[] = [
  // ==========================================
  // GEMSTONES (All ₹999)
  // ==========================================
  {
    slug: "blue-sapphire",
    name: "Blue Sapphire (Neelam)",
    category: "gemstones",
    subcategory: "blue-sapphire",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/1.jpg"],
    description: "Powerful Vedic gemstone for planet Saturn (Shani). Promotes immense focus, wealth, and shields against evil eyes and sudden misfortunes.",
    specifications: [
      { label: "Ruling Planet", value: "Saturn (Shani Dev)" },
      { label: "Chakra", value: "Ajna (Third Eye Chakra)" },
      ...defaultSpecs
    ],
    benefits: ["Instant positive shifts in career & business", "Protects against hidden enemies & malefic Shani", "Enhances mental clarity & intuition"],
    rating: 4.9,
    reviewCount: 142
  },
  {
    slug: "ruby-stone",
    name: "Ruby Stone (Manik)",
    category: "gemstones",
    subcategory: "ruby-manik",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/2.jpg"],
    description: "Sacred stone of the Sun (Surya). Enhances leadership, self-confidence, vitality, and attracts government and professional favors.",
    specifications: [
      { label: "Ruling Planet", value: "Sun (Surya Bhagwan)" },
      { label: "Chakra", value: "Manipura (Solar Plexus)" },
      ...defaultSpecs
    ],
    benefits: ["Boosts leadership & authoritative influence", "Strengthens willpower & vitality", "Enhances paternal bond & government success"],
    rating: 4.8,
    reviewCount: 98
  },
  {
    slug: "emerald-stone",
    name: "Emerald Stone (Panna)",
    category: "gemstones",
    subcategory: "emerald",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/3.jpg"],
    description: "Gemstone of planet Mercury (Budh). Bestows intellectual sharpness, magnetic communication, and exceptional commercial success.",
    specifications: [
      { label: "Ruling Planet", value: "Mercury (Budh)" },
      { label: "Chakra", value: "Anahata (Heart Chakra)" },
      ...defaultSpecs
    ],
    benefits: ["Sharpened memory and intellectual power", "Excellent for students, accountants, and traders", "Restores speech fluency and creative expression"],
    rating: 4.9,
    reviewCount: 112
  },
  {
    slug: "yellow-sapphire",
    name: "Yellow Sapphire (Pukhraj)",
    category: "gemstones",
    subcategory: "yellow-sapphire",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/4.jpg"],
    description: "Stone of Jupiter (Guru Dev). Bestows immense prosperity, high wisdom, marital bliss, and spiritual progression.",
    specifications: [
      { label: "Ruling Planet", value: "Jupiter (Brihaspati)" },
      { label: "Chakra", value: "Solar Plexus" },
      ...defaultSpecs
    ],
    benefits: ["Brings auspicious fortune and material wealth", "Ideal for higher studies, law, and academics", "Promotes joyful marital harmony"],
    rating: 4.9,
    reviewCount: 135
  },
  {
    slug: "pearl-stone",
    name: "Natural Pearl Stone (Moti)",
    category: "gemstones",
    subcategory: "pearl",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/6.jpg"],
    description: "Gemstone of the Moon (Chandra). Cools anger, stabilizes emotions, brings serene peace of mind, and fosters inner beauty.",
    specifications: [
      { label: "Ruling Planet", value: "Moon (Chandra)" },
      { label: "Chakra", value: "Swadhisthana (Sacral Chakra)" },
      ...defaultSpecs
    ],
    benefits: ["Relieves anxiety, depression and mental tension", "Promotes sweet speech and emotional equilibrium", "Attracts tranquility and peaceful sleep"],
    rating: 4.9,
    reviewCount: 76
  },
  {
    slug: "hessonite-garnet",
    name: "Hessonite Garnet (Gomed)",
    category: "gemstones",
    subcategory: "hessonite",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/7.jpg"],
    description: "Powerful astrological stone for Rahu. Dissolves sudden obstacles, confusion, and fear while attracting speculative and political gains.",
    specifications: [
      { label: "Ruling Planet", value: "Rahu (Dragon's Head)" },
      { label: "Chakra", value: "Root Chakra" },
      ...defaultSpecs
    ],
    benefits: ["Clears Rahu Mahadasha & Antardasha troubles", "Eliminates confusion and hidden phobias", "Attracts victory in competitive environments"],
    rating: 4.7,
    reviewCount: 64
  },
  {
    slug: "cats-eye",
    name: "Cat’s Eye (Lehsuniya)",
    category: "gemstones",
    subcategory: "cats-eye",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/8.jpg"],
    description: "Mystical stone of Ketu. Guards against black magic, unexpected accidents, and uncovers hidden spiritual intuition.",
    specifications: [
      { label: "Ruling Planet", value: "Ketu (Dragon's Tail)" },
      { label: "Chakra", value: "Crown Chakra" },
      ...defaultSpecs
    ],
    benefits: ["Invincible psychic shield against dark energies", "Recovers lost wealth and blocked money", "Deepens meditation and occult insights"],
    rating: 4.8,
    reviewCount: 82
  },
  {
    slug: "opal-stone",
    name: "Australian Opal Stone",
    category: "gemstones",
    subcategory: "opal",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/9.jpg"],
    description: "Stone of Venus (Shukra). Magnifies romantic allure, luxury, artistic creativity, and luxurious pleasures.",
    specifications: [
      { label: "Ruling Planet", value: "Venus (Shukra)" },
      { label: "Chakra", value: "Crown & Sacral" },
      ...defaultSpecs
    ],
    benefits: ["Attracts luxury, glamorous lifestyle & wealth", "Fosters marital passion and deep romantic bonds", "Ignites artistic and creative genius"],
    rating: 4.9,
    reviewCount: 94
  },
  {
    slug: "amethyst",
    name: "Natural Amethyst (Jamunia)",
    category: "gemstones",
    subcategory: "amethyst",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/10.jpg"],
    description: "Spiritual violet gemstone for psychic shield, sobriety, calm thoughts, and Saturn pacification.",
    specifications: [
      { label: "Ruling Planet", value: "Saturn (Shani)" },
      { label: "Chakra", value: "Third Eye & Crown" },
      ...defaultSpecs
    ],
    benefits: ["Induces deep tranquil sleep and calm mind", "Protects against toxic energies and negative habits", "Balances crown chakra intuition"],
    rating: 4.9,
    reviewCount: 120
  },
  {
    slug: "ruby-manik-5-carat",
    name: "Ruby / Manik (5 Carat Energized)",
    category: "gemstones",
    subcategory: "ruby-manik",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/ruby.jpg"],
    description: "Deep red certified natural ruby consecrated for executive leadership, health, and radiant vitality.",
    specifications: [
      { label: "Carat Weight", value: "5 Carat Approx." },
      ...defaultSpecs
    ],
    benefits: ["Accelerates professional promotions", "Amplifies aura and confidence", "Improves cardiovascular stamina"],
    rating: 4.9,
    reviewCount: 88
  },
  {
    slug: "tigers-eye-6-carat",
    name: "Tiger's Eye (6 Carat Golden)",
    category: "gemstones",
    subcategory: "tigers-eye",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/tiger.jpg"],
    description: "Golden-brown chatoyant stone that bestows fearless tiger confidence, supreme focus, and shields from negative jealousy.",
    specifications: defaultSpecs,
    benefits: ["Overcomes stage fear and self-doubt", "Drives focus on financial targets", "Dispels psychic and emotional vampires"],
    rating: 4.8,
    reviewCount: 54
  },
  {
    slug: "basra-pearl-1",
    name: "Basra Pearl (Sacred Blessing)",
    category: "gemstones",
    subcategory: "basra-pearl",
    price: 999,
    oldPrice: 1999,
    images: ["/image/gemstones/pearl.jpg"],
    description: "Pure oceanic pearl sanctified for emotional healing, marital harmony, and supreme cooling grace.",
    specifications: defaultSpecs,
    benefits: ["Gentle emotional healing and peace", "Blessings for motherhood and children", "Reduces hypertension and anger"],
    rating: 5.0,
    reviewCount: 71
  },

  // ==========================================
  // RUDRAKSHA (All ₹999)
  // ==========================================
  {
    slug: "1-mukhi-rudraksha",
    name: "1 Mukhi Rudraksha (Lord Shiva's Grace)",
    category: "rudraksha",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/1.jpg"],
    description: "The most sacred and powerful bead representing Supreme Shiva. Destroys all sins, grants enlightenment, and awakens the Sahasrara Chakra.",
    specifications: [
      { label: "Ruling Deity", value: "Lord Shiva (Mahadeva)" },
      { label: "Ruling Planet", value: "All Planets (Surya Dominant)" },
      ...defaultSpecs
    ],
    benefits: ["Grants supreme spiritual awakening & peace", "Removes past karmic impressions and sins", "Brings supreme focus, leadership and divine grace"],
    rating: 5.0,
    reviewCount: 230
  },
  {
    slug: "2-mukhi-rudraksha",
    name: "2 Mukhi Rudraksha (Ardhanarishvara)",
    category: "rudraksha",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/2.jpg"],
    description: "Symbolizes Ardhanarishvara (Shiva and Shakti). Heals relationship disputes, brings marital bliss, and unites souls in harmony.",
    specifications: [
      { label: "Ruling Deity", value: "Ardhanarishvara" },
      { label: "Ruling Planet", value: "Moon (Chandra)" },
      ...defaultSpecs
    ],
    benefits: ["Mends strained relationships and marriages", "Brings inner emotional balance and tranquility", "Fosters deep unconditional love and understanding"],
    rating: 4.9,
    reviewCount: 165
  },
  {
    slug: "3-mukhi-rudraksha",
    name: "3 Mukhi Rudraksha (Agni Deva)",
    category: "rudraksha",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/3.jpg"],
    description: "Blessed by Lord Agni (Fire God). Burns past sins and self-limiting beliefs, igniting dynamic confidence and energetic stamina.",
    specifications: [
      { label: "Ruling Deity", value: "Agni Deva" },
      { label: "Ruling Planet", value: "Mars (Mangal)" },
      ...defaultSpecs
    ],
    benefits: ["Burns guilt, depression and past karmic burdens", "Boosts metabolic vitality and stamina", "Instills fearless assertiveness"],
    rating: 4.8,
    reviewCount: 140
  },
  {
    slug: "4-mukhi-rudraksha",
    name: "4 Mukhi Rudraksha (Lord Brahma)",
    category: "rudraksha",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/4.jpg"],
    description: "Blessed by Lord Brahma, creator of the universe. Awakens the four levels of consciousness, intellect, public speaking, and wisdom.",
    specifications: [
      { label: "Ruling Deity", value: "Lord Brahma" },
      { label: "Ruling Planet", value: "Mercury (Budh)" },
      ...defaultSpecs
    ],
    benefits: ["Sharpened intellect and logical acuity", "Superb for researchers, teachers, and communicators", "Removes speech hesitation and mental fog"],
    rating: 4.8,
    reviewCount: 110
  },
  {
    slug: "5-mukhi-rudraksha",
    name: "5 Mukhi Rudraksha (Kalagni Rudra)",
    category: "rudraksha",
    subcategory: "1-to-21-mukhi",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/5.jpg"],
    description: "The universal bead of Kalagni Rudra. Purifies blood pressure, calms nervous tension, and provides holistic well-being.",
    specifications: [
      { label: "Ruling Deity", value: "Lord Kalagni Rudra" },
      { label: "Ruling Planet", value: "Jupiter (Guru)" },
      ...defaultSpecs
    ],
    benefits: ["Stabilizes blood pressure and heart rhythm", "Universal peace, health and mental calmness", "Protects against untimely troubles"],
    rating: 4.9,
    reviewCount: 310
  },
  {
    slug: "ganesh-rudraksha-nepali",
    name: "Ganesh Rudraksha (Nepali Authentic)",
    category: "rudraksha",
    subcategory: "ganesh",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/6.jpg"],
    description: "Features a natural trunk-like elevation representing Lord Ganesha. Removes all hurdles, grants swift success in new ventures.",
    specifications: [
      { label: "Ruling Deity", value: "Lord Ganesha" },
      { label: "Ruling Planet", value: "Rahu / Ketu" },
      ...defaultSpecs
    ],
    benefits: ["Smashes hurdles in business and exams", "Attracts Riddhi & Siddhi (prosperity & wisdom)", "Protects against negative energies during new journeys"],
    rating: 5.0,
    reviewCount: 195
  },
  {
    slug: "trijuti-rudraksha",
    name: "Trijuti Rudraksha (Trinity Bead)",
    category: "rudraksha",
    subcategory: "trijuti",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/7.jpg"],
    description: "Extremely auspicious trio bead symbolizing Brahma, Vishnu, and Mahesh. Bestows total universal alignment and supreme protection.",
    specifications: defaultSpecs,
    benefits: ["Trinity blessings for supreme spiritual evolution", "Magnifies leadership over large organizations", "Brings absolute inner peace and cosmic grace"],
    rating: 5.0,
    reviewCount: 88
  },
  {
    slug: "gauri-sankar-rudraksha-nepali",
    name: "Gauri Shankar Rudraksha (Nepali)",
    category: "rudraksha",
    subcategory: "gauri-shankar",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/8.jpg"],
    description: "Two naturally conjoined beads symbolizing Lord Shiva and Goddess Parvati. Renowned worldwide for marital harmony and fertility.",
    specifications: defaultSpecs,
    benefits: ["Solves matrimonial delays and disputes", "Deepens marital companionship and fertility", "Brings divine familial bliss"],
    rating: 5.0,
    reviewCount: 220
  },
  {
    slug: "garbh-gauri-rudraksha",
    name: "Garbh Gauri Rudraksha",
    category: "rudraksha",
    subcategory: "garbh-gauri",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/9.jpg"],
    description: "Mother and child conjoined bead representing Parvati and Ganesha. Divine blessing for expectant mothers and parent-child love.",
    specifications: defaultSpecs,
    benefits: ["Guards during pregnancy and child delivery", "Strengthens loving bonding between mother and child", "Imparts peaceful home vibrations"],
    rating: 4.9,
    reviewCount: 95
  },
  {
    slug: "9-mukhi-rudraksha",
    name: "9 Mukhi Rudraksha (Navadurga)",
    category: "rudraksha",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/10.jpg"],
    description: "Sanctified by Goddess Durga and her nine cosmic forms. Infuses absolute fearlessness, destroys black magic, and grants spiritual endurance.",
    specifications: defaultSpecs,
    benefits: ["Eliminates Ketu dosha and phantom fears", "Blesses with Navadurga Shakti and courage", "Guards the home against evil entities"],
    rating: 4.9,
    reviewCount: 145
  },
  {
    slug: "5-mukhi-rudraksha-mala",
    name: "5 Mukhi Rudraksha Mala (108 Beads)",
    category: "rudraksha",
    subcategory: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/11.jpg"],
    description: "Traditional 108+1 bead consecrated Rudraksha Japa Mala for daily chanting, meditation, and lifelong physical protection.",
    specifications: defaultSpecs,
    benefits: ["Ideal for Mahamrityunjaya Mantra chanting", "Regulates nervous system and body temperature", "Shields aura from draining surroundings"],
    rating: 4.9,
    reviewCount: 280
  },
  {
    slug: "7-mukhi-rudraksha-mala",
    name: "7 Mukhi Rudraksha Mala (Maha Lakshmi)",
    category: "rudraksha",
    subcategory: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/12.jpg"],
    description: "Energized by Goddess Maha Lakshmi. Attracts sudden wealth, business expansion, and eliminates financial distress.",
    specifications: defaultSpecs,
    benefits: ["Overcomes chronic financial burdens", "Blessed by Lakshmi for persistent cash flow", "Pacifies planet Saturn (Shani)"],
    rating: 4.9,
    reviewCount: 175
  },
  {
    slug: "9-mukhi-rudraksha-mala",
    name: "9 Mukhi Durga Shakti Mala",
    category: "rudraksha",
    subcategory: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/13.jpg"],
    description: "Consecrated with powerful Durga mantras. Protects travelers, entrepreneurs, and spiritual seekers against adversities.",
    specifications: defaultSpecs,
    benefits: ["Instills bold decisive action", "Powerful shield during travel and public duties", "Bestows energetic confidence"],
    rating: 4.8,
    reviewCount: 92
  },
  {
    slug: "108-beads-rudraksha-mala",
    name: "Pure Siddha 108 Beads Rudraksha Mala",
    category: "rudraksha",
    subcategory: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/14.jpg"],
    description: "Authentic five-faced Nepali Rudraksha mala strung with holy red thread and tassel for daily meditation and wear.",
    specifications: defaultSpecs,
    benefits: ["Calms agitated thoughts and hyper-activity", "Amplifies spiritual mantra vibrations", "All-day energetic shielding"],
    rating: 5.0,
    reviewCount: 204
  },
  {
    slug: "nepali-rudraksha-mala",
    name: "Premium Nepali Rudraksha Mala",
    category: "rudraksha",
    subcategory: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/rudraksha/15.jpg"],
    description: "Handpicked large collector beads from the high slopes of Nepal, consecrated with sacred Rudra Abhishek rituals.",
    specifications: defaultSpecs,
    benefits: ["Deep pronounced grooves with high electromagnetic pulse", "Long-lasting spiritual companion", "Invokes Shiva's eternal blessing"],
    rating: 5.0,
    reviewCount: 155
  },

  // ==========================================
  // BRACELETS (All ₹999)
  // ==========================================
  {
    slug: "7-chakra-bracelet",
    name: "7 Chakra Healing Crystal Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/1.jpg"],
    description: "Handcrafted using 7 authentic natural gemstones aligned to the 7 bodily energy vortexes. Restores vitality and inner alignment.",
    specifications: defaultSpecs,
    benefits: ["Balances Root, Sacral, Solar, Heart, Throat, Third Eye & Crown", "Boosts daily mood and stamina", "Harmonizes subtle body aura"],
    rating: 4.9,
    reviewCount: 240
  },
  {
    slug: "black-tourmaline-bracelet",
    name: "Raw Black Tourmaline Protection Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/2.jpg"],
    description: "The ultimate psychic shield. Absorbs electromagnetic pollution from phones and repels jealousy, evil eye, and toxic vibes.",
    specifications: defaultSpecs,
    benefits: ["Blocks negative vibes & psychic draining", "Neutralizes EMF radiation from computers and phones", "Grounds stressful overthinking"],
    rating: 5.0,
    reviewCount: 310
  },
  {
    slug: "tiger-eye-bracelet",
    name: "Golden Tiger Eye Courage Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/3.jpg"],
    description: "Radiates fierce willpower and tiger clarity. Excellent for job interviews, public speaking, leadership, and bold decisions.",
    specifications: defaultSpecs,
    benefits: ["Conquers nervous hesitation and anxiety", "Attracts financial breakthroughs and luck", "Enhances self-discipline"],
    rating: 4.8,
    reviewCount: 180
  },
  {
    slug: "rose-quartz-bracelet",
    name: "Rose Quartz Heart Chakra Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/4.jpg"],
    description: "The stone of unconditional love and compassion. Mends emotional heartaches, draws romantic connection, and invites self-worth.",
    specifications: defaultSpecs,
    benefits: ["Deep emotional healing and gentleness", "Attracts loyal romantic and platonic relationships", "Soothes internal resentment and grief"],
    rating: 4.9,
    reviewCount: 215
  },
  {
    slug: "citrine-bracelet",
    name: "Golden Citrine Wealth Attraction Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/5.jpg"],
    description: "Known as the 'Merchant's Stone'. Radiates golden abundance, commercial luck, optimism, and unblocks cash stagnation.",
    specifications: defaultSpecs,
    benefits: ["Attracts unexpected sales and client orders", "Clears feelings of scarcity and lack", "Invigorates enthusiasm and creative drive"],
    rating: 5.0,
    reviewCount: 275
  },
  {
    slug: "pyrite-bracelet",
    name: "Natural Pyrite 'Money Magnet' Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/6.jpg"],
    description: "Gleaming metallic pyrite beads consecrated for ambitious entrepreneurs. Manifests lucrative wealth, power, and masculine vitality.",
    specifications: defaultSpecs,
    benefits: ["Magnetic draw for wealth opportunities", "Strengthens financial intelligence", "Creates a golden energetic shield around finances"],
    rating: 4.9,
    reviewCount: 340
  },
  {
    slug: "lava-stone-bracelet",
    name: "Volcanic Lava Stone Diffuser Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/7.jpg"],
    description: "Formed from molten earth core. Grounding, raw strength stone that doubles as an essential oil aroma diffuser for all-day tranquility.",
    specifications: defaultSpecs,
    benefits: ["Extreme earthing and grounding stability", "Absorbs essential oils for aromatherapy", "Soothes fiery temperaments"],
    rating: 4.7,
    reviewCount: 130
  },
  {
    slug: "amethyst-bracelet",
    name: "Deep Purple Amethyst Zen Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/8.jpg"],
    description: "Natural Brazilian amethyst beads. Induces serene headspace, sharpens intuition, and eases restless insomnia.",
    specifications: defaultSpecs,
    benefits: ["Relieves mental stress and panic attacks", "Enhances meditation and prayer depth", "Elevates psychic intuition"],
    rating: 4.8,
    reviewCount: 165
  },
  {
    slug: "moonstone-bracelet",
    name: "Rainbow Moonstone Feminine Grace Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/9.jpg"],
    description: "Shimmering adularescence stone linked with lunar rhythms. Balances hormones, enhances intuition, and inspires fresh beginnings.",
    specifications: defaultSpecs,
    benefits: ["Harmonizes hormonal and mood fluctuations", "Heightens gut instincts and empathetic perception", "Brings serene composure"],
    rating: 4.9,
    reviewCount: 140
  },
  {
    slug: "rudraksha-bracelet",
    name: "Sacred Rudraksha Adjustable Bracelet",
    category: "bracelets",
    price: 999,
    oldPrice: 1999,
    images: ["/image/bracelets/10.jpg"],
    description: "Compact 5-mukhi energized beads knotted on durable cord. Perfect everyday spiritual armour for career men and women.",
    specifications: defaultSpecs,
    benefits: ["Constantly purifies bodily energy meridians", "Protects against energy depletion in crowded areas", "Daily touchpoint for mindfulness"],
    rating: 4.9,
    reviewCount: 190
  },

  // ==========================================
  // VASTU PRODUCTS (All ₹999)
  // ==========================================
  {
    slug: "vastu-pyramid",
    name: "Vastu Energy Enhancer Pyramid",
    category: "vastu",
    subcategory: "pyramid",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/1.jpg"],
    description: "Scientific sacred geometry pyramid engineered to neutralize directional defects (Vastu Dosha) without structural demolition.",
    specifications: defaultSpecs,
    benefits: ["Neutralizes energy leaks in North-East / South-West", "Amplifies positive biomagnetic fields in homes & offices", "Fosters harmony among family members"],
    rating: 4.9,
    reviewCount: 225
  },
  {
    slug: "copper-swastik",
    name: "Pure Copper Vastu Swastik (Main Door)",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/2.jpg"],
    description: "Pure copper sacred Swastika emblem for main door placement. Invites auspicious cosmic energy and blocks malefic evil glances.",
    specifications: defaultSpecs,
    benefits: ["Welcomes Lakshmi and Ganapati auspicious energies", "Blocks negative street vibrations (Veedhi Shula)", "Guards the household entrance"],
    rating: 4.9,
    reviewCount: 180
  },
  {
    slug: "vastu-tortoise",
    name: "Sacred Vastu Tortoise on Plate",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/3.jpg"],
    description: "Symbolizes Lord Kurma Avatar. Bestows longevity, solid career backing, stable wealth accumulation, and peaceful perseverance.",
    specifications: defaultSpecs,
    benefits: ["Stabilizes fluctuating business profits", "Bestows patience, resilience and long life", "Ideal for North and East desk corners"],
    rating: 4.8,
    reviewCount: 160
  },
  {
    slug: "panchadhatu-kamdhenu",
    name: "Panchadhatu Kamdhenu Cow & Calf",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/4.jpg"],
    description: "Divine wish-fulfilling Kamdhenu sculpted with calf. Auspicious idol that brings abundance, nourishing health, and ancestral blessings.",
    specifications: defaultSpecs,
    benefits: ["Fulfills heart's earnest desires", "Fosters joyful familial warmth and fertility", "Corrects residential Vastu imbalances"],
    rating: 5.0,
    reviewCount: 240
  },
  {
    slug: "vastu-shree-yantra",
    name: "Vastu Blessed Shree Yantra Plate",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/5.jpg"],
    description: "Geometric representation of Goddess Tripura Sundari. Eradicates poverty vibrations and attracts all-round prosperity.",
    specifications: defaultSpecs,
    benefits: ["Magnetizes cosmic wealth vibrations", "Restores energetic balance in office cash drawers", "Purifies surrounding space"],
    rating: 5.0,
    reviewCount: 198
  },
  {
    slug: "vastu-fish",
    name: "Lucky Vastu Arowana Pair",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/6.jpg"],
    description: "Vastu energized fish totem representing smooth wealth flow, career promotions, and protection against financial drought.",
    specifications: defaultSpecs,
    benefits: ["Unblocks frozen wealth opportunities", "Invigorates career movement and networking", "Graceful decorative auspicious piece"],
    rating: 4.7,
    reviewCount: 115
  },
  {
    slug: "vastu-compass",
    name: "Vastu Directional Shastra Compass",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/7.jpg"],
    description: "Precision Vastu alignment instrument marked with sacred cardinal directions and associated planetary rulers.",
    specifications: defaultSpecs,
    benefits: ["Accurately identifies 16 Vastu zones in houses", "Essential for furniture and bedroom placement", "Compact and professional grade"],
    rating: 4.8,
    reviewCount: 89
  },
  {
    slug: "brass-sun",
    name: "Radiant Brass Surya Wall Plaque",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/8.jpg"],
    description: "Majestic brass Surya Dev hanging for the East wall. Bestows name, fame, royal charisma, and radiant health to the homeowner.",
    specifications: defaultSpecs,
    benefits: ["Ignites fame, glory and public respect", "Corrects East directional Vastu flaws", "Infuses rooms with vibrant solar vitality"],
    rating: 4.9,
    reviewCount: 210
  },
  {
    slug: "vastu-strip",
    name: "Vastu Energy Boundary Elemental Strip",
    category: "vastu",
    subcategory: "vastu-strip",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/9.jpg"],
    description: "Elemental metal energy blocker strip to seal toilet cuts, wrong entrances, and missing corners without renovations.",
    specifications: defaultSpecs,
    benefits: ["Quick non-destructive Vastu correction", "Blocks negative geopathic and drain stress", "Tested across thousands of homes"],
    rating: 4.8,
    reviewCount: 145
  },
  {
    slug: "crystal-spatik-tortoise",
    name: "Pure Sphatik (Quartz) Crystal Tortoise",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/vastu/10.jpg"],
    description: "Carved from pristine natural quartz crystal. Radiates soothing lunar calm, absorbs negative geopathic stress, and enhances study focus.",
    specifications: defaultSpecs,
    benefits: ["Pristine energy generator for work tables", "Dissolves mental fatigue and burnout", "Brings steady monetary accumulation"],
    rating: 5.0,
    reviewCount: 190
  },

  // ==========================================
  // BEST SELLERS & NEW ARRIVALS (All ₹999)
  // ==========================================
  {
    slug: "8-directions-booster",
    name: "8 Directions Booster with Yantra",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/8 Directions Booster with Yantra.png"],
    description: "Specialized 8-cardinal directional booster energized with sacred Vedic diagrams to rectify multi-directional home defects.",
    specifications: defaultSpecs,
    benefits: ["Rectifies energy leaks in all 8 directions", "Elevates workplace productivity and team synergy", "Restores peaceful sleep patterns"],
    isBestSelling: true,
    rating: 4.9,
    reviewCount: 285
  },
  {
    slug: "brass-trishakti",
    name: "Sacred Brass Trishakti (Trishul, Om & Swastik)",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Brass Trishakti.png"],
    description: "Three supreme Vedic symbols cast in pure brass: Trishul for protection, Om for cosmic peace, and Swastika for good luck.",
    specifications: defaultSpecs,
    benefits: ["Triple-shield protection for home entrance", "Neutralizes black gaze and envious eyes", "Brings divine blessings of Shiva & Ganesha"],
    isBestSelling: true,
    rating: 5.0,
    reviewCount: 320
  },
  {
    slug: "five-element-tape",
    name: "Five Element Vastu Correction Tape (Pack)",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Five Element Tape.png"],
    description: "Color therapy Vastu elemental tape for space balancing: Earth, Fire, Air, Water, and Space zone rectifications.",
    specifications: defaultSpecs,
    benefits: ["Effective space-programming tool", "Zero structural breaking required", "Simple application with instant results"],
    isBestSelling: true,
    rating: 4.8,
    reviewCount: 140
  },
  {
    slug: "multipurpose-rods",
    name: "Copper Energy Multipurpose Rods (Set)",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Multipurpose Rods.png"],
    description: "Conductive pure copper energy rods to divert geopathic radiation lines and restore high vibrational frequency in plots.",
    specifications: defaultSpecs,
    benefits: ["Neutralizes geopathic stress lines beneath buildings", "Boosts vitality of occupants", "Ideal for residential plots and commercial complexes"],
    isBestSelling: true,
    rating: 4.9,
    reviewCount: 175
  },
  {
    slug: "relationship-booster",
    name: "Sacred Relationship & Love Harmony Booster",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Relationship Booster.png"],
    description: "Consecrated talisman with Rose Quartz and sacred Yantra geometry to resolve interpersonal misunderstandings and deepen companionship.",
    specifications: defaultSpecs,
    benefits: ["Heals bitter communication gaps in marriages", "Attracts loyal affection and warmth", "Restores peaceful bedroom vibrations"],
    isBestSelling: true,
    rating: 4.9,
    reviewCount: 260
  },
  {
    slug: "laxmi-pyramid",
    name: "Maha Laxmi Golden Pyramid",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/laxmi pyramid.png"],
    description: "Energized with Kanakadhara and Sri Sukta mantras. Designed to sit in the cash locker or puja alter to anchor permanent wealth.",
    specifications: defaultSpecs,
    benefits: ["Magnetizes stable financial inflows", "Eliminates debt cycles and money blockages", "Gleaming golden sacred craftsmanship"],
    isNew: true,
    rating: 5.0,
    reviewCount: 185
  },
  {
    slug: "sea-salt-powder",
    name: "Sacred Himalayan Vastu Sea Salt Powder",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Sea Salt Powder.png"],
    description: "Consecrated mineral-rich salt for home floor mopping and corner placement. Dissolves stagnant negative energy and psychic residues.",
    specifications: defaultSpecs,
    benefits: ["Clears heavy or eerie feelings in living spaces", "Neutralizes negativity after sick persons or arguments", "Natural organic space cleanser"],
    isNew: true,
    rating: 4.8,
    reviewCount: 140
  },
  {
    slug: "9-planets-oil",
    name: "Navagraha Shanti 9 Planets Sacred Ritual Oil",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/9 Planets Oil.png"],
    description: "Infused with 9 sacred herbs for all 9 planetary deities. Used for lighting diya lamps during puja to appease malefic grahas.",
    specifications: defaultSpecs,
    benefits: ["Pacifies all 9 planetary doshas simultaneously", "Purifies room atmosphere with divine herbal fragrance", "Invokes ancestral and planetary blessings"],
    isNew: true,
    rating: 4.9,
    reviewCount: 195
  },
  {
    slug: "vastu-purush-brahmasthan-plate",
    name: "Vastu Purush Brahmasthan Sacred Center Plate",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Vastu purush brahmasthan plate.png"],
    description: "Installed at the center of the building (Brahmasthan) to awaken the sleeping Vastu Purusha and radiate cosmic balance.",
    specifications: defaultSpecs,
    benefits: ["Re-energizes blocked or heavily loaded central areas", "Blesses all inhabitants with peace, health, and prosperity", "Consecrated with ancient Vedic rituals"],
    isNew: true,
    rating: 5.0,
    reviewCount: 160
  },
  {
    slug: "green-zebu-pyramid",
    name: "Green Aventurine Zibu Prosperity Pyramid",
    category: "vastu",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Green Zebu Pyramid.png"],
    description: "Carved with angelic Zibu symbols of abundance and fortune. Bridges angelic guidance with earthy crystal manifestation power.",
    specifications: defaultSpecs,
    benefits: ["Attracts unexpected career windfalls", "Radiates cheerful green heart-chakra frequency", "Magnifies manifestation speed"],
    isNew: true,
    rating: 4.9,
    reviewCount: 125
  },
  {
    slug: "meru-shree-yantra",
    name: "3D Meru Prushtha Shree Yantra (Brass)",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/meru shree yantra.png"],
    description: "Supreme three-dimensional Meru sacred geometry representing Mount Meru and Goddess Lakshmi's cosmic abode.",
    specifications: defaultSpecs,
    benefits: ["Unlocks highest material and spiritual prosperity", "Corrects residential North-East doshas", "Brings divine radiance to home altars"],
    isNew: true,
    rating: 5.0,
    reviewCount: 310
  },
  {
    slug: "pendulum",
    name: "Crystal Dowsing Pendulum with Sacred Chain",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Pendulum.png"],
    description: "Precision-balanced genuine crystal pendulum for intuitive dowsing, chakra balancing, and energetic diagnosis.",
    specifications: defaultSpecs,
    benefits: ["Sharp diagnostic tool for tarot and astrology", "Helps access subconscious intuition", "Fine-tunes personal aura balance"],
    isNew: true,
    rating: 4.8,
    reviewCount: 110
  },
  {
    slug: "money-magnet-pyrite-pyramid",
    name: "Golden Pyrite Money Magnet Wealth Pyramid",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/best selling/Money Magnet Pyrite Pyramid.png"],
    description: "Handcrafted from pure natural metallic pyrite crystal in pyramid shape to amplify wealth-attraction vibrations on work desks.",
    specifications: defaultSpecs,
    benefits: ["Supercharges desk focus and profit targets", "Repels financial leaks and impulsive spendings", "Commanding metallic golden aesthetics"],
    isNew: true,
    rating: 5.0,
    reviewCount: 270
  },

  // ==========================================
  // CRYSTALS (All ₹999)
  // ==========================================
  {
    slug: "clear-quartz",
    name: "Pristine Clear Quartz Master Healer",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/1.jpg"],
    description: "The 'Master Healer' mineral. Amplifies personal intention, clarifies thought patterns, and cleanses other crystals nearby.",
    specifications: defaultSpecs,
    benefits: ["Supreme mental clarity and mental reboot", "Amplifies meditation and psychic manifestations", "Universal balancer of all 7 chakras"],
    rating: 4.9,
    reviewCount: 170
  },
  {
    slug: "rose-quartz",
    name: "Natural Rose Quartz Love Cluster",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/2.jpg"],
    description: "Gentle pink mineral brimming with heart chakra compassion. Clears grief, jealousy, and invites unconditional affection.",
    specifications: defaultSpecs,
    benefits: ["Deep heart healing and emotional relief", "Draws warm friendship and romantic connections", "Fosters tranquil self-acceptance"],
    rating: 4.8,
    reviewCount: 190
  },
  {
    slug: "black-obsidian",
    name: "Black Obsidian Volcanic Shield Stone",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/3.jpg"],
    description: "Glassy volcanic gemstone acting as an energetic truth mirror. Pierces illusions, cuts toxic cords, and grounds aura.",
    specifications: defaultSpecs,
    benefits: ["Cuts emotional attachments to toxic people", "Shields against negative spiritual intrusions", "Rapid deep earthing during stress"],
    rating: 4.9,
    reviewCount: 145
  },
  {
    slug: "selenite",
    name: "White Selenite Moon Goddess Wand / Tower",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/4.jpg"],
    description: "High vibrational gypsum crystal. Instantly cleanses dense energies from rooms, auras, and other jewelry without needing water.",
    specifications: defaultSpecs,
    benefits: ["Self-cleansing crystal charging plate / tower", "Clears mind clutter and headaches", "Elevates room to heavenly peace"],
    rating: 5.0,
    reviewCount: 220
  },
  {
    slug: "citrine-crystal",
    name: "Natural Golden Citrine Abundance Cluster",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/5.jpg"],
    description: "Warm sunny quartz crystal that never holds negativity. Stimulates the solar plexus chakra for manifestation and wealth.",
    specifications: defaultSpecs,
    benefits: ["Stimulates creativity and commercial luck", "Dispels winter blues and apathy", "Anchors self-worth and confidence"],
    rating: 5.0,
    reviewCount: 250
  },
  {
    slug: "green-aventurine",
    name: "Green Aventurine 'Stone of Opportunity'",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/6.jpg"],
    description: "The premier stone of luck and opportunity. Enhances optimism, decisive enterprise, and smooth recovery from setbacks.",
    specifications: defaultSpecs,
    benefits: ["Favors lottery, sports, and business ventures", "Fosters heart peace and empathetic calm", "Promotes renewed zest for life"],
    rating: 4.8,
    reviewCount: 135
  },
  {
    slug: "labradorite",
    name: "Iridescent Labradorite Magic Stone",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/7.jpg"],
    description: "Flashes with hypnotic peacock blues and golds. Awakens hidden psychic gifts, synchronicity, and expands consciousness.",
    specifications: defaultSpecs,
    benefits: ["Shields aura while unlocking clairvoyance", "Stimulates imaginative brainstorming", "Encourages destiny synchronicity"],
    rating: 4.9,
    reviewCount: 180
  },
  {
    slug: "carnelian",
    name: "Fiery Orange Carnelian Motivation Stone",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/8.jpg"],
    description: "Vibrant sacral chakra stone. Fires up passion, creative fertility, breaks procrastination, and stimulates physical vitality.",
    specifications: defaultSpecs,
    benefits: ["Breaks through lazy procrastination", "Spurs creative courage for artists and performers", "Boosts reproductive vitality"],
    rating: 4.8,
    reviewCount: 115
  },
  {
    slug: "fluorite",
    name: "Rainbow Fluorite 'Genius Stone'",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/9.jpg"],
    description: "Cleanses mental clutter and reorganizes thoughts. Unmatched crystal companion for intense study, exams, and coding sessions.",
    specifications: defaultSpecs,
    benefits: ["Absorbs computer screen fatigue and chaos", "Improves data retention during study", "Balances left and right brain hemispheres"],
    rating: 4.9,
    reviewCount: 140
  },
  {
    slug: "smoky-quartz",
    name: "Smoky Quartz Negative Energy Anchor",
    category: "crystals",
    price: 999,
    oldPrice: 1999,
    images: ["/image/crystals/10.jpg"],
    description: "Transmutes heavy emotional depression into constructive earth energy. Lifts dread and restores practical focus.",
    specifications: defaultSpecs,
    benefits: ["Dissolves chronic panic and anxiety loops", "Deeply connects soul to mother earth", "Neutralizes environmental stress"],
    rating: 4.8,
    reviewCount: 95
  },

  // ==========================================
  // YANTRAS (All ₹999)
  // ==========================================
  {
    slug: "shree-yantra",
    name: "Sacred Copper Shree Yantra (Energized)",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/1.jpg"],
    description: "The mother of all Yantras. Features 9 interlocking triangles radiating the infinite energy of Goddess Tripura Sundari and Mahalakshmi.",
    specifications: defaultSpecs,
    benefits: ["Attracts immense wealth, prestige and cosmic fortune", "Dispels Vastu and planetary disharmony", "Brings supreme spiritual upliftment"],
    rating: 5.0,
    reviewCount: 380
  },
  {
    slug: "kuber-yantra",
    name: "Lord Kuber Dhan Prapti Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/2.jpg"],
    description: "Dedicated to the heavenly treasurer Lord Kuber. Unlocks frozen payments, protects treasure, and multiplies business cashflows.",
    specifications: defaultSpecs,
    benefits: ["Opens new avenues for wealth creation", "Protects earned capital from wasteful dissipation", "Must-have for retail and commercial premises"],
    rating: 4.9,
    reviewCount: 290
  },
  {
    slug: "mahalakshmi-yantra",
    name: "Maha Lakshmi Ashtalakshmi Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/3.jpg"],
    description: "Invokes the 8 divine blessings of Goddess Lakshmi: wealth, grain, courage, knowledge, children, victory, royalty, and fame.",
    specifications: defaultSpecs,
    benefits: ["Ensures poverty and debt never enter home", "Maintains peaceful loving relations", "Brings joyous domestic prosperity"],
    rating: 5.0,
    reviewCount: 245
  },
  {
    slug: "navgraha-yantra",
    name: "Complete Navagraha Planetary Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/4.jpg"],
    description: "Harmonizes all 9 celestial planets: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu into perfect synergy.",
    specifications: defaultSpecs,
    benefits: ["Protects during adverse Dasha and transit periods", "Reduces recurring ill-fate and family conflicts", "All-in-one planetary remedy for every horoscope"],
    rating: 4.9,
    reviewCount: 215
  },
  {
    slug: "baglamukhi-yantra",
    name: "Maa Baglamukhi Shatru Vinashak Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/5.jpg"],
    description: "Golden Yantra of Maa Baglamukhi (Pitambari). Stills the tongue of opponents, guarantees victory in litigation, and stops sabotage.",
    specifications: defaultSpecs,
    benefits: ["Neutralizes lawsuits, false allegations & rivals", "Silences venomous gossip and enemies", "Supreme divine protection for public figures"],
    rating: 5.0,
    reviewCount: 195
  },
  {
    slug: "saraswati-yantra",
    name: "Maa Saraswati Vidya & Wisdom Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/6.jpg"],
    description: "Consecrated for students, researchers, artists, and musicians. Sharpens memory retention, eloquence, and academic triumphs.",
    specifications: defaultSpecs,
    benefits: ["Enhances study concentration and exam results", "Removes speech impediments and stage fright", "Invokes artistic and musical genius"],
    rating: 4.9,
    reviewCount: 160
  },
  {
    slug: "vastu-yantra",
    name: "Sampoorna Vastu Dosh Nivaran Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/7.jpg"],
    description: "Corrects directional, elemental, and construction errors in residential and commercial spaces without breaking walls.",
    specifications: defaultSpecs,
    benefits: ["Clears heavy or oppressive atmosphere in buildings", "Establishes harmonic magnetic energy flows", "Brings peace and robust health to residents"],
    rating: 4.9,
    reviewCount: 220
  },
  {
    slug: "mahamrityunjaya-yantra",
    name: "Maha Mrityunjaya Ayush Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/8.jpg"],
    description: "The conqueror of death. Radiates the healing grace of Lord Shiva to shield from fatal accidents, chronic diseases, and phobias.",
    specifications: defaultSpecs,
    benefits: ["Guards from sudden accidents and perils", "Aids swift recovery from chronic ailments", "Dispels constant dread and existential anxiety"],
    rating: 5.0,
    reviewCount: 310
  },
  {
    slug: "durga-yantra",
    name: "Maa Durga Bisa Yantra (Supreme Shield)",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/9.jpg"],
    description: "The invincible armour of Goddess Durga. Protects homes, vehicles, and businesses against misfortune and unseen forces.",
    specifications: defaultSpecs,
    benefits: ["Invincible barrier against negative energies", "Bestows victory over challenging predicaments", "Brings motherly divine protection"],
    rating: 4.9,
    reviewCount: 185
  },
  {
    slug: "hanuman-yantra",
    name: "Sankat Mochan Hanuman Yantra",
    category: "yantras",
    price: 999,
    oldPrice: 1999,
    images: ["/image/yantras/10.jpg"],
    description: "Infused with the fierce loyalty and limitless strength of Lord Hanuman. Smashes fear, protects from evil spirits, and boosts stamina.",
    specifications: defaultSpecs,
    benefits: ["Overcomes nightmares, phobias and evil spirits", "Infuses unwavering physical and moral courage", "Pacifies severe Saturn / Shani Sade Sati"],
    rating: 5.0,
    reviewCount: 350
  },

  // ==========================================
  // FENG SHUI (All ₹999)
  // ==========================================
  {
    slug: "laughing-buddha",
    name: "Golden Laughing Buddha of Joy & Wealth",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/1.jpg"],
    description: "Carrying a gold ingot and sack of blessings. Welcomes pure joy, financial abundance, and stress-free laughter into the living space.",
    specifications: defaultSpecs,
    benefits: ["Dispels domestic arguments and gloomy moods", "Attracts financial luck when placed facing main door", "Symbol of benevolent contentment"],
    rating: 4.9,
    reviewCount: 220
  },
  {
    slug: "money-frog",
    name: "Three-Legged Wealth Frog (Chan Chu)",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/2.jpg"],
    description: "Legendary wealth toad sitting on gold coins with a Chinese coin in mouth. Captures money luck and directs it inside the house.",
    specifications: defaultSpecs,
    benefits: ["Prevents money from flowing out wastefully", "Attracts windfalls in business and career", "Traditional wealth magnet for cash registers"],
    rating: 4.8,
    reviewCount: 175
  },
  {
    slug: "feng-shui-turtle",
    name: "Celestial Black Dragon Turtle",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/3.jpg"],
    description: "Combines dragon courage and turtle longevity. Provides steadfast backing from bosses, mentors, and stable wealth.",
    specifications: defaultSpecs,
    benefits: ["Secures career promotions and mentor support", "Prevents betrayal and office politics", "Promotes good health and longevity"],
    rating: 4.8,
    reviewCount: 130
  },
  {
    slug: "wind-chime",
    name: "Harmonic 6-Rod Metal Vastu Wind Chime",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/4.jpg"],
    description: "Tuned metal rods that produce soothing acoustic vibrations. Disperses stagnant chi and summons sweet luck.",
    specifications: defaultSpecs,
    benefits: ["Circulates stagnant air and dormant energies", "Calms hyperactive nervous systems", "Melodious, decorative entryway accent"],
    rating: 4.7,
    reviewCount: 160
  },
  {
    slug: "dragon-statue",
    name: "Majestic Imperial Celestial Dragon",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/5.jpg"],
    description: "The supreme Feng Shui symbol of Yang energy, majesty, authority, and relentless success in ambitious ventures.",
    specifications: defaultSpecs,
    benefits: ["Ignites executive authority and presence", "Protects the family from deceitful adversaries", "Attracts massive commercial success"],
    rating: 4.9,
    reviewCount: 140
  },
  {
    slug: "crystal-ball",
    name: "Faceted Optical Crystal Energy Ball",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/6.jpg"],
    description: "Suspended near windows to catch sunlight and cast rainbow prisms. Dissolves negative sha chi and fills rooms with vibrant harmony.",
    specifications: defaultSpecs,
    benefits: ["Transforms harsh incoming energy into rainbows", "Encourages smooth communication in families", "Purifies study rooms and bedrooms"],
    rating: 4.8,
    reviewCount: 110
  },
  {
    slug: "lucky-coins",
    name: "Chinese Feng Shui Lucky I-Ching Coins (Set)",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/7.jpg"],
    description: "Three imperial bronze coins tied with auspicious red knot. Carried in wallets or hung on cash counters for continuous cash inflow.",
    specifications: defaultSpecs,
    benefits: ["Protects wallet cash from drying out", "Invokes heaven and earth energy symbology", "Convenient pocket talisman"],
    rating: 4.9,
    reviewCount: 230
  },
  {
    slug: "mandarin-ducks",
    name: "Mandarin Ducks Romance & Marriage Pair",
    category: "fengshui",
    price: 999,
    oldPrice: 1999,
    images: ["/image/fengshui/9.jpg"],
    description: "Traditional symbol of lifelong marital fidelity and tender romance. Must be placed in the Southwest corner of the bedroom.",
    specifications: defaultSpecs,
    benefits: ["Deepens loving bond between married couples", "Helps singles attract compatible soulmates", "Protects marriage from external interference"],
    rating: 5.0,
    reviewCount: 190
  },

  // ==========================================
  // SACRED MALAS (All ₹999)
  // ==========================================
  {
    slug: "rudraksha-mala",
    name: "Sacred 108 Rudraksha Meditation Mala",
    category: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/mala/rudraksha.jpg"],
    description: "Consecrated 108+1 genuine five-faced Rudraksha beads for daily mantra japa, inner peace, and divine protection.",
    specifications: defaultSpecs,
    benefits: ["Calms heartbeat and hypertension", "Enhances spiritual chanting resonance", "Shields against psychic pollution"],
    rating: 5.0,
    reviewCount: 310
  },
  {
    slug: "karungali-mala",
    name: "Original Karungali (Ebony Wood) Sacred Mala",
    category: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/mala/karungali.jpg"],
    description: "Dense sacred Black Ebony wood blessed by Lord Murugan. Absorbs malefic Mars/Saturn radiation and shields from black magic.",
    specifications: defaultSpecs,
    benefits: ["Immense protective barrier against evil forces", "Removes severe Manglik and Shani doshas", "Brings resolute courage and victory"],
    rating: 5.0,
    reviewCount: 420
  },
  {
    slug: "tulasi-mala",
    name: "Sacred Original Tulasi (Holy Basil) Japa Mala",
    category: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/mala/tulasi.jpg"],
    description: "Hand-carved from sacred Vrindavan Tulasi wood. Most beloved by Lord Vishnu and Krishna for pure devotion, peace and mind detox.",
    specifications: defaultSpecs,
    benefits: ["Deepens devotion and peace during Vishnu chanting", "Naturally purifies throat and respiratory prana", "Soothes agitated thoughts"],
    rating: 5.0,
    reviewCount: 290
  },
  {
    slug: "spatik-mala",
    name: "Pure Natural Sphatik (Quartz Crystal) Mala",
    category: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/mala/spatik.jpg"],
    description: "Ice-cool natural quartz crystal beads. Calms hot temperaments, enhances focus, and invokes Goddess Saraswati & Lakshmi.",
    specifications: defaultSpecs,
    benefits: ["Instantly cools high blood pressure and anger", "Sharpens intellectual concentration", "Sacred for Gayatri and Lakshmi mantra japa"],
    rating: 4.9,
    reviewCount: 215
  },
  {
    slug: "sandalwood-mala",
    name: "Fragrant White Sandalwood (Chandan) Mala",
    category: "mala",
    price: 999,
    oldPrice: 1999,
    images: ["/image/mala/sandalwood.jpg"],
    description: "Crafted from fragrant Mysore sandalwood. Calms the nervous system, aids deep restful sleep, and cools pitta dosha.",
    specifications: defaultSpecs,
    benefits: ["Gentle soothing sandalwood fragrance", "Reduces stress, palpitations and insomnia", "Brings noble composure to mind"],
    rating: 4.8,
    reviewCount: 160
  },

  // ==========================================
  // SACRED HERBS & PUJA SAMAGRI (All ₹999)
  // ==========================================
  {
    slug: "black-sandal",
    name: "Pure Sacred Black Sandalwood (Kala Chandan)",
    category: "herbs",
    price: 999,
    oldPrice: 1999,
    images: ["/image/herbs/1.jpg"],
    description: "Rare consecrated black sandalwood for tantric and vedic pujas, tilak, and drawing planetary protection shields.",
    specifications: defaultSpecs,
    benefits: ["Used for divine tilak during special Havans", "Brings magnetic attractiveness and dignity", "Pacifies malefic planetary forces"],
    rating: 4.9,
    reviewCount: 110
  },
  {
    slug: "ganga-jal",
    name: "Sacred Gangotri Pure Ganga Jal (Sealed)",
    category: "herbs",
    price: 999,
    oldPrice: 1999,
    images: ["/image/herbs/2.jpg"],
    description: "Untouched holy water sourced directly from high Himalayan Gangotri. Essential for Abhishekam, house warming, and ritual purification.",
    specifications: defaultSpecs,
    benefits: ["Purifies ritual items and home aura", "Indispensable for all daily Shiva Abhishekam", "Never deteriorates over years"],
    rating: 5.0,
    reviewCount: 180
  },
  {
    slug: "red-sandal",
    name: "Original Rakt Chandan (Red Sandalwood Stick)",
    category: "herbs",
    price: 999,
    oldPrice: 1999,
    images: ["/image/herbs/3.jpg"],
    description: "Pure natural red sandalwood stick for Devi worship, Sun propitiation, and soothing facial application.",
    specifications: defaultSpecs,
    benefits: ["Highly auspicious for Gayatri and Durga puja", "Pacifies Mars and Sun doshas", "Natural cooling astringent properties"],
    rating: 4.9,
    reviewCount: 140
  },
  {
    slug: "kashmiri-kesar",
    name: "Pure Organic Kashmiri Mogra Kesar (Saffron)",
    category: "herbs",
    price: 999,
    oldPrice: 1999,
    images: ["/image/herbs/6.jpg"],
    description: "Grade-A authentic saffron strands from the valley of Pampore. Consecrated for Jupiter (Guru) rituals and tilak.",
    specifications: defaultSpecs,
    benefits: ["Unlocks royal charisma when applied as forehead tilak", "Imparts deep golden color and rich aroma", "Sacred offering to Lord Vishnu"],
    rating: 5.0,
    reviewCount: 220
  }
]

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  )
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isBestSelling || p.isNew)
}

export function getRelatedProducts(slug: string, limit: number = 4): Product[] {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  
  const sameCategory = products.filter(
    (p) => p.category === current.category && p.slug !== current.slug
  )
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)
  
  const others = products.filter(
    (p) => p.category !== current.category && p.slug !== current.slug
  )
  return [...sameCategory, ...others].slice(0, limit)
}
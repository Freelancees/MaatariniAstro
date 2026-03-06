'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const heroTexts = [
  "Astrology for Life's Journey",
  'Guiding You with Cosmic Wisdom',
  'Clarity, Insight, Direction',
  'Vision Beyond the Stars',
  'Celestial Guidance Awaits You',
]

export default function Hero() {

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (

<section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-blue-400">

{/* MOON GLOW */}

<div className="absolute inset-0 flex items-center justify-center z-0">
<div className="w-[600px] h-[600px] bg-white rounded-full blur-[180px] opacity-40"/>
</div>


{/* GALAXY SWIRL */}

<motion.div
animate={{ rotate: 360 }}
transition={{
duration: 200,
repeat: Infinity,
ease: "linear"
}}
className="absolute inset-0 flex items-center justify-center opacity-20 z-0"
>

<div className="w-[900px] h-[900px] rounded-full border border-white/30 relative">

<div className="absolute inset-20 border border-white/20 rounded-full"/>
<div className="absolute inset-40 border border-white/10 rounded-full"/>
<div className="absolute inset-60 border border-white/10 rounded-full"/>

</div>

</motion.div>


{/* ROTATING ASTROLOGY WHEEL */}

<motion.div
animate={{ rotate: -360 }}
transition={{
duration: 120,
repeat: Infinity,
ease: "linear"
}}
className="absolute inset-0 flex items-center justify-center opacity-30 z-0"
>

<div className="w-[650px] h-[650px] border-[2px] border-white rounded-full relative">

{[...Array(12)].map((_,i)=>(
<div
key={i}
className="absolute w-[2px] h-[50%] bg-white/60 left-1/2 top-1/2 origin-bottom"
style={{ transform:`rotate(${i*30}deg)` }}
/>
))}

</div>

</motion.div>



{/* COSMIC PARTICLES */}

<div className="absolute inset-0 z-0">
{[...Array(60)].map((_, i) => (
<div
key={i}
className="absolute bg-white rounded-full opacity-80"
style={{
width: `${Math.random() * 3}px`,
height: `${Math.random() * 3}px`,
left: `${Math.random() * 100}%`,
top: `${Math.random() * 100}%`,
}}
/>
))}
</div>



{/* SHOOTING STARS */}

<div className="absolute inset-0 z-0 pointer-events-none">

{[...Array(6)].map((_,i)=>(
<motion.div
key={i}
initial={{
x: -200,
y: Math.random()*300,
opacity:0
}}
animate={{
x: "120vw",
y: "+=150",
opacity:[0,1,0]
}}
transition={{
duration:2,
delay:i*3,
repeat:Infinity,
ease:"easeOut"
}}
className="absolute w-40 h-[2px] bg-gradient-to-r from-white to-transparent"
/>
))}

</div>



{/* CONTENT */}

<div className="relative z-10 h-full flex items-center justify-center">

<div className="container mx-auto px-4 text-center">

<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>

{/* ROTATING HEADLINE */}

<div className="mb-8 relative h-32 flex items-center justify-center">

{heroTexts.map((text, index) => (

<motion.h1
key={index}
initial={{ opacity: 0, y: 20 }}
animate={{
opacity: currentTextIndex === index ? 1 : 0,
y: currentTextIndex === index ? 0 : 20,
}}
transition={{ duration: 0.8 }}
className="absolute text-4xl md:text-6xl lg:text-7xl font-bold text-black"
>
{text}
</motion.h1>

))}

</div>


{/* SUBTITLE */}

<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.5, duration: 1 }}
className="text-xl md:text-2xl text-black/80 mb-12 italic"
>
Discover Your Destiny Through Ancient Wisdom
</motion.p>



{/* BUTTONS */}

<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.8, duration: 1 }}
className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>

<button className="px-10 py-4 bg-yellow-400 text-black rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition-all duration-300">
Book Consultation
</button>

<button className="px-10 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
Learn More
</button>

</motion.div>

</motion.div>

</div>

</div>



{/* SCROLL */}

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 1.5, duration: 1 }}
className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
>

<div className="flex flex-col items-center">

<span className="text-black/70 text-sm mb-2">Scroll Down</span>

<motion.div
animate={{ y: [0, 10, 0] }}
transition={{ repeat: Infinity, duration: 1.5 }}
>

<svg
className="w-6 h-6 text-yellow-400"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M19 14l-7 7m0 0l-7-7m7 7V3"
/>
</svg>

</motion.div>

</div>

</motion.div>

</section>
)
}
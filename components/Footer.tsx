// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-gradient-to-b from-[#1a0f0a] to-[#0a0505] border-t border-primary/20">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-display font-bold gradient-text mb-4">
//               Utkala Gems
//             </h3>
//             <p className="text-white/70 mb-4 font-body">
//               Guiding you through life's journey with ancient wisdom and cosmic insights.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors"
//               >
//                 <span className="text-xl">📘</span>
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors"
//               >
//                 <span className="text-xl">📷</span>
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors"
//               >
//                 <span className="text-xl">🐦</span>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-semibold text-secondary mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-white/70 hover:text-secondary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about-us"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/services"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Our Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-xl font-semibold text-secondary mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/services/vedic-astrology"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Vedic Astrology
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/services/tarot"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Personal Horoscope Report
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/services/palmistry"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Palmistry
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/services/vastu"
//                   className="text-white/70 hover:text-secondary transition-colors"
//                 >
//                   Vastu Shastra
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-semibold text-secondary mb-4">Contact Info</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2 text-white/70">
//                 <span className="text-xl">📍</span>
//                 <span>Bhubaneswar, Odisha, India</span>
//               </li>
//               <li className="flex items-start gap-2 text-white/70">
//                 <span className="text-xl">📞</span>
//                 <span>+91 9938510555</span>
//               </li>
//               <li className="flex items-start gap-2 text-white/70">
//                 <span className="text-xl">✉️</span>
//                 <span>info@maatariniastro.org</span>
//               </li>
//               <li className="flex items-start gap-2 text-white/70">
//                 <span className="text-xl">🕐</span>
//                 <span>Mon - Sat: 9AM - 6PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>

// <div className="border-t border-primary/20 pt-8">
//   <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

//     {/* Left Column */}
//     <p className="text-white/60 text-sm">
//       © {currentYear} Utkala Gems. All rights reserved.
//     </p>

//     {/* Center Column */}
//     <p className="text-white/60 text-sm">
//       Developed by{" "}
//       <a
//         href="https://spidervisionsystems.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-secondary font-medium hover:underline transition-colors"
//       >
//         Spidervision Systems
//       </a>
//     </p>

//     {/* Right Column */}
//     <div className="flex gap-6 text-sm">
//       <Link href="/privacy" className="text-white/60 hover:text-secondary transition-colors">
//         Privacy Policy
//       </Link>
//       <Link href="/terms" className="text-white/60 hover:text-secondary transition-colors">
//         Terms of Service
//       </Link>
//       <Link href="/refund" className="text-white/60 hover:text-secondary transition-colors">
//         Refund Policy
//       </Link>
//     </div>

//   </div>
// </div>
//       </div>
//     </footer>
//   )
// }




'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#1a0f0a] to-[#0a0505] border-t border-primary/20">

      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Utkala Gems
            </h3>

            <p className="text-white/70 mb-4">
              Guiding you through life's journey with ancient wisdom and cosmic insights.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">

              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTwitter />} />

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-semibold text-secondary mb-4">Quick Links</h4>

            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about-us" label="About Us" />
              <FooterLink href="/services" label="Our Services" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xl font-semibold text-secondary mb-4">Our Services</h4>

            <ul className="space-y-2">
              <FooterLink href="/services/vedic-astrology" label="Vedic Astrology" />
              <FooterLink href="/services/tarot" label="Personal Horoscope Report" />
              <FooterLink href="/services/palmistry" label="Palmistry" />
              <FooterLink href="/services/vastu" label="Vastu Shastra" />
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold text-secondary mb-4">Contact Info</h4>

            <ul className="space-y-3 text-white/70">

              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-1 text-secondary" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>

              <li className="flex items-start gap-2">
                <FaPhone className="mt-1 text-secondary" />
                <span>+91 9938510555</span>
              </li>

              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-secondary" />
                <span>info@maatariniastro.org</span>
              </li>

              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-secondary" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-primary/20 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

            <p className="text-white/60 text-sm">
              © {currentYear} Utkala Gems. All rights reserved.
            </p>

            <p className="text-white/60 text-sm">
              Developed by{" "}
              <a
                href="https://spidervisionsystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-medium hover:underline"
              >
                SpiderVision Systems
              </a>
            </p>

            <div className="flex gap-6 text-sm">
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/refund" label="Refund Policy" />
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}

/* 🔹 SOCIAL ICON */
function SocialIcon({ icon }: any) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/30 hover:bg-secondary/50 transition"
    >
      <span className="text-lg text-white">{icon}</span>
    </a>
  )
}

/* 🔹 LINK */
function FooterLink({ href, label }: any) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/70 hover:text-secondary transition-colors"
      >
        {label}
      </Link>
    </li>
  )
}
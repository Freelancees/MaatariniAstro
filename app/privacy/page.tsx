'use client'

import { motion } from 'framer-motion'
import { Shield, Database, Eye, Lock } from 'lucide-react'

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content:
      'We collect personal information such as your name, contact details, and birth details (date, time, place) required for astrology consultations. This helps us provide accurate and personalized guidance.',
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content:
      'Your information is used solely to deliver astrology services, recommend suitable gemstones, respond to your queries, and improve our offerings. We do not misuse your data.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    content:
      'We implement strong security measures to protect your data from unauthorized access, loss, or misuse. Your information is stored securely and handled with strict confidentiality.',
  },
  {
    icon: Shield,
    title: 'No Data Selling',
    content:
      'We do not sell, trade, or share your personal information with third parties for marketing or commercial purposes. Your trust is our priority.',
  },
  {
    icon: Shield,
    title: 'Astrology Data Sensitivity',
    content:
      'We understand that astrology involves sensitive personal data such as birth details. This information is used only for consultation purposes and is never disclosed publicly.',
  },
  {
    icon: Eye,
    title: 'Third-Party Services',
    content:
      'We may use trusted third-party services (such as payment gateways) to process transactions. These providers have their own privacy policies and we ensure they meet security standards.',
  },
  {
    icon: Database,
    title: 'Cookies & Tracking',
    content:
      'Our website may use cookies to enhance user experience, analyze traffic, and improve performance. You can choose to disable cookies in your browser settings.',
  },
  {
    icon: Lock,
    title: 'User Rights',
    content:
      'You have the right to request access, correction, or deletion of your personal data. You may contact us anytime for such requests.',
  },
  {
    icon: Shield,
    title: 'Policy Updates',
    content:
      'We may update this privacy policy from time to time. Any changes will be reflected on this page, and continued use of our services means acceptance of the updated policy.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white pt-36 sm:pt-40 lg:pt-44 pb-24 px-6">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-blue-300/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-sky-300/20 blur-[100px] rounded-full bottom-[-80px] right-[-80px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trust matters to us. We ensure your personal data is handled with care,
            security, and transparency.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
                border border-white/50 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                bg-gradient-to-r from-blue-400/20 to-sky-300/20 blur-xl" />

                {/* ICON */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-blue-100 text-blue-600 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* TRUST SECTION */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Your Trust Matters
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            At Maa Tarini Astro Vision, we value your privacy and trust deeply. 
            Every piece of information you share with us is treated with respect, 
            confidentiality, and responsibility. Our goal is to create a safe and 
            secure environment for your spiritual and personal growth.
          </p>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-16 text-center text-xs text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>

      </div>
    </main>
  )
}
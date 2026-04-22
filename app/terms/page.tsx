'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing and using Maa Tarini Astro Vision, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.',
  },
  {
    title: 'Services Overview',
    content:
      'We provide astrology consultations, gemstone recommendations, and training programs based on traditional knowledge and spiritual practices.',
  },
  {
    title: 'No Guarantee of Results',
    content:
      'Astrology and gemstone remedies are based on belief systems. Results may vary for each individual and are not guaranteed.',
  },
  {
    title: 'Payments & Pricing',
    content:
      'All payments made are final and non-refundable unless specifically covered under our refund policy.',
  },
  {
    title: 'User Responsibility',
    content:
      'Users must provide accurate information and use our services responsibly. Misuse or fraudulent activity may lead to restricted access.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'We are not responsible for any decisions made based on our consultations or recommendations.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We reserve the right to modify these terms at any time. Continued use of the website indicates acceptance of the updated terms.',
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>

          <p className="text-gray-600 max-w-2xl">
            These terms govern your use of our platform and services. Please read them carefully before proceeding.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">

          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {/* NUMBER */}
              <div className="absolute -left-[38px] top-1 w-8 h-8 flex items-center justify-center 
              bg-blue-600 text-white text-sm font-bold rounded-full shadow-md">
                {i + 1}
              </div>

              {/* CONTENT */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* FOOT */}
        <div className="mt-20 border-t pt-6 text-sm text-gray-500">
          <p>
            By continuing to use our services, you acknowledge that you have read,
            understood, and agreed to these terms.
          </p>

          <p className="mt-3 text-xs text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

      </div>
    </main>
  )
}
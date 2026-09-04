'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Request Initiated',
    desc: 'Customer submits return/refund request through our contact or support channel.',
  },
  {
    title: 'Verification',
    desc: 'We verify the product condition (for physical items) or service status (for consultations/training).',
  },
  {
    title: 'Approval',
    desc: 'Eligible refund requests are reviewed and approved within 2–3 working days.',
  },
  {
    title: 'Refund Processed',
    desc: 'Once approved, the refund is processed and credited within 5–7 business days.',
  },
]

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white pt-36 sm:pt-40 lg:pt-44 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Refund & Return Policy
        </h1>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          We strive to provide high-quality astrology services and genuine gemstone products. 
          Please read our refund policy carefully before making a purchase.
        </p>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-blue-300 pl-8 space-y-10 mb-20">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[38px] top-1 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />

              {/* Card */}
              <div className="p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-200">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* POLICY DETAILS */}
        <div className="space-y-10">

          {/* ELIGIBILITY */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Eligibility for Refunds</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Refunds are applicable only for damaged, defective, or incorrect products delivered. 
              The request must be raised within 48 hours of delivery with proper proof (images/videos).
            </p>
          </div>

          {/* NON REFUNDABLE */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Non-Refundable Services</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Astrology consultations, training programs, and personalized services are non-refundable 
              once delivered, as they are based on time, expertise, and spiritual guidance.
            </p>
          </div>

          {/* GEMSTONE NOTE */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Gemstone Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gemstones are natural products and may vary slightly in color or texture. 
              Such variations are not considered defects and are not eligible for refunds.
            </p>
          </div>

          {/* ASTRO DISCLAIMER */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Astrology Disclaimer</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Astrology is based on belief systems and interpretations. Results may vary from person to person. 
              Refunds are not provided based on dissatisfaction with outcomes.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
            <p className="text-gray-600 text-sm">
              If you have any questions regarding refunds or returns, feel free to contact our support team. 
              We are here to assist you.
            </p>
          </div>

        </div>

        {/* FOOT */}
        <div className="mt-16 text-center text-xs text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>

      </div>
    </main>
  )
}
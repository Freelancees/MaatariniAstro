'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Sparkles, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Vedic Astrology',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const whatsappMsg = encodeURIComponent(
      `Namaste Maa Tarini Astro Vision Team,\n\nI want to book a consultation:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Service:* ${formData.service}\n*Message:* ${formData.message || 'Please provide consultation details.'}`
    )
    window.open(`https://wa.me/917325925333?text=${whatsappMsg}`, '_blank')
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[180px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Info & Value */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-yellow-400/30 border border-yellow-400/50 px-3 py-1 rounded-full text-xs font-bold text-slate-900 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Direct Vedic Guidance</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                Ready to Discover Your Path?
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Connect directly with our Vedic scholars for kundali readings, gemstone recommendations, or vastu analysis. Available both in-person in Bhubaneswar and online worldwide.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <ContactCard
                icon={<FaPhoneAlt />}
                title="Call Directly"
                value="+91 7325925333"
                href="tel:+917325925333"
              />
              <ContactCard
                icon={<FaWhatsapp className="text-emerald-700" />}
                title="WhatsApp Consultation"
                value="+91 7325925333 (Instant Response)"
                href="https://wa.me/917325925333"
              />
              <ContactCard
                icon={<FaEnvelope />}
                title="Official Email"
                value="maatariniastrovision@gmail.com"
                href="mailto:maatariniastrovision@gmail.com"
              />
              <ContactCard
                icon={<FaMapMarkerAlt />}
                title="Spiritual Center Address"
                value="Bhubaneswar, Odisha, India"
              />
            </div>
          </div>

          {/* RIGHT: Booking Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-yellow-200 shadow-2xl"
            >
              <div className="border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Book Your Consultation Session
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Fill out your details below to schedule an appointment with our head astrologer.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950">Thank You! Redirecting to WhatsApp...</h4>
                  <p className="text-xs text-emerald-800">
                    Our team has received your consultation request and will confirm your auspicious time slot shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Subhashree Sen"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select Required Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition"
                    >
                      <option>Vedic Astrology & Kundali Reading</option>
                      <option>Gemstone Recommendation</option>
                      <option>Vastu Shastra Rectification</option>
                      <option>Soil & Underground Energy Testing</option>
                      <option>Personal Horoscope Report</option>
                      <option>Kundali Milan (Marriage Horoscope)</option>
                      <option>Aura Scanner Diagnosis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your date of birth, birth time, or key concerns..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-yellow-500/25 transition transform active:scale-98"
                  >
                    Send Consultation Request via WhatsApp →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, value, href }: any) {
  const content = (
    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-yellow-200/90 shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-400/40 text-amber-900 text-lg shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-xs text-slate-900">{title}</h4>
        <p className="text-xs text-slate-600 mt-0.5">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.01] transition">
        {content}
      </a>
    )
  }
  return content
}
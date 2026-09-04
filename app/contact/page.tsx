'use client'

import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
} from 'react-icons/fa'

export default function Contact() {
  const phoneNumber = '+917325925333'
  const whatsappNumber = '917325925333'

  const googleMapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=20.3180087,85.8169136'

  return (
    <section className="pt-36 sm:pt-40 lg:pt-44 pb-24 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[180px] opacity-20" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-yellow-600 font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-display mb-5 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
            Ready to Discover Your Path?
          </h2>

          <p className="text-lg text-black/70">
            Book your personalized consultation and unlock cosmic wisdom
            tailored to your journey.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ================= LEFT ================= */}
          <div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <h3 className="text-2xl font-semibold text-black mb-6">
                Connect With Us
              </h3>

              <div className="space-y-5">

              {/* PHONE */}
<ContactItem
  icon={<FaPhoneAlt />}
  title="Call Us"
  value={
    <>
      <span>+91 73259 25333</span>
      <span>+91 99385 10555</span>
    </>
  }
  href={`tel:${phoneNumber}`}
  delay={0}
/>
                {/* EMAIL */}
                <ContactItem
                  icon={<FaEnvelope />}
                  title="Email Us"
                  value="maatariniastrovision@gmail.com"
                  href="mailto:maatariniastrovision@gmail.com"
                  delay={0.1}
                />

                {/* ADDRESS */}
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title="Visit Us"
                  value="HIG 5/6, BDA Colony, Chandrasekharpur, Bhubaneswar, Odisha - 751016"
                  delay={0.2}
                />

                {/* HOURS */}
                <ContactItem
                  icon={<FaClock />}
                  title="Consultation Hours"
                  value="Contact us for available consultation timings"
                  delay={0.3}
                />

              </div>

              {/* ================= WHATSAPP ================= */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Maa%20Tarini%20Astro-Vision,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-7 flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Chat With Us on WhatsApp
              </motion.a>

            </motion.div>

            {/* ================= MAP ================= */}
           {/* ================= CLICKABLE MAP ================= */}
<motion.a
  href="https://www.google.com/maps/dir/20.2882883,85.8677929/20.3180087,85.8169136/@20.3034901,85.8016038,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mt-10 block overflow-hidden rounded-2xl border border-yellow-300 shadow-xl"
>
  <div className="h-[320px] bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex flex-col items-center justify-center text-center cursor-pointer hover:from-yellow-100 hover:to-yellow-200 transition-all">
    
    <FaMapMarkerAlt className="text-5xl text-yellow-500 mb-5" />

    <h3 className="text-2xl font-semibold text-black mb-2">
      Maa Tarini Astro-Vision
    </h3>

    <p className="text-black/60 max-w-md px-6">
      HIG 5/6, BDA Colony, Chandrasekharpur, Bhubaneswar, Odisha - 751016
    </p>

    <div className="mt-6 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition shadow-md">
      <FaMapMarkerAlt className="text-amber-800" />
      <span>Open Directions in Google Maps</span>
      <FaArrowRight className="text-xs" />
    </div>

  </div>
</motion.a>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-yellow-300 shadow-xl"
          >

            <div className="mb-7">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Book Your Consultation
              </h3>

              <p className="text-black/60">
                Fill in your details and our team will get back to you.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >

              <div className="grid md:grid-cols-2 gap-6">

                <Input
                  label="Your Name"
                  placeholder="Enter your name"
                  required
                />

                <Input
                  label="Phone Number"
                  placeholder="Enter your phone"
                  type="tel"
                  required
                />

              </div>

              <Input
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                required
              />

              {/* SERVICE */}
              <div>
                <label className="block text-black mb-2 font-semibold">
                  Select Service
                </label>

                <select
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="">Select a service</option>
                  <option>Vedic Astrology</option>
                  <option>Tarot Reading</option>
                  <option>Palmistry</option>
                  <option>Numerology</option>
                  <option>Vastu Shastra</option>
                  <option>Gemstone Consultation</option>
                  <option>Others</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-black mb-2 font-semibold">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-full transition hover:scale-[1.02] shadow-md"
              >
                Book Your Consultation
                <FaArrowRight />
              </button>

              <p className="text-xs text-center text-black/50">
                Your information will be kept private and used only to contact
                you regarding your consultation.
              </p>

            </form>

          </motion.div>

        </div>

        {/* ================= TRUST SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >

          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Your Questions. Your Journey. Our Guidance.
          </h3>

          <p className="text-black/60 max-w-2xl mx-auto">
            Whether you are looking for clarity in relationships, career,
            finances, marriage or your personal journey, connect with us for
            personalized guidance.
          </p>

        </motion.div>

      </div>
    </section>
  )
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  title,
  value,
  href,
  delay,
}: any) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 bg-white/40 backdrop-blur-lg p-5 rounded-xl border border-yellow-300 hover:-translate-y-1 hover:shadow-lg transition-all"
    >

      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl shadow-md">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-yellow-600">
          {title}
        </h3>

        <p className="text-black/70 break-words">
          {value}
        </p>
      </div>

    </motion.div>
  )

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    )
  }

  return content
}


/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  placeholder,
  type = 'text',
  required = false,
}: any) {
  return (
    <div>

      <label className="block text-black mb-2 font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />

    </div>
  )
}
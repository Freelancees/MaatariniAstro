// 'use client'

// import { motion } from 'framer-motion'

// export default function Contact() {
//   return (
//     <section className="py-24 md:py-20 sm:py-16 relative overflow-hidden">

//       {/* Elegant Cosmic Glow */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[180px] opacity-20" />
//       </div>

//       {/* Twinkling Stars */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-white rounded-full opacity-70 animate-pulse"
//             style={{
//               width: `${Math.random() * 2}px`,
//               height: `${Math.random() * 2}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">

//         <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

//           {/* LEFT SIDE */}
//           <div>

//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="mb-10"
//             >
//               <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
//                 Ready to Discover Your Path?
//               </h2>

//               <p className="text-lg text-black/70">
//                 Book your personalized consultation today and unlock the wisdom of the cosmos
//               </p>
//             </motion.div>

//             {/* Contact Info */}
//             <div className="space-y-6">

//               {/* Call */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 bg-white/40 backdrop-blur-lg p-5 rounded-xl border border-yellow-300 hover:-translate-y-1 transition-all"
//               >
//                 <div className="text-3xl">📞</div>

//                 <div>
//                   <h3 className="font-semibold text-yellow-500">Call Us</h3>
//                   <p className="text-black/70">+91 9938510555</p>
//                 </div>
//               </motion.div>

//               {/* Email */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="flex items-center gap-4 bg-white/40 backdrop-blur-lg p-5 rounded-xl border border-yellow-300 hover:-translate-y-1 transition-all"
//               >
//                 <div className="text-3xl">✉️</div>

//                 <div>
//                   <h3 className="font-semibold text-yellow-500">Email Us</h3>
//                   <p className="text-black/70">info@maatariniastro.org</p>
//                 </div>
//               </motion.div>

//               {/* Address */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="flex items-center gap-4 bg-white/40 backdrop-blur-lg p-5 rounded-xl border border-yellow-300 hover:-translate-y-1 transition-all"
//               >
//                 <div className="text-3xl">📍</div>

//                 <div>
//                   <h3 className="font-semibold text-yellow-500">Visit Us</h3>
//                   <p className="text-black/70">Bhubaneswar, Odisha</p>
//                 </div>
//               </motion.div>

//             </div>

//           </div>

//           {/* RIGHT SIDE FORM */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-yellow-300 shadow-xl"
//           >

//             <form className="space-y-6">

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 <div>
//                   <label className="block text-black mb-2 font-semibold">
//                     Your Name
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-black mb-2 font-semibold">
//                     Phone Number
//                   </label>

//                   <input
//                     type="tel"
//                     placeholder="Enter your phone"
//                     className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                   />
//                 </div>

//               </div>

//               <div>
//                 <label className="block text-black mb-2 font-semibold">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                 />
//               </div>

//               <div>
//                 <label className="block text-black mb-2 font-semibold">
//                   Select Service
//                 </label>

//                 <select className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-300">
//                   <option>Vedic Astrology</option>
//                   <option>Tarot Reading</option>
//                   <option>Palmistry</option>
//                   <option>Numerology</option>
//                   <option>Vastu Shastra</option>
//                   <option>Gemstone Consultation</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-black mb-2 font-semibold">
//                   Your Message
//                 </label>

//                 <textarea
//                   rows={4}
//                   placeholder="Tell us about your concerns..."
//                   className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-full transition hover:scale-105"
//               >
//                 Book Your Consultation Now
//               </button>

//             </form>

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   )
// }



'use client'

import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-24 md:py-20 sm:py-16 relative overflow-hidden">

      {/* 🌟 Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[180px] opacity-20" />
      </div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-pulse"
            style={{
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* LEFT */}
          <div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                Ready to Discover Your Path?
              </h2>

              <p className="text-lg text-black/70">
                Book your personalized consultation and unlock cosmic wisdom
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* CALL */}
              <ContactItem
                icon={<FaPhoneAlt />}
                title="Call Us"
                value="+91 9938510555"
                delay={0}
              />

              {/* EMAIL */}
              <ContactItem
                icon={<FaEnvelope />}
                title="Email Us"
                value="info@maatariniastro.org"
                delay={0.1}
              />

              {/* ADDRESS */}
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Visit Us"
                value="Bhubaneswar, Odisha"
                delay={0.2}
              />

            </div>

          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-yellow-300 shadow-xl"
          >

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <Input label="Your Name" placeholder="Enter your name" />

                <Input label="Phone Number" placeholder="Enter your phone" type="tel" />

              </div>

              <Input label="Email Address" placeholder="Enter your email" type="email" />

              <div>
                <label className="block text-black mb-2 font-semibold">
                  Select Service
                </label>

                <select className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-300">
                  <option>Vedic Astrology</option>
                  <option>Tarot Reading</option>
                  <option>Palmistry</option>
                  <option>Numerology</option>
                  <option>Vastu Shastra</option>
                  <option>Gemstone Consultation</option>
                  <option>Others</option>

                </select>
              </div>

              <div>
                <label className="block text-black mb-2 font-semibold">
                  Your Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-full transition hover:scale-105 shadow-md"
              >
                Book Your Consultation
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

/* 🔹 CONTACT ITEM */

function ContactItem({ icon, title, value, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 bg-white/40 backdrop-blur-lg p-5 rounded-xl border border-yellow-300 hover:-translate-y-1 transition-all"
    >

      {/* ICON BOX */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl shadow-md">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-yellow-600">{title}</h3>
        <p className="text-black/70">{value}</p>
      </div>

    </motion.div>
  )
}

/* 🔹 INPUT COMPONENT */

function Input({ label, placeholder, type = "text" }: any) {
  return (
    <div>
      <label className="block text-black mb-2 font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/60 border border-yellow-200 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
    </div>
  )
}
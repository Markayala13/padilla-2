"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const images = Array.from({ length: 17 }, (_, i) => `/images/accessible-${i + 1}.jpg`);

export default function AccessibleGallery() {
  return (
    <main className="bg-[#f8f5f6] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#E07B00] font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Accessible Bathroom Remodels
          </h1>
          <p className="text-gray-500 max-w-2xl text-base leading-relaxed">
            Browse our gallery of accessible bathroom transformations. ADA-compliant upgrades,
            walk-in tubs, grab bars, and barrier-free showers — designed for safety and style.
          </p>
          <div className="mt-4 h-1 w-16 bg-[#E07B00] rounded-full" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, transition: { type: "spring" as const, stiffness: 400, damping: 25 } }}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
            >
              <img
                src={src}
                alt={`Accessible bathroom remodel ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready for a safer, more accessible bathroom?
          </p>
          <Link
            href="/#consultation"
            className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-bold px-10 py-4 rounded-full text-base transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </motion.div>

      </div>
    </main>
  );
}

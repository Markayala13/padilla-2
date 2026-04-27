"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = Array.from({ length: 17 }, (_, i) => `/images/accessible-${i + 1}.jpg`);

export default function AccessibleGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(i => i !== null ? (i + 1) % images.length : null);
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Dark hero header */}
      <div className="bg-gray-950 pt-[140px] md:pt-[200px] pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#E07B00] font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Accessible Bathroom Remodels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-gray-400 max-w-2xl text-lg leading-relaxed"
          >
            Browse our gallery of accessible bathroom transformations. ADA-compliant upgrades,
            walk-in tubs, grab bars, and barrier-free showers — designed for safety and style.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 h-1 w-20 bg-[#E07B00] rounded-full origin-left"
          />
        </div>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-auto">
          {images.map((src, i) => {
            const isFeatured = i % 5 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: (i % 6) * 0.06 }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer${isFeatured ? " col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${isFeatured ? "aspect-[16/9]" : "aspect-square"}`}>
                  <img
                    src={src}
                    alt={`Accessible bathroom remodel ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full p-3">
                      <ZoomIn size={22} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center pb-20 px-4"
      >
        <p className="text-gray-500 text-lg mb-6">Ready for a safer, more accessible bathroom?</p>
        <Link
          href="/#consultation"
          className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-bold px-10 py-4 rounded-full text-base transition-colors"
        >
          Book Your Free Consultation
        </Link>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={prev}
            >
              <ChevronLeft size={38} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              src={images[lightbox]}
              alt={`Accessible bathroom remodel ${lightbox + 1}`}
              className="max-h-[85vh] max-w-[80vw] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={next}
            >
              <ChevronRight size={38} />
            </button>
            <div className="absolute bottom-5 text-white/40 text-sm tracking-widest">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

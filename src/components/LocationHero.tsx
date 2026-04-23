"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/images/hero-dallas.jpg",
  "/images/hero-slide-1.jpg",
  "/images/hero-slide-2.jpg",
  "/images/hero-slide-3.jpg",
];

export default function LocationHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">

      {/* MOBILE: full-width slider with overlay */}
      <div className="relative h-[480px] overflow-hidden md:hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={slides[current]}
            alt="Bathroom remodel in Dallas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold text-white leading-tight mb-4"
          >
            Beautiful Bathrooms<br />Made Easy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-base max-w-sm mb-8"
          >
            Remodeling your bathroom with Padilla Prestige Remodeling LLC is fast,
            easy, and more affordable than you might think.
          </motion.p>
          <motion.a
            href="tel:12148105012"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 bg-[#E07B00] hover:bg-[#B56000] text-white font-bold px-7 py-3.5 rounded-full text-base transition-colors"
          >
            <Phone size={20} />
            Call Now — (214) 810-5012
          </motion.a>
        </div>
      </div>

      {/* DESKTOP: 50/50 split — image left, text right */}
      <div className="hidden md:flex min-h-[620px]">
        {/* Left: image with slider */}
        <div className="w-1/2 relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={slides[current]}
              alt="Bathroom remodel in Dallas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>

        {/* Right: text panel */}
        <div className="w-1/2 bg-[#f0f0f0] flex items-center justify-center px-12 lg:px-20">
          <div className="max-w-md w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Beautiful<br />Bathrooms<br />Made Easy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Remodeling your bathroom with Padilla Prestige Remodeling LLC is fast,
              easy, and more affordable than you might think.
            </motion.p>
            <motion.a
              href="tel:12148105012"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-[#E07B00] hover:bg-[#B56000] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              <Phone size={22} />
              Call Now — (214) 810-5012
            </motion.a>
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function JennyMarrsSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
              <div className="text-center text-white/30">
                <div className="text-5xl mb-2">✦</div>
                <div className="text-lg font-light">Padilla Prestige</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#E07B00] opacity-40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 max-w-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-[#E07B00]" />
              <span className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest">
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Your Dream Bathroom is Closer Than You Think
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Stop putting it off. Padilla Prestige Remodeling delivers stunning, high-quality bathroom transformations — completed in as little as 3 to 5 days, with zero mess left behind.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our team handles everything from design to installation. No subcontractors, no surprises — just a beautiful new bathroom and a price that fits your budget. Book your free consultation today and get a custom quote at no cost.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

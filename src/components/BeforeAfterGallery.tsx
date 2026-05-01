"use client";

import { motion } from "framer-motion";

const projects = [
  { label: "Custom Tile Shower", style: "Modern" },
  { label: "Master Bath Renovation", style: "Luxury" },
  { label: "Barrier-Free Shower", style: "Contemporary" },
  { label: "Master Shower Remodel", style: "Modern" },
  { label: "Full Bathroom Renovation", style: "Traditional" },
  { label: "Tub-to-Shower Conversion", style: "Transitional" },
  { label: "Accessible Bathroom", style: "ADA Compliant" },
  { label: "Bathtub Replacement", style: "Classic" },
  { label: "Shower Remodel", style: "Modern" },
];

const gradients = [
  "from-stone-300 to-stone-500",
  "from-slate-300 to-slate-500",
  "from-zinc-300 to-zinc-500",
  "from-neutral-300 to-neutral-500",
  "from-gray-300 to-gray-500",
  "from-stone-200 to-stone-400",
];

function ProjectCard({ style, isBefore, index }: { style: string; isBefore: boolean; index: number }) {
  const realImages: Record<number, { before: string; after: string }> = {
    0: { before: "/images/before-7.jpeg", after: "/images/after-7.jpeg" },
    1: { before: "/images/before-8.jpeg", after: "/images/after-8.jpeg" },
    2: { before: "/images/before-9.jpeg", after: "/images/after-9.jpeg" },
    3: { before: "/images/after-abril.jpeg", after: "/images/before-abril.jpeg" },
    4: { before: "/images/after-abril-d.jpeg", after: "/images/before-abril-c.jpeg" },
    5: { before: "/images/before-abril-e.jpeg", after: "/images/after-abril-f.jpeg" },
    6: { before: "/images/before-5.jpeg", after: "/images/after-5.jpeg" },
    7: { before: "/images/before-6.jpeg", after: "/images/after-6.jpeg" },
    8: { before: "/images/before-abril-k.jpeg", after: "/images/after-abril-l.jpeg" },
  };
  const isReal = index in realImages;
  return (
    <div className="relative aspect-[4/3] overflow-hidden group">
      {isReal ? (
        <img
          src={isBefore ? realImages[index].before : realImages[index].after}
          alt={isBefore ? "Before remodel" : "After remodel"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${isBefore ? gradients[index % gradients.length] : "from-stone-100 to-stone-300"} transition-transform duration-500 group-hover:scale-105`}
          style={{ filter: isBefore ? "saturate(0.5) brightness(0.8)" : "saturate(1.1) brightness(1.05)" }}
        />
      )}
      <div
        className={`absolute top-2 left-2 text-xs font-bold uppercase tracking-wide px-2 py-1 ${
          isBefore ? "bg-gray-700 text-white" : "bg-[#E07B00] text-white"
        }`}
      >
        {isBefore ? "Before" : "After"}
      </div>
      {!isBefore && (
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <span className="text-xs text-white/80 bg-black/40 px-2 py-0.5">{style}</span>
        </div>
      )}
    </div>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section id="projects" className="bg-[#f8f5f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Before &amp; After Padilla Prestige Remodeling, TX
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See the dramatic transformations our Dallas team delivers — real
            remodels from real local homeowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring" as const, stiffness: 75, damping: 18, delay: i * 0.1 }}
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">{p.label}</p>
              <div className="grid grid-cols-2 gap-1.5">
                <ProjectCard style={p.style} isBefore={true} index={i} />
                <ProjectCard style={p.style} isBefore={false} index={i} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

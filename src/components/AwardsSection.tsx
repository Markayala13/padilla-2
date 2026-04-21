"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const awards = [
  {
    title: "Best of the Best",
    description: "Recognized as one of the top bathroom remodeling companies in Dallas, TX.",
  },
  {
    title: "Angie's List Super Service Award",
    description: "Consistently earning the Super Service Award from Angie's List customers.",
  },
  {
    title: "5-Star Customer Satisfaction",
    description: "Consistently rated 5 stars by homeowners across the Dallas-Fort Worth area for quality, professionalism, and results.",
  },
];

export default function AwardsSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[#f8f5f6] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Dallas, TX Awards &amp; Recognition
          </h2>
          <p className="text-gray-500 text-sm">
            Our commitment to excellence has been recognized by industry leaders.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="flex flex-col items-center text-center bg-white border border-gray-100 p-7 w-full sm:w-56 hover:shadow-md transition-shadow"
            >
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={visible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                className="w-14 h-14 rounded-full bg-[#E07B00]/10 flex items-center justify-center mb-4"
              >
                <Award size={28} className="text-[#E07B00]" />
              </motion.div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

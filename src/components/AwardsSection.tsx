"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="bg-[#f8f5f6] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: i * 0.13 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: { type: "spring" as const, stiffness: 400, damping: 25 } }}
              className="flex flex-col items-center text-center bg-white border border-gray-100 p-7 w-full sm:w-56 cursor-default rounded-xl"
            >
              <motion.div
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 200, damping: 14, delay: i * 0.13 + 0.15 }}
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

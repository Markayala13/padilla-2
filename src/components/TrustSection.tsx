"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  { name: "Facebook",    logo: "/images/logo-facebook.svg",    width: 110 },
  { name: "Instagram",   logo: "/images/logo-instagram.svg",   width: 32  },
  { name: "HomeAdvisor", logo: "/images/logo-homeadvisor.svg", width: 120 },
  { name: "Angi",        logo: "/images/logo-angi.svg",        width: 70  },
  { name: "Thumbtack",   logo: "/images/logo-thumbtack.svg",   width: 100 },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <div className="flex justify-center gap-1 mb-5">
          {[1,2,3,4,5].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" as const, stiffness: 250, damping: 14, delay: i * 0.08 }}
            >
              <Star size={28} className="text-[#E07B00] fill-[#E07B00]" />
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
        >
          Trusted by Homeowners in Dallas, TX
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-gray-600 text-base leading-relaxed mb-3"
        >
          More than <strong className="text-gray-900">1,000 Padilla Prestige customers</strong> across
          Dallas, TX have reviewed their experiences, and we&apos;re proud of our{" "}
          <strong className="text-gray-900">4.8 out of 5 rating</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-gray-600 text-base leading-relaxed mb-10"
        >
          Fully licensed and insured — including <strong className="text-gray-900">plumbing</strong> and{" "}
          <strong className="text-gray-900">electrical</strong> — so every remodel is done right,
          safe, and up to code.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="w-16 h-0.5 bg-[#E07B00] mx-auto mb-10 origin-left"
        />

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring" as const, stiffness: 150, damping: 16, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.05, transition: { type: "spring" as const, stiffness: 400, damping: 20 } }}
              className="flex flex-col items-center justify-center gap-3 bg-[#f8f5f6] rounded-xl py-5 px-3 cursor-default"
            >
              <Image src={p.logo} alt={p.name} width={p.width} height={36} className="h-7 w-auto object-contain" />
              <span className="text-xs font-medium text-gray-500">{p.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

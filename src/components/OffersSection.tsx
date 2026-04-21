"use client";

import Link from "next/link";
import { Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const offers = [
  {
    amount: "$1,000 Off",
    title: "Your Complete Bathroom Remodel",
    description:
      "Transform your entire bathroom with our full-service remodeling package and save $1,000. Includes design consultation, premium materials, and professional installation.",
    cta: "Claim Offer",
    href: "#consultation",
  },
  {
    amount: "$500 Off",
    title: "Your Tub or Shower Replacement",
    description:
      "Upgrade your tub or shower with beautiful new fixtures and surrounds and save $500. Most projects completed in just 1–2 days.",
    cta: "Claim Offer",
    href: "#consultation",
  },
  {
    amount: "$1,000 Off",
    title: "A Walk-in Tub",
    description:
      "Make your bathroom safer and more accessible with a walk-in tub and save $1,000. ADA-compliant options available with therapeutic features.",
    cta: "Claim Offer",
    href: "#consultation",
  },
];

export default function OffersSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[#f8f5f6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Tag size={20} className="text-[#E07B00]" />
            <span className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest">
              Limited Time
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Dallas, TX Bathroom Remodel Offers &amp; Discounts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 50 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="h-1.5 bg-[#E07B00]" />
              <div className="p-6">
                <div className="text-3xl font-bold text-[#E07B00] mb-1">
                  {offer.amount}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {offer.description}
                </p>
                <Link
                  href={offer.href}
                  className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wide transition-colors"
                >
                  {offer.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-6">
          *Offers valid for a limited time. Cannot be combined with other offers. See location for details.
        </p>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinancingSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-[#E07B00]" />
              <span className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest">
                Financing Available
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dallas, TX Bathroom Remodel Financing Options
            </h2>
            <div className="text-5xl font-bold text-[#E07B00] mb-4">
              0% Interest for 24 Months<span className="text-2xl align-super">*</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              We know a bathroom remodel is a significant investment. That&apos;s why
              we offer flexible financing options so you can get the bathroom you
              deserve today and pay over time.
            </p>
            <Link
              href="#consultation"
              className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-7 py-3.5 text-sm uppercase tracking-wide transition-colors"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 max-w-sm bg-white/5 border border-white/10 p-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-white/80">
              Financing Details
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2">
                <span className="text-[#E07B00] font-bold shrink-0">✓</span>
                Flexible financing through approved lenders
              </li>
              <li className="flex gap-2">
                <span className="text-[#E07B00] font-bold shrink-0">✓</span>
                On approved credit, for a limited time
              </li>
              <li className="flex gap-2">
                <span className="text-[#E07B00] font-bold shrink-0">✓</span>
                Repayment terms from 24 to 132 months
              </li>
              <li className="flex gap-2">
                <span className="text-[#E07B00] font-bold shrink-0">✓</span>
                Interest waived if repaid in 365 days
              </li>
            </ul>
            <p className="text-xs text-white/30 mt-4 leading-relaxed">
              *Subject to credit approval. Fixed APR, effective after promotional
              period ends and subject to change. Interest starts accruing when
              the loan closes. Contact us for full financing details.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

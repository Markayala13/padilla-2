"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the cost of a Padilla Prestige Remodeling bathroom remodel in Dallas, TX?",
    answer: "Because all bathroom sizes and project scopes are unique, we offer a FREE in-home bathroom consultation. A design consultant will visit your home to understand your needs, style, and budget while taking measurements for accurate pricing. This ensures you get a custom quote tailored exactly to your project — no guessing, no surprises.",
  },
  {
    question: "Why should I remodel my bathroom?",
    answer: "Remodeling your bathroom increases your home's value while adding comfort, safety, and convenience to your daily life. Your bathroom should be a beautiful and inviting space, especially since it's one of the most visible areas for guests. Investing in a home renovation project takes careful planning and consideration — and our team is here to help every step of the way.",
  },
  {
    question: "Does Padilla Prestige Remodeling offer a Design Service?",
    answer: "Yes! At Padilla Prestige Remodeling, we believe good design is something everyone should enjoy. Our designers offer traditional, transitional, rustic, and contemporary aesthetics created by certified interior designers. Your free in-home design consultation includes personalized recommendations for your style, space, and budget.",
  },
  {
    question: "How long does a Padilla Prestige Remodeling installation take?",
    answer: "Project length depends on bathroom size, materials, job complexity, and any hidden issues discovered during installation. Most Padilla Prestige Remodeling projects are completed in just days, not weeks — with over 40 years in the industry, our highly qualified team is fully licensed and insured to complete custom bathroom renovations in just 3–5 days.",
  },
  {
    question: "Does Padilla Prestige Remodeling offer a warranty?",
    answer: "Yes. Most of our products and services come with an industry-leading warranty, as well as a one-time transfer of warranty — so you're covered for the long term. Our commitment to you doesn't end when your remodel is done. We want you to love your bathroom for years to come.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === i ? "border-[#E07B00]/50 shadow-md" : "border-gray-100 hover:border-[#E07B00]/30"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-gray-900 leading-snug">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                  className="shrink-0"
                >
                  <ChevronDown size={18} className="text-[#E07B00]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

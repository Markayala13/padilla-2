"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posts = [
  {
    title: "2025 Bathroom Design Trends You Need to Know",
    category: "Design Inspiration",
    href: "https://www.architecturaldigest.com/story/bathroom-design-trends",
    source: "Architectural Digest",
  },
  {
    title: "Small Bathroom Ideas That Maximize Space and Style",
    category: "Small Bathrooms",
    href: "https://www.housebeautiful.com/room-decorating/bathroom/g1077/small-bathroom-ideas/",
    source: "House Beautiful",
  },
  {
    title: "The Best Bathroom Tile Ideas for Every Style",
    category: "Tile & Flooring",
    href: "https://www.elledecor.com/design-decorate/room-ideas/g39095655/bathroom-tile-ideas/",
    source: "Elle Decor",
  },
];

export default function BlogResourcesSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Expert Guides for Your Next Bathroom
          </h2>
          <p className="text-gray-500 text-sm">Curated articles from top design magazines and home publications.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group block border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-[#E07B00] font-semibold uppercase tracking-wide mb-2">
                {post.category}
              </p>
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#E07B00] transition-colors mb-4">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400 italic">{post.source}</span>
                <ArrowRight size={15} className="text-[#E07B00] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

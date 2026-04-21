"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    author: "Lisa Durr",
    date: "Apr 17, 2026",
    rating: 5,
    text: "Prestige did a wonderful professional job on my kitchen backsplash. They were helpful and patient with me throughout the entire process. I would hire them again for my next tile job.",
  },
  {
    author: "Carolina Lopez",
    date: "Apr 16, 2026",
    rating: 5,
    text: "If you're looking for a reliable bathroom remodeling company in the DFW area, Padilla's Prestige Remodeling is a great choice. They helped us redesign our shower, installed everything perfectly, and made the whole process smooth and stress-free.",
  },
  {
    author: "Roger Darnell",
    date: "Apr 12, 2026",
    rating: 5,
    text: "My bathroom floor had to be replaced. He completely reframed the floor and made new. He was able to come on short notice. Did a really good job for a reasonable price. He did the sheet rock and painted bathroom. He installed the bathroom sink and completed the job to my wife and my satisfaction.",
  },
  {
    author: "Justice Armstrong",
    date: "Apr 12, 2026",
    rating: 5,
    text: "For tile work and full room remodels, Mr. Padilla and his team are true professionals. They renovated my bathroom and repaired exterior siding, delivering clean lines, solid construction, and long-lasting quality.",
  },
  {
    author: "Steph",
    date: "Apr 10, 2026",
    rating: 5,
    text: "Mr. Padilla and his team did an excellent job installing vinyl siding on our home in Richardson. The work was clean, straight, and properly secured. They paid close attention to detail and made sure everything was well sealed. The house looks updated and professionally finished. Highly recommended.",
  },
  {
    author: "Isarahi Lopez",
    date: "Apr 6, 2026",
    rating: 5,
    text: "We hired Padilla's Prestige Remodeling for a full bathroom remodel in Carrollton, and the tile work was outstanding. The team paid great attention to detail, waterproofing, and clean finishes. Everything was done professionally and on schedule. Highly recommend them!",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#E07B00] fill-[#E07B00]" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function AustinReviews() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="reviews" ref={ref} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Dallas, TX Customer Reviews
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} className="text-[#E07B00] fill-[#E07B00]" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">4.8 out of 5</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.text.slice(0, 30)}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-1">
                <Image src="/images/google-g.svg" alt="Google" width={20} height={20} className="h-5 w-5" />
                <StarRow count={r.rating} />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mt-3 mb-4 line-clamp-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center">
                <span className="text-xs font-semibold text-gray-900">{r.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    author: "Lisa Durr",
    rating: 5,
    text: "Prestige did a wonderful professional job on my kitchen backsplash. They were helpful and patient with me throughout the entire process. I would hire them again for my next tile job.",
  },
  {
    author: "Carolina Lopez",
    rating: 5,
    text: "If you're looking for a reliable bathroom remodeling company in the DFW area, Padilla's Prestige Remodeling is a great choice. They helped us redesign our shower, installed everything perfectly, and made the whole process smooth and stress-free.",
  },
  {
    author: "Roger Darnell",
    rating: 5,
    text: "My bathroom floor had to be replaced. He completely reframed the floor and made new. He was able to come on short notice. Did a really good job for a reasonable price. He did the sheet rock and painted bathroom. He installed the bathroom sink and completed the job to my wife and my satisfaction.",
  },
  {
    author: "Justice Armstrong",
    rating: 5,
    text: "For tile work and full room remodels, Mr. Padilla and his team are true professionals. They renovated my bathroom and repaired exterior siding, delivering clean lines, solid construction, and long-lasting quality.",
  },
  {
    author: "Steph",
    rating: 5,
    text: "Mr. Padilla and his team did an excellent job installing vinyl siding on our home in Richardson. The work was clean, straight, and properly secured. They paid close attention to detail and made sure everything was well sealed. The house looks updated and professionally finished. Highly recommended.",
  },
  {
    author: "Isarahi Lopez",
    rating: 5,
    text: "We hired Padilla's Prestige Remodeling for a full bathroom remodel in Carrollton, and the tile work was outstanding. The team paid great attention to detail, waterproofing, and clean finishes. Everything was done professionally and on schedule. Highly recommend them!",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 15, delay: i * 0.06 }}
        >
          <Star size={14} className={i < count ? "text-[#E07B00] fill-[#E07B00]" : "text-gray-200 fill-gray-200"} />
        </motion.div>
      ))}
    </div>
  );
}

export default function AustinReviews() {
  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              key={r.author}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring" as const, stiffness: 70, damping: 18, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.1)", transition: { type: "spring" as const, stiffness: 400, damping: 25 } }}
              className="border border-gray-100 p-5 rounded-xl cursor-default"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.google.com/search?client=mobilesearchapp&sa=X&sca_esv=564481a6c5832954&channel=iss&cs=0&hl=en&rlz=1MDAPLA_enUS1189US1189&v=402.0.850515619&biw=1920&bih=953&aic=0&sxsrf=ANbL-n6YYcXiBIh_sE1DdeUUuiXQ8r1YWQ:1768090879027&kgmid=/g/11yklvv7v1&q=Padilla%E2%80%99s+Prestige+Remodeling&shem=ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=17a1a39daa90fe82&utm_source=ptotplc,shrtsdl,sh/x/loc/uni/m1/1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E07B00] hover:bg-[#B56000] text-white font-bold px-8 py-4 rounded-full text-sm transition-colors shadow-lg"
          >
            ⭐ Leave Us a Review
          </a>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const GOOGLE_URL =
  "https://www.google.com/search?client=mobilesearchapp&sa=X&sca_esv=564481a6c5832954&channel=iss&cs=0&hl=en&rlz=1MDAPLA_enUS1189US1189&v=402.0.850515619&biw=1920&bih=953&aic=0&sxsrf=ANbL-n6YYcXiBIh_sE1DdeUUuiXQ8r1YWQ:1768090879027&kgmid=/g/11yklvv7v1&q=Padilla%E2%80%99s+Prestige+Remodeling&shem=ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=17a1a39daa90fe82&utm_source=ptotplc,shrtsdl,sh/x/loc/uni/m1/1";

export default function FloatingGoogleButton() {
  return (
    <motion.a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring" as const, stiffness: 180, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.06, transition: { type: "spring" as const, stiffness: 400, damping: 20 } }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-0 z-50 flex items-center gap-2 bg-[#E07B00] text-white font-bold text-sm px-4 py-3 rounded-l-full shadow-2xl cursor-pointer"
    >
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-base leading-none"
      >
        ⭐
      </motion.span>
      Rate Us
    </motion.a>
  );
}

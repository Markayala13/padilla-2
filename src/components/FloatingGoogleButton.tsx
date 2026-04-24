"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GOOGLE_URL =
  "https://www.google.com/search?client=mobilesearchapp&sa=X&sca_esv=564481a6c5832954&channel=iss&cs=0&hl=en&rlz=1MDAPLA_enUS1189US1189&v=402.0.850515619&biw=1920&bih=953&aic=0&sxsrf=ANbL-n6YYcXiBIh_sE1DdeUUuiXQ8r1YWQ:1768090879027&kgmid=/g/11yklvv7v1&q=Padilla%E2%80%99s+Prestige+Remodeling&shem=ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=17a1a39daa90fe82&utm_source=ptotplc,shrtsdl,sh/x/loc/uni/m1/1";

export default function FloatingGoogleButton() {
  return (
    <motion.a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" as const, stiffness: 200, damping: 18, delay: 1.5 }}
      whileHover={{ scale: 1.12, transition: { type: "spring" as const, stiffness: 400, damping: 20 } }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-0.5 bg-white rounded-xl shadow-2xl border-2 border-[#E07B00] px-1.5 py-1.5 cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/google-g.svg"
          alt="Google Reviews"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </motion.div>
      <span className="text-[8px] font-bold text-[#E07B00] leading-tight">Reviews</span>
    </motion.a>
  );
}

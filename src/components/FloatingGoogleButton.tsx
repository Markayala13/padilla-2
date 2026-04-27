"use client";

import { motion } from "framer-motion";

const GOOGLE_URL =
  "https://www.google.com/search?client=mobilesearchapp&sa=X&sca_esv=564481a6c5832954&channel=iss&cs=0&hl=en&rlz=1MDAPLA_enUS1189US1189&v=402.0.850515619&biw=1920&bih=953&aic=0&sxsrf=ANbL-n6YYcXiBIh_sE1DdeUUuiXQ8r1YWQ:1768090879027&kgmid=/g/11yklvv7v1&q=Padilla%E2%80%99s+Prestige+Remodeling&shem=ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=17a1a39daa90fe82&utm_source=ptotplc,shrtsdl,sh/x/loc/uni/m1/1";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

export default function FloatingGoogleButton() {
  return (
    <motion.a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 20, delay: 1.8 }}
      whileHover={{ scale: 1.05, x: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 flex flex-col items-center justify-center gap-1 bg-white w-16 h-16 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.18)] border border-gray-100 cursor-pointer"
    >
      <GoogleIcon />
      <span className="text-[10px] font-bold text-gray-700 leading-none">Reviews</span>
    </motion.a>
  );
}

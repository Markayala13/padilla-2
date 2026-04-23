"use client";
import { Palette, Package, Wrench, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <Palette size={38} strokeWidth={1.4} />, title: "Free Design Service", description: "Our design consultants come to your home and create a custom plan tailored to your needs and style." },
  { icon: <Package size={38} strokeWidth={1.4} />, title: "Quality Materials", description: "We use premium, durable products — including our exclusive DuraBath™ Acrylic and Natural Stone lines." },
  { icon: <Wrench size={38} strokeWidth={1.4} />, title: "Professional Installation", description: "Our trained, courteous crews complete most bathroom remodels in just days, not weeks." },
  { icon: <Shield size={38} strokeWidth={1.4} />, title: "Long-Term Warranties", description: "We stand behind our work with industry-leading warranties on both products and installation." },
];

export default function FeaturesBar() {
  return (
    <section className="bg-white border-t border-b border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { type: "spring" as const, stiffness: 400, damping: 20 } }}
              className="flex flex-col items-center text-center gap-4 cursor-default"
            >
              <motion.div
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 180, damping: 14, delay: i * 0.12 + 0.15 }}
                className="w-16 h-16 rounded-2xl bg-[#E07B00]/10 flex items-center justify-center text-[#E07B00]"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

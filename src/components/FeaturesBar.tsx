"use client";
import { Palette, Package, Wrench, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: <Palette size={36} strokeWidth={1.5} />, title: "Free Design Service", description: "Our design consultants come to your home and create a custom plan tailored to your needs and style." },
  { icon: <Package size={36} strokeWidth={1.5} />, title: "Quality Materials", description: "We use premium, durable products — including our exclusive DuraBath™ Acrylic and Natural Stone lines." },
  { icon: <Wrench size={36} strokeWidth={1.5} />, title: "Professional Installation", description: "Our trained, courteous crews complete most bathroom remodels in just days, not weeks." },
  { icon: <Shield size={36} strokeWidth={1.5} />, title: "Long-Term Warranties", description: "We stand behind our work with industry-leading warranties on both products and installation." },
];

export default function FeaturesBar() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section ref={ref} className="bg-white border-t border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={visible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                className="text-[#E07B00]"
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

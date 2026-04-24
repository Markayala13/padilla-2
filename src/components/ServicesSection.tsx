"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Bathroom Remodels",
    description: "Transform your entire bathroom from top to bottom. Our team handles everything — from design to demo to installation — using beautiful, high-quality materials tailored to your style.",
    image: "/images/service-1.jpg",
    href: "/services/full-bathroom-remodel",
  },
  {
    title: "Accessible Bathroom Remodels",
    description: "Create a bathroom that's functional, safe, and beautifully designed. We specialize in ADA-compliant upgrades, slip-resistant surfaces, grab bars, walk-in tubs, and barrier-free showers.",
    image: "/images/service-2.jpg",
    href: "/services/accessible-bathrooms",
  },
  {
    title: "Tub & Shower Updates",
    description: "Update your tub or shower without a full remodel. From tub-to-shower conversions to new surrounds and fixtures, we deliver a fresh look in just days.",
    image: "/images/service-3.jpg",
    href: "/services/tub-shower-updates",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 70, damping: 18 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f8f5f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Bathroom Remodeling Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you want a complete transformation or a targeted update,
            Padilla Prestige Remodeling has the expertise and products to make it happen — fast.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E07B00] transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                {service.href && (
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E07B00] hover:gap-3 transition-all"
                  >
                    View Gallery <ArrowRight size={15} />
                  </Link>
                )}
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E07B00] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

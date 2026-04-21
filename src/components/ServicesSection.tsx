"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Full Bathroom Remodels",
    description: "Transform your entire bathroom from top to bottom. Our team handles everything — from design to demo to installation — using beautiful, high-quality materials tailored to your style.",
    href: "/services/full-bathroom-remodel/",
    image: "/images/service-1.jpg",
    label: "Explore Full Remodels",
  },
  {
    title: "Accessible Bathroom Remodels",
    description: "Create a bathroom that's functional, safe, and beautifully designed. We specialize in ADA-compliant upgrades, slip-resistant surfaces, grab bars, walk-in tubs, and barrier-free showers.",
    href: "/services/accessible-bathrooms/",
    image: "/images/service-2.jpg",
    label: "Explore Accessible Options",
  },
  {
    title: "Tub & Shower Updates",
    description: "Update your tub or shower without a full remodel. From tub-to-shower conversions to new surrounds and fixtures, we deliver a fresh look in just days.",
    href: "/services/tub-shower-updates/",
    image: "/images/service-3.jpg",
    label: "Explore Tub & Shower Updates",
  },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section id="services" ref={ref} className="bg-[#f8f5f6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Bathroom Remodeling Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you want a complete transformation or a targeted update,
            Padilla Prestige Remodeling has the expertise and products to make it happen — fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#E07B00] hover:gap-3 transition-all">
                  {service.label} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/services/" className="inline-block border-2 border-[#E07B00] text-[#E07B00] hover:bg-[#E07B00] hover:text-white font-semibold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

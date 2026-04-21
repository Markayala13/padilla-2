"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const filters = ["Show All", "Modern", "Traditional", "Transitional", "Designs by Jenny Marrs"];

const designs = [
  {
    name: "Brushed Linen Modern",
    style: "Modern",
    gradient: "from-stone-300 to-stone-400",
    href: "/gallery/",
  },
  {
    name: "White Subway Transitional",
    style: "Transitional",
    gradient: "from-slate-200 to-slate-300",
    href: "/gallery/",
  },
  {
    name: "Teakwood Transitional",
    style: "Transitional",
    gradient: "from-amber-200 to-stone-300",
    href: "/gallery/",
  },
  {
    name: "White Picket Modern",
    style: "Modern",
    gradient: "from-zinc-100 to-zinc-200",
    href: "/gallery/",
  },
  {
    name: "Classic Marble Traditional",
    style: "Traditional",
    gradient: "from-gray-100 to-gray-200",
    href: "/gallery/",
  },
  {
    name: "Jenny Signature Series",
    style: "Designs by Jenny Marrs",
    gradient: "from-rose-100 to-stone-200",
    href: "/design/jenny-marrs/",
  },
];

export default function DesignGallery() {
  const [activeFilter, setActiveFilter] = useState("Show All");

  const filtered =
    activeFilter === "Show All"
      ? designs
      : designs.filter((d) => d.style === activeFilter);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Bathroom Design Styles
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your needs. Your style. Your bathroom. Explore our curated design
            collections and find the look that&apos;s right for you.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                activeFilter === f
                  ? "bg-[#E07B00] border-[#E07B00] text-white"
                  : "border-gray-300 text-gray-600 hover:border-[#E07B00] hover:text-[#E07B00]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group relative overflow-hidden block"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${d.gradient} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-xs text-white/70 uppercase tracking-wide mb-0.5">{d.style}</p>
                <p className="text-white font-semibold">{d.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 text-[#E07B00] font-semibold hover:gap-3 transition-all text-sm uppercase tracking-wide"
          >
            Get Inspired by Real Padilla Prestige Remodeling Remodels
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

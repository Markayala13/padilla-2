"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: copy + form */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 text-[#E07B00] mb-3">
              <MapPin size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Nationwide Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Local Re-Bath
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With hundreds of locations across the United States, a Re-Bath expert
              is likely right in your neighborhood. Enter your zip code to find the
              nearest showroom and schedule your free consultation.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="text"
                placeholder="Enter zip code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                maxLength={5}
                className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-6 py-3 text-sm uppercase tracking-wide transition-colors"
              >
                Search
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Or call us at{" "}
              <a href="tel:12148105012" className="text-[#E07B00] font-semibold hover:underline">
                +1 (214) 810-5012
              </a>
            </p>
          </div>

          {/* Right: US map */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/map.svg"
              alt="Re-Bath locations across the United States"
              width={600}
              height={380}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

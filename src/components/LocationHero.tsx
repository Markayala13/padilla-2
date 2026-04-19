import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function LocationHero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[520px]">
      {/* Left: content panel */}
      <div className="order-2 md:order-1 w-full md:w-1/2 bg-[#f0f0f0] flex items-center justify-center px-8 py-12 md:px-16 md:py-16">
        <div className="w-full max-w-md">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              All locations
            </Link>
            <span>/</span>
            <span className="text-gray-700">Texas</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2c3e50] leading-tight mb-8">
            Bathroom<br />Remodeling in<br />Dallas
          </h1>

          <Link
            href="#consultation"
            className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors mb-10"
          >
            Book Free Consultation
          </Link>

          <div className="flex flex-col gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
              <span>
                3209 Oceanview St, Irving, TX 75062
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-gray-500" />
              <a href="tel:12148105012" className="hover:text-[#8B1A2B] transition-colors">
                +1 (214) 810-5012
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-gray-500" />
              <a href="mailto:padillajose662@gmail.com" className="hover:text-[#E07B00] transition-colors">
                padillajose662@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 shrink-0 text-gray-500" />
              <Link href="#hours" className="font-semibold hover:text-[#E07B00] transition-colors flex items-center gap-1">
                Hours &amp; Location Details <span className="text-base">›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right: bathroom photo */}
      <div className="order-1 md:order-2 w-full md:w-1/2 min-h-[300px] md:min-h-0 relative overflow-hidden">
        <img
          src="/images/hero-dallas.jpg"
          alt="Bathroom remodel in Dallas"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}

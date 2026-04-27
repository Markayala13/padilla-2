"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];



export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

      {/* ── Top bar ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Left: logo + phone button + location */}
          <div className="flex items-center gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo-padilla.png"
                alt="Padilla Prestige Remodeling"
                width={90}
                height={90}
                priority
                className="rounded-full"
              />
            </Link>
            <a
              href="tel:12148105012"
              className="flex items-center gap-2 bg-[#E07B00] hover:bg-[#B56000] text-white text-sm font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Phone size={13} className="shrink-0" />
              </span>
              <span>214-810-5012</span>
            </a>
            <button className="flex items-center gap-1 text-[#E07B00] font-medium text-sm hover:opacity-80 transition-opacity">
              Dallas
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Right: phone + search + franchise */}
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="tel:12148105012" className="flex items-center gap-1.5 text-[#E07B00] font-semibold hover:opacity-80 transition-opacity">
              <Phone size={14} />
              +1 (214) 810-5012
            </a>
            <button aria-label="Search" className="text-gray-500 hover:text-[#E07B00] transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div className="hidden md:block bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Nav links centered */}
          <nav className="flex items-center gap-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E07B00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/find-a-location/"
              className="text-sm font-semibold text-[#E07B00] border border-[#E07B00] px-5 py-2 rounded-full hover:bg-[#E07B00] hover:text-white transition-colors"
            >
              Find a Location
            </Link>
            <Link
              href="/#consultation"
              className="text-sm font-semibold text-white bg-[#E07B00] px-5 py-2 rounded-full hover:bg-[#B56000] transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── Booking bar ── */}
      <div className="bg-[#E07B00] w-full">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-center">
          <a
            href="/#projects"
            className="text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            View Before &amp; After Projects
          </a>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E07B00] border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="px-4 pt-3 flex flex-col gap-2">
            <Link
              href="/#consultation"
              className="block text-center bg-[#E07B00] text-white text-sm font-semibold px-5 py-3 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

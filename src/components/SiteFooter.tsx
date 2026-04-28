"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "Find Us": [
    { label: "Find a Location", href: "/find-a-location/" },
    { label: "Free Consultation", href: "/free-consultation/" },
    { label: "Contact Us", href: "/contact/" },
  ],
  Services: [
    { label: "Full Bathroom Remodels", href: "/services/full-bathroom-remodel/" },
    { label: "Accessible Bathrooms", href: "/services/accessible-bathrooms/" },
    { label: "Tub & Shower Updates", href: "/services/tub-shower-updates/" },
    { label: "Shower Remodels", href: "/services/shower-remodels/" },
    { label: "Bathtub Remodels", href: "/services/bathtub-remodels/" },
  ],
  "About Us": [
    { label: "Our Story", href: "/about/" },
    { label: "Awards", href: "/about/awards/" },
    { label: "Careers", href: "/about/careers/" },
    { label: "Franchise Opportunities", href: "/franchise/" },
  ],
  Resources: [
    { label: "Design Blog", href: "/blog/" },
    { label: "Before & After Gallery", href: "/results/" },
    { label: "FAQs", href: "/faqs/" },
    { label: "Warranty", href: "/warranty/" },
    { label: "Cleaning & Maintenance", href: "/cleaning-maintenance/" },
  ],
};

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-padilla.png"
              alt="Padilla Prestige Remodeling LLC"
              width={90}
              height={90}
              className="mb-5 rounded-full"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Padilla Prestige Remodeling is America&apos;s largest bathroom remodeling company,
              transforming bathrooms nationwide with expert design, quality
              materials, and professional installation.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* Facebook — with link */}
              <a
                href="https://www.facebook.com/profile.php?id=61582726610574"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram — no link */}
              <span aria-label="Instagram" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </span>

              {/* YouTube — no link */}
              <span aria-label="YouTube" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="shrink-0">
              <p className="text-sm font-semibold text-white mb-1">Stay Inspired</p>
              <p className="text-xs text-white/50">
                Get design ideas and remodeling tips delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full sm:max-w-sm gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E07B00] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#E07B00] hover:bg-[#B56000] text-white px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Padilla Prestige Remodeling LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/privacy-choices/" className="hover:text-white/70 transition-colors">Your Privacy Choices</Link>
            <Link href="/terms/" className="hover:text-white/70 transition-colors">Terms of Use</Link>
            <Link href="/sitemap/" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

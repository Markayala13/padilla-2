"use client";

import { useState } from "react";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: copy */}
          <div className="flex-1 text-white max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-[#E07B00]" />
              <span className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest">
                Start Today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Start Your Bathroom Remodel Today
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Schedule a free in-home design consultation with your local Padilla Prestige Remodeling
              expert. We&apos;ll measure your space, discuss your vision, and provide
              a no-obligation estimate.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              {[
                "No-obligation, free consultation",
                "Personalized design recommendations",
                "Transparent, upfront pricing",
                "Most projects complete in days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#E07B00] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-[420px] bg-white p-7 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Schedule Your Free Design Consultation
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Fill out the form and a local Padilla Prestige Remodeling expert will contact you within
              one business day.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    First Name <span className="text-[#E07B00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Last Name <span className="text-[#E07B00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Phone <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    State <span className="text-[#E07B00]">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#E07B00] transition-colors"
                  >
                    <option value="">Select</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Zip Code <span className="text-[#E07B00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold py-3 text-sm uppercase tracking-wide transition-colors mt-1"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

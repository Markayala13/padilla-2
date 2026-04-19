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

export default function HeroSection() {
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
    <section className="relative min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
      />
      {/* Gradient overlay — darker on left, transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left: headline */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Beautiful Bathrooms
            <br />
            Made Easy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-md mb-8">
            Remodeling your bathroom with Re-Bath is fast, easy, and more affordable
            than you might think.
          </p>
          <a
            href="/find-a-location/"
            className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-8 py-4 transition-colors text-sm uppercase tracking-wide"
          >
            Find Your Local Re-Bath
          </a>
        </div>

        {/* Right: consultation form */}
        <div className="w-full lg:w-[380px] bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            Get Your Free Consultation
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Schedule a free in-home design consultation today.
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
              Schedule Free Consultation
            </button>
            <p className="text-xs text-gray-400 text-center">
              By submitting you agree to our{" "}
              <a href="/privacy/" className="underline hover:text-[#E07B00]">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

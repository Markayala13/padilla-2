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

export default function LocationConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "Texas",
    zip: "",
    project: "",
    smsConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="consultation" className="bg-[#f8f5f6] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Schedule Your Free In-Home Design Consultation
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Fill out the form below and a Re-Bath Dallas expert will contact you
            within one business day to schedule your free in-home design consultation.
          </p>
        </div>

        <div className="bg-white shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  First Name <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Last Name <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  City <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  State <span className="text-[#E07B00]">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B00] transition-colors"
                >
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Zip Code <span className="text-[#E07B00]">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  maxLength={5}
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tell Us About Your Project
              </label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                rows={3}
                placeholder="Describe what you'd like to remodel..."
                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#E07B00] transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="smsConsent"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="mt-0.5 accent-[#E07B00]"
              />
              <label htmlFor="smsConsent" className="text-xs text-gray-500 leading-relaxed">
                I consent to receive SMS messages from Re-Bath Dallas regarding my
                consultation request. Message and data rates may apply. Reply STOP to
                unsubscribe.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E07B00] hover:bg-[#B56000] text-white font-bold py-4 text-sm uppercase tracking-wide transition-colors"
            >
              Book Your Free Consultation
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form you agree to our{" "}
              <a href="/privacy/" className="underline hover:text-[#E07B00]">Privacy Policy</a>.
              We will never sell your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

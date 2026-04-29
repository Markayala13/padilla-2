"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function LocationConsultationForm() {
  const { ref, visible } = useScrollAnimation();
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Free Consultation Request — Padilla Prestige Remodeling",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          city: `${formData.city}, ${formData.state} ${formData.zip}`,
          project: formData.project,
          sms_consent: formData.smsConsent ? "Yes" : "No",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", city: "", state: "Texas", zip: "", project: "", smsConsent: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="consultation" ref={ref} className="bg-[#f8f5f6] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get a Professional Bathroom Remodel Plan — Free Consultation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white shadow-md p-8"
        >
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
                I consent to receive SMS messages from Padilla Prestige Remodeling regarding my
                consultation request. Message and data rates may apply. Reply STOP to
                unsubscribe.
              </label>
            </div>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 text-center font-semibold">
                ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 text-center">
                Hubo un error. Intenta de nuevo o llámanos al (214) 810-5012.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#E07B00] hover:bg-[#B56000] disabled:opacity-60 text-white font-bold py-4 text-sm uppercase tracking-wide transition-colors"
            >
              {status === "sending" ? "Sending..." : "Book Your Free Consultation"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form you agree to our{" "}
              <a href="/privacy/" className="underline hover:text-[#E07B00]">Privacy Policy</a>.
              We will never sell your information.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

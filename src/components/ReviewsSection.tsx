import Image from "next/image";
import { Star } from "lucide-react";

const platforms = [
  { name: "Google", logo: "/images/logo-google.svg", alt: "Google Reviews" },
  { name: "Facebook", logo: "/images/logo-facebook.svg", alt: "Facebook Reviews" },
  { name: "HomeAdvisor", logo: "/images/logo-homeadvisor.svg", alt: "HomeAdvisor Reviews" },
  { name: "Houzz", logo: "/images/logo-houzz.svg", alt: "Houzz Reviews" },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#f8f5f6] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Trusted by Homeowners from Coast to Coast
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          More than 35,000 Padilla Prestige Remodeling customers have reviewed their experiences,
          and we&apos;re proud of our{" "}
          <strong className="text-gray-900">4.8 out of 5 rating</strong>.
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={28} className="text-[#E07B00] fill-[#E07B00]" />
          ))}
          <Star size={28} className="text-[#E07B00] fill-[#E07B00] opacity-80" />
        </div>

        {/* Platform logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center justify-center h-10">
              <Image
                src={p.logo}
                alt={p.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

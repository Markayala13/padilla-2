import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Free In-Home Design Consultation",
    description:
      "Our design consultant will come to you, measure your bathroom, and share ideas for transforming it into the perfect space.",
    cta: "Design Details",
    href: "/process/",
  },
  {
    number: "02",
    title: "Removal & Preparation",
    description:
      "Once you've chosen your products, our courteous and tidy crew will prepare your home and carefully remove your old materials.",
    cta: "View Prep Details",
    href: "/process/",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Once all the materials for your bathroom have arrived, it's time to start building your beautiful new bathroom!",
    cta: "Installation Process",
    href: "/process/",
  },
  {
    number: "04",
    title: "Post-Care & Warranty",
    description:
      "Our commitment to you doesn't end when your remodel is done. We want you to love your bathroom for years to come.",
    cta: "See Post-Care",
    href: "/process/",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f8f5f6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero banner */}
        <div className="relative h-48 md:h-64 mb-12 overflow-hidden">
          <Image
            src="/images/hero-process.jpg"
            alt="Our bathroom remodel process"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest mb-2">
                Design. Demo. Done.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Bathroom Remodel Process
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Connector line (not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-[#E07B00] z-10" />
              )}
              <div className="text-4xl font-bold text-[#E07B00]/20 mb-3 leading-none">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {step.description}
              </p>
              <Link
                href={step.href}
                className="text-xs font-semibold text-[#E07B00] uppercase tracking-wide hover:underline"
              >
                {step.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/free-consultation/"
            className="inline-block bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-8 py-4 text-sm uppercase tracking-wide transition-colors"
          >
            Start Your Bathroom Remodel
          </Link>
        </div>
      </div>
    </section>
  );
}

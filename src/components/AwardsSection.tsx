import { Award } from "lucide-react";

const awards = [
  {
    title: "Best of the Best",
    description: "Recognized as one of the top bathroom remodeling companies in the nation.",
  },
  {
    title: "Angie's List Super Service Award",
    description: "Consistently earning the Super Service Award from Angie's List customers.",
  },
  {
    title: "NAVOBA Veterans Business Enterprise",
    description: "Certified Veterans Business Enterprise through the National Veteran-Owned Business Association.",
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#f8f5f6] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Dallas, TX Awards &amp; Recognition
          </h2>
          <p className="text-gray-500 text-sm">
            Our commitment to excellence has been recognized by industry leaders.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col items-center text-center bg-white border border-gray-100 p-7 w-full sm:w-56 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#E07B00]/10 flex items-center justify-center mb-4">
                <Award size={28} className="text-[#E07B00]" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

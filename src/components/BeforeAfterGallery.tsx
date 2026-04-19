import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  { label: "Master Shower Remodel", style: "Modern" },
  { label: "Full Bathroom Renovation", style: "Traditional" },
  { label: "Walk-In Shower Conversion", style: "Contemporary" },
  { label: "Tub-to-Shower Conversion", style: "Transitional" },
  { label: "Accessible Bathroom", style: "ADA Compliant" },
  { label: "Bathtub Replacement", style: "Classic" },
];

function ProjectCard({ label, style, isBefore }: { label: string; style: string; isBefore: boolean }) {
  const gradients = [
    "from-stone-300 to-stone-500",
    "from-slate-300 to-slate-500",
    "from-zinc-300 to-zinc-500",
    "from-neutral-300 to-neutral-500",
    "from-gray-300 to-gray-500",
    "from-warm-gray-300 to-warm-gray-500",
  ];
  const idx = ["Master Shower Remodel","Full Bathroom Renovation","Walk-In Shower Conversion","Tub-to-Shower Conversion","Accessible Bathroom","Bathtub Replacement"].indexOf(label);
  const grad = gradients[idx % gradients.length];

  return (
    <div className="relative aspect-[4/3] overflow-hidden group">
      <div
        className={`w-full h-full bg-gradient-to-br ${isBefore ? grad : "from-stone-100 to-stone-300"} transition-transform duration-500 group-hover:scale-105`}
        style={{ filter: isBefore ? "saturate(0.5) brightness(0.8)" : "saturate(1.1) brightness(1.05)" }}
      />
      <div
        className={`absolute top-2 left-2 text-xs font-bold uppercase tracking-wide px-2 py-1 ${
          isBefore ? "bg-gray-700 text-white" : "bg-[#E07B00] text-white"
        }`}
      >
        {isBefore ? "Before" : "After"}
      </div>
      {!isBefore && (
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <span className="text-xs text-white/80 bg-black/40 px-2 py-0.5">{style}</span>
        </div>
      )}
    </div>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section id="projects" className="bg-[#f8f5f6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Before &amp; After Re-Bath Dallas, TX
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See the dramatic transformations our Dallas team delivers — real
            remodels from real local homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.label}>
              <p className="text-sm font-semibold text-gray-700 mb-2">{p.label}</p>
              <div className="grid grid-cols-2 gap-1.5">
                <ProjectCard label={p.label} style={p.style} isBefore={true} />
                <ProjectCard label={p.label} style={p.style} isBefore={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/results/"
            className="inline-flex items-center gap-2 text-[#E07B00] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

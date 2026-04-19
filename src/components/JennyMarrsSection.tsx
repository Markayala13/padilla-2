import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JennyMarrsSection() {
  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: image placeholder */}
          <div className="flex-1 relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
              <div className="text-center text-white/30">
                <div className="text-5xl mb-2">✦</div>
                <div className="text-lg font-light">Jenny Marrs</div>
              </div>
            </div>
            {/* Decorative border accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#E07B00] opacity-40" />
          </div>

          {/* Right: content */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-[#E07B00]" />
              <span className="text-[#E07B00] text-sm font-semibold uppercase tracking-widest">
                Exclusive Partnership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Introducing Bathroom Designs by Jenny Marrs
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              We&apos;ve partnered with Jenny &amp; Dave Marrs, our National Design &amp;
              Construction team, to bring you exclusive bathroom designs, from
              Jenny herself.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Discover timeless, beautifully curated styles that transform your
              bathroom into a space you&apos;ll love — crafted by one of America&apos;s
              most beloved home renovation experts.
            </p>
            <Link
              href="/design/jenny-marrs/"
              className="inline-flex items-center gap-3 bg-[#E07B00] hover:bg-[#B56000] text-white font-semibold px-7 py-3.5 transition-colors text-sm uppercase tracking-wide"
            >
              View Jenny&apos;s Custom Designs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

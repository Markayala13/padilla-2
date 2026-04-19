import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Choose the Right Shower Base for Your Bathroom Remodel",
    category: "Remodeling Tips",
    href: "/blog/",
    image: "/images/hero-blog.jpg",
  },
  {
    title: "How to Turn Your Bathroom into a Spa-Like Sanctuary",
    category: "Design Ideas",
    href: "/blog/",
    gradient: "from-slate-400 to-slate-600",
  },
  {
    title: "Primary Bathroom Designs & Remodel Trends for 2026",
    category: "Bathroom Trends",
    href: "/blog/",
    gradient: "from-stone-400 to-stone-600",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Design Ideas &amp; Remodeling Tips
            </h2>
            <p className="text-gray-600 mt-2">
              Expert advice to help you plan your perfect bathroom remodel.
            </p>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E07B00] whitespace-nowrap hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden mb-4">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${post.gradient} group-hover:scale-105 transition-transform duration-500`}
                  />
                )}
              </div>
              <p className="text-xs text-[#E07B00] font-semibold uppercase tracking-wide mb-2">
                {post.category}
              </p>
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#E07B00] transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

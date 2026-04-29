"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "José Padilla",
    role: "Founder & Owner",
    bio: "José Padilla, founder of Padilla Prestige Remodeling LLC. I have over 10 years of hands-on experience in the remodeling industry, with 5 years operating as a registered company in the Dallas–Fort Worth area. We specialize in high-quality bathroom remodels, tile installation, and complete shower systems built to last. We work with our own in-house team, with crew members who have 15 to 20 years of experience in bathroom remodeling. Our focus is on doing the job right the first time, with proper waterproofing, attention to detail, and a level of craftsmanship our clients can trust.",
    image: "/images/jose-padilla.jpg",
  },
];

export default function TeamSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Your Padilla Prestige Remodeling Team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Your bathroom remodel is in expert hands. Our local owners bring
            decades of home improvement experience to every project.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={visible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-[#E07B00]/30 shadow-md shrink-0"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#E07B00] text-sm font-semibold uppercase tracking-wide mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

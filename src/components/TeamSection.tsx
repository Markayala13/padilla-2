import { User } from "lucide-react";

const team = [
  {
    name: "Pepe",
    role: "Owner",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Juan",
    role: "Owner",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Your Re-Bath Dallas Team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Your bathroom remodel is in expert hands. Our local owners bring
            decades of home improvement experience to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#f8f5f6] flex items-center justify-center mb-4 border-2 border-[#E07B00]/20">
                <User size={36} className="text-[#E07B00]/40" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#E07B00] text-sm font-semibold uppercase tracking-wide mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

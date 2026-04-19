import { MapPin, Phone, Clock, CheckCircle, Mail } from "lucide-react";

const cities = [
  "Dallas","Plano","Irving","Garland","Mesquite","Richardson",
  "Carrollton","Allen","Frisco","McKinney","Denton","Lewisville",
  "Flower Mound","Euless","Bedford","Hurst","Grapevine","Coppell",
  "Rowlett","Rockwall","Forney","Wylie","Sachse","Duncanville","Cedar Hill","DeSoto",
];

export default function LocationInfo() {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              <MapPin size={22} className="text-[#E07B00]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Padilla Prestige Remodeling LLC<br />
                3209 Oceanview St<br />
                Irving, TX 75062<br />
                United States
              </p>
              <a
                href="https://www.google.com/maps/dir//3209+Oceanview+St,+Irving,+TX+75062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-semibold text-[#E07B00] hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              <Phone size={22} className="text-[#E07B00]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <a
                href="tel:12148105012"
                className="text-[#E07B00] font-semibold text-lg hover:underline"
              >
                +1 (214) 810-5012
              </a>
              <p className="text-xs text-gray-500 mt-0.5">Local Dallas number</p>
              <a
                href="tel:12148105012"
                className="block text-sm text-gray-500 hover:text-[#E07B00] mt-1"
              >
                +1 (214) 810-5012 (National)
              </a>
            </div>
          </div>

          {/* Email + Hours */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Mail size={22} className="text-[#E07B00]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:padillajose662@gmail.com" className="text-[#E07B00] text-sm hover:underline">
                  padillajose662@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Clock size={22} className="text-[#E07B00]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                <div className="text-sm text-gray-600 space-y-0.5">
                  <div className="flex justify-between gap-6">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-gray-800">9:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Saturday – Sunday</span>
                    <span className="font-medium text-gray-800">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cities served */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle size={20} className="text-[#E07B00] shrink-0 mt-0.5" />
            <h3 className="font-bold text-gray-900">
              Serving Dallas &amp; Surrounding Communities
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {cities.map((city) => (
              <span key={city} className="text-sm text-gray-500">
                {city}
                <span className="ml-3 text-gray-300">·</span>
              </span>
            ))}
            <span className="text-sm text-gray-400 italic">and more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

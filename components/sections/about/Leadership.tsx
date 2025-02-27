import Image from "next/image";
import Link from "next/link";

const leaders = [
  {
    id: 1,
    name: "Pratik Jena",
    position: "Founder",
    subPosition: "Managing Director",
    image: "/images/team/pratik.jpg",
    linkedin: "https://www.linkedin.com/in/pratik-jena-366718151/",
  },
  {
    id: 2,
    name: "Tannmaya",
    position: "Business Head",
    subPosition: "BBSR",
    image: "/images/team/Tanmay.jpg",
    linkedin: "https://www.linkedin.com/in/prakit-sarda",
  },
  {
    id: 3,
    name: "Sanat Mohanty",
    position: "Marketing Head",
    subPosition: "",
    image: "/images/team/Sanat.jpg",
    linkedin: "https://www.linkedin.com/in/prakit-sarda",
  },
];

export default function Leadership() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-16">
          THE <span className="text-[#F15A24]">LEADERSHIP</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white p-6  shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-gray-600 text-sm">{leader.position}</p>
                {leader.subPosition && (
                  <p className="text-gray-500 text-xs">{leader.subPosition}</p>
                )}
              </div>

              {/* LinkedIn Link */}
              {leader.linkedin && leader.linkedin !== "#" && (
                <Link
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[#F15A24] hover:text-[#d14416] transition-colors"
                  aria-label={`${leader.name}'s LinkedIn profile`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    description: "A visionary entrepreneur with a strong foundation in the seafood industry, he laid the groundwork for the Highland Group at a young age of 19, expanding into real estate with Supratik Infraventures. With a global outlook and a passion for community-driven development, he is redefining the landscape of premium living.",
  },
  {
    id: 2,
    name: "Tannmaya Kumar Nayak",
    position: "VP Operations",
    subPosition: "Business Head, BBSR",
    image: "/images/team/Tanmay.jpg",
    linkedin: "https://www.linkedin.com/in/prakit-sarda",
    description: "Backed by over three decades of experience in financial technology and banking sector, he has successfully led multi-location teams to deliver high-impact solutions. His strategic acumen, honed through leadership roles in banking and operations, ensures seamless execution at Supratik Infraventures, driving efficiency and innovation in every project.",
  },
  {
    id: 3,
    name: "Sanat Kumar Mohanty",
    position: "AVP Sales & Marketing",
    subPosition: "Marketing Head",
    image: "/images/team/Sanat.jpg",
    linkedin: "https://www.linkedin.com/in/prakit-sarda",
    description: "A seasoned real estate expert with a deep understanding of market dynamics, he blends strategic insight with a results-driven approach. His ability to craft compelling narratives, engage buyers, and position brands effectively makes him a driving force behind Supratik Infraventures' growth and market presence.",
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
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative aspect-[3/4]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Position overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-lg font-medium text-gray-200">{leader.position}</p>
                  {leader.subPosition && (
                    <p className="text-sm text-gray-300">{leader.subPosition}</p>
                  )}
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {leader.description}
                </p>

                {/* LinkedIn Link */}
                {leader.linkedin && leader.linkedin !== "#" && (
                  <Link
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F15A24] hover:text-[#d14416] transition-colors font-medium"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="flex-shrink-0"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

const projects = {
  balasore: {
    title: "Completed Project (Balasore)",
    developments: [
      {
        id: 1,
        name: "Supratik Lifestyle",
        totalArea: "30 Acres",
        image: "/images/property/property-1.jpg",
        properties: [
          {
            name: "Supratik Duplex",
            units: 103,
            image: "/images/property/property-2.jpg",
          },
          {
            name: "Supratik Lifestyle-1",
            units: 50,
            image: "/images/property/property-3.jpg",
          },
          {
            name: "Supratik Lifestyle-2",
            units: 35,
            image: "/images/property/property-1.jpg",
          },
          {
            name: "Supratik Lifestyle-3",
            units: 16,
            image: "/images/property/property-2.jpg",
          },
          {
            name: "Supratik Fourplex",
            units: 8,
            image: "/images/property/property-3.jpg",
          },
        ],
      },
    ],
  },
  bhubaneswar: {
    title: "Supratik Bhubaneswar (Completed)",
    developments: [
      {
        name: "Supratik Harmony-BJB Nagar",
        units: 16,
        image: "/images/property/property-1.jpg",
      },
      {
        name: "Supratik Exotica- Gothapatana",
        units: 84,
        image: "/images/property/property-2.jpg",
      },
      {
        name: "Supratik Elegance- Jagamara",
        units: 71,
        image: "/images/property/property-3.jpg",
      },
      {
        name: "Supratik Ecstacy- Gothapatana",
        units: 36,
        image: "/images/property/property-1.jpg",
      },
    ],
  },
};

export default function PropertyListing() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-medium mb-12 sm:mb-16 border-l-4 border-[#F15A24] pl-4">
          Supratik Project Details
        </h2>

        {/* Balasore Projects */}
        <div className="mb-16">
          <h3 className="text-base sm:text-lg font-medium mb-8 sm:mb-10">
            {projects.balasore.title}
          </h3>
          {projects.balasore.developments.map((development, idx) => (
            <div key={idx} className="mb-12 sm:mb-16">
              <div className="flex items-baseline mb-6 sm:mb-8">
                <h4 className="text-sm sm:text-base font-medium">
                  {development.name}
                </h4>
                <span className="text-xs sm:text-sm text-gray-600 ml-2">
                  [Total: {development.totalArea}]
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {development.properties.map((property, propIdx) => (
                  <div
                    key={propIdx}
                    className="group bg-white border border-gray-200 hover:border-[#F15A24] transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Overlay Content */}
                      <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-4 w-full">
                          <Link
                            href={`/property/${property.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-xs sm:text-sm text-white hover:text-[#F15A24] transition-colors duration-300 flex items-center justify-end gap-2"
                          >
                            View Details
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h5 className="text-sm sm:text-base font-medium text-gray-900 flex-1">
                            {property.name}
                          </h5>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 text-[#F15A24]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="text-xs sm:text-sm text-gray-600 ml-1.5">
                              {property.units} Units
                            </span>
                          </div>
                          <div className="h-4 w-px bg-gray-300"></div>
                          <span className="text-xs sm:text-sm text-[#F15A24] font-medium">
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bhubaneswar Projects */}
        <div>
          <h3 className="text-base sm:text-lg font-medium mb-8 sm:mb-10">
            {projects.bhubaneswar.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.bhubaneswar.developments.map((property, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 hover:border-[#F15A24] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 w-full">
                      <Link
                        href={`/property/${property.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-xs sm:text-sm text-white hover:text-[#F15A24] transition-colors duration-300 flex items-center justify-end gap-2"
                      >
                        View Details
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900 flex-1">
                        {property.name}
                      </h5>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-[#F15A24]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-xs sm:text-sm text-gray-600 ml-1.5">
                          {property.units} Units
                        </span>
                      </div>
                      <div className="h-4 w-px bg-gray-300"></div>
                      <span className="text-xs sm:text-sm text-[#F15A24] font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

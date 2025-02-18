import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Bhubaneswar",
    price: "₹1.2 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sq ft",
    image: "/images/property/property-1.jpg",
    status: "Ready to Move",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Cuttack",
    price: "₹65 L",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq ft",
    image: "/images/property/property-2.jpg",
    status: "Under Construction",
  },
  {
    id: 3,
    title: "Premium Duplex",
    location: "Bhubaneswar",
    price: "₹85 L",
    bedrooms: 3,
    bathrooms: 3,
    area: "2400 sq ft",
    image: "/images/property/property-3.jpg",
    status: "Ready to Move",
  },
];

export default function PropertyListing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-12 text-center">
          Featured <span className="text-[#F15A24]">Properties</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white  overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F15A24] text-white px-3 py-1 text-xs">
                  {property.status}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                  <div>
                    <span className="block">Bedrooms</span>
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                  <div>
                    <span className="block">Bathrooms</span>
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                  <div>
                    <span className="block">Area</span>
                    <span className="font-semibold">{property.area}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{property.price}</span>
                  <Link
                    href={`/property/${property.id}`}
                    className="bg-[#F15A24] text-white px-6 py-2 hover:bg-[#d14416] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
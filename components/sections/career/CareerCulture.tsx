import Image from "next/image";

const cultureImages = [
  "/images/career/culture-1.jpg",
  "/images/career/culture-2.jpg",
  "/images/career/culture-3.jpg",
  "/images/career/culture-4.jpg",
];

export default function CareerCulture() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-12 text-center">
          Our <span className="text-[#F15A24]">Culture</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square  overflow-hidden"
            >
              <Image
                src={image}
                alt={`Company culture image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
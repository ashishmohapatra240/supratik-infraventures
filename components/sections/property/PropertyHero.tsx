import Image from "next/image";


export default function PropertyHero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Discover Your <span className="text-[#F15A24]">Dream Property</span>
          </h1>
          <p className="text-xs md:text-sm leading-relaxed text-gray-600">
            Explore our collection of premium properties designed to elevate your
            lifestyle. From modern apartments to luxury villas, find your perfect
            home with Supratik.
          </p>
        </div>
        <div className="relative w-full h-[60vh]  overflow-hidden">
          <Image
            src="/images/property/hero.jpg"
            alt="Luxury Property"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
} 
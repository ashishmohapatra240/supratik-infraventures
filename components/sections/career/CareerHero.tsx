import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Join Our <span className="text-[#F15A24]">Team</span>
            </h1>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600">
              Be part of a dynamic team that&apos;s shaping the future of real
              estate development. At Supratik, we believe in fostering talent,
              encouraging innovation, and creating opportunities for growth.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/career/team.jpg"
              alt="Team at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

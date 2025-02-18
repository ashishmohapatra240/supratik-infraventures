import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/about/ceo.png"
              alt="CEO Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm md:text-lg leading-relaxed">
              A strong team is like a well built home, each member is a
              foundation, every effort a brick, and together, we create a space
              where dreams are nurtured and futures are built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

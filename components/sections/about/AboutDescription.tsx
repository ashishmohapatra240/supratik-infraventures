import Image from "next/image";

export default function AboutDescription() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">
              ABOUT <span className="text-[#F15A24]">SUPRATIK</span>{" "}
              INFFAVENTURE
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                At Supratik Inffaventure, we believe in more than just building
                structures; we create foundations for dreams, connections, and a
                better tomorrow. With a commitment to excellence and a passion
                for innovation, we craft spaces that resonate with comfort,
                elegance, and a deep sense of belonging.
              </p>
              <p className="text-gray-600">
                Rooted in trust and driven by a vision to redefine modern
                living, Suprati Inffaventure combines years of expertise with an
                unwavering dedication to quality. Each project we undertake is a
                testament to our promise of delivering not just homes but
                experiences that enrich lives and communities.
              </p>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/about/logo-3d.png"
              alt="Supratik 3D Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutDescription() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">
              ABOUT <span className="text-[#F15A24]">SUPRATIK</span>{" "}
              INFRAVENTURES
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                At Supratik Infraventures, we believe in more than just building
                structures; we create foundations for dreams, connections, and a
                better tomorrow. With a commitment to excellence and a passion
                for innovation, we craft spaces that resonate with comfort,
                elegance, and a deep sense of belonging.
              </p>
              <p className="text-gray-600">
                Rooted in trust and driven by a vision to redefine modern
                living, Supratik Infraventures combines years of expertise with
                an unwavering dedication to quality. Each project we undertake
                is a testament to our promise of delivering not just homes but
                experiences that enrich lives and communities.
              </p>
            </div>
          </div>
          <div className="relative h-[600px]">
            <video
              src="/videos/spin.mp4"
              autoPlay
              loop
              muted
              className="object-contain absolute top-0 left-0 z-[-1] w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

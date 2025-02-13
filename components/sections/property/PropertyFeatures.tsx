const features = [
  {
    title: "Premium Location",
    description: "Prime locations with excellent connectivity and amenities",
    icon: "🌍",
  },
  {
    title: "Modern Design",
    description: "Contemporary architecture with premium finishes",
    icon: "🏗️",
  },
  {
    title: "Security",
    description: "24/7 security with modern surveillance systems",
    icon: "🔒",
  },
  {
    title: "Amenities",
    description: "World-class amenities for modern lifestyle",
    icon: "🏊‍♂️",
  },
];

export default function PropertyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose Our <span className="text-[#F15A24]">Properties</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

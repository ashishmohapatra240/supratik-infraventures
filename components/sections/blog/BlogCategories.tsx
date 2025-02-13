const categories = [
  { name: "All", count: 12 },
  { name: "Real Estate", count: 5 },
  { name: "Construction", count: 3 },
  { name: "Interior Design", count: 2 },
  { name: "Market Trends", count: 2 },
];

export default function BlogCategories() {
  return (
    <section className="py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                index === 0
                  ? "bg-[#F15A24] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 
export default function CareerDescription() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-8">
            Why Choose <span className="text-[#F15A24]">Supratik</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Growth</h3>
              <p className="text-gray-500">
                Continuous learning and development opportunities for all
                employees
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Innovation</h3>
              <p className="text-gray-500">
                Work with cutting-edge technologies and modern methodologies
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Culture</h3>
              <p className="text-gray-500">
                Inclusive workplace that values diversity and collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

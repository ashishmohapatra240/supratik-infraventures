const positions = [
  {
    id: 1,
    title: "Project Manager",
    department: "Construction",
    location: "Bhubaneswar",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Site Engineer",
    department: "Engineering",
    location: "Cuttack",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Marketing Executive",
    department: "Marketing",
    location: "Bhubaneswar",
    type: "Full-time",
  },
];

export default function CareerPositions() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-12 text-center">
          Open <span className="text-[#F15A24]">Positions</span>
        </h2>
        <div className="space-y-6">
          {positions.map((position) => (
            <div
              key={position.id}
              className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{position.title}</h3>
                  <p className="text-gray-500">{position.department}</p>
                </div>
                <div className="mt-2 md:mt-0 space-y-1 md:space-y-0 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
                  <span className="text-xs text-gray-400">
                    {position.location}
                  </span>
                  <span className="text-xs text-gray-400">{position.type}</span>
                  <button className="bg-[#F15A24] text-white px-4 py-1 rounded hover:bg-[#d14416] transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

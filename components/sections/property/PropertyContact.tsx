export default function PropertyContact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Interested in our{" "}
            <span className="text-[#F15A24]">Properties?</span>
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Get in touch with our property experts for personalized assistance
            and detailed information about our projects.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F15A24] text-white px-8 py-3 rounded-lg hover:bg-[#d14416] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

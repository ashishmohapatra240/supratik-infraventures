export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 text-center">
            Send us a <span className="text-[#F15A24]">Message</span>
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#F15A24] text-white px-8 py-3  hover:bg-[#d14416] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 
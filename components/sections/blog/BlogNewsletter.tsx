export default function BlogNewsletter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Subscribe to Our <span className="text-[#F15A24]">Newsletter</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest blog posts, industry insights, and company
            news delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
            />
            <button
              type="submit"
              className="bg-[#F15A24] text-white px-8 py-3 hover:bg-[#d14416] transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 
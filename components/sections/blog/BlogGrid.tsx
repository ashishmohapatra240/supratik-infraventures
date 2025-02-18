import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Housing in India",
    excerpt:
      "Explore how sustainable building practices are shaping the future of residential development in India...",
    category: "Real Estate",
    date: "March 15, 2024",
    image: "/images/blog/blog-1.jpg",
    author: {
      name: "Pratik Jena",
      avatar: "/images/team/pratik.jpg",
    },
  },
  {
    id: 2,
    title: "Smart Home Technology Trends for 2024",
    excerpt:
      "Discover the latest smart home innovations that are transforming modern living spaces...",
    category: "Technology",
    date: "March 10, 2024",
    image: "/images/blog/blog-2.jpg",
    author: {
      name: "Sanat Mohanty",
      avatar: "/images/team/Sanat.jpg",
    },
  },
  {
    id: 3,
    title: "Investment Opportunities in Bhubaneswar Real Estate",
    excerpt:
      "An in-depth analysis of the growing real estate market in Bhubaneswar and upcoming opportunities...",
    category: "Market Trends",
    date: "March 5, 2024",
    image: "/images/blog/blog-3.jpg",
    author: {
      name: "Tannmaya",
      avatar: "/images/team/Tanmay.jpg",
    },
  },
];

export default function BlogGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-10 h-10 overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-[#F15A24] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#F15A24]">{post.category}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm font-medium text-gray-600 hover:text-[#F15A24] transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 
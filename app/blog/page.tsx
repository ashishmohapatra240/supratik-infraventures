import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogCategories from "@/components/sections/blog/BlogCategories";
import BlogNewsletter from "@/components/sections/blog/BlogNewsletter";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
} 
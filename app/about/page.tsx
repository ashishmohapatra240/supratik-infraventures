import AboutHero from "@/components/sections/about/AboutHero";
import TimelineCarousel from "@/components/sections/about/TimelineCarousel";
import Leadership from "@/components/sections/about/Leadership";
import AboutDescription from "@/components/sections/about/AboutDescription";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutDescription />
      <TimelineCarousel />
      <Leadership />
    </main>
  );
} 
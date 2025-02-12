// import Hero from "@/components/sections/Hero";
import PropertyShowcase from "@/components/sections/PropertyShowcase";
import BrandsShowcase from "@/components/sections/BrandsShowcase";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import LaunchingSection from "@/components/sections/LaunchingSection";

export default function Home() {
  return (
    <main>
      <LaunchingSection />
      {/* <Hero /> */}
      <PropertyShowcase />
      <BrandsShowcase />
      <Testimonials />
      <ContactSection />
    </main>
  );
}

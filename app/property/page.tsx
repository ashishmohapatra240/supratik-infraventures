import PropertyFeatures from "@/components/sections/property/PropertyFeatures";
import PropertyHero from "@/components/sections/property/PropertyHero";
import PropertyListing from "@/components/sections/property/PropertyListing";
import PropertyContact from "@/components/sections/property/PropertyContact";

export default function PropertyPage() {
  return (
    <main>
      <PropertyHero />
      <PropertyListing />
      <PropertyFeatures />
      <PropertyContact />
    </main>
  );
} 
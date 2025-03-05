"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { brands } from "@/data/brands";

export default function BrandsShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold">
            OUR <span className="text-[#F15A24]">PARTNERS</span>
          </h2>
        </div>

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          className="py-8"
        >
          <div className="flex items-center gap-16 mx-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

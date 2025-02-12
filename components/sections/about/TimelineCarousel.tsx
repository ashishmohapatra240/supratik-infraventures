"use client";
import { useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    id: 1,
    year: "1989",
    description:
      "Supratik Inffaventure combines years of expertise with an unwavering dedication to quality. Each project we undertake is a testament to our",
    images: ["/images/timeline/1989-1.jpg", "/images/timeline/1989-2.png"],
  },
  {
    id: 2,
    year: "1990",
    description:
      "Supratik  Inffaventure combines years of expertise with an unwavering dedication to quality. Each project we undertake is a testament to our",
    images: ["/images/timeline/1989-1.jpg", "/images/timeline/1989-2.png"],
  },
];

export default function TimelineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = timelineData[currentIndex];

  return (
    <section className="py-20 bg-[#004D40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-8xl font-bold mb-8">{currentItem.year}</h2>
            <p className="text-md">{currentItem.description}</p>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {currentItem.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Image
                    src={image}
                    alt={`Timeline image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Indicators */}
        <div className="flex justify-center gap-8 mt-16">
          {timelineData.map((_, index) => (
            <button
              key={index}
              className={`h-1 w-16 transition-colors ${
                index === currentIndex ? "bg-[#F15A24]" : "bg-white"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to year ${timelineData[index].year}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

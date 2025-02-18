"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
    images: ["/images/timeline/1990-1.jpg", "/images/timeline/1990-2.jpg"],
  },
];

export default function TimelineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-[#004D40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="select-none"
        >
          {timelineData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white">
                  <h2 className="text-8xl font-bold mb-8">{item.year}</h2>
                  <p className="text-md">{item.description}</p>
                </div>

                {/* Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {item.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-48 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                      >
                        <Image
                          src={image}
                          alt={`Timeline image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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

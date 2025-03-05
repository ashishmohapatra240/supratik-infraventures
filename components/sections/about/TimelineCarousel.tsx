"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const timelineData = [
  {
    id: 1,
    title: "Highland De La Mer Pvt. Ltd",
    description:
      "Highland De La Mer Pvt. Ltd., founded by Mr Pratik Jena in mid-2018, helped low-income aquaculture farmers in India's blue revolution. It focuses on maintaining quality and supply continuity, monitoring commercial and market trends, and upholding sustainability, ethics, and environmental considerations.",
    images: ["/images/timeline/1989-1.jpg", "/images/timeline/1989-2.png"],
  },
  {
    id: 2,
    title: "Ohm Pipes Pvt. Ltd",
    description:
      "Founded in 2013, OHM Pipes Pvt. Ltd is an acknowledged leader of India's plastics industry. Handling volumes of over 320 tonnes of polymers annually effectively makes it one of the largest PVC & HDPE processors in the North Odisha region.",
    images: ["/images/timeline/1990-1.jpg", "/images/timeline/1990-2.jpg"],
  },
  {
    id: 3,
    title: "Highland Agro",
    description:
      "Highland Agro Foods Pvt. Ltd, a Company incorporated under Company Act 2013, was established in the year 2022 with an aim to set up a world class shrimp processing unit at Balasore with state of art design and facilities.",
    images: ["/images/timeline/1990-1.jpg", "/images/timeline/1990-2.jpg"],
  },
  {
    id: 4,
    title: "Highland Health Club",
    description:
      "Elevate your fitness journey with our comprehensive facility. Experience high-energy Zumba, intense CrossFit Zone workouts, and optimize your results with premium supplements and GymX apparel. We believe in challenging you to discover your inner strength and achieve peak physical and mental performance. Step into a space designed for transformation.",
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
                  <h2 className="text-4xl font-bold mb-8">{item.title}</h2>
                  <p className="text-md">{item.description}</p>
                </div>

                {/* Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {item.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-48 transform rotate-2 hover:rotate-0 transition-transform duration-300 m-1"
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
              aria-label={`Go to year ${timelineData[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

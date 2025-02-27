"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/testimonial1.png",
    content:
      "I was blown away by the professionalism and dedication of Supratik Infraventures throughout my home-buying journey. They were incredibly knowledgeable about the market and were always available to answer my questions. They helped me find the perfect home for my family and made the entire process stress-free.",
    name: "Manisha T.",
    role: "Teacher",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonial2.png",
    content:
      "From the very first consultation, I felt like Supratik Infraventures truly understood my needs and aspirations. The team guided me at every step, making sure I found the perfect property. Their attention to detail and commitment to finding exactly what I wanted exceeded all expectations!",
    name: "Rajiv S.",
    role: "Businessman",
  },
  {
    id: 3,
    image: "/images/testimonials/testimonial3.png",
    content:
      "The team at Supratik Infraventures didn’t just sell me a property—they became partners in my journey. Their knowledge of the market, honest advice, and attention to detail made the entire experience stress-free. I now feel confident and excited about my investment.",
    name: "Arvind K.",
    role: "Property Investor",
  },
  {
    id: 4,
    image: "/images/testimonials/testimonial4.png",
    content:
      "What stood out most to me was how Supratik Infraventures made the entire process feel so personal. They listened to my hopes and really understood what I was looking for. They made the experience warm, comfortable, and enjoyable—something I’ll always remember.",
    name: "Rashmi M.",
    role: "Doctor",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-200 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-180"
              >
                <path
                  d="M13.5 19L20.5 12L13.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Testimonial Image and Content */}
            <div className="flex flex-col items-center">
              {/* Testimonial Image */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0  border-4 border-yellow-400" />
                <Image
                  src={testimonials[currentIndex].image}
                  alt="Testimonial"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-sm mb-6">
                {testimonials[currentIndex].content}
              </p>
              <p className="font-bold text-sm">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600 text-xs">{testimonials[currentIndex].role}</p>
            </div>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-200 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 19L20.5 12L13.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

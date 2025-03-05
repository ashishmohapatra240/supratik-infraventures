"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { properties } from "@/data/properties";

export default function PropertyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProperty = properties[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen flex items-center py-10 sm:py-20 px-4 sm:px-20">
      <div className="max-w-7xl mx-auto relative">
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none"
          style={{ width: "calc(100% + 4rem)", left: "-2rem" }}
        >
          <button
            onClick={handlePrevious}
            className="p-2 hover:text-[#F15A24] transition-colors pointer-events-auto"
            aria-label="Previous property"
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
          <button
            onClick={handleNext}
            className="p-2 hover:text-[#F15A24] transition-colors pointer-events-auto"
            aria-label="Next property"
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

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center justify-items-center">
          {/* Property Image */}
          <div className="relative h-[250px] sm:h-[300px] w-[400px] mx-auto">
            <Image
              src={currentProperty.image}
              alt={currentProperty.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Property Details */}
          <div className="space-y-4 sm:space-y-8 mx-auto">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {currentProperty.name}
              </h2>
              <p className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
                {currentProperty.size} | {currentProperty.type}
              </p>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 sm:gap-6 mx-auto">
              {currentProperty.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative w-5 sm:w-6 h-5 sm:h-6">
                    <Image
                      src={amenity.icon}
                      alt={amenity.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-600">{amenity.label}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 max-w-xl text-xs sm:text-sm mx-auto">
              {currentProperty.description}
            </p>

            <Button variant="text" href={`/property/${currentProperty.id}`} className="mx-auto">
              Discover
            </Button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 transition-colors ${
                index === currentIndex ? "bg-[#F15A24]" : "bg-gray-300"
              }`}
              aria-label={`Go to property ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function LaunchingSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date('2025-05-01T00:00:00').getTime();
      const now = Date.now();
      const difference = target - now;

      if (difference > 0) {
        // Convert to days, hours, minutes, seconds
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d,
          hours: h,
          minutes: m,
          seconds: s
        });
      }
    };

    // Run immediately and set up interval
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);

    // Cleanup
    return () => clearInterval(timerId);
  }, []);

  // Function to pad numbers with leading zero
  const padNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section className="md:py-48 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[300px] lg:h-[400px]">
            <video
              src="/videos/spin.mp4"
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                LAUNCHING&nbsp;
                <span className="text-[#F15A24]">SOON</span>
              </h2>
              <p className="text-sm text-gray-600">
                Get ready for something extraordinary. Our new project is about
                to transform your expectations.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold mb-2">
                  {padNumber(timeLeft.days)}
                </div>
                <div className="text-gray-600 uppercase text-sm">Days</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-2">
                  {padNumber(timeLeft.hours)}
                </div>
                <div className="text-gray-600 uppercase text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-2">
                  {padNumber(timeLeft.minutes)}
                </div>
                <div className="text-gray-600 uppercase text-sm">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-2">
                  {padNumber(timeLeft.seconds)}
                </div>
                <div className="text-gray-600 uppercase text-sm">Seconds</div>
              </div>
            </div>

            {/* Launch Date */}
            {/* <div className="pt-8">
              <p className="text-lg">
                Launch Date:{" "}
                <span className="text-[#F15A24] font-bold">
                  1 May 2025
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

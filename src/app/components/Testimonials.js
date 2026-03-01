"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Emma Thompson",
    text: "The Golden Teacher helped me gain clarity during a difficult time. Amazing quality and fast delivery.",
    role: "London, UK",
  },
  {
    name: "James Carter",
    text: "Microdose capsules are perfect for my daily routine. Subtle but powerful focus boost.",
    role: "Toronto, Canada",
  },
  {
    name: "Sophie Laurent",
    text: "Best Lion's Mane I've tried. Real cognitive support without jitters.",
    role: "Paris, France",
  },
  {
    name: "Liam Müller",
    text: "Discreet packaging and great customer service. Will order again.",
    role: "Berlin, Germany",
  },
  {
    name: "Olivia Rossi",
    text: "The experience with Penis Envy was profound. Thank you for the safe access.",
    role: "Milan, Italy",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // infinite reset (smooth loop)
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <section
      className="py-12 md:py-16 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-12">
          What Our Community Says
        </h2>

        <div className="relative overflow-hidden">
          {/* gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

          <motion.div
            ref={containerRef}
            className="flex gap-4 sm:gap-5 md:gap-6"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                className="
                    shrink-0
                    w-65 sm:w-70 md:w-75
                    bg-gray-50
                    p-5 sm:p-6
                    rounded-xl
                    shadow-sm
                    border border-gray-100
                    flex flex-col justify-between
                  "
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-4 line-clamp-5">
                  "{t.text}"
                </p>

                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

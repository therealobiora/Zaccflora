"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/wall-hero1.jpg"
        alt="Natural psychedelic wellness - mushroom inspired scene"
        fill
        className="object-cover object-center brightness-[0.85] scale-105 transition-transform duration-700"
        priority
        quality={90}
        sizes="100vw"
      />

      {/* Overlay + Content */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/70 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl text-center text-white flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 md:py-16 lg:py-20">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Natural Psychedelic Wellness, Redefined.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl opacity-90 font-light leading-relaxed">
            Explore nature-powered experiences designed to inspire clarity,
            creativity, and conscious living.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              mt-4 sm:mt-6 inline-flex items-center justify-center
              rounded-full bg-[#27ae60] px-7 sm:px-10 py-3.5 sm:py-4
              text-base sm:text-lg md:text-xl font-semibold text-white
              shadow-lg hover:bg-[#219653] hover:shadow-xl hover:-translate-y-1
              active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50
            "
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

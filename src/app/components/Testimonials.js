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
  return (
    <section
      id="testimonials"
      className="py-16 md:py-16 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          What Our Community Says
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex animate-slide gap-5 sm:gap-6 md:gap-8"
              style={{ willChange: "transform" }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map(
                (t, i) => (
                  <div
                    key={i}
                    className={`
  min-w-40 sm:min-w-85 md:min-w-95
  h-50 sm:h-50 md:h-60
  bg-gray-50 p-6 sm:p-8 rounded-2xl
  shadow-md border border-gray-100 shrink-0
  flex flex-col justify-between
`}
                  >
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl italic mb-5 md:mb-6 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-base md:text-lg">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-sm md:text-base">
                        {t.role}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          } /* changed from -50% because we tripled content */
        }
        .animate-slide {
          animation: slide 15s linear infinite; /* slower for readability - adjust to 25s-45s as you like */
        }
        .group:hover .animate-slide {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

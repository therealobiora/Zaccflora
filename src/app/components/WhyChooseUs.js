const reasons = [
  {
    number: "01",
    title: "International Shipping Available",
    description:
      "We work with trusted logistics partners to serve customers worldwide.",
  },
  {
    number: "02",
    title: "Reliable Fulfillment",
    description:
      "Orders are processed efficiently and handled with care and discretion.",
  },
  {
    number: "03",
    title: "Quality-Focused Selection",
    description:
      "Products are sourced thoughtfully with attention to standards and consistency.",
  },
  {
    number: "04",
    title: "Privacy & Trust",
    description:
      "Customer confidentiality and secure handling are a top priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          WHY CHOOSE US
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                group relative bg-white rounded-xl p-7 md:p-8
                border border-gray-100 shadow-sm hover:shadow-xl
                hover:-translate-y-2 transition-all duration-300
                overflow-hidden
              "
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#27ae60] opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Number badge */}
              <div
                className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-full bg-[#27ae60]/10 text-[#27ae60]
                font-bold text-lg mb-5
              "
              >
                {reason.number}
              </div>

              <h3
                className="
                text-xl md:text-2xl font-semibold text-gray-900 mb-4
                group-hover:text-[#27ae60] transition-colors
              "
              >
                {reason.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

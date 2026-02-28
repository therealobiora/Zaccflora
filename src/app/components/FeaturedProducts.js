import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Golden Teacher",
    description: "Associated with reflection and inner awareness.",
    imageSrc: "/images/Golden.jpg",
  },
  {
    name: "Penis Envy",
    description: "Known for deep reflection and inner insight.",
    imageSrc: "/images/PENISENVY.jpg",
  },
  {
    name: "Microdose Capsules",
    description: "Convenient, pre-measured capsules for easy use.",
    imageSrc: "/images/Micro.jpg",
  },
  {
    name: "DMT VAPE",
    description: "Portable and ready-to-use format.",
    imageSrc: "/images/DMTVAPE.jpg",
  },
  {
    name: "DMT",
    description: "Pure crystalline form for experienced users.",
    imageSrc: "/images/DMT.png",
  },
  {
    name: "LSD",
    description: "Create moments that encourage reflection and connection.",
    imageSrc: "/images/LSD.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="menu" className="py-15 md:py-12 lg:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-15">
          <p className="text-[#27ae60] font-medium uppercase tracking-wider text-sm md:text-base">
            Crafted For You
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            More High-Quality Products
          </h2>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-5 xl:gap-12">
          {products.map((product, index) => (
            <figure
              key={index}
              className="
    group bg-white rounded-2xl overflow-hidden
    border border-gray-100 shadow-md hover:shadow-2xl
    transition-all duration-300 ease-out
    flex flex-col max-h-120 md:max-h-125 lg:max-h-115
  "
            >
              <div className="relative aspect-4/3 md:aspect-4/5 lg:aspect-4/5 overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={`${product.name} product`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
              </div>

              <figcaption className="p-5 md:p-6 lg:p-6 flex flex-col text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-2 group-hover:text-[#27ae60] transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-5 grow">
                  {product.description}
                </p>

                <Link
                  href="#contact"
                  className="
        mt-auto inline-flex items-center justify-center
        rounded-full bg-[#27ae60] px-7 py-3
        text-sm md:text-base font-semibold text-white
        shadow-md hover:bg-[#219653] hover:shadow-lg
        hover:-translate-y-1 active:scale-95
        transition-all duration-300
      "
                >
                  Buy Now
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

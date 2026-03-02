import Image from "next/image";

const products = [
  {
    name: "Psilocybin Mushrooms",
    image: "/images/wall1.jpg",
  },
  {
    name: "DMT 100% Pure",
    image: "/images/wall2.jpeg",
  },
  {
    name: "Chocolate Bars",
    image: "/images/wall3.jpg",
  },
  {
    name: "Tinctures",
    image: "/images/wall4.jpg",
  },
  {
    name: "Lion's Mane",
    image: "/images/wall5.jpg",
  },
  {
    name: "LSD",
    image: "/images/wall6.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Circle – smaller on mobile, grows on larger screens */}
              <div
                className="
                relative w-20 h-20
                xs:w-24 xs:h-24              
                sm:w-32 sm:h-32              
                md:w-40 md:h-40              
                lg:w-44 lg:h-44           
                mb-2 sm:mb-3 md:mb-4
                overflow-hidden rounded-full
                border-2 border-gray-200
                shadow-sm
                group-hover:shadow-md
                group-hover:border-[#2596be]
                transition-all duration-300
              "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 176px"
                />
              </div>

              {/* Product name – smaller text on mobile */}
              <h3
                className="
                text-xs leading-tight           /* mobile */
                xs:text-sm
                sm:text-base
                md:text-lg
                font-medium text-gray-900
                group-hover:text-[#2596be]
                transition-colors
                px-1
              "
              >
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

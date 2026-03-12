import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-6 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Zaccflora
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Zaccflora, we believe in the transformative power of nature.
              Our mission is to provide premium, responsibly sourced
              mushroom-based wellness products that support mental clarity,
              creativity, and conscious living.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a passion for natural psychedelics and functional
              mushrooms, we prioritize quality, transparency, and education —
              helping people explore safe, intentional experiences.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
              <Image
                src="/images/wallhero3.jpg"
                alt="Mushroom wellness"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

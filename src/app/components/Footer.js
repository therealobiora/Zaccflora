import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid gap-10 py-12 md:py-16 lg:grid-cols-3 lg:gap-12">
          {/* Brand / Logo column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <a href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="MyShroomWall"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </a>
            <p className="text-sm md:text-base leading-relaxed max-w-md opacity-90">
              Natural psychedelic wellness — carefully sourced mushroom-inspired
              products for clarity, creativity, and conscious living.
            </p>
          </div>

          {/* Quick as */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
              Quick as
            </h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-sm md:text-base">
              <a
                href="https://t.me/myshroomwall"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#27ae60] transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/18583740774"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#27ae60] transition-colors"
              >
                Whatsapp
              </a>
              <a
                href="mailto:myshroomwall@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#27ae60] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Zaccflora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid gap-10 py-12 md:py-16 lg:grid-cols-3 lg:gap-12">
          {/* Brand / Logo column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="MyShroomWall"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm md:text-base leading-relaxed max-w-md opacity-90">
              Natural psychedelic wellness — carefully sourced mushroom-inspired
              products for clarity, creativity, and conscious living.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              <li>
                <Link
                  href="#menu"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-[#27ae60] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-sm md:text-base">
              <Link href="#" className="hover:text-[#27ae60] transition-colors">
                Telegram
              </Link>
              <Link href="#" className="hover:text-[#27ae60] transition-colors">
                Whatsapp
              </Link>
              <Link href="#" className="hover:text-[#27ae60] transition-colors">
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <p>© {currentYear} MyShroomWall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

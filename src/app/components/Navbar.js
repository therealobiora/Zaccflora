"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#27ae60] shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - increased size */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="MyShroomWall - Natural wellness with mushrooms"
            className="h-11 w-auto md:h-14 lg:h-16 object-contain" // ← larger on desktop
          />
        </Link>

        {/* Desktop Navigation - centered in middle */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <nav className="flex items-center gap-8 lg:gap-10 text-white font-medium">
            <Link
              href="#home"
              className="hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-white/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="#menu"
              className="hover:text-white/80 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="#contact"
              className="hover:text-white/80 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Desktop CTA - right side */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="#contact" // or "/shop"
            className="
              rounded-xl bg-white px-6 py-2.5 text-sm font-semibold
              text-[#27ae60] shadow-sm hover:bg-gray-100 active:scale-95
              transition-all duration-200
            "
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-[#27ae60]/95 backdrop-blur-sm border-t border-white/10
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-6 px-4 text-white font-medium">
          <Link
            href="#home"
            className="hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#menu"
            className="hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="hover:text-white/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="#contact"
            className="
              mt-4 w-full max-w-xs text-center rounded-xl bg-white px-8 py-3.5
              text-base font-semibold text-[#27ae60] shadow hover:bg-gray-100
              active:scale-95 transition-all duration-200
            "
            onClick={() => setIsMenuOpen(false)}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

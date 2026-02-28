"use client";

import ScrollReveal from "./ScrollReveal";

export default function SectionReveal({
  children,
  className = "",
  revealDelay = "delay-200",
  revealDirection = "up",
  sectionClassName = "py-3 sm:py-6 md:py-3 lg:py-5 bg-white",
}) {
  return (
    <section className={`${sectionClassName} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal
          direction={revealDirection}
          delay={revealDelay}
          duration="duration-700"
        >
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}

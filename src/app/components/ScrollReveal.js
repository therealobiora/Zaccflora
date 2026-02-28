"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = "delay-100",
  duration = "duration-700",
  direction = "up",
  threshold = 0.15,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  const base = "transition-all ease-out";
  const visible = "opacity-100 translate-x-0 translate-y-0";

  const hidden = {
    up: "opacity-0 translate-y-16",
    down: "opacity-0 -translate-y-16",
    left: "opacity-0 -translate-x-16",
    right: "opacity-0 translate-x-16",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`${base} ${duration} ${delay} ${
        isVisible ? visible : hidden[direction] || "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

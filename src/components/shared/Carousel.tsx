"use client";

import { useRef, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  /** Optional class for the scrollable inner container */
  className?: string;
  /** Gap between items (Tailwind gap class) */
  gap?: string;
  /** Fade width at edges (Tailwind width class, e.g. w-12 or w-16) */
  fadeWidth?: string;
}

export function Carousel({
  children,
  className = "",
  gap = "gap-4",
  fadeWidth = "w-16",
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const updateFade = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeftFade(scrollLeft > 8);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateFade();
    el.addEventListener("scroll", updateFade);
    const ro = new ResizeObserver(updateFade);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateFade);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollRef}
        className={`overflow-x-auto overflow-y-hidden flex ${gap} scroll-smooth scrollbar-hide py-1 px-1`}
      >
        {children}
      </div>
      {/* Left fade */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 bottom-0 ${fadeWidth} bg-gradient-to-r from-dark to-transparent transition-opacity duration-300 ${
          showLeftFade ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Right fade */}
      <div
        aria-hidden
        className={`pointer-events-none absolute right-0 top-0 bottom-0 ${fadeWidth} bg-gradient-to-l from-dark to-transparent transition-opacity duration-300 ${
          showRightFade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

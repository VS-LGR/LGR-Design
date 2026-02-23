"use client";

import { useState, useEffect } from "react";

const INTRO_DURATION_MS = 2400;

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(false), INTRO_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center px-6">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight"
          style={{
            animation: "intro-text 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
          }}
        >
          Lucas Gabriel Rodrigues
        </h2>
        <p
          className="mt-3 text-accent font-medium text-sm sm:text-base md:text-lg"
          style={{
            animation: "intro-text 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both",
          }}
        >
          UX Design &amp; Web Design
        </p>
      </div>
    </div>
  );
}

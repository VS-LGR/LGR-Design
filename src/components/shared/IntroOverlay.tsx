"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { isIntroDone, markIntroDone } from "@/lib/introSession";

const INTRO_DURATION_MS = 2400;

export function IntroOverlay() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isIntroDone()) {
      return;
    }

    setVisible(true);
    const timer = window.setTimeout(() => {
      setExiting(true);
      markIntroDone();
      window.setTimeout(() => setVisible(false), 700);
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark transition-opacity duration-700 ease-out ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
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
          {t.intro.tagline}
        </p>
      </div>
    </div>
  );
}

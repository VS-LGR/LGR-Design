"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";

type AtelierWaterTransitionProps = {
  reducedMotion?: boolean;
};

const WATER_PARTICLES = [
  { left: "6%", size: 5, delay: 0.1, duration: 3.2 },
  { left: "12%", size: 9, delay: 0.4, duration: 2.8 },
  { left: "19%", size: 6, delay: 0.0, duration: 3.5 },
  { left: "27%", size: 11, delay: 0.7, duration: 2.6 },
  { left: "34%", size: 7, delay: 0.25, duration: 3.1 },
  { left: "41%", size: 5, delay: 0.9, duration: 2.9 },
  { left: "48%", size: 10, delay: 0.15, duration: 3.4 },
  { left: "55%", size: 6, delay: 0.55, duration: 2.7 },
  { left: "62%", size: 8, delay: 0.35, duration: 3.0 },
  { left: "69%", size: 5, delay: 0.8, duration: 2.5 },
  { left: "76%", size: 12, delay: 0.2, duration: 3.3 },
  { left: "83%", size: 7, delay: 0.65, duration: 2.8 },
  { left: "90%", size: 9, delay: 0.05, duration: 3.1 },
  { left: "15%", size: 4, delay: 1.1, duration: 2.4 },
  { left: "52%", size: 5, delay: 1.3, duration: 2.6 },
  { left: "72%", size: 6, delay: 1.0, duration: 2.9 },
  { left: "8%", size: 8, delay: 1.5, duration: 3.2 },
  { left: "38%", size: 5, delay: 1.7, duration: 2.7 },
  { left: "58%", size: 7, delay: 0.45, duration: 3.0 },
  { left: "86%", size: 4, delay: 1.2, duration: 2.5 },
  { left: "23%", size: 6, delay: 1.8, duration: 2.8 },
  { left: "45%", size: 9, delay: 0.6, duration: 3.2 },
  { left: "66%", size: 5, delay: 1.4, duration: 2.6 },
  { left: "94%", size: 7, delay: 0.3, duration: 3.0 },
] as const;

const FALLBACK_MS = 2800;

/**
 * Transição Wave Fill (Lottie) + partículas de água em overlay.
 * Sem fill CSS opaco (evita a “barra preta”).
 */
export function AtelierWaterTransition({
  reducedMotion = false,
}: AtelierWaterTransitionProps) {
  const [showLottie, setShowLottie] = useState(!reducedMotion);
  const [particlesSoft, setParticlesSoft] = useState(false);
  const finishedRef = useRef(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    document.documentElement.classList.add("atelier-immersive--settled");
    document.documentElement.classList.add("atelier-immersive--water-done");
    setShowLottie(false);
    setParticlesSoft(true);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add("atelier-immersive--settled");
      return;
    }

    const fallback = window.setTimeout(finish, FALLBACK_MS);
    return () => window.clearTimeout(fallback);
  }, [reducedMotion, finish]);

  useEffect(() => {
    if (!dotLottie || reducedMotion) return;
    const onComplete = () => finish();
    dotLottie.addEventListener("complete", onComplete);
    return () => dotLottie.removeEventListener("complete", onComplete);
  }, [dotLottie, finish, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="atelier-water-overlay pointer-events-none fixed inset-0 z-[25]"
      aria-hidden
    >
      {showLottie ? (
        <div className="absolute inset-0 overflow-hidden [&_canvas]:h-full [&_canvas]:w-full">
          <DotLottieReact
            src="/atelie/wave-fill.lottie"
            autoplay
            loop={false}
            className="h-full w-full"
            style={{ width: "100%", height: "100%" }}
            dotLottieRefCallback={setDotLottie}
          />
        </div>
      ) : null}

      <div
        className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${
          particlesSoft ? "opacity-40" : "opacity-100"
        }`}
      >
        {WATER_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="atelier-water-particle absolute bottom-0 rounded-full border border-accent/40 bg-accent/20"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

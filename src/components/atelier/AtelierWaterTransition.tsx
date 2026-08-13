"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";

type AtelierWaterTransitionProps = {
  reducedMotion?: boolean;
};

const WATER_PARTICLES = [
  { left: "4%", size: 6, delay: 0.05, duration: 1.8 },
  { left: "11%", size: 10, delay: 0.2, duration: 1.55 },
  { left: "18%", size: 7, delay: 0.0, duration: 1.9 },
  { left: "26%", size: 12, delay: 0.35, duration: 1.45 },
  { left: "33%", size: 8, delay: 0.12, duration: 1.7 },
  { left: "41%", size: 5, delay: 0.45, duration: 1.6 },
  { left: "48%", size: 11, delay: 0.08, duration: 1.85 },
  { left: "55%", size: 7, delay: 0.28, duration: 1.5 },
  { left: "62%", size: 9, delay: 0.18, duration: 1.65 },
  { left: "69%", size: 6, delay: 0.4, duration: 1.4 },
  { left: "76%", size: 13, delay: 0.1, duration: 1.8 },
  { left: "83%", size: 8, delay: 0.32, duration: 1.55 },
  { left: "90%", size: 10, delay: 0.02, duration: 1.7 },
  { left: "15%", size: 5, delay: 0.55, duration: 1.35 },
  { left: "52%", size: 6, delay: 0.65, duration: 1.45 },
  { left: "72%", size: 7, delay: 0.5, duration: 1.6 },
  { left: "8%", size: 9, delay: 0.72, duration: 1.75 },
  { left: "38%", size: 5, delay: 0.8, duration: 1.5 },
  { left: "58%", size: 8, delay: 0.22, duration: 1.65 },
  { left: "86%", size: 5, delay: 0.58, duration: 1.4 },
  { left: "23%", size: 7, delay: 0.85, duration: 1.55 },
  { left: "45%", size: 10, delay: 0.3, duration: 1.75 },
  { left: "66%", size: 6, delay: 0.68, duration: 1.45 },
  { left: "94%", size: 8, delay: 0.15, duration: 1.65 },
] as const;

/** Animação base ~5.55s → speed 3 ≈ 1.85s */
const PLAYBACK_SPEED = 3;
const FALLBACK_MS = 2200;
const LAYOUT = { fit: "cover" as const, align: [0.5, 0.5] as [number, number] };

/**
 * Wave Fill fullscreen (portal no body — evita containing block do .animate-in)
 * + partículas de água em overlay.
 */
export function AtelierWaterTransition({
  reducedMotion = false,
}: AtelierWaterTransitionProps) {
  const [mounted, setMounted] = useState(false);
  const [showLottie, setShowLottie] = useState(!reducedMotion);
  const [particlesSoft, setParticlesSoft] = useState(false);
  const finishedRef = useRef(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    const applyLayout = () => {
      dotLottie.setLayout?.(LAYOUT);
      dotLottie.setSpeed?.(PLAYBACK_SPEED);
      dotLottie.resize?.();
    };

    applyLayout();
    const onReady = () => applyLayout();
    const onComplete = () => finish();
    const onResize = () => {
      dotLottie.resize?.();
      dotLottie.setLayout?.(LAYOUT);
    };

    dotLottie.addEventListener("ready", onReady);
    dotLottie.addEventListener("complete", onComplete);
    window.addEventListener("resize", onResize);

    return () => {
      dotLottie.removeEventListener("ready", onReady);
      dotLottie.removeEventListener("complete", onComplete);
      window.removeEventListener("resize", onResize);
    };
  }, [dotLottie, finish, reducedMotion]);

  if (reducedMotion || !mounted) return null;

  return createPortal(
    <div
      className="atelier-water-overlay pointer-events-none fixed inset-0 z-[60]"
      aria-hidden
    >
      {showLottie ? (
        <div className="atelier-water-lottie absolute inset-0 h-[100dvh] w-[100vw] overflow-hidden">
          <DotLottieReact
            src="/atelie/wave-fill.lottie"
            autoplay
            loop={false}
            speed={PLAYBACK_SPEED}
            layout={LAYOUT}
            className="h-full w-full"
            style={{ width: "100%", height: "100%", display: "block" }}
            dotLottieRefCallback={setDotLottie}
          />
        </div>
      ) : null}

      <div
        className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
          particlesSoft ? "opacity-35" : "opacity-100"
        }`}
      >
        {WATER_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="atelier-water-particle absolute bottom-0 rounded-full border border-accent/45 bg-accent/25"
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
    </div>,
    document.body
  );
}

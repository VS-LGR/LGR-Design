"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { AtelierPiece } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type AtelierSurfaceHeroProps = {
  piece: AtelierPiece;
};

const BUBBLES = [
  { left: "8%", size: 10, delay: 0.05, duration: 2.4 },
  { left: "18%", size: 6, delay: 0.35, duration: 2.1 },
  { left: "28%", size: 14, delay: 0.15, duration: 2.8 },
  { left: "42%", size: 8, delay: 0.55, duration: 2.2 },
  { left: "55%", size: 12, delay: 0.25, duration: 2.6 },
  { left: "68%", size: 7, delay: 0.7, duration: 2.0 },
  { left: "78%", size: 11, delay: 0.4, duration: 2.5 },
  { left: "88%", size: 9, delay: 0.2, duration: 2.3 },
  { left: "14%", size: 5, delay: 0.9, duration: 1.9 },
  { left: "72%", size: 6, delay: 1.0, duration: 2.1 },
] as const;

/**
 * Hero do Ateliê: render sobe da “superfície” com bolhas, depois o texto entra.
 * Prefers-reduced-motion → estado final estático.
 */
export function AtelierSurfaceHero({ piece }: AtelierSurfaceHeroProps) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"idle" | "rising" | "settled">(
    reduced ? "settled" : "idle"
  );

  useEffect(() => {
    if (reduced) {
      setPhase("settled");
      return;
    }

    const start = window.setTimeout(() => setPhase("rising"), 80);
    const settle = window.setTimeout(() => setPhase("settled"), 1800);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(settle);
    };
  }, [reduced]);

  const showMotion = !reduced && phase !== "idle";
  const showCopy = phase === "settled" || reduced;

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl border border-border-dark/45 bg-[#05080f]"
        aria-hidden={false}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-70"
          style={{
            background:
              "linear-gradient(to top, rgba(34,184,207,0.08), transparent 70%)",
          }}
          aria-hidden
        />

        {!reduced ? (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {BUBBLES.map((b, i) => (
              <span
                key={i}
                className={`atelier-bubble absolute bottom-0 rounded-full border border-accent/35 bg-accent/15 ${
                  showMotion ? "atelier-bubble-rise" : "opacity-0"
                }`}
                style={{
                  left: b.left,
                  width: b.size,
                  height: b.size,
                  animationDelay: `${b.delay}s`,
                  animationDuration: `${b.duration}s`,
                }}
              />
            ))}
          </div>
        ) : null}

        <div
          className={`relative mx-auto flex max-w-3xl items-end justify-center px-4 pt-10 pb-6 sm:px-8 sm:pt-14 sm:pb-8 ${
            showMotion || reduced ? "atelier-surface-image-in" : "opacity-0 translate-y-[45%]"
          }`}
        >
          <Image
            src={piece.image.src}
            alt={piece.image.alt}
            width={1200}
            height={900}
            priority
            className="h-auto w-full max-w-2xl object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      </div>

      <div
        className={`mt-8 md:mt-10 max-w-3xl mx-auto px-1 ${
          showCopy
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } transition-[opacity,transform] duration-700 ease-out`}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-3">
          {piece.kicker}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight text-balance">
          {piece.title}
        </h1>
        <p className="mt-4 text-base text-muted leading-relaxed">{piece.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {piece.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border-dark/50 bg-surface/30 px-2.5 py-1 text-[11px] font-medium text-primary/90"
            >
              {tag}
            </span>
          ))}
        </div>
        {piece.tools.length > 0 ? (
          <p className="mt-4 text-xs text-muted">
            {piece.tools.join(" · ")}
          </p>
        ) : null}
        <div className="mt-6 space-y-4">
          {piece.description.map((para) => (
            <p key={para} className="text-sm md:text-base text-primary/85 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

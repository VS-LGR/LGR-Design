"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Distância do centro aos módulos (px); suficiente para toque ≥ 44px entre nós. */
const ORBIT_RADIUS_PX = 118;

type Module = {
  href: string;
  label: string;
  short: string;
  dx: number;
  dy: number;
};

export function SystemHub() {
  const { t } = useLocale();
  const reducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const centralRef = useRef<HTMLButtonElement>(null);
  const hubHeadingId = useId();
  const hubDescId = useId();

  const modules: Module[] = [
    {
      href: "/projetos",
      label: t.system.goProjects,
      short: t.nav.projects,
      dx: 0,
      dy: -1,
    },
    {
      href: "/historia",
      label: t.system.goStory,
      short: t.nav.story,
      dx: 1,
      dy: 0,
    },
    {
      href: "/como-trabalho",
      label: t.system.goWork,
      short: t.nav.work,
      dx: 0,
      dy: 1,
    },
    {
      href: "/exploracao",
      label: t.system.goExploration,
      short: t.nav.exploration,
      dx: -1,
      dy: 0,
    },
  ];

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  const delayOpen = (i: number) => (reducedMotion ? 0 : i * 75);
  const delayClose = (i: number) => (reducedMotion ? 0 : (modules.length - 1 - i) * 45);
  const duration = reducedMotion ? 120 : 520;
  const easing = "cubic-bezier(0.87, -0.41, 0.19, 1.44)";
  const R = ORBIT_RADIUS_PX;

  return (
    <section
      className="system-hub flex flex-col items-center justify-center min-h-[min(85dvh,720px)] py-10 px-4"
      aria-labelledby={hubHeadingId}
      aria-describedby={hubDescId}
    >
      <div className="text-center max-w-md mb-10 md:mb-12 space-y-2">
        <h1
          id={hubHeadingId}
          className="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        >
          {t.system.hubTitle}
        </h1>
        <p id={hubDescId} className="text-sm md:text-base text-muted leading-relaxed">
          {t.system.hubSubtitle}
        </p>
      </div>

      <div className="relative w-[min(100vw-2rem,380px)] h-[min(100vw-2rem,380px)] md:w-[400px] md:h-[400px]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 bg-accent/5 pointer-events-none"
          aria-hidden
          style={{
            width: R * 2 + 88,
            height: R * 2 + 88,
            opacity: open ? 0.5 : 0.15,
            transition: `opacity ${reducedMotion ? 80 : 400}ms ease`,
          }}
        />

        <div id="system-hub-modules" role="group" aria-label={t.system.hubTitle}>
          {modules.map((mod, i) => {
            const tx = mod.dx * R;
            const ty = mod.dy * R;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                aria-label={mod.label}
                className={`
                  system-hub-satellite absolute left-1/2 top-1/2 z-[1]
                  flex min-h-12 min-w-12 md:min-h-14 md:min-w-14 h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full
                  border border-accent/40 bg-surface/90 text-[10px] md:text-xs font-semibold text-accent
                  shadow-lg shadow-black/30 focus-ring
                  hover:border-accent/70 hover:bg-accent/15 hover:text-primary
                  ${open ? "pointer-events-auto" : "pointer-events-none"}
                `}
                style={{
                  transform: open
                    ? `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`
                    : "translate(-50%, -50%) scale(0.65)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  transitionDuration: `${duration}ms`,
                  transitionTimingFunction: easing,
                  transitionDelay: `${open ? delayOpen(i) : delayClose(i)}ms`,
                }}
                onClick={() => setOpen(false)}
              >
                <span className="px-1 text-center leading-tight max-w-[3.5rem]">{mod.short}</span>
              </Link>
            );
          })}
        </div>

        <button
          ref={centralRef}
          type="button"
          aria-expanded={open}
          aria-controls="system-hub-modules"
          aria-label={open ? t.system.toggleCollapse : t.system.toggleExpand}
          onClick={() => setOpen((v) => !v)}
          className="system-hub-core absolute left-1/2 top-1/2 z-[2] h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full
            border-2 border-accent/50 bg-dark/90 text-accent font-semibold
            shadow-[0_0_32px_-6px_rgba(6,182,212,0.45)] focus-ring
            hover:border-accent hover:bg-accent/10 transition-colors duration-200"
        >
          <span className="flex flex-col items-center justify-center gap-1" aria-hidden>
            <span className="flex flex-col gap-1 w-5">
              <span className="block h-0.5 w-full bg-accent rounded-full" />
              <span className="block h-0.5 w-full bg-accent rounded-full" />
              <span className="block h-0.5 w-5 bg-accent rounded-full mx-auto" />
            </span>
          </span>
        </button>
      </div>

    </section>
  );
}

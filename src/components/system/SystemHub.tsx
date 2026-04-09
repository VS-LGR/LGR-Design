"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Raio da órbita (centro → centro de cada satélite). */
const ORBIT_R = { base: 140, md: 158 } as const;

type Module = {
  href: string;
  label: string;
  short: string;
  dx: number;
  dy: number;
};

function SatelliteLabel({
  href,
  short,
  locale,
}: {
  href: string;
  short: string;
  locale: "pt" | "en";
}) {
  if (href === "/como-trabalho") {
    const lines =
      locale === "pt" ? ["Como", "trabalho"] : ["How I", "work"];
    return (
      <span className="flex flex-col items-center justify-center gap-0 text-center">
        {lines.map((line) => (
          <span key={line} className="block max-w-[5rem] leading-[1.12]">
            {line}
          </span>
        ))}
      </span>
    );
  }
  return (
    <span className="block max-w-[5.25rem] text-center leading-snug text-balance hyphens-none px-0.5">
      {short}
    </span>
  );
}

export function SystemHub() {
  const { t, locale } = useLocale();
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

  const [orbitPx, setOrbitPx] = useState(ORBIT_R.base);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setOrbitPx(mq.matches ? ORBIT_R.md : ORBIT_R.base);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  const delayOpen = (i: number) => (reducedMotion ? 0 : i * 48);
  const delayClose = (i: number) => (reducedMotion ? 0 : (modules.length - 1 - i) * 32);
  const durationOpen = reducedMotion ? 120 : 640;
  const durationClose = reducedMotion ? 100 : 480;
  const easeOpen = "cubic-bezier(0.22, 1, 0.36, 1)";
  const easeClose = "cubic-bezier(0.4, 0, 0.2, 1)";

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

      <div className="relative w-[min(100vw-1.5rem,400px)] h-[min(100vw-1.5rem,400px)] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 bg-accent/5 pointer-events-none system-hub-orbit-ring"
          aria-hidden
          style={{
            width: orbitPx * 2 + 112,
            height: orbitPx * 2 + 112,
            opacity: open ? 0.55 : 0.12,
            transition: `opacity ${reducedMotion ? 100 : 520}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        />

        <div id="system-hub-modules" role="group" aria-label={t.system.hubTitle}>
          {modules.map((mod, i) => {
            const tx = mod.dx * orbitPx;
            const ty = mod.dy * orbitPx;
            const dur = open ? durationOpen : durationClose;
            const ease = open ? easeOpen : easeClose;

            return (
              <Link
                key={mod.href}
                href={mod.href}
                aria-label={mod.label}
                className={`
                  system-hub-satellite absolute left-1/2 top-1/2 z-[1]
                  flex min-h-[3.75rem] min-w-[3.75rem] sm:min-h-[5.5rem] sm:min-w-[5.5rem] md:min-h-[7rem] md:min-w-[7rem]
                  max-w-[6.5rem] md:max-w-[7.5rem] items-center justify-center rounded-full
                  border border-accent/45 bg-surface/95 text-[10px] sm:text-[11px] md:text-xs font-semibold text-accent
                  shadow-lg shadow-black/35 focus-ring
                  hover:border-accent/75 hover:bg-accent/12 hover:text-primary
                  px-2 py-2 md:px-3 md:py-2.5
                  ${open ? "pointer-events-auto" : "pointer-events-none"}
                `}
                style={{
                  transform: open
                    ? `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1)`
                    : "translate(-50%, -50%) scale(0.72)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  transitionDuration: `${dur}ms`,
                  transitionTimingFunction: ease,
                  transitionDelay: `${open ? delayOpen(i) : delayClose(i)}ms`,
                }}
                onClick={() => setOpen(false)}
              >
                <SatelliteLabel href={mod.href} short={mod.short} locale={locale} />
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
          className="system-hub-core absolute left-1/2 top-1/2 z-[2] h-[4.25rem] w-[4.25rem] md:h-[4.75rem] md:w-[4.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full
            border-2 border-accent/50 bg-dark/90 text-accent font-semibold
            shadow-[0_0_32px_-6px_rgba(6,182,212,0.45)] focus-ring
            hover:border-accent hover:bg-accent/10
            transition-[border-color,background-color,box-shadow] duration-300 ease-out"
        >
          <span className="flex h-full w-full items-center justify-center" aria-hidden>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-accent transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open
                    ? "top-[7px] rotate-45"
                    : "top-0 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-accent transition-all duration-[320ms] ease-out ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-accent transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open
                    ? "top-[7px] -rotate-45"
                    : "top-[14px] rotate-0"
                }`}
              />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}

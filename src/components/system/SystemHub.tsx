"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Referência de escala do hub (px); define o tamanho do anel guia. */
const ORBIT_R = { base: 106, md: 116 } as const;

/** Diâmetro do anel = orbitPx * 2 + extra → raio externo = orbitPx + extra/2. */
const ORBIT_RING_EXTRA = 108;

/**
 * Metade do botão central e dos satélites (NODE_BOX), em px (root 16px), para colocar o centro
 * de cada satélite no meio do anel útil, sem encostar no núcleo nem ultrapassar o limite.
 */
const HUB_GEOMETRY = {
  base: { coreHalfPx: 31, nodeHalfPx: 35 },
  md: { coreHalfPx: 32, nodeHalfPx: 40 },
} as const;

const ORBIT_CLEARANCE_PX = 8;

/** Tamanho fixo dos 4 nós (círculos idênticos). */
const NODE_BOX = "h-[4.35rem] w-[4.35rem] md:h-[5rem] md:w-[5rem]";

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
          <span key={line} className="block leading-[1.1] text-[10px] md:text-[11px]">
            {line}
          </span>
        ))}
      </span>
    );
  }
  return (
    <span className="block text-center text-[10px] font-semibold leading-tight md:text-[11px]">
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

  const [orbitPx, setOrbitPx] = useState<number>(ORBIT_R.base);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setOrbitPx(mq.matches ? ORBIT_R.md : ORBIT_R.base);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const satelliteRadiusPx = useMemo(() => {
    const isMd = orbitPx === ORBIT_R.md;
    const { coreHalfPx, nodeHalfPx } = isMd ? HUB_GEOMETRY.md : HUB_GEOMETRY.base;
    const ringOuterR = orbitPx + ORBIT_RING_EXTRA / 2;
    const rMax = ringOuterR - nodeHalfPx - ORBIT_CLEARANCE_PX;
    const rMin = coreHalfPx + nodeHalfPx + ORBIT_CLEARANCE_PX;
    return (rMin + rMax) / 2;
  }, [orbitPx]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  const delayOpen = (i: number) => (reducedMotion ? 0 : i * 52);
  const delayClose = (i: number) => (reducedMotion ? 0 : (modules.length - 1 - i) * 28);
  const durationOpen = reducedMotion ? 120 : 820;
  const durationClose = reducedMotion ? 100 : 420;
  /** Abertura: ease-in-out suave, sem exagerar na duração. */
  const easeOpen = "cubic-bezier(0.45, 0.05, 0.55, 0.95)";
  const easeClose = "cubic-bezier(0.4, 0, 0.2, 1)";

  const nodeStatic =
    "focus-ring rounded-full border border-accent/35 bg-gradient-to-b from-surface to-dark/95 text-accent " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_14px_rgba(0,0,0,0.4),0_0_0_1px_rgba(6,182,212,0.12)] " +
    "transition-[box-shadow,border-color,color,filter,transform] duration-300 ease-out " +
    "hover:border-accent/80 hover:text-primary " +
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_26px_-3px_rgba(6,182,212,0.55),0_0_0_1px_rgba(6,182,212,0.45)] " +
    "hover:brightness-110 active:scale-[0.97]";

  return (
    <section
      className="system-hub flex flex-col items-center justify-center min-h-[min(78dvh,560px)] md:min-h-[min(72dvh,520px)] py-8 px-4 md:py-10"
      aria-labelledby={hubHeadingId}
      aria-describedby={hubDescId}
    >
      <div className="text-center max-w-md mb-7 md:mb-9 space-y-2">
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

      <div className="relative w-[min(100vw-1.5rem,300px)] h-[min(100vw-1.5rem,300px)] sm:w-[318px] sm:h-[318px] md:w-[336px] md:h-[336px]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25 bg-accent/[0.06] pointer-events-none system-hub-orbit-ring"
          aria-hidden
          style={{
            width: orbitPx * 2 + ORBIT_RING_EXTRA,
            height: orbitPx * 2 + ORBIT_RING_EXTRA,
            opacity: open ? 0.5 : 0.14,
            boxShadow: open
              ? "inset 0 0 40px -12px rgba(6,182,212,0.12), 0 0 0 1px rgba(6,182,212,0.15)"
              : "none",
            transition: reducedMotion
              ? "opacity 0.1s ease"
              : "opacity 640ms cubic-bezier(0.45, 0.05, 0.55, 0.95), box-shadow 640ms cubic-bezier(0.45, 0.05, 0.55, 0.95)",
          }}
        />

        <div id="system-hub-modules" role="group" aria-label={t.system.hubTitle}>
          {modules.map((mod, i) => {
            const tx = mod.dx * satelliteRadiusPx;
            const ty = mod.dy * satelliteRadiusPx;
            const dur = open ? durationOpen : durationClose;
            const ease = open ? easeOpen : easeClose;

            return (
              <Link
                key={mod.href}
                href={mod.href}
                aria-label={mod.label}
                className={`
                  system-hub-satellite system-hub-node absolute left-1/2 top-1/2 z-[1]
                  flex ${NODE_BOX} shrink-0 items-center justify-center
                  ${nodeStatic}
                  px-1.5
                  ${open ? "pointer-events-auto" : "pointer-events-none"}
                `}
                style={{
                  transform: open
                    ? `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1)`
                    : "translate(-50%, -50%) scale(0.7)",
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
          className="system-hub-core absolute left-1/2 top-1/2 z-[2] h-[3.85rem] w-[3.85rem] md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 rounded-full
            border-2 border-accent/55 bg-dark/92 text-accent font-semibold
            shadow-[0_0_28px_-4px_rgba(6,182,212,0.5),inset_0_0_20px_-10px_rgba(6,182,212,0.15)]
            focus-ring
            hover:border-accent hover:bg-accent/[0.08]
            hover:shadow-[0_0_36px_-2px_rgba(6,182,212,0.65),inset_0_0_24px_-8px_rgba(6,182,212,0.2)]
            transition-[border-color,background-color,box-shadow] duration-300 ease-out"
        >
          <span className="flex h-full w-full items-center justify-center" aria-hidden>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-accent transition-all duration-[520ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
                  open ? "top-[7px] rotate-45" : "top-0 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-accent transition-all duration-[400ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-accent transition-all duration-[520ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
                  open ? "top-[7px] -rotate-45" : "top-[14px] rotate-0"
                }`}
              />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}

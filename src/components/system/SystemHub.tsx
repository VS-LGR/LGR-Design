"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useSmoothPointer } from "@/hooks/useSmoothPointer";
import { HubCore } from "./HubCore";
import { HubNode } from "./HubNode";
import { HubOrbitSvg } from "./HubOrbitSvg";
import {
  HUB_FIELD_SIZE,
  HUB_MODULES,
  HUB_ORBIT_RADIUS,
  type HubModuleId,
} from "./hubModules";

const INTRO_DELAY_MS = 2200;
const TILT_MAX = 2.8;
const CORE_FOLLOW_MAX = 28;

function moduleCopy(
  id: HubModuleId,
  t: ReturnType<typeof useLocale>["t"]
): { short: string; label: string; blurb: string } {
  switch (id) {
    case "projetos":
      return {
        short: t.nav.projects,
        label: t.system.goProjects,
        blurb: t.system.moduleBlurb.projetos,
      };
    case "historia":
      return {
        short: t.nav.story,
        label: t.system.goStory,
        blurb: t.system.moduleBlurb.historia,
      };
    case "como-trabalho":
      return {
        short: t.nav.work,
        label: t.system.goWork,
        blurb: t.system.moduleBlurb["como-trabalho"],
      };
    case "contratar":
      return {
        short: t.nav.hire,
        label: t.system.goHire,
        blurb: t.system.moduleBlurb.contratar,
      };
  }
}

export function SystemHub() {
  const { t } = useLocale();
  const reducedMotion = usePrefersReducedMotion();
  const pointer = useSmoothPointer();
  const hubHeadingId = useId();
  const hubDescId = useId();
  const hubHintId = useId();

  const [fieldSize, setFieldSize] = useState<number>(HUB_FIELD_SIZE.base);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [introReady, setIntroReady] = useState(reducedMotion);
  const fieldRef = useRef<HTMLDivElement>(null);
  const [fieldMeasured, setFieldMeasured] = useState(false);
  const [fieldCenter, setFieldCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      const base = mq.matches ? HUB_FIELD_SIZE.md : HUB_FIELD_SIZE.base;
      const maxVw = mq.matches ? 560 : 400;
      const vwCap = Math.floor(window.innerWidth * (mq.matches ? 0.9 : 0.92));
      setFieldSize(Math.min(base, vwCap, maxVw));
    };
    apply();
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIntroReady(true);
      return;
    }
    const timer = window.setTimeout(() => setIntroReady(true), INTRO_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    const updateCenter = () => {
      const el = fieldRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setFieldCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
      setFieldMeasured(true);
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });
    return () => {
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
    };
  }, [fieldSize]);

  const orbitRadius = useMemo(() => {
    const isMd = fieldSize >= HUB_FIELD_SIZE.md;
    const baseR = isMd ? HUB_ORBIT_RADIUS.md : HUB_ORBIT_RADIUS.base;
    const ratio = fieldSize / (isMd ? HUB_FIELD_SIZE.md : HUB_FIELD_SIZE.base);
    const scaled = Math.round(baseR * ratio);
    /** Disco + rótulo externo + folga para não cortar nas bordas */
    const nodeClearance = isMd ? 72 : 64;
    const maxR = Math.floor(fieldSize / 2 - nodeClearance);
    return Math.max(96, Math.min(scaled, maxR));
  }, [fieldSize]);

  const tiltX = pointer.enabled ? pointer.nx * TILT_MAX : 0;
  const tiltY = pointer.enabled ? -pointer.ny * TILT_MAX : 0;

  const coreOffset = useMemo(() => {
    if (!pointer.enabled || !fieldMeasured) return { x: 0, y: 0 };
    const dx = pointer.clientX - fieldCenter.x;
    const dy = pointer.clientY - fieldCenter.y;
    const dist = Math.hypot(dx, dy) || 1;
    const max = Math.min(fieldSize * 0.1, CORE_FOLLOW_MAX);
    const pull = Math.min(max, dist * 0.16);
    return { x: (dx / dist) * pull, y: (dy / dist) * pull };
  }, [pointer, fieldCenter, fieldSize, fieldMeasured]);

  const activeModule =
    hoveredIndex != null ? HUB_MODULES[hoveredIndex] : null;
  const activeCopy = activeModule
    ? moduleCopy(activeModule.id, t)
    : null;

  return (
    <section
      className="system-hub relative flex flex-col items-center justify-center min-h-[min(88dvh,720px)] md:min-h-[min(84dvh,680px)] py-6 px-3 sm:px-4 md:py-8"
      aria-labelledby={hubHeadingId}
      aria-describedby={`${hubDescId} ${hubHintId}`}
    >
      <div
        className={`text-center max-w-xl mb-5 md:mb-7 space-y-3 ${introReady ? "hub-header--ready" : "opacity-0"}`}
      >
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.system.hubKicker}
        </p>
        <h1
          id={hubHeadingId}
          className="text-2xl sm:text-3xl md:text-[2.15rem] font-bold text-primary tracking-tight text-balance leading-tight"
        >
          {t.system.hubTitle}
        </h1>
        <p
          id={hubDescId}
          className="text-sm md:text-base text-muted leading-relaxed max-w-md mx-auto"
        >
          {t.system.hubSubtitle}
        </p>
        <p id={hubHintId} className="sr-only">
          {t.system.hubHint}
        </p>
      </div>

      <div
        className="hub-field-perspective"
        style={{ perspective: pointer.enabled ? "1100px" : undefined }}
      >
        <div
          ref={fieldRef}
          className="hub-field relative"
          role="navigation"
          aria-label={t.system.hubTitle}
          style={{
            width: fieldSize,
            height: fieldSize,
            ["--tilt-x" as string]: String(tiltX),
            ["--tilt-y" as string]: String(tiltY),
            ["--mx" as string]: String(pointer.x),
            ["--my" as string]: String(pointer.y),
            transform: pointer.enabled
              ? `rotateX(calc(var(--tilt-y) * 1deg)) rotateY(calc(var(--tilt-x) * 1deg))`
              : undefined,
          }}
        >
          <HubOrbitSvg
            size={fieldSize}
            orbitRadius={orbitRadius}
            activeIndex={hoveredIndex}
            reducedMotion={reducedMotion}
            introReady={introReady}
          />

          <div className="hub-orbit-rotator absolute inset-0">
            {HUB_MODULES.map((mod, i) => {
              const copy = moduleCopy(mod.id, t);
              return (
                <HubNode
                  key={mod.id}
                  module={mod}
                  orbitRadius={orbitRadius}
                  short={copy.short}
                  label={copy.label}
                  blurb={copy.blurb}
                  index={i}
                  introReady={introReady}
                  emphasized={mod.id === "contratar"}
                  onHoverChange={setHoveredIndex}
                />
              );
            })}
          </div>

          <HubCore
            mx={pointer.x}
            my={pointer.y}
            offsetX={coreOffset.x}
            offsetY={coreOffset.y}
            reducedMotion={reducedMotion}
            introReady={introReady}
            monogram={t.system.coreLabel}
          />
        </div>
      </div>

      <div
        className={`mt-5 md:mt-6 flex flex-col items-center gap-3 min-h-[3.25rem] ${introReady ? "hub-header--ready" : "opacity-0"}`}
        style={{ animationDelay: "0.12s" }}
      >
        <p
          className={`text-xs md:text-sm text-muted/85 transition-opacity duration-300 ${
            activeCopy ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {activeCopy ? (
            <>
              <span className="font-medium text-primary/90">{activeCopy.short}</span>
              <span className="mx-1.5 text-border-dark">·</span>
              <span>{activeCopy.blurb}</span>
            </>
          ) : (
            <span className="invisible" aria-hidden>
              —
            </span>
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-surface border border-border-dark/70 text-primary hover:border-accent/40 hover:text-accent transition-colors focus-ring"
          >
            {t.system.quickProjects}
          </Link>
          <Link
            href="/contratar"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
          >
            {t.system.quickHire}
          </Link>
        </div>
      </div>
    </section>
  );
}

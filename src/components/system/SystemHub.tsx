"use client";

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

const INTRO_DELAY_MS = 2500;
const TILT_MAX = 3.5;
const CORE_FOLLOW_MAX = 40;

function moduleLabels(
  id: HubModuleId,
  t: ReturnType<typeof useLocale>["t"]
): { short: string; label: string } {
  switch (id) {
    case "projetos":
      return { short: t.nav.projects, label: t.system.goProjects };
    case "historia":
      return { short: t.nav.story, label: t.system.goStory };
    case "como-trabalho":
      return {
        short: t.nav.work,
        label: t.system.goWork,
      };
    case "contratar":
      return { short: t.nav.hire, label: t.system.goHire };
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
      const maxVw = mq.matches ? 520 : 380;
      const vwCap = Math.floor(window.innerWidth * (mq.matches ? 0.92 : 0.94));
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
    const nodeClearance = isMd ? 36 : 32;
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
    const max = Math.min(fieldSize * 0.13, CORE_FOLLOW_MAX);
    const pull = Math.min(max, dist * 0.22);
    return { x: (dx / dist) * pull, y: (dy / dist) * pull };
  }, [pointer, fieldCenter, fieldSize, fieldMeasured]);

  return (
    <section
      className="system-hub flex flex-col items-center justify-center min-h-[min(82dvh,640px)] md:min-h-[min(78dvh,600px)] py-8 px-3 sm:px-4 md:py-10"
      aria-labelledby={hubHeadingId}
      aria-describedby={`${hubDescId} ${hubHintId}`}
    >
      <div
        className={`text-center max-w-md mb-6 md:mb-8 space-y-1.5 ${introReady ? "hub-header--ready" : "opacity-0"}`}
      >
        <h1
          id={hubHeadingId}
          className="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        >
          {t.system.hubTitle}
        </h1>
        <p id={hubDescId} className="text-sm md:text-base text-muted leading-relaxed">
          {t.system.hubSubtitle}
        </p>
        <p id={hubHintId} className="text-xs text-muted/70">
          {t.system.hubHint}
        </p>
      </div>

      <div
        className="hub-field-perspective"
        style={{ perspective: pointer.enabled ? "1000px" : undefined }}
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
              const { short, label } = moduleLabels(mod.id, t);
              return (
                <HubNode
                  key={mod.id}
                  module={mod}
                  orbitRadius={orbitRadius}
                  short={short}
                  label={label}
                  index={i}
                  pointer={pointer}
                  reducedMotion={reducedMotion}
                  introReady={introReady}
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
          />
        </div>
      </div>
    </section>
  );
}

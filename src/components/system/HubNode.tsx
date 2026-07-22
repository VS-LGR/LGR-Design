"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SmoothPointer } from "@/hooks/useSmoothPointer";
import { HubModuleIcon, type HubModuleConfig } from "./hubModules";

const MAGNETIC_MAX = 5;

type HubNodeProps = {
  module: HubModuleConfig;
  orbitRadius: number;
  short: string;
  label: string;
  blurb: string;
  index: number;
  pointer: SmoothPointer;
  reducedMotion: boolean;
  introReady: boolean;
  emphasized?: boolean;
  onHoverChange: (index: number | null) => void;
};

export function HubNode({
  module,
  orbitRadius,
  short,
  label,
  blurb,
  index,
  pointer,
  reducedMotion,
  introReady,
  emphasized = false,
  onHoverChange,
}: HubNodeProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const updateMagnetic = useCallback(() => {
    if (!pointer.enabled || !active || reducedMotion) {
      setMagnetic({ x: 0, y: 0 });
      return;
    }
    const el = linkRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = pointer.clientX - cx;
    const dy = pointer.clientY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const pull = Math.min(MAGNETIC_MAX, dist * 0.08);
    setMagnetic({ x: (dx / dist) * pull, y: (dy / dist) * pull });
  }, [pointer, active, reducedMotion]);

  useEffect(() => {
    updateMagnetic();
  }, [updateMagnetic]);

  const setHovered = (hovered: boolean) => {
    setActive(hovered);
    onHoverChange(hovered ? index : null);
  };

  const upright = -module.angle;

  return (
    <div
      className="hub-orbit-arm absolute left-1/2 top-1/2 h-0 w-0"
      style={{ transform: `rotate(${module.angle}deg)` }}
    >
      <Link
        ref={linkRef}
        href={module.href}
        aria-label={`${label}. ${blurb}`}
        className={`
          hub-node group focus-ring absolute left-0 top-0 flex -translate-x-1/2 flex-col items-center gap-2
          transition-[transform,opacity] duration-300 ease-out
          ${introReady ? "hub-node-label--ready" : "opacity-0"}
          ${emphasized ? "hub-node--emphasized" : ""}
        `}
        style={{
          transform: `translateY(-${orbitRadius}px) translate(${magnetic.x}px, ${magnetic.y}px) rotate(${upright}deg)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <span
          className={`
            hub-node-disc relative flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full
            border transition-[border-color,background-color,box-shadow,transform] duration-300
            ${
              emphasized
                ? "border-accent/55 bg-accent/15 text-accent shadow-[0_0_18px_-8px_rgba(34,184,207,0.45)] group-hover:bg-accent/25 group-hover:border-accent/70"
                : "border-border-dark/70 bg-surface/55 text-muted backdrop-blur-sm group-hover:border-accent/45 group-hover:text-accent group-hover:bg-surface/80"
            }
            group-hover:scale-105 group-focus-visible:scale-105
          `}
        >
          <HubModuleIcon id={module.id} className="h-5 w-5" />
        </span>
        <span
          className={`
            text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300
            ${emphasized ? "text-accent" : "text-primary/80 group-hover:text-primary"}
          `}
        >
          {short}
        </span>
      </Link>
    </div>
  );
}

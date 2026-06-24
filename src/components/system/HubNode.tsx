"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SmoothPointer } from "@/hooks/useSmoothPointer";
import { HubModuleIcon, type HubModuleConfig } from "./hubModules";

const MAGNETIC_MAX = 8;

type HubNodeProps = {
  module: HubModuleConfig;
  orbitRadius: number;
  orbitAngle: number;
  short: string;
  label: string;
  index: number;
  pointer: SmoothPointer;
  reducedMotion: boolean;
  introReady: boolean;
  onHoverChange: (index: number | null) => void;
};

export function HubNode({
  module,
  orbitRadius,
  orbitAngle,
  short,
  label,
  index,
  pointer,
  reducedMotion,
  introReady,
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
    const pull = Math.min(MAGNETIC_MAX, dist * 0.1);
    setMagnetic({ x: (dx / dist) * pull, y: (dy / dist) * pull });
  }, [pointer, active, reducedMotion]);

  useEffect(() => {
    updateMagnetic();
  }, [updateMagnetic]);

  const setHovered = (hovered: boolean) => {
    setActive(hovered);
    onHoverChange(hovered ? index : null);
  };

  const upright = -(module.angle + orbitAngle);

  return (
    <div
      className="hub-orbit-arm absolute left-1/2 top-1/2 h-0 w-0"
      style={{ transform: `rotate(${module.angle}deg)` }}
    >
      <Link
        ref={linkRef}
        href={module.href}
        aria-label={label}
        className="hub-node group focus-ring absolute left-0 top-0 flex -translate-x-1/2 items-center justify-center"
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
            hub-node-card relative flex min-h-[5.25rem] min-w-[5.25rem] md:min-h-[5.75rem] md:min-w-[5.75rem]
            flex-col items-center justify-center gap-1.5 rounded-2xl border border-accent/35
            bg-gradient-to-b from-surface/92 to-dark/96 px-3 py-2.5 text-accent backdrop-blur-sm
            shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_6px_22px_rgba(0,0,0,0.42),0_0_0_1px_rgba(6,182,212,0.12)]
            transition-[transform,box-shadow,border-color,color,filter] duration-300 ease-out
            before:absolute before:inset-[-12px] before:rounded-3xl before:content-['']
            group-hover:scale-[1.06] group-hover:border-accent/70 group-hover:text-primary
            group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_34px_-2px_rgba(6,182,212,0.5),0_0_0_1px_rgba(6,182,212,0.38)]
            group-focus-visible:scale-[1.06] group-focus-visible:border-accent/70
            group-active:scale-[0.98]
            ${reducedMotion ? "" : "hub-node-card--glow"}
            ${introReady ? "hub-node-card--ready" : ""}
          `}
        >
          <HubModuleIcon id={module.id} className="h-6 w-6 md:h-7 md:w-7 shrink-0" />
          <span className="max-w-[5.5rem] text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-accent/95 md:text-[11px]">
            {short}
          </span>
          <span
            className="max-w-[6.5rem] text-center text-[9px] leading-snug text-muted opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:text-[10px]"
            aria-hidden
          >
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
}

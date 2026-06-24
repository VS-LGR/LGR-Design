"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SmoothPointer } from "@/hooks/useSmoothPointer";
import { HubModuleIcon, type HubModuleConfig } from "./hubModules";

const MAGNETIC_MAX = 6;

type HubNodeProps = {
  module: HubModuleConfig;
  orbitRadius: number;
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
    const pull = Math.min(MAGNETIC_MAX, dist * 0.12);
    setMagnetic({ x: (dx / dist) * pull, y: (dy / dist) * pull });
  }, [pointer, active, reducedMotion]);

  useEffect(() => {
    updateMagnetic();
  }, [updateMagnetic]);

  const setHovered = (hovered: boolean) => {
    setActive(hovered);
    onHoverChange(hovered ? index : null);
  };

  return (
    <div
      className="hub-orbit-arm absolute left-1/2 top-1/2 h-0 w-0"
      style={{ transform: `rotate(${module.angle}deg)` }}
    >
      <Link
        ref={linkRef}
        href={module.href}
        aria-label={label}
        className={`
          hub-node group focus-ring absolute left-0 top-0 flex -translate-x-1/2 flex-col items-center
        `}
        style={{
          transform: `translateY(-${orbitRadius}px) translate(${magnetic.x}px, ${magnetic.y}px) rotate(-${module.angle}deg)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <span
          className={`
            hub-node-disc relative flex h-[4.1rem] w-[4.1rem] md:h-[4.6rem] md:w-[4.6rem]
            items-center justify-center rounded-full border border-accent/40
            bg-gradient-to-b from-surface/90 to-dark/95 text-accent backdrop-blur-sm
            shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_4px_18px_rgba(0,0,0,0.45),0_0_0_1px_rgba(6,182,212,0.14)]
            transition-[transform,box-shadow,border-color,color,filter] duration-300 ease-out
            group-hover:scale-110 group-hover:border-accent/75 group-hover:text-primary
            group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_30px_-2px_rgba(6,182,212,0.55),0_0_0_1px_rgba(6,182,212,0.4)]
            group-focus-visible:scale-110 group-focus-visible:border-accent/75
            group-active:scale-[0.97]
            ${reducedMotion ? "" : "hub-node-disc--glow"}
            ${introReady ? "hub-node-disc--ready" : ""}
          `}
        >
          <HubModuleIcon id={module.id} className="h-6 w-6 md:h-7 md:w-7" />
        </span>

        <span className="mt-2 flex flex-col items-center gap-0.5 text-center pointer-events-none">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-accent/90 md:text-[11px]">
            {short}
          </span>
          <span
            className="max-w-[7.5rem] text-[10px] leading-tight text-muted opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:text-[11px]"
            aria-hidden
          >
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
}

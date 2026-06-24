"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SmoothPointer } from "@/hooks/useSmoothPointer";
import type { HubModuleConfig } from "./hubModules";

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

  const upright = -module.angle;

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
          px-3 py-2 text-center transition-[color,transform,text-shadow] duration-300 ease-out
          ${introReady ? "hub-node-label--ready" : "opacity-0"}
        `}
        style={{
          transform: `translateY(-${orbitRadius}px) translate(${magnetic.x}px, ${magnetic.y}px) rotate(${upright}deg)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/85 transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary md:text-sm">
          {short}
        </span>
        <span
          className="mt-1 max-w-[8rem] text-[10px] leading-snug text-muted opacity-0 translate-y-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:text-[11px]"
          aria-hidden
        >
          {label}
        </span>
      </Link>
    </div>
  );
}

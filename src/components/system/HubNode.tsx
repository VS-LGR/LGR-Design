"use client";

import Link from "next/link";
import {
  HUB_LABEL_GAP,
  HubModuleIcon,
  type HubModuleConfig,
} from "./hubModules";

type HubNodeProps = {
  module: HubModuleConfig;
  orbitRadius: number;
  short: string;
  label: string;
  blurb: string;
  index: number;
  introReady: boolean;
  emphasized?: boolean;
  onHoverChange: (index: number | null) => void;
};

/**
 * Disco no raio interno; rótulo no mesmo eixo, com gap que evita
 * sobreposição (ex.: CONTRATAR / HISTÓRIA).
 */
export function HubNode({
  module,
  orbitRadius,
  short,
  label,
  blurb,
  index,
  introReady,
  emphasized = false,
  onHoverChange,
}: HubNodeProps) {
  const upright = -module.angle;
  const labelRadius = orbitRadius + HUB_LABEL_GAP;

  const setHovered = (hovered: boolean) => {
    onHoverChange(hovered ? index : null);
  };

  return (
    <div
      className={`hub-orbit-arm absolute left-1/2 top-1/2 h-0 w-0 ${introReady ? "hub-node-label--ready" : "opacity-0"}`}
      style={{ transform: `rotate(${module.angle}deg)` }}
    >
      <Link
        href={module.href}
        aria-label={`${label}. ${blurb}`}
        className={`
          hub-node group absolute left-0 top-0 focus-ring rounded-full
          ${emphasized ? "hub-node--emphasized" : ""}
        `}
        style={{
          transform: `translate(-50%, -50%) translateY(-${orbitRadius}px)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <span className="block" style={{ transform: `rotate(${upright}deg)` }}>
          <span
            className={`
              hub-node-disc flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full
              border transition-[border-color,background-color,box-shadow,transform] duration-300
              ${
                emphasized
                  ? "border-accent/60 bg-accent/18 text-accent shadow-[0_0_14px_-6px_rgba(34,184,207,0.35)] group-hover:bg-accent/25 group-hover:border-accent/75"
                  : "border-border-dark/70 bg-surface/75 text-primary/85 backdrop-blur-sm group-hover:border-accent/50 group-hover:text-accent group-hover:bg-surface/90"
              }
              group-hover:scale-[1.05] group-focus-visible:scale-[1.05]
            `}
          >
            <HubModuleIcon id={module.id} />
          </span>
        </span>
      </Link>

      <span
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) translateY(-${labelRadius}px)`,
        }}
        aria-hidden
      >
        <span
          className={`
            hub-node-label block min-w-[6.5rem] px-1 text-center text-[11px] md:text-xs
            font-semibold uppercase tracking-[0.12em] leading-none
            transition-colors duration-300
            ${emphasized ? "text-accent" : "text-primary/80"}
          `}
          style={{ transform: `rotate(${upright}deg)` }}
        >
          {short}
        </span>
      </span>
    </div>
  );
}

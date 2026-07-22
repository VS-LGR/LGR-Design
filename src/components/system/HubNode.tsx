"use client";

import Link from "next/link";
import { HubModuleIcon, type HubModuleConfig } from "./hubModules";

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

/** Distância do centro do disco até o centro do rótulo (para fora da órbita). */
const LABEL_GAP = 38;

/**
 * Disco centrado no raio da órbita; rótulo sempre para fora do anel,
 * com texto ereto e largura fixa — alinhamento consistente nos 4 pontos.
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
  const labelRadius = orbitRadius + LABEL_GAP;

  const setHovered = (hovered: boolean) => {
    onHoverChange(hovered ? index : null);
  };

  return (
    <div
      className={`hub-orbit-arm absolute left-1/2 top-1/2 h-0 w-0 ${introReady ? "hub-node-label--ready" : "opacity-0"}`}
      style={{ transform: `rotate(${module.angle}deg)` }}
    >
      {/* Área clicável = disco no ponto da órbita */}
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
        <span
          className="block"
          style={{ transform: `rotate(${upright}deg)` }}
        >
          <span
            className={`
              hub-node-disc flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full
              border transition-[border-color,background-color,box-shadow,transform] duration-300
              ${
                emphasized
                  ? "border-accent/55 bg-accent/15 text-accent shadow-[0_0_16px_-8px_rgba(34,184,207,0.4)] group-hover:bg-accent/22 group-hover:border-accent/70"
                  : "border-border-dark/65 bg-surface/60 text-muted/90 backdrop-blur-sm group-hover:border-accent/45 group-hover:text-accent group-hover:bg-surface/85"
              }
              group-hover:scale-[1.04] group-focus-visible:scale-[1.04]
            `}
          >
            <HubModuleIcon id={module.id} />
          </span>
        </span>
      </Link>

      {/* Rótulo no mesmo eixo radial, fora do anel */}
      <span
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) translateY(-${labelRadius}px)`,
        }}
        aria-hidden
      >
        <span
          className={`
            block w-[5.75rem] text-center text-[10px] md:text-[11px] font-semibold
            uppercase tracking-[0.1em] leading-tight transition-colors duration-300
            ${emphasized ? "text-accent" : "text-primary/75"}
          `}
          style={{ transform: `rotate(${upright}deg)` }}
        >
          {short}
        </span>
      </span>
    </div>
  );
}

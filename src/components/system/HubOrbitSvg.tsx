"use client";

import { HUB_DISC_RADIUS, HUB_MODULES } from "./hubModules";

type HubOrbitSvgProps = {
  size: number;
  orbitRadius: number;
  activeIndex: number | null;
  reducedMotion: boolean;
  introReady: boolean;
};

function pointOnOrbit(angleDeg: number, r: number, cx: number, cy: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + Math.cos(rad) * r,
    y: cy + Math.sin(rad) * r,
  };
}

export function HubOrbitSvg({
  size,
  orbitRadius,
  activeIndex,
  reducedMotion,
  introReady,
}: HubOrbitSvgProps) {
  const cx = size / 2;
  const cy = size / 2;
  const isMd = size >= 480;
  const discR = isMd ? HUB_DISC_RADIUS.md : HUB_DISC_RADIUS.base;
  /** Anel pontilhado por fora dos discos — ícones ficam “dentro” do guia */
  const guideR = orbitRadius + discR + 10;
  const innerRingR = Math.max(36, orbitRadius - 44);
  const circumference = 2 * Math.PI * guideR;

  return (
    <svg
      className="hub-orbit-svg absolute inset-0 pointer-events-none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="hub-orbit-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,184,207,0.08)" />
          <stop offset="50%" stopColor="rgba(34,184,207,0.32)" />
          <stop offset="100%" stopColor="rgba(34,184,207,0.1)" />
        </linearGradient>
        <linearGradient id="hub-beam-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34,184,207,0.03)" />
          <stop offset="55%" stopColor="rgba(34,184,207,0.4)" />
          <stop offset="100%" stopColor="rgba(34,184,207,0.15)" />
        </linearGradient>
        <radialGradient id="hub-field-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,184,207,0.06)" />
          <stop offset="65%" stopColor="rgba(34,184,207,0.012)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r={guideR + 28} fill="url(#hub-field-glow)" />

      <circle
        cx={cx}
        cy={cy}
        r={innerRingR}
        fill="none"
        stroke="rgba(34,184,207,0.05)"
        strokeWidth="1"
      />

      <circle
        cx={cx}
        cy={cy}
        r={guideR}
        fill="none"
        stroke="url(#hub-orbit-stroke)"
        strokeWidth="1.15"
        strokeDasharray={`${circumference * 0.035} ${circumference * 0.028}`}
        className={`hub-orbit-ring-stroke ${introReady ? "hub-orbit-ring-stroke--ready" : ""} ${reducedMotion ? "hub-orbit-ring-stroke--static" : ""}`}
        style={{
          ["--orbit-circumference" as string]: `${circumference}`,
        }}
      />

      {HUB_MODULES.map((mod, i) => {
        const disc = pointOnOrbit(mod.angle, orbitRadius, cx, cy);
        const beamEnd = pointOnOrbit(mod.angle, orbitRadius - discR - 4, cx, cy);
        const active = activeIndex === i;
        return (
          <g key={mod.id}>
            <line
              x1={cx}
              y1={cy}
              x2={beamEnd.x}
              y2={beamEnd.y}
              stroke="url(#hub-beam-stroke)"
              strokeWidth={active ? 1.5 : 1}
              strokeLinecap="round"
              className={`hub-orbit-beam transition-opacity duration-300 ${active ? "hub-orbit-beam--active opacity-100" : "opacity-0"}`}
            />
            <circle
              cx={disc.x}
              cy={disc.y}
              r={active ? 2.5 : 1.75}
              fill={active ? "rgba(34,184,207,0.45)" : "rgba(34,184,207,0.18)"}
              className="transition-[r,fill] duration-300"
            />
          </g>
        );
      })}
    </svg>
  );
}

"use client";

import { HUB_MODULES } from "./hubModules";

type HubOrbitSvgProps = {
  size: number;
  orbitRadius: number;
  activeIndex: number | null;
  reducedMotion: boolean;
  introReady: boolean;
};

function beamEndpoint(angleDeg: number, r: number, cx: number, cy: number) {
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
  const ringR = orbitRadius + 4;
  const innerRingR = Math.max(42, orbitRadius - 52);
  const circumference = 2 * Math.PI * ringR;

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
          <stop offset="0%" stopColor="rgba(34,184,207,0.12)" />
          <stop offset="50%" stopColor="rgba(34,184,207,0.42)" />
          <stop offset="100%" stopColor="rgba(34,184,207,0.14)" />
        </linearGradient>
        <linearGradient id="hub-beam-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34,184,207,0.04)" />
          <stop offset="45%" stopColor="rgba(34,184,207,0.55)" />
          <stop offset="100%" stopColor="rgba(150,235,250,0.85)" />
        </linearGradient>
        <radialGradient id="hub-field-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,184,207,0.08)" />
          <stop offset="70%" stopColor="rgba(34,184,207,0.02)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r={orbitRadius + 36} fill="url(#hub-field-glow)" />

      <circle
        cx={cx}
        cy={cy}
        r={innerRingR}
        fill="none"
        stroke="rgba(34,184,207,0.07)"
        strokeWidth="1"
      />

      <circle
        cx={cx}
        cy={cy}
        r={ringR}
        fill="none"
        stroke="url(#hub-orbit-stroke)"
        strokeWidth="1.15"
        strokeDasharray={`${circumference * 0.045} ${circumference * 0.035}`}
        className={`hub-orbit-ring-stroke ${introReady ? "hub-orbit-ring-stroke--ready" : ""} ${reducedMotion ? "hub-orbit-ring-stroke--static" : ""}`}
        style={{
          ["--orbit-circumference" as string]: `${circumference}`,
        }}
      />

      {HUB_MODULES.map((mod, i) => {
        const end = beamEndpoint(mod.angle, orbitRadius - 8, cx, cy);
        const marker = beamEndpoint(mod.angle, ringR, cx, cy);
        const active = activeIndex === i;
        return (
          <g key={mod.id}>
            <line
              x1={cx}
              y1={cy}
              x2={end.x}
              y2={end.y}
              stroke="url(#hub-beam-stroke)"
              strokeWidth={active ? 1.75 : 1}
              strokeLinecap="round"
              className={`hub-orbit-beam transition-opacity duration-300 ${active ? "hub-orbit-beam--active opacity-100" : "opacity-0"}`}
            />
            <circle
              cx={marker.x}
              cy={marker.y}
              r={active ? 3.5 : 2.25}
              fill={active ? "rgba(34,184,207,0.9)" : "rgba(34,184,207,0.35)"}
              className="transition-[r,fill] duration-300"
            />
          </g>
        );
      })}
    </svg>
  );
}

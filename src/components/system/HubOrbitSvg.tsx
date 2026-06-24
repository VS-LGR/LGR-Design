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
  const ringR = orbitRadius + 28;
  const innerRingR = orbitRadius - 36;
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
          <stop offset="0%" stopColor="rgba(6,182,212,0.15)" />
          <stop offset="50%" stopColor="rgba(6,182,212,0.55)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
        </linearGradient>
        <linearGradient id="hub-beam-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.05)" />
          <stop offset="40%" stopColor="rgba(6,182,212,0.75)" />
          <stop offset="100%" stopColor="rgba(150,235,250,0.95)" />
        </linearGradient>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={innerRingR}
        fill="none"
        stroke="rgba(6,182,212,0.08)"
        strokeWidth="1"
      />

      <circle
        cx={cx}
        cy={cy}
        r={ringR}
        fill="none"
        stroke="url(#hub-orbit-stroke)"
        strokeWidth="1.25"
        strokeDasharray={`${circumference * 0.06} ${circumference * 0.04}`}
        className={`hub-orbit-ring-stroke ${introReady ? "hub-orbit-ring-stroke--ready" : ""} ${reducedMotion ? "hub-orbit-ring-stroke--static" : ""}`}
        style={{
          ["--orbit-circumference" as string]: `${circumference}`,
        }}
      />

      {HUB_MODULES.map((mod, i) => {
        const end = beamEndpoint(mod.angle, orbitRadius, cx, cy);
        const active = activeIndex === i;
        return (
          <line
            key={mod.id}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="url(#hub-beam-stroke)"
            strokeWidth={active ? 2 : 1}
            strokeLinecap="round"
            className={`hub-orbit-beam transition-opacity duration-300 ${active ? "hub-orbit-beam--active opacity-100" : "opacity-0"}`}
          />
        );
      })}
    </svg>
  );
}

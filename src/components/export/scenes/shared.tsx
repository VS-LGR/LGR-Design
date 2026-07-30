import type { ReactNode } from "react";

export type ExportSceneId =
  | "cover"
  | "challenge"
  | "step"
  | "product-hub"
  | "product-flow"
  | "product-trust"
  | "solution"
  | "result"
  | "cta";

export type SceneIds = { bg: string; glow: string; bar: string; soft: string };

export type SceneRenderCtx = {
  ids: SceneIds;
  stepIndex: number;
  title?: string;
  locale?: "pt" | "en";
};

export type ScenePack = {
  captions: {
    hub: { pt: string; en: string };
    flow: { pt: string; en: string };
    trust: { pt: string; en: string };
  };
  render: (id: ExportSceneId, ctx: SceneRenderCtx) => ReactNode;
};

export const C = {
  accent: "#22b8cf",
  soft: "#5ecfe0",
  dim: "rgba(34,184,207,0.2)",
  ink: "#e8eef5",
  muted: "#94a3b8",
  panel: "#142336",
  deep: "#0b1522",
  stroke: "rgba(148,163,184,0.28)",
  danger: "#f87171",
  warn: "#fbbf24",
  ok: "#34d399",
};

export function Frame({
  className,
  ids,
  children,
}: {
  className?: string;
  ids: SceneIds;
  children: ReactNode;
}) {
  return (
    <div
      className={`export-scene relative h-full w-full min-h-0 overflow-hidden rounded-xl border border-accent/25 bg-[#071018] ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 400"
        className="block h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <linearGradient id={ids.bg} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c1a28" />
            <stop offset="100%" stopColor="#060e16" />
          </linearGradient>
          <radialGradient id={ids.glow} cx="85%" cy="10%" r="50%">
            <stop offset="0%" stopColor="rgba(34,184,207,0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={ids.bar} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={C.accent} />
            <stop offset="100%" stopColor={C.soft} />
          </linearGradient>
          <filter id={ids.soft}>
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <rect width="640" height="400" fill={`url(#${ids.bg})`} />
        <rect width="640" height="400" fill={`url(#${ids.glow})`} />
        {children}
      </svg>
    </div>
  );
}

export function AppShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <g>
      <rect
        x="20"
        y="16"
        width="600"
        height="368"
        rx="16"
        fill={C.deep}
        stroke={C.stroke}
      />
      <rect x="20" y="16" width="600" height="36" rx="16" fill={C.panel} />
      <rect x="20" y="36" width="600" height="16" fill={C.panel} />
      <circle cx="42" cy="34" r="4" fill={C.danger} opacity="0.75" />
      <circle cx="56" cy="34" r="4" fill={C.warn} opacity="0.75" />
      <circle cx="70" cy="34" r="4" fill={C.ok} opacity="0.75" />
      <text
        x="320"
        y="38"
        textAnchor="middle"
        fill={C.muted}
        fontSize="11"
        fontFamily="system-ui,sans-serif"
      >
        {title}
      </text>
      {children}
    </g>
  );
}

export function Sidebar({
  brand,
  items,
  active = 0,
}: {
  brand: string;
  items: string[];
  active?: number;
}) {
  return (
    <g>
      <rect
        x="32"
        y="64"
        width="118"
        height="304"
        rx="10"
        fill="#09131e"
        stroke={C.stroke}
      />
      <rect x="44" y="78" width="94" height="22" rx="6" fill={C.dim} />
      <text
        x="52"
        y="93"
        fill={C.soft}
        fontSize="9"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        {brand}
      </text>
      {items.map((label, i) => (
        <g key={label}>
          <rect
            x="44"
            y={114 + i * 36}
            width="94"
            height="26"
            rx="6"
            fill={i === active ? C.dim : "transparent"}
            stroke={i === active ? C.accent : "transparent"}
          />
          {i === active ? (
            <rect
              x="44"
              y={114 + i * 36}
              width="3"
              height="26"
              rx="1.5"
              fill={C.accent}
            />
          ) : null}
          <text
            x="56"
            y={131 + i * 36}
            fill={i === active ? C.ink : C.muted}
            fontSize="9"
            fontFamily="system-ui,sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

export function SceneCta({ ids }: { ids: SceneIds }) {
  return (
    <>
      <circle
        cx="320"
        cy="150"
        r="70"
        fill={C.dim}
        filter={`url(#${ids.soft})`}
      />
      <circle
        cx="320"
        cy="150"
        r="48"
        fill={C.panel}
        stroke={C.accent}
        strokeWidth="2.5"
      />
      <text
        x="320"
        y="158"
        textAnchor="middle"
        fill={C.soft}
        fontSize="22"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        LG
      </text>
      <rect x="180" y="250" width="280" height="48" rx="14" fill={C.accent} />
      <text
        x="320"
        y="280"
        textAnchor="middle"
        fill="#061018"
        fontSize="14"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        Vamos conversar
      </text>
      <text
        x="320"
        y="330"
        textAnchor="middle"
        fill={C.muted}
        fontSize="11"
        fontFamily="system-ui,sans-serif"
      >
        UX · Web · Sistemas empresariais
      </text>
    </>
  );
}

export function LpNav({ brand, links }: { brand: string; links: string[] }) {
  return (
    <g>
      <rect x="40" y="64" width="560" height="40" rx="10" fill={C.panel} />
      <text
        x="56"
        y="89"
        fill={C.soft}
        fontSize="12"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        {brand}
      </text>
      {links.slice(0, 4).map((l, i) => (
        <text
          key={l}
          x={200 + i * 90}
          y="89"
          fill={C.muted}
          fontSize="9"
          fontFamily="system-ui,sans-serif"
        >
          {l}
        </text>
      ))}
    </g>
  );
}

import type { ReactNode } from "react";

export type HubModuleId = "projetos" | "historia" | "como-trabalho" | "contratar";

export type HubModuleConfig = {
  id: HubModuleId;
  href: string;
  angle: number;
  enterDelay: number;
};

export const HUB_MODULES: HubModuleConfig[] = [
  { id: "projetos", href: "/projetos", angle: 0, enterDelay: 0 },
  { id: "historia", href: "/historia", angle: 90, enterDelay: 80 },
  { id: "como-trabalho", href: "/como-trabalho", angle: 180, enterDelay: 160 },
  { id: "contratar", href: "/contratar", angle: 270, enterDelay: 240 },
];

export const HUB_FIELD_SIZE = { base: 340, md: 480 } as const;
export const HUB_ORBIT_RADIUS = { base: 128, md: 168 } as const;
/** Diâmetro do disco do ícone (mobile / desktop) — usado para clearance e alinhamento */
export const HUB_NODE_DISC = { base: 44, md: 48 } as const;

export function HubModuleIcon({ id, className }: { id: HubModuleId; className?: string }) {
  const props = {
    className: `block shrink-0 ${className ?? ""}`,
    viewBox: "0 0 24 24",
    width: 20,
    height: 20,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  /** Ícones com caixa visual equilibrada (mesmo stroke e área útil ~16–18px). */
  const icons: Record<HubModuleId, ReactNode> = {
    projetos: (
      <svg {...props}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10h16" />
        <path d="M9 14h6" />
      </svg>
    ),
    historia: (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5l3 1.5" />
      </svg>
    ),
    "como-trabalho": (
      <svg {...props}>
        <circle cx="6.5" cy="7" r="2" />
        <circle cx="17.5" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M8.3 8.2 10.4 14.2M15.7 8.2 13.6 14.2" />
      </svg>
    ),
    contratar: (
      <svg {...props}>
        <rect x="4" y="8" width="16" height="11" rx="2" />
        <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
        <path d="M4 12.5h16" />
      </svg>
    ),
  };

  return icons[id];
}

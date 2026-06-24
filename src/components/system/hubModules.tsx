import type { ReactNode } from "react";

export type HubModuleId = "projetos" | "historia" | "como-trabalho" | "exploracao";

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
  { id: "exploracao", href: "/exploracao", angle: 270, enterDelay: 240 },
];

export const HUB_FIELD_SIZE = { base: 360, md: 500 } as const;
export const HUB_ORBIT_RADIUS = { base: 138, md: 180 } as const;

export function HubModuleIcon({ id, className }: { id: HubModuleId; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<HubModuleId, ReactNode> = {
    projetos: (
      <svg {...props}>
        <path d="M3 7.5V18a1.5 1.5 0 0 0 1.5 1.5H19.5A1.5 1.5 0 0 0 21 18V9" />
        <path d="M3 7.5 12 3l9 4.5" />
        <path d="M8.25 21V12h7.5v9" />
      </svg>
    ),
    historia: (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M7.5 4.5 5 3M16.5 4.5 19 3" />
      </svg>
    ),
    "como-trabalho": (
      <svg {...props}>
        <path d="M4 14c2-4 4-6 8-6s6 2 8 6" />
        <path d="M6 18c1.5-2.5 3.5-4 6-4s4.5 1.5 6 4" />
        <circle cx="12" cy="8" r="2.5" />
      </svg>
    ),
    exploracao: (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="m14.5 9.5-5 5M9.5 9.5l5 5" />
      </svg>
    ),
  };

  return icons[id];
}

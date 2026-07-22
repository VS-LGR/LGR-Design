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

/** Campo e raio dos discos (mais internos = leitura mais limpa). */
export const HUB_FIELD_SIZE = { base: 360, md: 500 } as const;
export const HUB_ORBIT_RADIUS = { base: 108, md: 138 } as const;
/** Raio do disco (px) — metade de h-12 / h-14 */
export const HUB_DISC_RADIUS = { base: 24, md: 28 } as const;
/**
 * Gap do centro do disco até o centro do rótulo.
 * Precisa ser > raio do disco + metade da largura do texto (~46px) + folga.
 */
export const HUB_LABEL_GAP = 72;

export function HubModuleIcon({ id, className }: { id: HubModuleId; className?: string }) {
  const props = {
    className: `block shrink-0 ${className ?? ""}`,
    viewBox: "0 0 24 24",
    width: 22,
    height: 22,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<HubModuleId, ReactNode> = {
    projetos: (
      <svg {...props}>
        <path d="M4 9.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5" />
        <path d="M3 9.5h18" />
        <path d="M8 9.5V7.2A2.2 2.2 0 0 1 10.2 5h3.6A2.2 2.2 0 0 1 16 7.2v2.3" />
      </svg>
    ),
    historia: (
      <svg {...props}>
        <circle cx="12" cy="12" r="8.25" />
        <path d="M12 7.5v5l3.25 1.75" />
      </svg>
    ),
    "como-trabalho": (
      <svg {...props}>
        <path d="M5 7h5v4H5z" />
        <path d="M14 7h5v4h-5z" />
        <path d="M9.5 15h5v4h-5z" />
        <path d="M7.5 11v2M16.5 11v2M12 13v2" />
      </svg>
    ),
    contratar: (
      <svg {...props}>
        <rect x="4" y="8" width="16" height="11.5" rx="2" />
        <path d="M9 8V6.6A1.6 1.6 0 0 1 10.6 5h2.8A1.6 1.6 0 0 1 15 6.6V8" />
        <path d="M4 12.5h16" />
      </svg>
    ),
  };

  return icons[id];
}

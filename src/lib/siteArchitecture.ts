/**
 * Arquitetura do portfólio (Fase 3) — fonte da verdade para rotas e navegação.
 *
 * KEEP: Next 14 + TS + Tailwind, tokens dark/cyan, conteúdo QualiProc/galeria,
 *       export LinkedIn secundário, LocaleContext PT/EN, analytics, icons LG.
 * CHANGE: home → hero hiring; nav IA; cases → /projetos/[slug]; história→/sobre;
 *         como-trabalho→/processo; contato dedicado; ordem/flagship dos projetos.
 * REMOVE/DEMOTE: hub orbital como home; ênfase freelance em /contratar (vira CTAs
 *                secundários); hobbies no meio do método; código morto progressivo.
 * ADD: Hirely (acadêmico), skills, explorações, sitemap/robots/OG, /public/cv/.
 */

export const SITE_ROUTES = {
  home: "/",
  projects: "/projetos",
  project: (slug: string) => `/projetos/${slug}`,
  process: "/processo",
  about: "/sobre",
  contact: "/contato",
  hire: "/contratar",
  exportIndex: "/export/projetos",
  exportProject: (slug: string) => `/export/projetos/${slug}`,
} as const;

/** Destinos legados → canônicos */
export const LEGACY_REDIRECTS: Array<{ source: string; destination: string; permanent: boolean }> = [
  { source: "/historia", destination: "/sobre", permanent: true },
  { source: "/como-trabalho", destination: "/processo", permanent: true },
  { source: "/cases/:slug", destination: "/projetos/:slug", permanent: true },
  { source: "/exploracao", destination: "/contato", permanent: true },
];

/** Ordem de destaque na home e lista (slugs) */
export const FEATURED_PROJECT_ORDER = [
  "qualiproc-ctli",
  "devsistem",
  "clinica-dverso",
  "grimorio-aventureiro",
  "ofag-revamp",
  "psi-bia-rossi",
  "hirely",
] as const;

export type NavItemId = "home" | "projects" | "process" | "about" | "contact";

export const PRIMARY_NAV: Array<{ id: NavItemId; href: string }> = [
  { id: "home", href: SITE_ROUTES.home },
  { id: "projects", href: SITE_ROUTES.projects },
  { id: "process", href: SITE_ROUTES.process },
  { id: "about", href: SITE_ROUTES.about },
  { id: "contact", href: SITE_ROUTES.contact },
];

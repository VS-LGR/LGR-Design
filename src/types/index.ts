/** Contexto da sidebar contextual (projetos / história / método). */
export type SidebarContext = "projects" | "story" | "work";

import type { StaticImageData } from "next/image";

export interface AboutContent {
  intro: string[];
  formation: Array<{
    icon?: string;
    title: string;
    institution?: string;
    description?: string;
  }>;
  recognitions: Array<{
    icon?: string;
    title: string;
    description: string;
    items?: string[];
  }>;
  cursorTemplate: {
    title: string;
    intro: string;
    points: string[];
    closing: string;
  };
  positioning: string[];
  howIWork: {
    intro: string;
    points: string[];
    closing?: string;
  };
  tools: {
    intro?: string;
    items: string[];
    closing?: string;
  };
  /** Skills agrupadas para a home (hierarquia hiring) */
  skillGroups: {
    uxProduct: { title: string; items: string[] };
    development: { title: string; items: string[] };
    visual: { title: string; items: string[] };
    closing: string;
  };
  creativePreferences: string[];
  professionalObjective: string;
  contact: {
    phone: string;
    email: string;
    message: string;
    linkedin?: string;
    github?: string;
  };
  resumePdfUrl?: string;
}

export type ProjectCategory = "web" | "ux" | "identity" | "other";

export type ProjectTopic = "saude" | "empresas";

/** Tipo de entrega comercial exibido nos cards e na página Contratar */
export type DeliveryType = "lp-institucional" | "sistema";

/** Destaque na vitrine — academic = estudo/conceitual; private = uso pessoal sem demo pública */
export type ProjectVisibility = "featured" | "secondary" | "academic" | "private";

export type ServiceId = "lp-institucional" | "sistemas-empresariais";

export interface ServiceOffering {
  id: ServiceId;
  title: string;
  summary: string;
  audience: string;
  deliverables: string[];
  stages: string[];
  timeline: string;
  relatedProjectSlugs: string[];
  whatsappPrefill: string;
  emailSubject: string;
  emailBody: string;
}

export interface ServicesContent {
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  offeringsTitle: string;
  audienceLabel: string;
  deliverablesLabel: string;
  stagesLabel: string;
  timelineLabel: string;
  relatedLabel: string;
  processTitle: string;
  processLead: string;
  processSteps: Array<{ title: string; description: string }>;
  ctaTitle: string;
  ctaLead: string;
  whatsappCta: string;
  emailCta: string;
  ctaWhatsappPrefill: string;
  ctaEmailSubject: string;
  offerings: ServiceOffering[];
}

/** Métrica ou resultado qualitativo honesto no case do projeto */
export interface ProjectCaseResult {
  label: string;
  value: string;
  delta?: string;
}

export type CaseStudyBlockType =
  | "text"
  | "bullets"
  | "quote"
  | "stats"
  | "tags";

export interface CaseStudyStat {
  label: string;
  value: string;
  delta?: string;
}

export interface CaseStudyBlock {
  id: string;
  title?: string;
  type: CaseStudyBlockType;
  content?: string;
  items?: string[];
  stats?: CaseStudyStat[];
}

export interface CaseStudyChapter {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  blocks: CaseStudyBlock[];
}

export interface CaseStudyGalleryItem {
  src: string;
  caption: string;
  alt: string;
}

export interface CaseStudyContent {
  context: {
    type: string;
    segment: string;
    objective: string;
    role: string;
    overview: string;
  };
  chapters: CaseStudyChapter[];
  /** Screenshots do produto para o case (opcional) */
  gallery?: CaseStudyGalleryItem[];
  previewTitle?: string;
  previewDescription?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  topic: ProjectTopic;
  /** LP/institucional vs sistema empresarial — badge nos cards */
  deliveryType: DeliveryType;
  /** featured (padrão) | secondary (explorações) | academic | private */
  visibility?: ProjectVisibility;
  /** Tags curtas no card (SaaS · UX/UI · …) */
  cardCategories?: string[];
  /** Pergunta/conceito no card (flagship) */
  cardHook?: string;
  /** Papel no card */
  cardRole?: string;
  slug: string;
  description: string;
  /** Explicação do processo de desenvolvimento do site/projeto */
  developmentExplanation?: string;
  /** Etapas-chave do projeto para exibição em cards acima do preview */
  keyStages?: Array<{
    title: string;
    description: string;
  }>;
  thumbnail?: string | StaticImageData;
  link?: string;
  /** Case resumido: contexto do problema (aba Projetos; distinto do processo global) */
  caseProblem?: string;
  /** Case resumido: abordagem e entregas */
  caseSolution?: string;
  /** Resultados observáveis ou qualitativos */
  caseResults?: ProjectCaseResult[];
  /** Novo formato de case em capítulos para páginas dedicadas */
  caseStudy?: CaseStudyContent;
}

export interface DesignProcessPhase {
  id: number;
  title: string;
  subtitle?: string;
  deliverables: string[];
}

export interface DesignProcessWorkModel {
  id: string;
  title: string;
  context: string;
  description: string;
}

/** Conteúdo da seção global “Como conduzo projetos” (aba Sobre) */
export interface DesignProcessContent {
  intro: string;
  phases: DesignProcessPhase[];
  workModelsSectionTitle: string;
  workModelsSectionIntro: string;
  workModels: DesignProcessWorkModel[];
  ansoffSectionTitle: string;
  ansoffSectionIntro: string;
  /** Rótulos de uma grade 2×2 estática (texto apenas) */
  ansoffQuadrants: [string, string, string, string];
}

/** Peça do Ateliê 3D (prática visual, separada dos cases de entrega) */
export interface AtelierPiece {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string[];
  tags: string[];
  tools: string[];
  image: {
    src: string;
    alt: string;
  };
  /** Tema de página no detalhe (ex.: preto do render) */
  immersiveTheme?: {
    background: string;
    wash: string;
  };
}

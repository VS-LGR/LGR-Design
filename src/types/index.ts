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
  creativePreferences: string[];
  professionalObjective: string;
  contact: {
    phone: string;
    email: string;
    message: string;
  };
  resumePdfUrl?: string;
}

export type ProjectCategory = "web" | "ux" | "identity" | "other";

export type ProjectTopic = "saude" | "negocios" | "empresas" | "recreativos";

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

export interface CaseStudyContent {
  context: {
    type: string;
    segment: string;
    objective: string;
    role: string;
    overview: string;
  };
  chapters: CaseStudyChapter[];
  previewTitle?: string;
  previewDescription?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  topic: ProjectTopic;
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

export interface Hobby {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

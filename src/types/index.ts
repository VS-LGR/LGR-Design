export type TabId = "about" | "projects";

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

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  topic: ProjectTopic;
  slug: string;
  description: string;
  /** Explicação do processo de desenvolvimento do site/projeto */
  developmentExplanation?: string;
  thumbnail?: string;
  link?: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

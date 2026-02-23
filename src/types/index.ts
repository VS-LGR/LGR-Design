export type TabId = "about" | "projects" | "hobbies";

export interface AboutContent {
  intro: string[];
  formation: Array<{
    title: string;
    institution?: string;
    period?: string;
  }>;
  experience: Array<{
    title: string;
    description: string;
    items?: string[];
  }>;
  specialties: string[];
  differential: string[];
  creativePreferences: string[];
  professionalObjective: string;
  resumePdfUrl?: string;
}

export type ProjectCategory = "web" | "ux" | "identity" | "other";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
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

"use client";

import type { TabId } from "@/types";
import { aboutContent } from "@/lib/about";
import { projectCategories } from "@/lib/projects";
import { hobbiesList } from "@/lib/hobbies";

interface DynamicSidebarProps {
  activeTab: TabId;
}

const sidebarConfig = {
  about: {
    title: "Especialidades",
    items: aboutContent.specialties,
  },
  projects: {
    title: "Categorias",
    items: projectCategories.map((c) => c.label),
  },
  hobbies: {
    title: "Hobbys",
    items: hobbiesList.map((h) => h.title),
  },
} as const;

export function DynamicSidebar({ activeTab }: DynamicSidebarProps) {
  const config = sidebarConfig[activeTab];

  return (
    <aside
      className="hidden xl:block sticky top-32 h-fit opacity-60 transition-opacity duration-300"
      aria-label="Resumo do tópico"
    >
      <div
        key={activeTab}
        className="space-y-6 pl-2 border-l border-accent/20 animate-in"
      >
        <p className="text-xs font-medium text-accent uppercase tracking-wider">
          {config.title}
        </p>
        <ul className="space-y-2 text-sm text-muted">
          {config.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { CategoryFilter } from "./CategoryFilter";
import { projectsList } from "@/lib/projects";
import type { ProjectCategory } from "@/types";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "all"
  >("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsList;
    return projectsList.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-1">
          Sites e projetos
        </h2>
        <p className="text-muted text-sm max-w-xl">
          Projetos desenvolvidos com foco em UX, código e identidade visual. Clique em &quot;Sobre o desenvolvimento&quot; para ver o processo.
        </p>
      </div>
      <div className="mb-6 md:mb-8">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

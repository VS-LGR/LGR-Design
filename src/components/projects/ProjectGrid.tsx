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
      className="container mx-auto px-4 py-8 md:py-10"
    >
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

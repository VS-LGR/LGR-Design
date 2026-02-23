"use client";

import { useState, useMemo } from "react";
import { projectsList } from "@/lib/projects";
import { projectCategories } from "@/lib/projects";
import type { Project, ProjectCategory } from "@/types";

function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projectsList[0] ?? null
  );
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsList;
    return projectsList.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const projectToShow = selectedProject && filteredProjects.some((p) => p.id === selectedProject.id)
    ? selectedProject
    : filteredProjects[0] ?? null;
  const projectUrl = projectToShow?.link && projectToShow.link.startsWith("http")
    ? projectToShow.link
    : null;

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="w-full min-w-0 flex flex-col px-4 py-6 md:py-8"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 min-h-0">
        {/* Lista de projetos */}
        <div className="flex-shrink-0 lg:w-56 xl:w-64">
          <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Projetos
          </p>
          <nav
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide"
            aria-label="Lista de projetos"
          >
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`
                  text-left px-4 py-3 rounded-xl border transition-all duration-200 focus-ring whitespace-nowrap lg:whitespace-normal
                  ${
                    projectToShow?.id === project.id
                      ? "border-accent bg-accent/10 text-primary"
                      : "border-border-dark/60 text-muted hover:text-primary hover:border-accent/40"
                  }
                `}
              >
                <span className="text-xs font-medium text-accent/90 block mb-0.5">
                  {getCategoryLabel(project.category)}
                </span>
                <span className="text-sm font-medium">{project.title}</span>
              </button>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-accent text-dark"
                  : "bg-surface/80 text-muted hover:text-primary"
              }`}
            >
              Todos
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-accent text-dark"
                    : "bg-surface/80 text-muted hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Área do iframe + barra com título e "Abrir em nova guia" */}
        <div className="flex-1 flex flex-col min-h-[60vh] lg:min-h-[70vh] rounded-xl border border-border-dark/60 bg-surface/30 overflow-hidden">
          {projectToShow && (
            <>
              <div className="flex-shrink-0 flex items-center justify-between gap-4 px-4 py-3 border-b border-border-dark/50 bg-surface/50">
                <h3 className="text-sm font-semibold text-primary truncate">
                  {projectToShow.title}
                </h3>
                {projectUrl && (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
                  >
                    Abrir em nova guia
                  </a>
                )}
              </div>
              <div className="flex-1 min-h-0 relative bg-dark">
                {projectUrl ? (
                  <iframe
                    src={projectUrl}
                    title={projectToShow.title}
                    className="absolute inset-0 w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                    Sem link de preview
                  </div>
                )}
              </div>
            </>
          )}
          {!projectToShow && (
            <div className="flex-1 flex items-center justify-center text-muted text-sm">
              Nenhum projeto nesta categoria
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

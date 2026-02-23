"use client";

import { useState } from "react";
import { projectsList } from "@/lib/projects";
import { projectCategories } from "@/lib/projects";
import type { Project, ProjectCategory } from "@/types";

function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export function ProjectGrid() {
  const [selectedId, setSelectedId] = useState<string>(
    projectsList[0]?.id ?? ""
  );

  const projectToShow =
    projectsList.find((p) => p.id === selectedId) ?? projectsList[0] ?? null;
  const projectUrl =
    projectToShow?.link && projectToShow.link.startsWith("http")
      ? projectToShow.link
      : null;
  const hasDev =
    projectToShow?.developmentExplanation &&
    !projectToShow.developmentExplanation.startsWith("[");

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="w-full min-w-0 flex flex-col py-6 md:py-8"
    >
      {/* Seletor de projeto estilizado */}
      <div className="mb-5 p-4 rounded-xl border border-border-dark/50 bg-surface/40">
        <div className="flex flex-wrap items-center gap-4">
          <label
            htmlFor="project-select"
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Projeto
          </label>
          <select
            id="project-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="project-select px-4 py-2.5 rounded-xl text-sm font-medium bg-surface border border-border-dark/60 text-primary outline-none transition-all cursor-pointer min-w-[240px] max-w-full hover:border-accent/40"
            aria-label="Selecionar projeto"
          >
            {projectsList.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
          <span className="text-xs font-medium text-muted bg-surface/60 px-3 py-1.5 rounded-lg border border-border-dark/40">
            {projectsList.findIndex((p) => p.id === selectedId) + 1} de {projectsList.length}
          </span>
        </div>
      </div>

      {/* Área de apresentação: iframe em destaque */}
      <div className="flex flex-col flex-1 min-h-[65vh] md:min-h-[72vh] rounded-xl border border-border-dark/60 bg-surface/30 overflow-hidden">
        {projectToShow && (
          <>
            <div className="flex-shrink-0 flex items-center justify-between gap-4 px-4 py-3 border-b border-border-dark/50 bg-surface/50">
              <h2 className="text-base font-semibold text-primary truncate">
                {projectToShow.title}
              </h2>
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
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
      </div>

      {/* Especificações do projeto: abaixo do iframe */}
      {projectToShow && (
        <section
          className="mt-6 py-6 px-4 md:px-6 rounded-xl border border-border-dark/50 bg-surface/20"
          aria-labelledby="specs-heading"
        >
          <h3
            id="specs-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-4"
          >
            Especificações
          </h3>
          <p className="text-sm text-accent/90 font-medium mb-1">
            {getCategoryLabel(projectToShow.category)}
          </p>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {projectToShow.description}
          </p>
          {hasDev && (
            <div>
              <p className="text-xs font-medium text-accent/90 uppercase tracking-wider mb-2">
                Sobre o desenvolvimento
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {projectToShow.developmentExplanation}
              </p>
            </div>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
            >
              Abrir site em nova guia
            </a>
          )}
        </section>
      )}
    </div>
  );
}

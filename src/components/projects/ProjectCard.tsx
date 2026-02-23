"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/shared/Card";
import type { Project } from "@/types";
import { projectCategories } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

function getCategoryLabel(category: Project["category"]) {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDev, setShowDev] = useState(false);
  const categoryLabel = getCategoryLabel(project.category);
  const href = project.link && !project.link.startsWith("[") ? project.link : "#";
  const hasDev = project.developmentExplanation && !project.developmentExplanation.startsWith("[");

  return (
    <Card as="article" className="group flex flex-col">
      {project.thumbnail && !project.thumbnail.startsWith("[") ? (
        <div className="relative aspect-video bg-surface-hover overflow-hidden">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div
          className="aspect-video bg-surface-hover flex items-center justify-center text-muted text-sm border-b border-border-dark/50"
          aria-hidden
        >
          <span className="opacity-60">Preview do projeto</span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-medium text-accent uppercase tracking-wider">
          {categoryLabel}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {hasDev && (
          <div className="mt-4 pt-4 border-t border-border-dark/60">
            <button
              type="button"
              onClick={() => setShowDev(!showDev)}
              className="text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded"
            >
              {showDev ? "Ocultar" : "Sobre o desenvolvimento"}
            </button>
            {showDev && (
              <p className="mt-3 text-sm text-muted leading-relaxed animate-in">
                {project.developmentExplanation}
              </p>
            )}
          </div>
        )}

        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded self-start"
        >
          Ver site
        </a>
      </div>
    </Card>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectCategory, ProjectTopic } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjectGrid() {
  const { projects, projectCategories, projectTopics, t } = useLocale();

  function getCategoryLabel(category: ProjectCategory) {
    return projectCategories.find((c) => c.id === category)?.label ?? category;
  }

  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic>("saude");
  const projectsInTopic = useMemo(
    () => projects.filter((p) => p.topic === selectedTopic),
    [projects, selectedTopic]
  );
  const [selectedId, setSelectedId] = useState<string>(projectsInTopic[0]?.id ?? "");

  const effectiveProject =
    projectsInTopic.find((project) => project.id === selectedId) ??
    projectsInTopic[0] ??
    null;
  const selectedProjectIndex = projectsInTopic.findIndex(
    (project) => project.id === effectiveProject?.id
  );
  const effectiveIndex = selectedProjectIndex >= 0 ? selectedProjectIndex : 0;

  const handleTopicChange = (topic: ProjectTopic) => {
    setSelectedTopic(topic);
    const inNewTopic = projects.filter((p) => p.topic === topic);
    if (inNewTopic.length > 0) {
      setSelectedId(inNewTopic[0].id);
    }
  };

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="w-full min-w-0 flex flex-col py-6 md:py-8"
    >
      <div className="mb-5 p-4 md:p-5 rounded-xl border border-border-dark/50 bg-surface/40">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
          {t.projects.byTopic}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projectTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => handleTopicChange(topic.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus-ring ${
                selectedTopic === topic.id
                  ? "bg-accent text-dark shadow-glow-sm"
                  : "bg-surface/80 text-muted hover:text-primary border border-border-dark/60 hover:border-accent/40"
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
        {effectiveProject ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-muted bg-surface/60 px-3 py-1.5 rounded-lg border border-border-dark/40">
              {t.projects.ofTotal
                .replace("{current}", String(effectiveIndex + 1))
                .replace("{total}", String(projectsInTopic.length))}
            </span>
            <span className="text-xs text-muted">
              {getCategoryLabel(effectiveProject.category)}
            </span>
          </div>
        ) : (
          <p className="text-sm text-muted">{t.projects.noneInTopic}</p>
        )}
      </div>

      {projectsInTopic.length > 0 && (
        <section className="mb-6" aria-labelledby="project-cards-heading">
          <h3
            id="project-cards-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            {t.projects.topicProjects}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {projectsInTopic.map((project) => {
              const isActive = project.id === effectiveProject?.id;
              return (
                <article
                  key={project.id}
                  className={`text-left rounded-xl border transition-all overflow-hidden ${
                    isActive
                      ? "border-accent/70 bg-accent/10 shadow-[0_0_0_1px_rgba(6,182,212,0.25)]"
                      : "border-border-dark/60 bg-surface/40 hover:border-accent/40"
                  }`}
                >
                  <div className="h-28 bg-dark/70 border-b border-border-dark/50 overflow-hidden relative">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${t.projects.thumbnailAltPrefix} ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-muted px-2 text-center">
                        {t.projects.thumbnailStatic}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <button
                      type="button"
                      onClick={() => setSelectedId(project.id)}
                      className="text-sm font-semibold text-primary truncate focus-ring"
                      aria-label={`${t.projects.selectProjectPrefix} ${project.title}`}
                    >
                      {project.title}
                    </button>
                    <p className="text-xs text-muted mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      href={`/cases/${project.slug}`}
                      className="inline-flex mt-3 text-xs font-semibold text-accent hover:text-accent-soft transition-colors focus-ring"
                    >
                      {t.caseDeck.caseCta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {effectiveProject ? (
        <section className="rounded-xl border border-border-dark/50 bg-surface/20 p-4 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-primary">
            {effectiveProject.title}
          </h2>
          <p className="text-sm text-muted mt-2 max-w-3xl leading-relaxed">
            {effectiveProject.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/cases/${effectiveProject.slug}`}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-accent text-dark text-sm font-semibold hover:bg-accent-soft transition-colors focus-ring"
            >
              {t.caseDeck.caseCta}
            </Link>
            {effectiveProject.link ? (
              <a
                href={effectiveProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl border border-border-dark/60 text-sm font-medium text-muted hover:text-primary hover:border-accent/40 transition-colors focus-ring"
              >
                {t.projects.openSiteTab}
              </a>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
}

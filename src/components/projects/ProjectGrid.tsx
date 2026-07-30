"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectTopic } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjectGrid() {
  const { projects, projectTopics, t } = useLocale();

  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic>("empresas");
  const projectsInTopic = useMemo(
    () => projects.filter((p) => p.topic === selectedTopic),
    [projects, selectedTopic]
  );

  return (
    <div className="w-full min-w-0 flex flex-col gap-8 md:gap-10">
      <div
        role="tablist"
        aria-label={t.projects.byTopic}
        className="flex flex-wrap gap-x-1 gap-y-0 border-b border-border-dark/40"
      >
        {projectTopics.map((topic) => {
          const selected = selectedTopic === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`topic-tab-${topic.id}`}
              aria-controls="panel-projects-topic"
              onClick={() => setSelectedTopic(topic.id)}
              className={`shrink-0 px-3 sm:px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors focus-ring ${
                selected
                  ? "border-accent text-primary"
                  : "border-transparent text-muted hover:text-primary hover:border-border-dark/50"
              }`}
            >
              {topic.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="panel-projects-topic"
        aria-labelledby={`topic-tab-${selectedTopic}`}
        className="min-w-0"
      >
        {projectsInTopic.length === 0 ? (
          <p className="text-sm text-muted py-4">{t.projects.noneInTopic}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {projectsInTopic.map((project) => {
              const segment = project.caseStudy?.context.segment;
              return (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.55)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/35 hover:shadow-[0_18px_44px_-22px_rgba(34,184,207,0.1)]"
                >
                  <Link
                    href={`/cases/${project.slug}`}
                    className="flex flex-col flex-1 min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-2xl"
                  >
                    <div className="relative aspect-[5/3] bg-dark/70 border-b border-border-dark/40 overflow-hidden">
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={`${t.projects.thumbnailAltPrefix} ${project.title}`}
                          fill
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted px-4 text-center">
                          {t.projects.thumbnailStatic}
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/25 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                            {t.deliveryType[project.deliveryType]}
                          </span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary leading-snug tracking-tight group-hover:text-accent-soft transition-colors">
                          {project.title}
                        </h2>
                        {segment ? (
                          <p className="mt-1 text-[11px] text-primary/70 line-clamp-1">
                            {segment}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <p className="text-sm text-muted leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                        {t.caseDeck.caseCta}
                        <span aria-hidden className="translate-y-px">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>

                  {project.link ? (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-muted hover:text-accent transition-colors focus-ring rounded underline-offset-4 hover:underline"
                      >
                        {t.projects.openSiteTab}
                      </a>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import {
  featuredProjects,
  secondaryProjects,
} from "@/lib/projectOrder";

function ProjectCardLink({
  project,
  thumbnailAltPrefix,
  deliveryLabel,
  academicBadge,
}: {
  project: Project;
  thumbnailAltPrefix: string;
  deliveryLabel: string;
  academicBadge: string;
}) {
  const segment = project.caseStudy?.context?.segment;
  return (
    <article className="group flex flex-col rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.55)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/35 hover:shadow-[0_18px_44px_-22px_rgba(34,184,207,0.1)]">
      <Link
        href={SITE_ROUTES.project(project.slug)}
        className="flex flex-col flex-1 min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-2xl"
      >
        <div className="relative aspect-[5/3] bg-dark/70 border-b border-border-dark/40 overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${thumbnailAltPrefix} ${project.title}`}
              fill
              className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                project.deliveryType === "sistema"
                  ? "object-left-top"
                  : "object-top"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(34,184,207,0.12),transparent_60%)]">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/80">
                {project.visibility === "academic" ? academicBadge : project.title}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 p-4 md:p-5 gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
              {deliveryLabel}
            </span>
            {project.visibility === "academic" ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                {academicBadge}
              </span>
            ) : null}
            {segment ? (
              <span className="text-[10px] text-muted">{segment}</span>
            ) : null}
          </div>
          <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ProjectGrid() {
  const { projects, t } = useLocale();
  const featured = featuredProjects(projects);
  const secondary = secondaryProjects(projects);

  return (
    <div className="w-full min-w-0 flex flex-col gap-10 md:gap-12">
      <section aria-labelledby="projects-featured-heading">
        <h2
          id="projects-featured-heading"
          className="text-sm font-semibold uppercase tracking-[0.12em] text-accent mb-5"
        >
          {t.pages.projectsFeaturedHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {featured.map((project) => (
            <ProjectCardLink
              key={project.id}
              project={project}
              thumbnailAltPrefix={t.projects.thumbnailAltPrefix}
              deliveryLabel={t.deliveryType[project.deliveryType]}
              academicBadge={t.home.academicBadge}
            />
          ))}
        </div>
      </section>

      {secondary.length > 0 ? (
        <section aria-labelledby="projects-explorations-heading">
          <h2
            id="projects-explorations-heading"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted mb-5"
          >
            {t.pages.projectsExplorationsHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {secondary.map((project) => (
              <ProjectCardLink
                key={project.id}
                project={project}
                thumbnailAltPrefix={t.projects.thumbnailAltPrefix}
                deliveryLabel={t.deliveryType[project.deliveryType]}
                academicBadge={t.home.academicBadge}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

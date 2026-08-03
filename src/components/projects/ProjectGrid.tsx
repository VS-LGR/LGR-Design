"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import {
  featuredProjects,
  secondaryProjects,
} from "@/lib/projectOrder";
import { ProjectCover } from "@/components/projects/covers/ProjectCover";

function ProjectCardLink({
  project,
  deliveryLabel,
  academicBadge,
  privateBadge,
  roleLabel,
  flagship = false,
}: {
  project: Project;
  deliveryLabel: string;
  academicBadge: string;
  privateBadge: string;
  roleLabel: string;
  flagship?: boolean;
}) {
  const cats = project.cardCategories;

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.55)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/35 hover:shadow-[0_18px_44px_-22px_rgba(34,184,207,0.1)] ${
        flagship ? "md:col-span-2 border-border-dark/55" : ""
      }`}
    >
      <Link
        href={SITE_ROUTES.project(project.slug)}
        className="flex flex-col flex-1 min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-2xl"
      >
        <ProjectCover
          project={project}
          variant={flagship ? "flagship" : "default"}
          className={
            flagship ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[5/3]"
          }
        />
        <div
          className={`flex flex-col flex-1 gap-2 ${
            flagship ? "p-5 md:p-7 md:max-w-3xl" : "p-4 md:p-5"
          }`}
        >
          <div className="flex flex-wrap gap-2 items-center">
            {cats && cats.length > 0 ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                {cats.join(" · ")}
              </span>
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                {deliveryLabel}
              </span>
            )}
            {project.visibility === "academic" ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                {academicBadge}
              </span>
            ) : null}
            {project.visibility === "private" ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                {privateBadge}
              </span>
            ) : null}
          </div>
          <h3
            className={`font-semibold text-primary group-hover:text-accent transition-colors ${
              flagship ? "text-xl md:text-2xl tracking-tight" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          {project.cardHook ? (
            <p
              className={`font-medium text-accent/90 leading-relaxed ${
                flagship ? "text-sm md:text-base" : "text-xs line-clamp-2"
              }`}
            >
              {project.cardHook}
            </p>
          ) : null}
          <p
            className={`text-muted leading-relaxed ${
              flagship
                ? "text-sm md:text-base line-clamp-4 md:line-clamp-none"
                : "text-sm line-clamp-3"
            }`}
          >
            {project.description}
          </p>
          {project.cardRole ? (
            <p className="text-[11px] md:text-xs text-muted pt-1">
              {flagship ? (
                <>
                  <span className="text-accent/90 font-semibold uppercase tracking-[0.1em]">
                    {roleLabel}
                  </span>
                  <span className="mx-2 text-border-dark">·</span>
                  {project.cardRole}
                </>
              ) : (
                project.cardRole
              )}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

export function ProjectGrid() {
  const { projects, t } = useLocale();
  const featured = featuredProjects(projects);
  const secondary = secondaryProjects(projects);
  const [flagship, ...rest] = featured;

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
          {flagship ? (
            <ProjectCardLink
              key={flagship.id}
              project={flagship}
              deliveryLabel={t.deliveryType[flagship.deliveryType]}
              academicBadge={t.home.academicBadge}
              privateBadge={t.home.privateBadge}
              roleLabel={t.home.roleLabel}
              flagship
            />
          ) : null}
          {rest.map((project) => (
            <ProjectCardLink
              key={project.id}
              project={project}
              deliveryLabel={t.deliveryType[project.deliveryType]}
              academicBadge={t.home.academicBadge}
              privateBadge={t.home.privateBadge}
              roleLabel={t.home.roleLabel}
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
                deliveryLabel={t.deliveryType[project.deliveryType]}
                academicBadge={t.home.academicBadge}
                privateBadge={t.home.privateBadge}
                roleLabel={t.home.roleLabel}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

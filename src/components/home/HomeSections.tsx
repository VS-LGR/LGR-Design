"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import {
  featuredProjects,
  secondaryProjects,
} from "@/lib/projectOrder";
import { resolveResumeUrl } from "@/lib/cv";
import { ProjectCover } from "@/components/projects/covers/ProjectCover";

function CardCategories({
  project,
  academicBadge,
  deliveryFallback,
}: {
  project: Project;
  academicBadge: string;
  deliveryFallback: string;
}) {
  const cats = project.cardCategories;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
      {cats && cats.length > 0 ? (
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
          {cats.join(" · ")}
        </span>
      ) : (
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
          {deliveryFallback}
        </span>
      )}
      {project.visibility === "academic" ? (
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
          {academicBadge}
        </span>
      ) : null}
    </div>
  );
}

export function HomeHero() {
  const { t, about } = useLocale();
  const resumeUrl = resolveResumeUrl(about.resumePdfUrl);

  return (
    <section className="relative overflow-hidden border-b border-border-dark/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(34,184,207,0.14),transparent_55%),radial-gradient(ellipse_at_90%_40%,rgba(34,184,207,0.06),transparent_45%)]"
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4 animate-[fade-in-up_0.6s_ease-out_both]">
          {t.home.kicker}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance leading-[1.12] max-w-3xl animate-[fade-in-up_0.7s_ease-out_0.05s_both]">
          {t.home.headline}
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl animate-[fade-in-up_0.7s_ease-out_0.1s_both]">
          {t.home.lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-[fade-in-up_0.7s_ease-out_0.15s_both]">
          <Link
            href={SITE_ROUTES.projects}
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full bg-accent px-5 text-sm font-semibold text-dark hover:bg-accent-soft transition-colors focus-ring"
          >
            {t.home.ctaProjects}
          </Link>
          <Link
            href={SITE_ROUTES.contact}
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-border-dark/60 bg-surface/40 px-5 text-sm font-semibold text-primary hover:border-accent/45 hover:bg-accent/8 transition-colors focus-ring"
          >
            {t.home.ctaContact}
          </Link>
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-transparent px-4 text-sm font-medium text-muted hover:text-accent transition-colors focus-ring"
            >
              {t.resume.download}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedProjects() {
  const { projects, t } = useLocale();
  const featured = featuredProjects(projects);
  const secondary = secondaryProjects(projects);
  const [flagship, ...rest] = featured;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-2">
            {t.home.featuredKicker}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            {t.home.featuredTitle}
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl">{t.home.featuredLead}</p>
        </div>
        <Link
          href={SITE_ROUTES.projects}
          className="text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.home.featuredAll}
        </Link>
      </div>

      {flagship ? (
        <Link
          href={SITE_ROUTES.project(flagship.slug)}
          className="group mb-6 md:mb-8 flex flex-col rounded-2xl border border-border-dark/50 bg-gradient-to-b from-surface/45 to-surface/15 overflow-hidden transition-[border-color,transform] duration-300 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark animate-[fade-in-up_0.55s_ease-out_both]"
        >
          <ProjectCover
            project={flagship}
            variant="flagship"
            className="aspect-[16/10] md:aspect-[21/9]"
          />
          <div className="flex flex-col gap-3 p-5 md:p-7 md:max-w-3xl">
            <CardCategories
              project={flagship}
              academicBadge={t.home.academicBadge}
              deliveryFallback={t.deliveryType[flagship.deliveryType]}
            />
            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors tracking-tight">
              {flagship.title}
            </h3>
            {flagship.cardHook ? (
              <p className="text-sm md:text-base text-accent/90 font-medium leading-relaxed">
                {flagship.cardHook}
              </p>
            ) : null}
            <p className="text-sm md:text-base text-muted leading-relaxed line-clamp-4 md:line-clamp-none">
              {flagship.description}
            </p>
            {flagship.cardRole ? (
              <p className="text-xs text-muted">
                <span className="text-accent/90 font-semibold uppercase tracking-[0.1em]">
                  {t.home.roleLabel}
                </span>
                <span className="mx-2 text-border-dark">·</span>
                {flagship.cardRole}
              </p>
            ) : null}
          </div>
        </Link>
      ) : null}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {rest.map((project, index) => (
          <li key={project.id}>
            <Link
              href={SITE_ROUTES.project(project.slug)}
              className="group flex flex-col h-full rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 overflow-hidden transition-[border-color,transform] duration-300 hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              style={{
                animation: `fade-in-up 0.55s ease-out ${0.05 * (index + 1)}s both`,
              }}
            >
              <ProjectCover
                project={project}
                className="aspect-[16/9]"
              />
              <div className="flex flex-col flex-1 p-4 md:p-5 gap-2">
                <CardCategories
                  project={project}
                  academicBadge={t.home.academicBadge}
                  deliveryFallback={t.deliveryType[project.deliveryType]}
                />
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.cardHook ? (
                  <p className="text-xs text-accent/85 font-medium leading-relaxed line-clamp-2">
                    {project.cardHook}
                  </p>
                ) : null}
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                {project.cardRole ? (
                  <p className="text-[11px] text-muted/90 mt-auto pt-1">
                    {project.cardRole}
                  </p>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {secondary.length > 0 ? (
        <div className="mt-12 pt-10 border-t border-border-dark/35">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted mb-4">
            {t.home.explorationsTitle}
          </h3>
          <ul className="flex flex-col gap-3">
            {secondary.map((project) => (
              <li key={project.id}>
                <Link
                  href={SITE_ROUTES.project(project.slug)}
                  className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-border-dark/30 bg-surface/20 px-4 py-3 hover:border-accent/30 transition-colors focus-ring"
                >
                  <span className="font-medium text-primary">{project.title}</span>
                  <span className="text-xs text-muted line-clamp-1 max-w-[28rem]">
                    {project.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export function HomeProcess() {
  const { t } = useLocale();

  return (
    <section className="border-y border-border-dark/35">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-2">
          {t.home.processKicker}
        </p>
        <h2 className="text-2xl font-bold text-primary tracking-tight mb-2">
          {t.home.processTitle}
        </h2>
        <p className="text-sm text-muted max-w-xl mb-8">{t.home.processLead}</p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {t.home.processSteps.map((step, index) => (
            <li key={step.title} className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent mb-1.5">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-sm font-semibold text-primary mb-1">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
        <Link
          href={SITE_ROUTES.process}
          className="inline-flex mt-8 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.home.processCta}
        </Link>
      </div>
    </section>
  );
}

export function HomeSkills() {
  const { about, t } = useLocale();
  const groups = [
    about.skillGroups.uxProduct,
    about.skillGroups.development,
    about.skillGroups.visual,
  ];

  return (
    <section className="bg-surface/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-2">
          {t.home.skillsKicker}
        </p>
        <h2 className="text-2xl font-bold text-primary tracking-tight mb-3">
          {t.home.skillsTitle}
        </h2>
        <p className="text-sm text-muted max-w-2xl mb-8">{t.home.skillsLead}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border-dark/45 bg-dark/40 px-2.5 py-1 text-xs text-primary/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted italic">{about.skillGroups.closing}</p>
        <Link
          href={SITE_ROUTES.process}
          className="inline-flex mt-4 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.home.skillsProcess}
        </Link>
      </div>
    </section>
  );
}

export function HomeContactCta() {
  const { t, about } = useLocale();
  const phoneDigits = about.contact.phone.replace(/\D/g, "");
  const wa = `https://wa.me/55${phoneDigits}`;
  const resumeUrl = resolveResumeUrl(about.resumePdfUrl);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
      <div className="rounded-2xl border border-border-dark/50 bg-gradient-to-br from-surface/50 via-surface/25 to-accent/5 p-6 md:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-2">
          {t.home.contactKicker}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight max-w-xl text-balance">
          {t.home.contactTitle}
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted max-w-xl leading-relaxed">
          {t.home.contactLead}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={SITE_ROUTES.contact}
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full bg-accent px-5 text-sm font-semibold text-dark hover:bg-accent-soft transition-colors focus-ring"
          >
            {t.home.ctaContact}
          </Link>
          {about.contact.linkedin ? (
            <a
              href={about.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-border-dark/60 px-5 text-sm font-semibold text-primary hover:border-accent/40 transition-colors focus-ring"
            >
              {t.contact.linkedin}
            </a>
          ) : null}
          {about.contact.github ? (
            <a
              href={about.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-border-dark/60 px-5 text-sm font-semibold text-primary hover:border-accent/40 transition-colors focus-ring"
            >
              {t.contact.github}
            </a>
          ) : null}
          <a
            href={`mailto:${about.contact.email}`}
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-transparent px-4 text-sm font-medium text-muted hover:text-accent transition-colors focus-ring"
          >
            {t.contact.email}
          </a>
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-transparent px-4 text-sm font-medium text-muted hover:text-accent transition-colors focus-ring"
            >
              {t.resume.download}
            </a>
          ) : null}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-transparent px-4 text-sm font-medium text-muted hover:text-accent transition-colors focus-ring"
          >
            {t.contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

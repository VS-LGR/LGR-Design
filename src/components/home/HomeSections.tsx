"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import {
  featuredProjects,
  secondaryProjects,
} from "@/lib/projectOrder";
import { resolveResumeUrl } from "@/lib/cv";

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
  const featured = featuredProjects(projects).slice(0, 4);
  const secondary = secondaryProjects(projects);

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

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {featured.map((project, index) => (
          <li key={project.id}>
            <Link
              href={SITE_ROUTES.project(project.slug)}
              className="group flex flex-col h-full rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 overflow-hidden transition-[border-color,transform] duration-300 hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              style={{
                animation: `fade-in-up 0.55s ease-out ${0.05 * index}s both`,
              }}
            >
              <div className="relative aspect-[16/9] bg-dark/70 border-b border-border-dark/40 overflow-hidden">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={`${t.projects.thumbnailAltPrefix} ${project.title}`}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                      project.deliveryType === "sistema"
                        ? "object-left-top"
                        : "object-top"
                    }`}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(34,184,207,0.12),transparent_60%)]">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/80">
                      {project.visibility === "academic"
                        ? t.home.academicBadge
                        : project.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-4 md:p-5 gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                    {t.deliveryType[project.deliveryType]}
                  </span>
                  {project.visibility === "academic" ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                      {t.home.academicBadge}
                    </span>
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

export function HomeSkills() {
  const { about, t } = useLocale();
  const skills = about.tools.items.slice(0, 8);

  return (
    <section className="border-y border-border-dark/35 bg-surface/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-2">
          {t.home.skillsKicker}
        </p>
        <h2 className="text-2xl font-bold text-primary tracking-tight mb-3">
          {t.home.skillsTitle}
        </h2>
        <p className="text-sm text-muted max-w-2xl mb-6">{t.home.skillsLead}</p>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border-dark/45 bg-dark/40 px-3 py-1.5 text-xs sm:text-sm text-primary/90"
            >
              {skill}
            </li>
          ))}
        </ul>
        <Link
          href={SITE_ROUTES.process}
          className="inline-flex mt-6 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
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
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-border-dark/60 px-5 text-sm font-semibold text-primary hover:border-accent/40 transition-colors focus-ring"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={`mailto:${about.contact.email}`}
            className="inline-flex items-center justify-center min-h-[2.75rem] rounded-full border border-transparent px-4 text-sm font-medium text-muted hover:text-accent transition-colors focus-ring"
          >
            {t.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}

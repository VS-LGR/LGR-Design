"use client";

import type { AboutContent, Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";
import { featuredProjects } from "@/lib/projectOrder";
import { SITE_URL } from "@/lib/siteMeta";
import { PROJECT_COVER_ICONS, IconProjectDefault } from "@/components/projects/covers/ProjectCoverIcons";

type ExportPortfolioSheetProps = {
  t: UiMessages;
  projects: Project[];
  about: AboutContent;
};

function LandscapeSlide({
  index,
  total,
  t,
  children,
}: {
  index: number;
  total: number;
  t: UiMessages;
  children: React.ReactNode;
}) {
  return (
    <section
      className="export-landscape-slide relative flex flex-col overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-[#0d1a28] via-[#0a1520] to-[#050c14]"
      aria-label={`${index} ${t.exportDoc.slideOf} ${total}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.28) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1] flex h-full min-h-0 flex-1 flex-col px-7 py-5 sm:px-9 sm:py-6 md:px-10">
        <div className="flex min-h-0 flex-1 flex-col gap-3">{children}</div>
        <div className="mt-3 flex shrink-0 items-center justify-between gap-3 border-t border-white/8 pt-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[9px] font-bold text-accent">
              {t.system.coreLabel}
            </span>
            <span className="truncate text-[11px] text-muted">
              Lucas Gabriel Rodrigues · UX/UI · Product · Web
            </span>
          </div>
          <span className="shrink-0 text-[11px] font-semibold tabular-nums tracking-wider text-accent/90">
            {String(index).padStart(2, "0")} {t.exportDoc.slideOf}{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function ScreenMock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#070d16]/80 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)]">
      <div className="flex shrink-0 items-center gap-2 border-b border-white/8 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
          {label}
        </span>
      </div>
      <div className="min-h-0 flex-1 p-3 sm:p-4">{children}</div>
    </div>
  );
}

export function ExportPortfolioSheet({
  t,
  projects,
  about,
}: ExportPortfolioSheetProps) {
  const ep = t.exportPortfolio;
  const featured = featuredProjects(projects).slice(0, 6);
  const processSteps = t.home.processSteps;
  const siteHost = SITE_URL.replace(/^https?:\/\//, "");

  const total = 8;
  let n = 0;
  const next = () => ++n;

  return (
    <article className="export-doc-sheet export-carousel export-landscape mx-auto max-w-[1200px] px-3 sm:px-4 py-8 md:py-10 space-y-6 md:space-y-8">
      <p className="no-print text-center text-xs text-muted px-2">
        {ep.carouselLabel} · 1200×627 · {ep.linkedinHint}
      </p>

      {/* 01 — Capa */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-4 md:flex-row md:items-center md:gap-10">
          <div className="max-w-xl space-y-3 shrink-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {ep.coverEyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-primary text-balance">
              {ep.coverTitle}
            </h1>
            <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-md">
              {ep.coverLead}
            </p>
          </div>
          <div className="hidden sm:flex min-h-0 flex-1 items-center justify-center">
            <div className="w-full max-w-sm rounded-xl border border-accent/25 bg-accent/5 p-5 space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.home.kicker}
              </p>
              <p className="text-lg font-semibold text-primary leading-snug">
                {t.home.headline}
              </p>
              <p className="text-xs text-muted">{siteHost}</p>
            </div>
          </div>
        </div>
      </LandscapeSlide>

      {/* 02 — Posicionamento */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.positionKicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary text-balance">
            {ep.positionTitle}
          </h2>
        </header>
        <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-3 gap-3 content-center">
          {ep.positionPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4 space-y-2"
            >
              <p className="text-sm font-semibold text-accent">{point.title}</p>
              <p className="text-xs text-muted leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </LandscapeSlide>

      {/* 03 — Home */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.screenHome}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {ep.homeTitle}
          </h2>
        </header>
        <ScreenMock label="/">
          <div className="flex h-full flex-col justify-center gap-2 max-w-lg">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
              {t.home.kicker}
            </p>
            <p className="text-base sm:text-lg font-bold text-primary leading-snug line-clamp-3">
              {t.home.headline}
            </p>
            <p className="text-xs text-muted leading-relaxed line-clamp-2">
              {t.home.lead}
            </p>
            <div className="mt-1 flex gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-dark">
                {t.home.ctaProjects}
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold text-primary">
                {t.home.ctaContact}
              </span>
            </div>
          </div>
        </ScreenMock>
      </LandscapeSlide>

      {/* 04 — Projetos */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.screenProjects}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {ep.projectsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-2xl">{ep.projectsLead}</p>
        </header>
        <ul className="grid min-h-0 flex-1 grid-cols-2 sm:grid-cols-3 gap-2.5 content-center list-none">
          {featured.map((project) => {
            const Icon =
              PROJECT_COVER_ICONS[project.slug] ?? IconProjectDefault;
            return (
              <li
                key={project.id}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-primary">
                    {project.title}
                  </p>
                  <p className="truncate text-[10px] text-muted">
                    {(project.cardCategories ?? []).slice(0, 2).join(" · ") ||
                      t.deliveryType[project.deliveryType]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </LandscapeSlide>

      {/* 05 — Processo */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.screenProcess}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {ep.processTitle}
          </h2>
        </header>
        <ol className="grid min-h-0 flex-1 grid-cols-5 gap-2 content-center list-none">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <span className="text-[10px] font-bold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-primary leading-snug">
                {step.title}
              </p>
              <p className="text-[10px] text-muted leading-snug line-clamp-3 hidden sm:block">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </LandscapeSlide>

      {/* 06 — Sobre */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.screenAbout}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {ep.aboutTitle}
          </h2>
        </header>
        <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-2 gap-4 content-center">
          <div className="space-y-2">
            {about.intro.slice(0, 2).map((line) => (
              <p key={line} className="text-sm text-primary/85 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              {ep.aboutObjectiveLabel}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {about.professionalObjective}
            </p>
          </div>
        </div>
      </LandscapeSlide>

      {/* 07 — Contato */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <header className="shrink-0 space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {ep.screenContact}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {ep.contactTitle}
          </h2>
        </header>
        <ScreenMock label="/contato">
          <div className="flex h-full flex-col justify-center gap-3 max-w-md">
            <p className="text-base font-semibold text-primary">
              {t.home.contactTitle}
            </p>
            <p className="text-xs text-muted leading-relaxed line-clamp-2">
              {t.home.contactLead}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent">
                {about.contact.email}
              </span>
              {about.contact.linkedin ? (
                <span className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] font-medium text-muted">
                  LinkedIn
                </span>
              ) : null}
              {about.contact.github ? (
                <span className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] font-medium text-muted">
                  GitHub
                </span>
              ) : null}
            </div>
          </div>
        </ScreenMock>
      </LandscapeSlide>

      {/* 08 — CTA */}
      <LandscapeSlide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center gap-4 px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {ep.ctaEyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary text-balance max-w-2xl">
            {ep.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-lg leading-relaxed">
            {ep.ctaLead}
          </p>
          <p className="mt-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent">
            {siteHost}
          </p>
        </div>
      </LandscapeSlide>
    </article>
  );
}

"use client";

import type { Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";
import { ProjectCover } from "@/components/projects/covers/ProjectCover";
import { IconQualiProc } from "@/components/projects/covers/ProjectCoverIcons";

const PORTFOLIO_URL = "https://lgr-design.vercel.app";
const PORTFOLIO_HOST = "lgr-design.vercel.app";

type ExportPortfolioSheetProps = {
  t: UiMessages;
  projects: Project[];
};

function Slide({
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
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.28) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1] flex h-full min-h-0 flex-1 flex-col px-8 py-5 sm:px-10 sm:py-6">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <div className="mt-3 flex shrink-0 items-center justify-between gap-3 border-t border-white/8 pt-2.5">
          <span className="truncate text-[11px] text-muted">
            Lucas Gabriel Rodrigues
          </span>
          <span className="shrink-0 text-[11px] font-semibold tabular-nums tracking-wider text-accent/90">
            {String(index).padStart(2, "0")} {t.exportDoc.slideOf}{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function bySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function ExportPortfolioSheet({
  t,
  projects,
}: ExportPortfolioSheetProps) {
  const ep = t.exportPortfolio;
  const qualiproc = bySlug(projects, "qualiproc-ctli");
  const dverso = bySlug(projects, "clinica-dverso");
  const ofag = bySlug(projects, "ofag-revamp");
  const processSteps = t.home.processSteps;

  const total = 6;
  let n = 0;
  const next = () => ++n;

  return (
    <article className="export-doc-sheet export-carousel export-landscape mx-auto max-w-[1200px] px-3 sm:px-4 py-8 md:py-10 space-y-6 md:space-y-8">
      <p className="no-print text-center text-xs text-muted px-2">
        {ep.carouselLabel} · 1200×627 · {ep.linkedinHint}
      </p>

      {/* 01 — Capa */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center gap-4 px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {ep.coverEyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary text-balance max-w-3xl leading-[1.12]">
            {ep.coverTitle}
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-lg leading-relaxed">
            {ep.coverLead}
          </p>
          <p className="text-xs font-medium text-accent/90">{PORTFOLIO_URL}</p>
        </div>
      </Slide>

      {/* 02 — Hero / posicionamento */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-5 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {t.home.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary text-balance leading-[1.15]">
            {t.home.headline}
          </h2>
          <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-2xl">
            {t.home.lead}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-dark">
              {t.home.ctaProjects}
            </span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-primary">
              {t.home.ctaContact}
            </span>
          </div>
        </div>
      </Slide>

      {/* 03 — QualiProc (ícone centralizado) */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col gap-3 md:flex-row md:items-stretch md:gap-6">
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              {ep.flagshipEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              {qualiproc?.title ?? "QualiProc"}
            </h2>
            {qualiproc?.cardHook ? (
              <p className="text-sm font-medium text-accent/90 leading-snug">
                {qualiproc.cardHook}
              </p>
            ) : null}
            <p className="text-sm text-muted leading-relaxed line-clamp-3">
              {qualiproc?.description}
            </p>
            {qualiproc?.cardRole ? (
              <p className="text-[11px] text-muted/90">{qualiproc.cardRole}</p>
            ) : null}
            {qualiproc?.cardCategories ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent/80">
                {qualiproc.cardCategories.join(" · ")}
              </p>
            ) : null}
          </div>
          <div className="flex min-h-[180px] w-full md:w-[46%] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0f1728] to-[#0c1222]">
            <IconQualiProc
              className="h-28 w-28 sm:h-32 sm:w-32 text-accent"
              title="QualiProc"
            />
          </div>
        </div>
      </Slide>

      {/* 04 — Clínica DVERSO / OFAG (web) */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <div className="shrink-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              {ep.webEyebrow}
            </p>
            <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-primary">
              {ep.webTitle}
            </h2>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 content-stretch">
            {[dverso, ofag].map((project) =>
              project ? (
                <div
                  key={project.id}
                  className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <ProjectCover
                    project={project}
                    className="aspect-[16/9] shrink-0 border-0"
                  />
                  <div className="flex flex-1 flex-col gap-1 p-3">
                    <p className="text-sm font-semibold text-primary truncate">
                      {project.title}
                    </p>
                    <p className="text-[10px] text-accent font-medium line-clamp-1">
                      {(project.cardCategories ?? []).join(" · ")}
                    </p>
                    <p className="text-[11px] text-muted leading-snug line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </Slide>

      {/* 05 — Método de desenvolvimento */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <div className="shrink-0 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              {ep.methodEyebrow}
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              {ep.methodTitle}
            </h2>
            <p className="mt-1.5 text-sm text-muted">{ep.methodLead}</p>
          </div>
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
                <p className="text-[10px] text-muted leading-snug line-clamp-3">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Slide>

      {/* 06 — CTA */}
      <Slide index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center gap-4 px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {ep.ctaKicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Lucas Gabriel Rodrigues
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
            {ep.ctaLead}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent">
              {PORTFOLIO_HOST}
            </span>
            <span className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-dark">
              {ep.ctaContact}
            </span>
          </div>
        </div>
      </Slide>
    </article>
  );
}

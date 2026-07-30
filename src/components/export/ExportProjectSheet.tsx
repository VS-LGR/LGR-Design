"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";

function thumbSrc(
  thumbnail: Project["thumbnail"]
): string | StaticImageData | null {
  if (
    thumbnail == null ||
    (typeof thumbnail === "string" && thumbnail.startsWith("["))
  ) {
    return null;
  }
  return thumbnail;
}

type ExportProjectSheetProps = {
  project: Project;
  t: UiMessages;
  locale: "pt" | "en";
};

export function ExportProjectSheet({
  project,
  t,
  locale,
}: ExportProjectSheetProps) {
  const ctx = project.caseStudy?.context;
  const gallery = project.caseStudy?.gallery?.slice(0, 3) ?? [];
  const hero =
    gallery[0]?.src ??
    thumbSrc(project.thumbnail) ??
    null;
  const heroCaption = gallery[0]?.caption;
  const stages = project.keyStages?.slice(0, 3) ?? [];
  const challenge = project.caseProblem;
  const solution = project.caseSolution;
  const deliveryLabel = t.deliveryType[project.deliveryType];

  return (
    <article className="export-doc-sheet export-project-sheet mx-auto max-w-4xl px-4 sm:px-6 py-8 md:py-12">
      {/* Brand masthead */}
      <header className="export-brand-masthead relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-[#0d1a28] via-[#0a1520] to-[#061018] p-5 sm:p-7 mb-6">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(34,184,207,0.28) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(6,100,120,0.35) 0%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="export-monogram flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-bold tracking-wide text-accent shadow-[0_0_24px_-6px_rgba(34,184,207,0.55)]">
              {t.system.coreLabel}
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold text-primary tracking-tight">
                Lucas Gabriel Rodrigues
              </p>
              <p className="text-xs sm:text-sm text-accent/90">
                {t.header.tagline}
              </p>
            </div>
          </div>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            {t.exportDoc.kicker}
          </p>
        </div>
      </header>

      {/* Hero visual */}
      {hero ? (
        <figure className="export-hero relative mb-6 overflow-hidden rounded-2xl border border-border-dark/50 bg-[#0b1220] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.75)]">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.03]">
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
            <span className="ml-2 text-[10px] text-muted/70 truncate">
              {project.title}
            </span>
          </div>
          <div className="relative aspect-[16/9] bg-[#e8eef5]">
            <Image
              src={hero}
              alt={gallery[0]?.alt ?? project.title}
              fill
              className="object-contain object-top p-1.5 sm:p-2"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          {heroCaption ? (
            <figcaption className="px-4 py-2.5 text-xs text-muted border-t border-white/5">
              {heroCaption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {/* Title block */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
            {deliveryLabel}
          </span>
          {ctx?.type ? (
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
              {ctx.type}
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-primary tracking-tight leading-[1.1] text-balance">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Context meta */}
      {ctx ? (
        <dl className="export-meta grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 p-5 rounded-2xl border border-border-dark/45 bg-surface/30">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/90">
              {t.exportDoc.segmentLabel}
            </dt>
            <dd className="mt-1.5 text-sm text-primary/90 leading-snug">
              {ctx.segment}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/90">
              {t.exportDoc.roleLabel}
            </dt>
            <dd className="mt-1.5 text-sm text-primary/90 leading-snug">
              {ctx.role}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/90">
              {t.exportDoc.objectiveLabel}
            </dt>
            <dd className="mt-1.5 text-sm text-primary/90 leading-snug">
              {ctx.objective}
            </dd>
          </div>
        </dl>
      ) : null}

      {/* Overview */}
      {ctx?.overview ? (
        <p className="mb-6 text-sm sm:text-base text-primary/80 leading-relaxed border-l-2 border-accent/50 pl-4">
          {ctx.overview}
        </p>
      ) : null}

      {/* Challenge / Solution */}
      {challenge || solution ? (
        <div className="export-split grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {challenge ? (
            <div className="rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/35 to-transparent p-5 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.exportDoc.challengeLabel}
              </p>
              <p className="text-sm text-primary/85 leading-relaxed">
                {challenge}
              </p>
            </div>
          ) : null}
          {solution ? (
            <div className="rounded-2xl border border-accent/25 bg-gradient-to-b from-accent/10 to-transparent p-5 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.exportDoc.solutionLabel}
              </p>
              <p className="text-sm text-primary/85 leading-relaxed">
                {solution}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Key stages */}
      {stages.length > 0 ? (
        <section className="mb-6 space-y-3">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {t.exportDoc.stagesLabel}
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none">
            {stages.map((stage, i) => (
              <li
                key={stage.title}
                className="rounded-xl border border-border-dark/40 bg-surface/20 p-4 space-y-2 break-inside-avoid"
              >
                <span className="text-[10px] font-bold text-accent/80 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-primary leading-snug">
                  {stage.title}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Gallery strip */}
      {gallery.length > 1 ? (
        <section className="mb-8 space-y-3">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {t.exportDoc.galleryLabel}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
            {gallery.slice(1).map((item) => (
              <li
                key={item.src}
                className="overflow-hidden rounded-xl border border-border-dark/45 bg-[#0b1220] break-inside-avoid"
              >
                <div className="relative aspect-[16/10] bg-[#e8eef5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain object-top p-1"
                    sizes="(max-width: 640px) 100vw, 420px"
                  />
                </div>
                <p className="px-3 py-2 text-[11px] text-muted leading-snug">
                  {item.caption}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Footer */}
      <footer className="export-doc-footer border-t border-border-dark/40 pt-5 flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-0.5">
          <p className="text-sm font-medium text-primary/90">{t.exportDoc.footer}</p>
          <p className="text-xs text-muted">
            {locale === "pt" ? "Portfólio" : "Portfolio"} · lukagabriel.rodrigues@gmail.com
          </p>
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/80">
          {project.slug}
        </p>
      </footer>
    </article>
  );
}

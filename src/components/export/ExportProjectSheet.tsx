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

function firstTextBlock(project: Project, chapterId: string): string | null {
  const chapter = project.caseStudy?.chapters?.find((c) => c.id === chapterId);
  const block = chapter?.blocks?.find((b) => b.type === "text" && b.content);
  return block?.content ?? null;
}

function chapterTitle(project: Project, chapterId: string): string | null {
  return (
    project.caseStudy?.chapters?.find((c) => c.id === chapterId)?.title ?? null
  );
}

type SlideChromeProps = {
  index: number;
  total: number;
  t: UiMessages;
  children: React.ReactNode;
};

function SlideChrome({ index, total, t, children }: SlideChromeProps) {
  return (
    <section
      className="export-carousel-slide relative flex flex-col overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-b from-[#0d1a28] via-[#0a1520] to-[#050c14]"
      aria-label={`${index} ${t.exportDoc.slideOf} ${total}`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.22) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(6,100,120,0.28) 0%, transparent 72%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1] flex h-full min-h-0 flex-1 flex-col p-6 sm:p-8">
        {children}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-white/8">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[10px] font-bold text-accent">
              {t.system.coreLabel}
            </span>
            <span className="text-[10px] text-muted truncate">
              Lucas Gabriel Rodrigues
            </span>
          </div>
          <span className="text-[11px] font-semibold tabular-nums tracking-wider text-accent/90 shrink-0">
            {String(index).padStart(2, "0")} {t.exportDoc.slideOf}{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

type ExportProjectSheetProps = {
  project: Project;
  t: UiMessages;
  locale: "pt" | "en";
};

export function ExportProjectSheet({
  project,
  t,
}: ExportProjectSheetProps) {
  const ctx = project.caseStudy?.context;
  const gallery = project.caseStudy?.gallery ?? [];
  const stages = (project.keyStages ?? []).slice(0, 3);
  const hero = gallery[0]?.src ?? thumbSrc(project.thumbnail);
  const challenge =
    project.caseProblem ?? firstTextBlock(project, "problema");
  const solution =
    project.caseSolution ?? firstTextBlock(project, "solucao");
  const problemHook = chapterTitle(project, "problema");
  const solutionHook = chapterTitle(project, "solucao");
  const results = (project.caseResults ?? []).slice(0, 3);
  const deliveryLabel = t.deliveryType[project.deliveryType];

  /** Capturas dedicadas (pula a do hero da capa para variar o carrossel) */
  const visualSlides = (gallery.length > 1 ? gallery.slice(1, 4) : gallery.slice(0, 2));

  const hasProblem = Boolean(challenge);
  const hasSolution = Boolean(solution);
  const hasResults = results.length > 0;

  const total =
    1 +
    (hasProblem ? 1 : 0) +
    stages.length +
    visualSlides.length +
    (hasSolution ? 1 : 0) +
    (hasResults ? 1 : 0) +
    1;

  let n = 0;
  const next = () => ++n;

  return (
    <article className="export-doc-sheet export-carousel mx-auto max-w-[720px] px-4 sm:px-5 py-8 md:py-10 space-y-6 md:space-y-8">
      <p className="no-print text-center text-xs text-muted leading-relaxed max-w-lg mx-auto">
        {t.exportDoc.carouselLabel} · {total} slides · {t.exportDoc.linkedinHint}
      </p>

      {/* CAPA — o que o LinkedIn mostra primeiro */}
      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex flex-1 flex-col gap-3.5 min-h-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-md border border-accent/40 bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
              {t.exportDoc.coverEyebrow}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
              {deliveryLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-[2.5rem] font-bold text-primary tracking-tight leading-[1.05] text-balance">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-accent font-semibold leading-snug text-balance">
            {problemHook ?? t.exportDoc.coverHook}
          </p>
          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {hero ? (
            <div className="relative mt-auto flex-1 min-h-[180px] overflow-hidden rounded-xl border border-white/10 bg-[#e8eef5] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <Image
                src={hero}
                alt={gallery[0]?.alt ?? project.title}
                fill
                className="object-contain object-top p-1.5"
                sizes="680px"
                priority
              />
            </div>
          ) : null}

          <p className="text-sm font-semibold text-accent">
            {t.exportDoc.swipeHint}
          </p>
        </div>
      </SlideChrome>

      {/* DESAFIO */}
      {hasProblem && challenge ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-5 justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.challengeLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-tight text-balance">
              {problemHook ?? t.exportDoc.challengeLabel}
            </h2>
            <p className="text-base sm:text-lg text-primary/85 leading-relaxed">
              {challenge}
            </p>
            {ctx ? (
              <div className="grid grid-cols-1 gap-3 pt-1">
                <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-accent/90 font-semibold">
                    {t.exportDoc.segmentLabel}
                  </p>
                  <p className="mt-1 text-sm text-primary/90">{ctx.segment}</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-accent/90 font-semibold">
                    {t.exportDoc.roleLabel}
                  </p>
                  <p className="mt-1 text-sm text-primary/90">{ctx.role}</p>
                </div>
              </div>
            ) : null}
            <p className="text-sm font-medium text-muted">{t.exportDoc.swipeHint}</p>
          </div>
        </SlideChrome>
      ) : null}

      {/* PASSOS / DICAS — formato carrossel */}
      {stages.map((stage, i) => (
        <SlideChrome key={stage.title} index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-5 justify-center">
            <div className="flex items-end gap-4">
              <span className="text-6xl sm:text-7xl font-bold text-accent/25 leading-none tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {t.exportDoc.stepLabel} {i + 1}/{stages.length}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {t.exportDoc.tipLabel}
                </p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-[1.75rem] font-bold text-primary tracking-tight leading-snug text-balance">
              {stage.title}
            </h2>
            <p className="text-base text-primary/80 leading-relaxed max-w-prose">
              {stage.description}
            </p>
            <div className="h-1 w-16 rounded-full bg-accent/50" aria-hidden />
            <p className="text-sm font-medium text-muted">{t.exportDoc.swipeHint}</p>
          </div>
        </SlideChrome>
      ))}

      {/* IMAGENS AUTÊNTICAS — uma por swipe */}
      {visualSlides.map((item) => (
        <SlideChrome key={item.src} index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.visualLabel}
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-primary tracking-tight leading-snug text-balance">
              {item.caption}
            </h2>
            <div className="relative flex-1 min-h-[240px] overflow-hidden rounded-xl border border-white/10 bg-[#e8eef5]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain object-top p-1.5"
                sizes="680px"
              />
            </div>
            <p className="text-xs text-muted">{t.exportDoc.galleryLabel}</p>
          </div>
        </SlideChrome>
      ))}

      {/* SOLUÇÃO */}
      {hasSolution && solution ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-5 justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.solutionLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-tight text-balance">
              {solutionHook ?? t.exportDoc.solutionLabel}
            </h2>
            <p className="text-base sm:text-lg text-primary/85 leading-relaxed">
              {solution}
            </p>
            {ctx?.objective ? (
              <div className="rounded-xl border border-accent/25 bg-accent/10 px-4 py-3.5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-accent font-semibold">
                  {t.exportDoc.objectiveLabel}
                </p>
                <p className="mt-1.5 text-sm text-primary/90 leading-snug">
                  {ctx.objective}
                </p>
              </div>
            ) : null}
          </div>
        </SlideChrome>
      ) : null}

      {/* RESULTADO */}
      {hasResults ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-5 justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.resultLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-tight">
              {project.title}
            </h2>
            <ul className="space-y-3 list-none">
              {results.map((r) => (
                <li
                  key={r.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5"
                >
                  <p className="text-[10px] uppercase tracking-[0.12em] text-accent font-semibold">
                    {r.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-primary">{r.value}</p>
                  {r.delta ? (
                    <p className="mt-0.5 text-xs text-muted">{r.delta}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </SlideChrome>
      ) : null}

      {/* CTA — fecha o carrossel pedindo ação */}
      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex flex-1 flex-col items-center justify-center text-center gap-5 px-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/45 bg-accent/15 text-lg font-bold text-accent shadow-[0_0_32px_-4px_rgba(34,184,207,0.55)]">
            {t.system.coreLabel}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-tight text-balance max-w-sm">
            {t.exportDoc.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-sm">
            {t.exportDoc.ctaLead}
          </p>
          <div className="rounded-xl border border-accent/35 bg-accent/10 px-6 py-3.5">
            <p className="text-sm font-semibold text-accent">
              {t.exportDoc.ctaContact}
            </p>
            <p className="text-xs text-primary/80 mt-1">
              lukagabriel.rodrigues@gmail.com
            </p>
          </div>
          <p className="text-[11px] text-muted max-w-xs leading-relaxed">
            {t.exportDoc.footer}
          </p>
        </div>
      </SlideChrome>
    </article>
  );
}

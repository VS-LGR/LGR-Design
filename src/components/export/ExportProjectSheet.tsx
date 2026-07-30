"use client";

import type { Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";
import {
  ExportScene,
  PRODUCT_SCENE_IDS,
  type ExportSceneId,
} from "@/components/export/ExportScene";

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

function sceneCaption(id: ExportSceneId, t: UiMessages): string {
  switch (id) {
    case "product-hub":
      return t.exportDoc.sceneHub;
    case "product-flow":
      return t.exportDoc.sceneFlow;
    case "product-trust":
      return t.exportDoc.sceneTrust;
    default:
      return t.exportDoc.sceneConcept;
  }
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

export function ExportProjectSheet({ project, t }: ExportProjectSheetProps) {
  const ctx = project.caseStudy?.context;
  const stages = (project.keyStages ?? []).slice(0, 3);
  const challenge =
    project.caseProblem ?? firstTextBlock(project, "problema");
  const solution =
    project.caseSolution ?? firstTextBlock(project, "solucao");
  const problemHook = chapterTitle(project, "problema");
  const solutionHook = chapterTitle(project, "solucao");
  const results = (project.caseResults ?? []).slice(0, 3);
  const deliveryLabel = t.deliveryType[project.deliveryType];
  const deliveryType = project.deliveryType;

  const visualScenes = PRODUCT_SCENE_IDS;
  const hasProblem = Boolean(challenge);
  const hasSolution = Boolean(solution);
  const hasResults = results.length > 0;

  const total =
    1 +
    (hasProblem ? 1 : 0) +
    stages.length +
    visualScenes.length +
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

      {/* CAPA */}
      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex flex-1 flex-col gap-3 min-h-0">
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

          <div className="mt-auto flex-1 min-h-0 flex flex-col justify-end">
            <ExportScene
              id="cover"
              deliveryType={deliveryType}
              title={project.title}
              className="aspect-[16/9] max-h-[200px]"
            />
          </div>

          <p className="text-sm font-semibold text-accent">
            {t.exportDoc.swipeHint}
          </p>
        </div>
      </SlideChrome>

      {/* DESAFIO */}
      {hasProblem && challenge ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.challengeLabel}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight leading-tight text-balance">
              {problemHook ?? t.exportDoc.challengeLabel}
            </h2>
            <p className="text-sm sm:text-base text-primary/85 leading-relaxed line-clamp-4">
              {challenge}
            </p>
            <div className="mt-auto">
              <ExportScene
                id="challenge"
                deliveryType={deliveryType}
                className="aspect-[16/9] max-h-[160px]"
              />
            </div>
            {ctx ? (
              <p className="text-xs text-muted truncate">
                {ctx.segment} · {ctx.role}
              </p>
            ) : null}
          </div>
        </SlideChrome>
      ) : null}

      {/* PASSOS + ilustração SVG */}
      {stages.map((stage, i) => (
        <SlideChrome key={stage.title} index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-accent/25 leading-none tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {t.exportDoc.stepLabel} {i + 1}/{stages.length}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {t.exportDoc.tipLabel}
                </p>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight leading-snug text-balance">
              {stage.title}
            </h2>
            <p className="text-sm text-primary/80 leading-relaxed line-clamp-3">
              {stage.description}
            </p>
            <div className="mt-auto">
              <ExportScene
                id="step"
                deliveryType={deliveryType}
                stepIndex={i}
                className="aspect-[16/9] max-h-[150px]"
              />
            </div>
          </div>
        </SlideChrome>
      ))}

      {/* CENÁRIOS DE PRODUTO (SVG, sem prints) */}
      {visualScenes.map((sceneId) => (
        <SlideChrome key={sceneId} index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.visualLabel}
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-primary tracking-tight leading-snug text-balance">
              {sceneCaption(sceneId, t)}
            </h2>
            <div className="mt-auto flex-1 flex flex-col justify-end">
              <ExportScene
                id={sceneId}
                deliveryType={deliveryType}
                title={project.title}
                className="aspect-[16/9] min-h-[180px]"
              />
            </div>
            <p className="text-xs text-muted">{t.exportDoc.sceneConcept}</p>
          </div>
        </SlideChrome>
      ))}

      {/* SOLUÇÃO */}
      {hasSolution && solution ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.solutionLabel}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight leading-tight text-balance">
              {solutionHook ?? t.exportDoc.solutionLabel}
            </h2>
            <p className="text-sm sm:text-base text-primary/85 leading-relaxed line-clamp-4">
              {solution}
            </p>
            <div className="mt-auto">
              <ExportScene
                id="solution"
                deliveryType={deliveryType}
                className="aspect-[16/9] max-h-[160px]"
              />
            </div>
          </div>
        </SlideChrome>
      ) : null}

      {/* RESULTADO */}
      {hasResults ? (
        <SlideChrome index={next()} total={total} t={t}>
          <div className="flex flex-1 flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.resultLabel}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              {project.title}
            </h2>
            <ul className="space-y-2 list-none">
              {results.map((r) => (
                <li
                  key={r.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5"
                >
                  <p className="text-[10px] uppercase tracking-[0.12em] text-accent font-semibold">
                    {r.label}
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-primary">
                    {r.value}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <ExportScene
                id="result"
                deliveryType={deliveryType}
                className="aspect-[16/9] max-h-[120px]"
              />
            </div>
          </div>
        </SlideChrome>
      ) : null}

      {/* CTA */}
      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex flex-1 flex-col gap-3 min-h-0">
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <ExportScene
              id="cta"
              deliveryType={deliveryType}
              className="aspect-[16/9] max-h-[140px] w-full"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-tight text-balance max-w-sm">
              {t.exportDoc.ctaTitle}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              {t.exportDoc.ctaLead}
            </p>
            <div className="rounded-xl border border-accent/35 bg-accent/10 px-6 py-3">
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
        </div>
      </SlideChrome>
    </article>
  );
}

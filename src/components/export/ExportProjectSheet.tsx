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
        className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,207,0.25) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1] flex h-full min-h-0 flex-1 flex-col px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
        <div className="flex min-h-0 flex-1 flex-col gap-2.5">{children}</div>
        <div className="mt-2 flex shrink-0 items-center justify-between gap-3 border-t border-white/8 pt-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[9px] font-bold text-accent">
              {t.system.coreLabel}
            </span>
            <span className="truncate text-[10px] text-muted">
              Lucas Gabriel Rodrigues
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

/** Bloco de texto compacto + cena SVG ocupando o restante do slide */
function SlideBody({
  kicker,
  title,
  body,
  scene,
  meta,
}: {
  kicker: string;
  title: string;
  body?: string;
  scene: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <>
      <header className="shrink-0 space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          {kicker}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight text-primary text-balance">
          {title}
        </h2>
        {body ? (
          <p className="text-sm leading-snug text-primary/80 line-clamp-3">
            {body}
          </p>
        ) : null}
        {meta}
      </header>
      <div className="min-h-0 flex-1">{scene}</div>
    </>
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
  const results = (project.caseResults ?? []).slice(0, 4);
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
      <p className="no-print mx-auto max-w-lg text-center text-xs leading-relaxed text-muted">
        {t.exportDoc.carouselLabel} · {total} slides · {t.exportDoc.linkedinHint}
      </p>

      {/* CAPA — visual dominante */}
      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <span className="inline-flex rounded-md border border-accent/40 bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {t.exportDoc.coverEyebrow}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
            {deliveryLabel}
          </span>
        </div>
        <h1 className="shrink-0 text-2xl sm:text-3xl font-bold leading-[1.05] tracking-tight text-primary text-balance">
          {project.title}
        </h1>
        <p className="shrink-0 text-sm sm:text-base font-semibold leading-snug text-accent text-balance">
          {problemHook ?? t.exportDoc.coverHook}
        </p>
        <div className="min-h-0 flex-1">
          <ExportScene
            id="cover"
            deliveryType={deliveryType}
            title={project.title}
            className="h-full"
          />
        </div>
        <p className="shrink-0 text-sm font-semibold text-accent">
          {t.exportDoc.swipeHint}
        </p>
      </SlideChrome>

      {hasProblem && challenge ? (
        <SlideChrome index={next()} total={total} t={t}>
          <SlideBody
            kicker={t.exportDoc.challengeLabel}
            title={problemHook ?? t.exportDoc.challengeLabel}
            body={challenge}
            meta={
              ctx ? (
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-accent/90">
                      {t.exportDoc.segmentLabel}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-primary/90 line-clamp-2">
                      {ctx.segment}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-accent/90">
                      {t.exportDoc.roleLabel}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-primary/90 line-clamp-2">
                      {ctx.role}
                    </p>
                  </div>
                </div>
              ) : null
            }
            scene={
              <ExportScene
                id="challenge"
                deliveryType={deliveryType}
                className="h-full"
              />
            }
          />
        </SlideChrome>
      ) : null}

      {stages.map((stage, i) => (
        <SlideChrome key={stage.title} index={next()} total={total} t={t}>
          <div className="flex shrink-0 items-end gap-3">
            <span className="text-4xl font-bold leading-none tabular-nums text-accent/30 select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pb-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                {t.exportDoc.stepLabel} {i + 1}/{stages.length}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.exportDoc.tipLabel}
              </p>
            </div>
          </div>
          <h2 className="shrink-0 text-xl font-bold leading-snug tracking-tight text-primary text-balance">
            {stage.title}
          </h2>
          <p className="shrink-0 text-sm leading-snug text-primary/80 line-clamp-2">
            {stage.description}
          </p>
          <div className="min-h-0 flex-1">
            <ExportScene
              id="step"
              deliveryType={deliveryType}
              stepIndex={i}
              className="h-full"
            />
          </div>
        </SlideChrome>
      ))}

      {visualScenes.map((sceneId) => (
        <SlideChrome key={sceneId} index={next()} total={total} t={t}>
          <SlideBody
            kicker={t.exportDoc.visualLabel}
            title={sceneCaption(sceneId, t)}
            scene={
              <ExportScene
                id={sceneId}
                deliveryType={deliveryType}
                title={project.title}
                className="h-full"
              />
            }
          />
        </SlideChrome>
      ))}

      {hasSolution && solution ? (
        <SlideChrome index={next()} total={total} t={t}>
          <SlideBody
            kicker={t.exportDoc.solutionLabel}
            title={solutionHook ?? t.exportDoc.solutionLabel}
            body={solution}
            scene={
              <ExportScene
                id="solution"
                deliveryType={deliveryType}
                className="h-full"
              />
            }
          />
        </SlideChrome>
      ) : null}

      {/* RESULTADO — cards em grade + SVG dominante (sem vazio) */}
      {hasResults ? (
        <SlideChrome index={next()} total={total} t={t}>
          <header className="shrink-0 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t.exportDoc.resultLabel}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
              {project.title}
            </h2>
          </header>
          <ul className="grid shrink-0 grid-cols-2 gap-2 list-none">
            {results.map((r) => (
              <li
                key={r.label}
                className="rounded-xl border border-accent/20 bg-accent/[0.07] px-3 py-2.5"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {r.label}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-primary">
                  {r.value}
                </p>
              </li>
            ))}
          </ul>
          <div className="min-h-0 flex-1">
            <ExportScene
              id="result"
              deliveryType={deliveryType}
              className="h-full"
            />
          </div>
        </SlideChrome>
      ) : null}

      <SlideChrome index={next()} total={total} t={t}>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 text-center">
          <div className="w-full max-h-[42%] min-h-0 flex-1">
            <ExportScene
              id="cta"
              deliveryType={deliveryType}
              className="h-full"
            />
          </div>
          <h2 className="shrink-0 max-w-sm text-2xl font-bold leading-tight tracking-tight text-primary text-balance">
            {t.exportDoc.ctaTitle}
          </h2>
          <p className="shrink-0 max-w-sm text-sm leading-snug text-muted">
            {t.exportDoc.ctaLead}
          </p>
          <div className="shrink-0 rounded-xl border border-accent/35 bg-accent/10 px-5 py-2.5">
            <p className="text-sm font-semibold text-accent">
              {t.exportDoc.ctaContact}
            </p>
            <p className="mt-0.5 text-xs text-primary/80">
              lukagabriel.rodrigues@gmail.com
            </p>
          </div>
        </div>
      </SlideChrome>
    </article>
  );
}

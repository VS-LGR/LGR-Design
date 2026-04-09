"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";
import { ChapterRail } from "./ChapterRail";
import { ChapterSection } from "./ChapterSection";
import { CaseProgress } from "./CaseProgress";
import { CasePreviewStep } from "./CasePreviewStep";

interface CaseDeckProps {
  project: Project;
  t: UiMessages;
}

export function CaseDeck({ project, t }: CaseDeckProps) {
  const chapters = project.caseStudy?.chapters ?? [];
  const [activeChapter, setActiveChapter] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const contextCards = useMemo(() => {
    const context = project.caseStudy?.context;
    if (!context) return [];
    return [
      { label: t.caseDeck.projectType, value: context.type },
      { label: t.caseDeck.segment, value: context.segment },
      { label: t.caseDeck.objective, value: context.objective },
      { label: t.caseDeck.role, value: context.role },
    ];
  }, [project.caseStudy?.context, t.caseDeck.objective, t.caseDeck.projectType, t.caseDeck.role, t.caseDeck.segment]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (chapters.length === 0) return;
      if (event.key === "ArrowRight") {
        setActiveChapter((prev) => Math.min(prev + 1, chapters.length - 1));
      }
      if (event.key === "ArrowLeft") {
        setActiveChapter((prev) => Math.max(prev - 1, 0));
      }
      if (event.key === "Home") {
        setActiveChapter(0);
      }
      if (event.key === "End") {
        setActiveChapter(chapters.length - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [chapters.length]);

  useEffect(() => {
    setActiveChapter(0);
  }, [project.id]);

  const active = chapters[activeChapter];
  const chapterLabel = `${t.caseDeck.chapterLabel} ${activeChapter + 1} / ${Math.max(1, chapters.length)}`;
  const activeChapterAnnouncement = active
    ? `${active.label}: ${active.title}`
    : chapterLabel;

  return (
    <div className="w-full max-w-6xl mx-auto py-6 md:py-10 px-4 md:px-6 space-y-6">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
      >
        {t.caseDeck.backToProjects}
      </Link>

      <header className="rounded-2xl border border-border-dark/60 bg-surface/30 p-4 md:p-6 space-y-4">
        <p className="text-xs uppercase tracking-wide text-accent font-semibold">
          {t.caseDeck.context}
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-primary">
          {project.title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contextCards.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-border-dark/50 bg-surface/40 p-3"
            >
              <p className="text-xs uppercase tracking-wide text-accent/90 font-semibold">
                {item.label}
              </p>
              <p className="text-sm text-muted mt-1 leading-relaxed">{item.value}</p>
            </article>
          ))}
        </div>
        {project.caseStudy?.context.overview ? (
          <div>
            <p className="text-xs uppercase tracking-wide text-accent/90 font-semibold">
              {t.caseDeck.overview}
            </p>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {project.caseStudy.context.overview}
            </p>
          </div>
        ) : null}
      </header>

      <div className="space-y-4">
        <CaseProgress
          current={activeChapter}
          total={chapters.length}
          label={t.caseDeck.progressAria}
        />
        <ChapterRail
          chapters={chapters}
          activeIndex={activeChapter}
          onSelect={setActiveChapter}
          ariaLabel={t.caseDeck.chapterNavAria}
        />
      </div>

      <section className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-4 items-start">
        <aside className="rounded-2xl border border-border-dark/60 bg-surface/20 p-4 sticky top-20">
          <p className="text-xs uppercase tracking-wide text-accent font-semibold">
            {chapterLabel}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            {active?.title ?? project.description}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setActiveChapter((prev) => Math.max(prev - 1, 0))}
              disabled={activeChapter === 0}
              className="px-3 py-2 rounded-xl text-sm border border-border-dark/60 text-muted enabled:hover:text-primary enabled:hover:border-accent/40 disabled:opacity-40 focus-ring"
            >
              {t.caseDeck.previousChapter}
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveChapter((prev) => Math.min(prev + 1, chapters.length - 1))
              }
              disabled={activeChapter >= chapters.length - 1}
              className="px-3 py-2 rounded-xl text-sm border border-border-dark/60 text-muted enabled:hover:text-primary enabled:hover:border-accent/40 disabled:opacity-40 focus-ring"
            >
              {t.caseDeck.nextChapter}
            </button>
          </div>
          <p className="mt-3 text-xs text-muted xl:hidden">{t.caseDeck.swipeHint}</p>
        </aside>
        <div
          className="space-y-4"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
            touchStartY.current = event.touches[0]?.clientY ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current == null || touchStartY.current == null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const endY = event.changedTouches[0]?.clientY ?? touchStartY.current;
            const deltaX = touchStartX.current - endX;
            const deltaY = touchStartY.current - endY;
            const isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
            if (isHorizontalGesture && Math.abs(deltaX) > 45) {
              if (deltaX > 0) {
                setActiveChapter((prev) => Math.min(prev + 1, chapters.length - 1));
              } else {
                setActiveChapter((prev) => Math.max(prev - 1, 0));
              }
            }
            touchStartX.current = null;
            touchStartY.current = null;
          }}
        >
          <p className="sr-only" aria-live="polite">
            {activeChapterAnnouncement}
          </p>
          {active ? (
            <div key={active.id} className="case-chapter-transition">
              <ChapterSection chapter={active} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="w-screen relative left-1/2 -translate-x-1/2 px-4 md:px-6">
        <div className="max-w-none">
          <CasePreviewStep
            title={project.caseStudy?.previewTitle ?? t.caseDeck.previewTitle}
            description={
              project.caseStudy?.previewDescription ?? t.caseDeck.previewDescription
            }
            previewUrl={project.link}
            t={t}
          />
        </div>
      </section>
    </div>
  );
}

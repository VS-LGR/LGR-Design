"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Project } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";
import { ChapterSection } from "./ChapterSection";
import { CasePreviewStep } from "./CasePreviewStep";
import { CaseGallery } from "./CaseGallery";

interface CaseDeckProps {
  project: Project;
  t: UiMessages;
}

export function CaseDeck({ project, t }: CaseDeckProps) {
  const chapters = project.caseStudy?.chapters ?? [];
  const gallery = project.caseStudy?.gallery ?? [];
  const overviewRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    overviewRef.current?.scrollIntoView({ block: "nearest" });
  }, [project.id]);

  const contextCards = [
    project.caseStudy?.context
      ? [
          { label: t.caseDeck.projectType, value: project.caseStudy.context.type },
          { label: t.caseDeck.segment, value: project.caseStudy.context.segment },
          { label: t.caseDeck.objective, value: project.caseStudy.context.objective },
          { label: t.caseDeck.role, value: project.caseStudy.context.role },
        ]
      : [],
  ][0];

  const deliveryLabel = t.deliveryType[project.deliveryType];

  return (
    <div className="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 md:py-10 px-4 sm:px-5 md:px-8 space-y-6 md:space-y-8 overflow-x-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/projetos"
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
        >
          {t.caseDeck.backToProjects}
        </Link>
        <Link
          href={`/export/projetos/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded underline-offset-4 hover:underline"
        >
          {t.exportDoc.openProjectCta}
        </Link>
      </div>

      <header
        ref={overviewRef}
        className="rounded-2xl border border-border-dark/50 bg-gradient-to-b from-surface/40 to-surface/20 p-5 md:p-7 space-y-5 md:space-y-6"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.cardCategories && project.cardCategories.length > 0 ? (
              <span className="inline-flex items-center rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                {project.cardCategories.join(" · ")}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                {deliveryLabel}
              </span>
            )}
            {project.visibility === "academic" ? (
              <span className="inline-flex items-center rounded-md border border-border-dark/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                {t.home.academicBadge}
              </span>
            ) : null}
            {project.visibility === "private" ? (
              <span className="inline-flex items-center rounded-md border border-border-dark/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                {t.home.privateBadge}
              </span>
            ) : null}
            {project.caseStudy?.context.type ? (
              <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                {project.caseStudy.context.type}
              </span>
            ) : null}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight leading-tight text-balance">
            {project.title}
          </h1>
          {project.caseStudy?.context.segment ? (
            <p className="text-sm text-muted">{project.caseStudy.context.segment}</p>
          ) : null}
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-border-dark/35">
          {contextCards.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] uppercase tracking-[0.12em] text-accent/90 font-semibold">
                {item.label}
              </dt>
              <dd className="text-sm text-primary/85 mt-1.5 leading-relaxed">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {project.caseStudy?.context.overview ? (
          <div className="border-t border-border-dark/35 pt-5 space-y-2.5">
            <p className="text-[11px] uppercase tracking-[0.12em] text-accent/90 font-semibold">
              {t.caseDeck.overview}
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-3xl">
              {project.caseStudy.context.overview}
            </p>
          </div>
        ) : null}
      </header>

      {gallery.length > 0 ? (
        <CaseGallery
          items={gallery}
          heading={t.caseDeck.galleryHeading}
          expandLabel={t.caseDeck.galleryExpand}
          closeLabel={t.caseDeck.galleryClose}
        />
      ) : null}

      {chapters.length > 0 ? (
        <nav
          aria-label={t.caseDeck.chapterNavAria}
          className="sticky top-0 z-10 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 bg-dark/90 backdrop-blur-sm border-b border-border-dark/40"
        >
          <ul className="flex flex-wrap gap-2">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#chapter-${chapter.id}`}
                  className="inline-flex items-center rounded-full border border-border-dark/50 bg-surface/30 px-3 py-1.5 text-xs font-medium text-muted hover:text-accent hover:border-accent/40 transition-colors focus-ring"
                >
                  {chapter.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="space-y-8 md:space-y-10">
        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            className="scroll-mt-24 case-chapter-transition"
            aria-labelledby={`chapter-title-${chapter.id}`}
          >
            <ChapterSection chapter={chapter} />
          </section>
        ))}
      </div>

      <section className="w-full min-w-0 max-w-full border-t border-border-dark/30 pt-6 md:pt-8 mt-2">
        <div className="min-w-0">
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

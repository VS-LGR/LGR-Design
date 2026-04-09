"use client";

import type { CaseStudyChapter, CaseStudyBlock } from "@/types";

function renderBlock(block: CaseStudyBlock) {
  if (block.type === "bullets" && block.items?.length) {
    return (
      <ul className="space-y-2">
        {block.items.map((item) => (
          <li key={item} className="text-sm text-muted leading-relaxed">
            - {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "tags" && block.items?.length) {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent border border-accent/30"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (block.type === "stats" && block.stats?.length) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {block.stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-border-dark/50 bg-surface/40 p-4"
          >
            <p className="text-xs uppercase tracking-wide text-accent font-semibold">
              {stat.label}
            </p>
            <p className="text-sm text-primary font-semibold mt-1">{stat.value}</p>
            {stat.delta ? (
              <p className="text-xs text-muted mt-1">{stat.delta}</p>
            ) : null}
          </article>
        ))}
      </div>
    );
  }

  if (block.type === "quote" && block.content) {
    return (
      <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted leading-relaxed">
        {block.content}
      </blockquote>
    );
  }

  return <p className="text-sm text-muted leading-relaxed">{block.content}</p>;
}

interface ChapterSectionProps {
  chapter: CaseStudyChapter;
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const hasManyBlocks = chapter.blocks.length > 2;

  return (
    <section
      className="case-slide-panel rounded-2xl border border-border-dark/60 bg-surface/25 p-4 md:p-6 space-y-4"
      aria-labelledby={`chapter-title-${chapter.id}`}
    >
      <header>
        <p className="text-xs uppercase tracking-wide text-accent font-semibold">
          {chapter.label}
        </p>
        <h2
          id={`chapter-title-${chapter.id}`}
          className="text-xl md:text-2xl font-semibold text-primary mt-2"
        >
          {chapter.title}
        </h2>
        {chapter.subtitle ? (
          <p className="text-sm text-muted mt-2">{chapter.subtitle}</p>
        ) : null}
      </header>
      <div
        className={`space-y-4 ${
          hasManyBlocks
            ? "max-h-[68vh] overflow-y-auto pr-1 snap-y snap-mandatory"
            : ""
        }`}
      >
        {chapter.blocks.map((block, index) => (
          <article
            key={block.id}
            className={`space-y-2 rounded-xl border border-border-dark/40 bg-surface/20 p-3 md:p-4 ${
              hasManyBlocks ? "snap-start" : ""
            }`}
          >
            <p className="text-[11px] uppercase tracking-wide text-accent/80 font-semibold">
              Item {index + 1}
            </p>
            {block.title ? (
              <h3 className="text-sm font-semibold text-primary">{block.title}</h3>
            ) : null}
            {renderBlock(block)}
          </article>
        ))}
      </div>
    </section>
  );
}

"use client";

import type { CaseStudyChapter, CaseStudyBlock } from "@/types";

function renderBlock(block: CaseStudyBlock) {
  if (block.type === "bullets" && block.items?.length) {
    return (
      <ul className="list-disc pl-5 space-y-2 marker:text-accent/70">
        {block.items.map((item) => (
          <li key={item} className="text-sm text-muted leading-[1.65] pl-0.5">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "tags" && block.items?.length) {
    return (
      <div className="flex flex-wrap gap-2 min-w-0">
        {block.items.map((item) => (
          <span
            key={item}
            className="inline-block max-w-full px-3 py-1.5 rounded-full text-xs font-medium bg-accent/15 text-accent border border-accent/30 break-words text-left hyphens-auto"
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
            className="rounded-xl border border-border-dark/50 bg-surface/35 p-4"
          >
            <p className="text-xs uppercase tracking-wide text-accent font-semibold">
              {stat.label}
            </p>
            <p className="text-sm text-primary font-semibold mt-1 leading-snug">
              {stat.value}
            </p>
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
      <blockquote className="border-l-2 border-accent/50 pl-4 italic text-sm text-muted leading-[1.65]">
        {block.content}
      </blockquote>
    );
  }

  return (
    <p className="text-sm text-muted leading-[1.65]">{block.content}</p>
  );
}

interface ChapterSectionProps {
  chapter: CaseStudyChapter;
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const hasManyBlocks = chapter.blocks.length > 2;
  const showBlockIndex = chapter.blocks.length > 1;

  return (
    <section
      className="rounded-2xl border border-border-dark/50 bg-surface/20 p-4 md:p-8 space-y-5 md:space-y-6 min-w-0 max-w-full overflow-x-hidden"
      aria-labelledby={`chapter-title-${chapter.id}`}
    >
      <header className="space-y-2 pb-1 border-b border-border-dark/30">
        <p className="text-xs uppercase tracking-wide text-accent font-semibold">
          {chapter.label}
        </p>
        <h2
          id={`chapter-title-${chapter.id}`}
          className="text-xl md:text-2xl font-semibold text-primary leading-snug"
        >
          {chapter.title}
        </h2>
        {chapter.subtitle ? (
          <p className="text-sm text-muted leading-relaxed">{chapter.subtitle}</p>
        ) : null}
      </header>
      <div
        className={`space-y-6 min-w-0 ${
          hasManyBlocks
            ? "max-h-[min(52dvh,26rem)] sm:max-h-[min(62vh,30rem)] md:max-h-[min(68vh,32rem)] overflow-y-auto overflow-x-hidden pr-1 -mr-1 snap-y snap-mandatory"
            : ""
        }`}
      >
        {chapter.blocks.map((block, index) => (
          <article
            key={block.id}
            className={`space-y-3 border-l-2 border-accent/20 pl-4 md:pl-5 ${
              hasManyBlocks ? "snap-start" : ""
            }`}
          >
            {showBlockIndex ? (
              <p className="text-[11px] uppercase tracking-wide text-accent/75 font-semibold">
                {index + 1} / {chapter.blocks.length}
              </p>
            ) : null}
            {block.title ? (
              <h3 className="text-sm font-semibold text-primary leading-snug">
                {block.title}
              </h3>
            ) : null}
            {renderBlock(block)}
          </article>
        ))}
      </div>
    </section>
  );
}

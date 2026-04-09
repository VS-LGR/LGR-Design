"use client";

import type { CaseStudyChapter } from "@/types";

interface ChapterRailProps {
  chapters: CaseStudyChapter[];
  activeIndex: number;
  onSelect: (index: number) => void;
  ariaLabel: string;
}

export function ChapterRail({
  chapters,
  activeIndex,
  onSelect,
  ariaLabel,
}: ChapterRailProps) {
  return (
    <nav aria-label={ariaLabel} className="overflow-x-auto pb-2">
      <ol className="flex items-center gap-2 min-w-max">
        {chapters.map((chapter, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={chapter.id}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-current={isActive ? "step" : undefined}
                className={`px-3 py-2 rounded-xl text-sm border transition-colors focus-ring ${
                  isActive
                    ? "bg-accent text-dark border-accent"
                    : "bg-surface/60 border-border-dark/60 text-muted hover:text-primary hover:border-accent/40"
                }`}
              >
                {chapter.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

"use client";

import { useEffect, useRef } from "react";
import type { CaseStudyChapter } from "@/types";
import type { UiMessages } from "@/lib/i18n/messages";

interface ChapterTrackProps {
  chapters: CaseStudyChapter[];
  activeIndex: number;
  onSelect: (index: number) => void;
  t: UiMessages;
}

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ChapterTrack({
  chapters,
  activeIndex,
  onSelect,
  t,
}: ChapterTrackProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const n = chapters.length;
  const safeN = Math.max(1, n);

  /** Progressão clara: etapa atual incluída (1/N … N/N). */
  const fillPercent = ((activeIndex + 1) / safeN) * 100;

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (!el) return;
    el.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [activeIndex]);

  if (n === 0) {
    return null;
  }

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < n - 1;

  return (
    <div
      className="w-full min-w-0 rounded-2xl border border-border-dark/50 bg-surface/25 p-3 md:p-4"
      aria-label={t.caseDeck.progressAria}
    >
      <div className="flex items-stretch gap-2 md:gap-3 min-w-0">
        <button
          type="button"
          onClick={() => onSelect(Math.max(0, activeIndex - 1))}
          disabled={!canPrev}
          aria-label={t.caseDeck.previousChapter}
          className="chapter-track-chevron flex-shrink-0 self-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-border-dark/60 bg-surface/80 text-muted flex items-center justify-center transition-all duration-200 enabled:hover:border-accent/45 enabled:hover:text-accent enabled:hover:bg-accent/10 disabled:opacity-35 disabled:cursor-not-allowed focus-ring"
        >
          <ChevronLeft />
        </button>

        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <nav
            aria-label={t.caseDeck.chapterNavAria}
            className="overflow-x-auto scrollbar-hide pb-1"
          >
            <div className="relative min-w-[min(100%,280px)] px-1">
              <div
                className="absolute left-0 right-0 top-[18px] h-0.5 rounded-full bg-border-dark/55 z-0"
                aria-hidden
              />
              <div
                className="chapter-track-fill absolute left-0 top-[18px] h-0.5 rounded-full bg-accent z-0"
                style={{ width: `${fillPercent}%` }}
                aria-hidden
              />

              <ol className="relative z-10 flex justify-between items-start gap-0 list-none m-0 p-0 min-h-[52px]">
                {chapters.map((chapter, index) => {
                  const isActive = index === activeIndex;
                  const isDone = index < activeIndex;
                  return (
                    <li
                      key={chapter.id}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      className="flex flex-col items-center flex-1 min-w-[3rem] max-w-[6rem]"
                    >
                      <button
                        type="button"
                        onClick={() => onSelect(index)}
                        title={chapter.title}
                        aria-current={isActive ? "step" : undefined}
                        className={`chapter-track-node flex flex-col items-center gap-1 focus-ring rounded-xl px-1 py-0.5 w-full ${
                          isActive ? "chapter-track-node--active" : ""
                        }`}
                      >
                        <span
                          className={`
                            chapter-track-dot flex-shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 transition-all duration-200
                            ${
                              isActive
                                ? "bg-accent border-accent shadow-[0_0_14px_-2px_rgba(6,182,212,0.55)]"
                                : isDone
                                  ? "bg-accent/45 border-accent/60"
                                  : "bg-surface/90 border-border-dark/70"
                            }
                          `}
                        />
                        <span
                          className={`text-[10px] md:text-[11px] font-medium text-center leading-tight line-clamp-2 transition-colors duration-200 ${
                            isActive
                              ? "text-accent"
                              : isDone
                                ? "text-muted"
                                : "text-muted/80"
                          }`}
                        >
                          {chapter.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>

          <p className="text-center text-xs text-muted px-1 line-clamp-2">
            {chapters[activeIndex]?.title ?? ""}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSelect(Math.min(n - 1, activeIndex + 1))}
          disabled={!canNext}
          aria-label={t.caseDeck.nextChapter}
          className="chapter-track-chevron flex-shrink-0 self-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-border-dark/60 bg-surface/80 text-muted flex items-center justify-center transition-all duration-200 enabled:hover:border-accent/45 enabled:hover:text-accent enabled:hover:bg-accent/10 disabled:opacity-35 disabled:cursor-not-allowed focus-ring"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

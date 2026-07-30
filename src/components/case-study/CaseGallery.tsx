"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import type { CaseStudyGalleryItem } from "@/types";

type CaseGalleryProps = {
  items: CaseStudyGalleryItem[];
  heading: string;
  expandLabel: string;
  closeLabel: string;
};

export function CaseGallery({
  items,
  heading,
  expandLabel,
  closeLabel,
}: CaseGalleryProps) {
  const titleId = useId();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i == null ? 0 : (i + 1) % items.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i == null ? 0 : (i - 1 + items.length) % items.length
        );
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [activeIndex, close, items.length]);

  if (items.length === 0) return null;

  const [featured, ...rest] = items;
  const active = activeIndex != null ? items[activeIndex] : null;

  return (
    <section className="space-y-5" aria-labelledby={titleId}>
      <h2
        id={titleId}
        className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
      >
        {heading}
      </h2>

      {/* Destaque em largura total — UI legível (contain, sem crop agressivo) */}
      <figure className="rounded-2xl border border-border-dark/50 bg-[#0b1220] overflow-hidden shadow-[0_16px_40px_-28px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.03]">
          <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
          <span className="ml-2 text-[10px] text-muted/70 truncate">
            {featured.caption}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="relative block w-full aspect-[16/9] md:aspect-[2/1] bg-[#e8eef5] focus-ring"
          aria-label={`${expandLabel}: ${featured.alt}`}
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            className="object-contain object-top p-1 md:p-2"
            sizes="(max-width: 1200px) 100vw, 1100px"
            priority
          />
        </button>
        <figcaption className="px-4 py-3 text-sm text-muted leading-snug border-t border-white/5">
          {featured.caption}
        </figcaption>
      </figure>

      {rest.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
          {rest.map((item, i) => (
            <li key={item.src}>
              <figure className="h-full rounded-xl border border-border-dark/45 bg-[#0b1220] overflow-hidden flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i + 1)}
                  className="relative block w-full aspect-[16/10] bg-[#e8eef5] focus-ring"
                  aria-label={`${expandLabel}: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain object-top p-1"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </button>
                <figcaption className="px-3 py-2.5 text-xs text-muted leading-snug flex-1">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : null}

      {active && activeIndex != null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8 bg-dark/92 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90dvh] flex flex-col rounded-2xl border border-border-dark/60 bg-[#0b1220] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/8">
              <p className="text-sm text-primary/90 truncate pr-2">{active.caption}</p>
              <button
                type="button"
                onClick={close}
                className="shrink-0 text-sm font-medium text-accent hover:text-accent-soft focus-ring rounded px-2 py-1"
              >
                {closeLabel}
              </button>
            </div>
            <div className="relative flex-1 min-h-[50dvh] bg-[#e8eef5]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain p-2 md:p-4"
                sizes="100vw"
                priority
              />
            </div>
            <p className="px-4 py-2 text-xs text-muted text-center">
              {activeIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

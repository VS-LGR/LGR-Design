"use client";

import Image from "next/image";
import type { CaseStudyGalleryItem } from "@/types";

type CaseGalleryProps = {
  items: CaseStudyGalleryItem[];
  heading: string;
};

export function CaseGallery({ items, heading }: CaseGalleryProps) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-4" aria-labelledby="case-gallery-heading">
      <h2
        id="case-gallery-heading"
        className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
      >
        {heading}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none">
        {items.map((item) => (
          <li
            key={item.src}
            className="rounded-xl border border-border-dark/45 bg-surface/20 overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-dark/60">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <p className="px-3.5 py-2.5 text-xs md:text-sm text-muted leading-snug">
              {item.caption}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

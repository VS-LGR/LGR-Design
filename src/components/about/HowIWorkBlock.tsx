"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HowIWorkBlock() {
  const { about, t } = useLocale();
  const { howIWork } = about;

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2
          id="how-i-work-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {t.sections.howIWork}
        </h2>
        <p className="text-muted leading-relaxed">{howIWork.intro}</p>
      </header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
        {howIWork.points.map((point, i) => (
          <li
            key={i}
            className="rounded-xl border border-border-dark/45 bg-surface/20 px-4 py-3.5 text-sm text-primary/90 leading-snug"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent block mb-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            {point}
          </li>
        ))}
      </ul>
      {howIWork.closing && (
        <p className="text-sm md:text-base text-muted leading-relaxed border-l-2 border-accent/45 pl-4">
          {howIWork.closing}
        </p>
      )}
    </div>
  );
}

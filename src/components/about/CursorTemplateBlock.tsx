"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function CursorTemplateBlock() {
  const { about, t } = useLocale();
  const { cursorTemplate } = about;

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          {t.sidebar.cursorTemplate}
        </p>
        <h2
          id="cursor-template-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {cursorTemplate.title}
        </h2>
        <p className="text-muted leading-relaxed">{cursorTemplate.intro}</p>
      </header>
      <ul className="space-y-2.5 list-none">
        {cursorTemplate.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm md:text-base text-muted leading-relaxed"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted leading-relaxed pt-1">
        {cursorTemplate.closing}
      </p>
    </div>
  );
}

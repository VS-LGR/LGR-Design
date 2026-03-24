"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function PositioningBlock() {
  const { about, t } = useLocale();
  const { positioning } = about;

  return (
    <section className="space-y-4" aria-labelledby="positioning-heading">
      <h2
        id="positioning-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.positioning}
      </h2>
      <div className="space-y-3 text-muted leading-relaxed">
        {positioning.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

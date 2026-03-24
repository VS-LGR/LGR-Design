"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function ObjectiveBlock() {
  const { about, t } = useLocale();
  const { professionalObjective } = about;

  return (
    <section className="space-y-4" aria-labelledby="objective-heading">
      <h2
        id="objective-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.objective}
      </h2>
      <p className="text-muted leading-relaxed">{professionalObjective}</p>
    </section>
  );
}

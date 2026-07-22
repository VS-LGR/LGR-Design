"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function ObjectiveBlock() {
  const { about, t } = useLocale();
  const { professionalObjective } = about;

  return (
    <div className="space-y-4">
      <h2
        id="objective-heading"
        className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.objective}
      </h2>
      <p className="text-muted leading-relaxed text-sm md:text-base max-w-2xl">
        {professionalObjective}
      </p>
    </div>
  );
}

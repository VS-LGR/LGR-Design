"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function FormationBlock() {
  const { about, t } = useLocale();
  const { formation } = about;

  return (
    <section className="space-y-4" aria-labelledby="formation-heading">
      <h2
        id="formation-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.formation}
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        {t.sections.formationLead}
      </p>
      <ul className="space-y-5 list-none">
        {formation.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-accent/55 text-muted"
          >
            <div>
              <p className="font-medium text-primary leading-snug">{item.title}</p>
              {item.institution && (
                <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.08em] text-accent/90">
                  {item.institution}
                </p>
              )}
              {item.description && (
                <p className="text-sm mt-2 text-muted/95 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

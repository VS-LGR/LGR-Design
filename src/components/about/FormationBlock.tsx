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
      <ul className="space-y-4 list-none">
        {formation.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-accent/60 text-muted"
          >
            <div className="flex items-start gap-2">
              {item.icon && (
                <span className="text-lg shrink-0" aria-hidden>
                  {item.icon}
                </span>
              )}
              <div>
                <span className="font-medium text-primary">{item.title}</span>
                {item.institution && (
                  <span className="text-muted"> — {item.institution}</span>
                )}
                {item.description && (
                  <p className="text-sm mt-1 text-muted/95 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

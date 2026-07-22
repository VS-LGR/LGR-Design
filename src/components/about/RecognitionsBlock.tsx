"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function RecognitionsBlock() {
  const { about, t } = useLocale();
  const { recognitions } = about;

  return (
    <section className="space-y-6" aria-labelledby="recognitions-heading">
      <h2
        id="recognitions-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.recognitions}
      </h2>
      <ul className="space-y-6 list-none">
        {recognitions.map((item, index) => (
          <li key={index} className="pl-4 border-l-2 border-accent/40">
            <h3 className="font-medium text-primary leading-snug">{item.title}</h3>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {item.description}
            </p>
            {item.items && item.items.length > 0 && (
              <ul className="mt-3 space-y-1.5 list-none">
                {item.items.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted flex items-start gap-2.5"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

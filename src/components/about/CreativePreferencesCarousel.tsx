"use client";

import { Carousel } from "@/components/shared/Carousel";
import { useLocale } from "@/contexts/LocaleContext";

export function CreativePreferencesCarousel() {
  const { about, t } = useLocale();
  const { creativePreferences } = about;

  return (
    <div className="space-y-4">
      <header className="space-y-2">
        <h2
          id="creative-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {t.sections.creative}
        </h2>
        <p className="text-sm text-muted leading-relaxed">{t.creative.intro}</p>
      </header>
      <Carousel gap="gap-2.5" fadeWidth="w-10" className="min-w-0">
        {creativePreferences.map((item, index) => (
          <span
            key={index}
            className="shrink-0 px-3.5 py-2 rounded-lg border border-border-dark/50 bg-surface/25 text-sm font-medium text-primary/90"
          >
            {item}
          </span>
        ))}
      </Carousel>
      <p className="text-sm text-muted pt-0.5">{t.creative.outro}</p>
    </div>
  );
}

"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjetosView() {
  const { t } = useLocale();
  return (
    <div className="animate-in w-full max-w-[1600px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-10 max-w-3xl space-y-3">
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t.pages.projectsKicker}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight text-balance">
          {t.pages.projectsHeading}
        </h1>
        <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
          {t.pages.projectsLead}
        </p>
      </header>
      <ProjectGrid />
    </div>
  );
}

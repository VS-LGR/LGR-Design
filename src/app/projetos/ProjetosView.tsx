"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjetosView() {
  const { t } = useLocale();
  return (
    <div className="animate-in w-full max-w-[1600px] mx-auto px-4 md:px-6 py-6 md:py-10">
      <header className="mb-6 md:mb-8 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
          {t.pages.projectsHeading}
        </h1>
      </header>
      <ProjectGrid />
    </div>
  );
}

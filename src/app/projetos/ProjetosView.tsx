"use client";

import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjetosView() {
  const { t } = useLocale();
  return (
    <div className="animate-in w-full max-w-[1600px] mx-auto px-4 md:px-6 py-6 md:py-8">
      <h1 className="sr-only">{t.pages.projectsHeading}</h1>
      <ProjectGrid />
    </div>
  );
}

"use client";

import { AboutWorkSection } from "@/components/about/AboutWorkSection";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { WORK_SECTION_IDS } from "@/lib/about-sections";
import { useLocale } from "@/contexts/LocaleContext";

const WORK_IDS = [...WORK_SECTION_IDS];

export function ComoTrabalhoView() {
  const { t } = useLocale();
  const activeSectionId = useScrollSpy(WORK_IDS, true);

  return (
    <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6 py-6 md:py-8">
      <div className="min-w-0">
        <h1 className="sr-only">{t.pages.workHeading}</h1>
        <AboutWorkSection />
      </div>
      <DynamicSidebar sidebarContext="work" activeSectionId={activeSectionId} />
    </div>
  );
}

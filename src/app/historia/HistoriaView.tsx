"use client";

import { AboutStorySection } from "@/components/about/AboutStorySection";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { STORY_SECTION_IDS } from "@/lib/about-sections";
import { useLocale } from "@/contexts/LocaleContext";

const STORY_IDS = [...STORY_SECTION_IDS];

export function HistoriaView() {
  const { t } = useLocale();
  const activeSectionId = useScrollSpy(STORY_IDS, true);

  return (
    <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6 py-6 md:py-8">
      <div className="min-w-0">
        <h1 className="sr-only">{t.pages.historiaHeading}</h1>
        <AboutStorySection />
      </div>
      <DynamicSidebar sidebarContext="story" activeSectionId={activeSectionId} />
    </div>
  );
}

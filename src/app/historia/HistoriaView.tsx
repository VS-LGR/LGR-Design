"use client";

import { AboutStorySection } from "@/components/about/AboutStorySection";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  SectionJumpNav,
  useStoryJumpItems,
} from "@/components/shared/SectionJumpNav";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { STORY_SECTION_IDS } from "@/lib/about-sections";
import { useLocale } from "@/contexts/LocaleContext";

const STORY_IDS = [...STORY_SECTION_IDS];

export function HistoriaView() {
  const { t } = useLocale();
  const activeSectionId = useScrollSpy(STORY_IDS, true);
  const jumpItems = useStoryJumpItems();

  return (
    <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6 py-8 md:py-10">
      <div className="min-w-0">
        <div className="px-4 md:px-8 xl:px-8 mb-6 md:mb-8">
          <PageHeader
            kicker={t.pages.historiaKicker}
            title={t.pages.historiaHeading}
            lead={t.pages.historiaLead}
          />
          <div className="mt-5">
            <SectionJumpNav
              items={jumpItems}
              activeSectionId={activeSectionId}
              ariaLabel={t.pages.sectionsJumpAria}
            />
          </div>
        </div>
        <AboutStorySection />
      </div>
      <DynamicSidebar sidebarContext="story" activeSectionId={activeSectionId} />
    </div>
  );
}

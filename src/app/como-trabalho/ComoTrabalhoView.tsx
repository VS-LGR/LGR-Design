"use client";

import { AboutWorkSection } from "@/components/about/AboutWorkSection";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  SectionJumpNav,
  useWorkJumpItems,
} from "@/components/shared/SectionJumpNav";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { WORK_SECTION_IDS } from "@/lib/about-sections";
import { useLocale } from "@/contexts/LocaleContext";

const WORK_IDS = [...WORK_SECTION_IDS];

export function ComoTrabalhoView() {
  const { t } = useLocale();
  const activeSectionId = useScrollSpy(WORK_IDS, true);
  const jumpItems = useWorkJumpItems();

  return (
    <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6 py-8 md:py-10">
      <div className="min-w-0">
        <div className="px-4 md:px-8 xl:px-8 mb-6 md:mb-8">
          <PageHeader
            kicker={t.nav.work}
            title={t.pages.workHeading}
            lead={t.pages.workLead}
          />
          <div className="mt-5">
            <SectionJumpNav
              items={jumpItems}
              activeSectionId={activeSectionId}
              ariaLabel={t.pages.sectionsJumpAria}
            />
          </div>
        </div>
        <AboutWorkSection />
      </div>
      <DynamicSidebar sidebarContext="work" activeSectionId={activeSectionId} />
    </div>
  );
}

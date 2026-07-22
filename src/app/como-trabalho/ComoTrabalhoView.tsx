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
    <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6 py-6 md:py-10">
      <div className="min-w-0">
        <header className="px-4 md:px-8 mb-2 md:mb-4 max-w-3xl mx-auto xl:mx-0 xl:max-w-none space-y-3">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t.nav.work}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight text-balance">
            {t.pages.workHeading}
          </h1>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
            {t.pages.workLead}
          </p>
        </header>
        <AboutWorkSection />
      </div>
      <DynamicSidebar sidebarContext="work" activeSectionId={activeSectionId} />
    </div>
  );
}

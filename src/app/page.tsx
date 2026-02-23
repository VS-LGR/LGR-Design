"use client";

import { useState, useCallback } from "react";
import type { TabId } from "@/types";
import { TabNav } from "@/components/shared/TabNav";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HobbyGrid } from "@/components/hobbies/HobbyGrid";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const ABOUT_SECTION_IDS = [
  "about-intro",
  "about-formacao",
  "about-experiencia",
  "about-especialidades",
  "about-diferencial",
  "about-preferencias",
  "about-objetivo",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const activeSectionId = useScrollSpy(
    ABOUT_SECTION_IDS,
    activeTab === "about"
  );

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab);
  }, []);

  return (
    <>
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="min-h-[50vh] relative" key={activeTab}>
        <div className="animate-in grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6">
          <div className="min-w-0">
            {activeTab === "about" && <AboutSection />}
            {activeTab === "projects" && <ProjectGrid />}
            {activeTab === "hobbies" && <HobbyGrid />}
          </div>
          <DynamicSidebar
            activeTab={activeTab}
            activeSectionId={activeSectionId}
          />
        </div>
      </div>
    </>
  );
}

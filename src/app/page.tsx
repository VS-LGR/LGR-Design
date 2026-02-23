"use client";

import { useState, useCallback } from "react";
import type { TabId } from "@/types";
import { TabNav } from "@/components/shared/TabNav";
import { DynamicSidebar } from "@/components/shared/DynamicSidebar";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HobbyGrid } from "@/components/hobbies/HobbyGrid";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

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
          <DynamicSidebar activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}

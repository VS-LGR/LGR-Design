"use client";

import { useState, useCallback } from "react";
import type { TabId } from "@/types";
import { TabNav } from "@/components/shared/TabNav";
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
      <div
        className="min-h-[50vh] animate-in"
        key={activeTab}
      >
        {activeTab === "about" && <AboutSection />}
        {activeTab === "projects" && <ProjectGrid />}
        {activeTab === "hobbies" && <HobbyGrid />}
      </div>
    </>
  );
}

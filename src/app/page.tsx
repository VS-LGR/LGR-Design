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
        className="min-h-[50vh] animate-in bg-dark bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]"
        key={activeTab}
      >
        {activeTab === "about" && <AboutSection />}
        {activeTab === "projects" && <ProjectGrid />}
        {activeTab === "hobbies" && <HobbyGrid />}
      </div>
    </>
  );
}

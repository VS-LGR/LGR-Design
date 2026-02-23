"use client";

import { useState, useEffect } from "react";
import type { TabId } from "@/types";

const tabs: { id: TabId; label: string }[] = [
  { id: "about", label: "Sobre Mim" },
  { id: "projects", label: "Projetos" },
  { id: "hobbies", label: "Hobbys" },
];

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeTab]);

  const tabList = (
    <div
      role="tablist"
      className={`flex flex-wrap gap-1 py-2 md:flex md:py-2 ${
        mobileOpen ? "flex" : "hidden md:flex"
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-ring
            ${
              activeTab === tab.id
                ? "bg-accent text-dark shadow-glow-sm"
                : "text-muted hover:text-primary hover:bg-surface"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      className="sticky top-[57px] md:top-[65px] z-40 border-b border-border-dark/50 bg-surface/90 backdrop-blur"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="md:hidden flex items-center justify-between py-2">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="tablist-mobile"
            id="tablist-mobile-toggle"
            className="px-4 py-2 rounded-lg text-sm font-medium text-primary bg-surface-hover hover:bg-border-dark focus-ring"
          >
            {mobileOpen ? "Fechar menu" : "Menu"}
          </button>
          <span className="text-sm text-accent font-medium">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
        <div id="tablist-mobile" aria-labelledby="tablist-mobile-toggle">
          {tabList}
        </div>
      </div>
    </nav>
  );
}

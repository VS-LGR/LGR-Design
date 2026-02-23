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
    <div role="tablist" className="flex flex-wrap gap-2 py-2 md:py-0">
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
            px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out focus-ring
            ${
              activeTab === tab.id
                ? "bg-accent text-dark shadow-glow-sm"
                : "text-muted hover:text-primary hover:bg-surface/80"
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
      className="sticky top-[57px] md:top-[65px] z-40 pt-2 md:pt-6 pb-0"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="md:hidden flex items-center justify-between border-b border-border-dark/50 bg-surface/90 backdrop-blur rounded-t-xl px-2 py-2">
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
        <div
          id="tablist-mobile"
          aria-labelledby="tablist-mobile-toggle"
          className={`md:flex md:justify-center ${mobileOpen ? "block border-b border-border-dark/50 bg-surface/80 backdrop-blur" : "hidden md:block"}`}
        >
          <div className="md:inline-flex md:rounded-2xl md:border md:border-border-dark/60 md:bg-surface/80 md:backdrop-blur-xl md:px-2 md:py-2 md:shadow-card">
            {tabList}
          </div>
        </div>
      </div>
    </nav>
  );
}

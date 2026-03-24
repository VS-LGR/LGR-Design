"use client";

import { useState, useEffect, useMemo } from "react";
import type { TabId } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  const { t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = useMemo(
    () =>
      [
        { id: "projects" as const, label: t.nav.projects },
        { id: "about" as const, label: t.nav.about },
      ] satisfies { id: TabId; label: string }[],
    [t.nav.projects, t.nav.about]
  );

  useEffect(() => {
    setMobileOpen(false);
  }, [activeTab]);

  const tabList = (
    <div
      role="tablist"
      className="flex gap-6 md:gap-8 py-2 md:py-0 border-b border-border-dark/50"
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
            relative pb-3 pt-1 text-sm font-medium transition-colors duration-200 focus-ring rounded-sm
            ${
              activeTab === tab.id
                ? "text-accent"
                : "text-muted hover:text-primary"
            }
          `}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
              aria-hidden
            />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      className="sticky top-0 z-40 bg-dark/95 backdrop-blur border-b border-border-dark/40"
      aria-label={t.nav.aria}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="md:hidden flex items-center justify-between py-2">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="tablist-mobile"
            id="tablist-mobile-toggle"
            className="px-3 py-2 rounded-lg text-sm font-medium text-primary bg-surface/80 hover:bg-surface focus-ring"
          >
            {mobileOpen ? t.nav.close : t.nav.menu}
          </button>
          <span className="text-sm text-accent font-medium">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
        <div
          id="tablist-mobile"
          aria-labelledby="tablist-mobile-toggle"
          className={`${mobileOpen ? "block" : "hidden md:block"}`}
        >
          {tabList}
        </div>
      </div>
    </nav>
  );
}

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
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeTab]);

  return (
    <nav
      className="sticky top-[57px] md:top-[65px] z-40 pt-2 md:pt-6 pb-0"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        {/* Mobile: botão Menu + label da aba */}
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

        {/* Desktop: segmented control com indicador deslizante */}
        <div
          id="tablist-mobile"
          aria-labelledby="tablist-mobile-toggle"
          className={`md:flex md:justify-center ${mobileOpen ? "block border-b border-border-dark/50 bg-surface/80 backdrop-blur" : "hidden md:block"}`}
        >
          <div className="relative inline-flex p-1 rounded-2xl border border-border-dark/60 bg-surface/80 backdrop-blur-xl shadow-card">
            {/* Pill deslizante: desloca-se pela largura de um segmento */}
            <div
              className="absolute top-1 bottom-1 rounded-xl bg-accent shadow-glow-sm transition-transform duration-300 ease-out"
              style={{
                left: "4px",
                width: "calc((100% - 8px) / 3)",
                transform: `translateX(${activeIndex * 100}%)`,
              }}
              aria-hidden
            />
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => onTabChange(tab.id)}
                className="relative z-10 flex-1 min-w-[100px] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 focus-ring"
                style={{
                  color:
                    activeTab === tab.id
                      ? "var(--color-dark, #0f172a)"
                      : undefined,
                }}
              >
                {activeTab === tab.id ? (
                  <span className="text-dark font-semibold">{tab.label}</span>
                ) : (
                  <span className="text-muted hover:text-primary">
                    {tab.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

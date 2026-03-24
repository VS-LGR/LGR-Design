"use client";

import type { ProjectCategory } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";

interface CategoryFilterProps {
  activeCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { projectCategories, t } = useLocale();
  return (
    <div
      role="group"
      aria-label={t.categoryFilter.aria}
      className="flex flex-wrap gap-2"
    >
      <button
        type="button"
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
          activeCategory === "all"
            ? "bg-accent text-dark shadow-glow-sm"
            : "bg-surface text-muted hover:text-primary border border-border-dark/60 hover:border-accent/40"
        }`}
      >
        {t.categoryFilter.all}
      </button>
      {projectCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
            activeCategory === cat.id
              ? "bg-accent text-dark shadow-glow-sm"
              : "bg-surface text-muted hover:text-primary border border-border-dark/60 hover:border-accent/40"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

"use client";

import type { ProjectCategory } from "@/types";
import { projectCategories } from "@/lib/projects";

interface CategoryFilterProps {
  activeCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filtrar por categoria"
      className="flex flex-wrap gap-2"
    >
      <button
        type="button"
        onClick={() => onCategoryChange("all")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
          activeCategory === "all"
            ? "bg-ash-brown text-pale-sky"
            : "bg-white/80 text-ash-brown hover:bg-cool-steel-2/30"
        }`}
      >
        Todos
      </button>
      {projectCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onCategoryChange(cat.id)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
            activeCategory === cat.id
              ? "bg-ash-brown text-pale-sky"
              : "bg-white/80 text-ash-brown hover:bg-cool-steel-2/30"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

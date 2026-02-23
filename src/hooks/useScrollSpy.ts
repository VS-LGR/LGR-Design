"use client";

import { useState, useEffect } from "react";

/**
 * Retorna o id da seção que está em foco no viewport (para a sidebar acompanhar o scroll).
 * Considera "em foco" o ponto a 25% do topo da tela.
 */
export function useScrollSpy(sectionIds: string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) {
      setActiveId(sectionIds[0] ?? null);
      return;
    }

    const getActiveSection = () => {
      const viewportTop = window.scrollY;
      const target = viewportTop + window.innerHeight * 0.25;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, height } = el.getBoundingClientRect();
        const offsetTop = top + window.scrollY;
        if (offsetTop <= target && offsetTop + height >= target) {
          current = id;
          break;
        }
      }
      if (!current && sectionIds.length > 0) {
        const first = document.getElementById(sectionIds[0]);
        const last = document.getElementById(sectionIds[sectionIds.length - 1]);
        if (first && last) {
          const firstTop = first.getBoundingClientRect().top + window.scrollY;
          const lastBottom = last.getBoundingClientRect().bottom + window.scrollY;
          if (target < firstTop) current = sectionIds[0];
          else if (target > lastBottom) current = sectionIds[sectionIds.length - 1];
          else current = sectionIds[0];
        } else {
          current = sectionIds[0];
        }
      }
      return current;
    };

    const onScroll = () => {
      setActiveId((prev) => {
        const next = getActiveSection();
        return next !== prev ? next : prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, sectionIds.join(",")]);

  return activeId;
}

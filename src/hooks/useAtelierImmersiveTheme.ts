"use client";

import { useEffect } from "react";
import type { AtelierPiece } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Aplica tema imersivo no <html> enquanto a peça do Ateliê está montada.
 * Cleanup restaura o tema padrão do site.
 */
export function useAtelierImmersiveTheme(
  theme: AtelierPiece["immersiveTheme"] | undefined
) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    root.classList.add("atelier-immersive");
    if (reduced) {
      root.classList.add("atelier-immersive--settled");
    }
    root.style.setProperty("--atelier-immersive-bg", theme.background);
    root.style.setProperty("--atelier-immersive-wash", theme.wash);

    return () => {
      root.classList.remove("atelier-immersive");
      root.classList.remove("atelier-immersive--settled");
      root.classList.remove("atelier-immersive--water-done");
      root.style.removeProperty("--atelier-immersive-bg");
      root.style.removeProperty("--atelier-immersive-wash");
    };
  }, [theme, reduced]);

  return { reduced, active: Boolean(theme) };
}

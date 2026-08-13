"use client";

import { useEffect, useState } from "react";

type AtelierWaterTransitionProps = {
  /** Pula overlay animado e só marca tema settled */
  reducedMotion?: boolean;
};

/**
 * Lavagem “água” que sobe e leva o fundo ao preto do render.
 * O tema final já vem de html.atelier-immersive; este overlay é a transição visual.
 */
export function AtelierWaterTransition({
  reducedMotion = false,
}: AtelierWaterTransitionProps) {
  const [visible, setVisible] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add("atelier-immersive--settled");
      return;
    }

    const settle = window.setTimeout(() => {
      document.documentElement.classList.add("atelier-immersive--settled");
      document.documentElement.classList.add("atelier-immersive--water-done");
      setVisible(false);
    }, 1500);

    return () => window.clearTimeout(settle);
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <div
      className="atelier-water-overlay pointer-events-none fixed inset-0 z-[25]"
      aria-hidden
    >
      <div className="atelier-water-fill absolute inset-x-0 bottom-0 h-[130%]">
        <div className="atelier-water-wave atelier-water-wave--a" />
        <div className="atelier-water-wave atelier-water-wave--b" />
        <div className="atelier-water-body absolute inset-x-0 bottom-0 top-[12%]" />
      </div>
    </div>
  );
}

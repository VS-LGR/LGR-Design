"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

const LERP = 0.08;

export type SmoothPointer = {
  /** Normalized 0–1 */
  x: number;
  y: number;
  /** Centered -1..1 */
  nx: number;
  ny: number;
  clientX: number;
  clientY: number;
  enabled: boolean;
};

const CENTER: SmoothPointer = {
  x: 0.5,
  y: 0.5,
  nx: 0,
  ny: 0,
  clientX: 0,
  clientY: 0,
  enabled: false,
};

export function useSmoothPointer(): SmoothPointer {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const enabled = !reducedMotion && !isMobile;

  const targetRef = useRef({ x: 0.5, y: 0.5, clientX: 0, clientY: 0 });
  const smoothRef = useRef({ x: 0.5, y: 0.5, clientX: 0, clientY: 0 });
  const [pointer, setPointer] = useState<SmoothPointer>(() =>
    enabled ? { ...CENTER, enabled: true } : CENTER
  );

  const onMove = useCallback((e: MouseEvent) => {
    targetRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
      clientX: e.clientX,
      clientY: e.clientY,
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setPointer(CENTER);
      return;
    }

    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      const t = targetRef.current;
      const s = smoothRef.current;

      s.x += (t.x - s.x) * LERP;
      s.y += (t.y - s.y) * LERP;
      s.clientX += (t.clientX - s.clientX) * LERP;
      s.clientY += (t.clientY - s.clientY) * LERP;

      setPointer({
        x: s.x,
        y: s.y,
        nx: (s.x - 0.5) * 2,
        ny: (s.y - 0.5) * 2,
        clientX: s.clientX,
        clientY: s.clientY,
        enabled: true,
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled, onMove]);

  return enabled ? pointer : CENTER;
}

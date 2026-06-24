"use client";

import { useEffect, useRef, useState } from "react";

/** Ângulo orbital em graus, atualizado via RAF para permitir contra-rotação dos nós. */
export function useHubOrbitAngle(spinSeconds: number, active: boolean): number {
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    const degPerMs = 360 / (spinSeconds * 1000);

    const tick = (now: number) => {
      if (lastRef.current === 0) lastRef.current = now;
      const dt = now - lastRef.current;
      lastRef.current = now;
      angleRef.current = (angleRef.current + dt * degPerMs) % 360;
      setAngle(angleRef.current);
      raf = requestAnimationFrame(tick);
    };

    lastRef.current = 0;
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, spinSeconds]);

  return angle;
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const CIRCLE_LAYERS = [
  { left: "8%", top: "18%", opacity: 0.09, depth: 0.25, duration: "14s", delay: "0s", size: "min(28px,5vw)" },
  { right: "12%", top: "35%", opacity: 0.07, depth: 0.45, duration: "18s", delay: "2s", size: "min(44px,7vw)" },
  { left: "35%", bottom: "20%", opacity: 0.08, depth: 0.65, duration: "16s", delay: "1s", size: "min(36px,6vw)" },
  { right: "28%", bottom: "35%", opacity: 0.06, depth: 0.35, duration: "12s", delay: "0.5s", size: "min(24px,4vw)" },
  { left: "55%", top: "55%", opacity: 0.07, depth: 0.55, duration: "15s", delay: "2.5s", size: "min(52px,9vw)" },
] as const;

const MOUSE_INTENSITY = 36;

export function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const onMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient layer - slow drift */}
      <div
        className="animated-bg-gradient absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 20% 10%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 80% 100% at 80% 90%, rgba(6, 182, 212, 0.08) 0%, transparent 45%),
            radial-gradient(ellipse 60% 60% at 50% 50%, rgba(30, 41, 59, 0.5) 0%, transparent 70%),
            #0f172a
          `,
          animation: "gradient-drift 18s ease-in-out infinite",
        }}
      />
      <div
        className="animated-bg-float absolute w-[min(80vw,400px)] h-[min(80vw,400px)] rounded-full bg-accent/20 blur-[100px] -left-[20%] top-[10%]"
        style={{ animation: "float-1 12s ease-in-out infinite" }}
      />
      <div
        className="animated-bg-float absolute w-[min(60vw,320px)] h-[min(60vw,320px)] rounded-full bg-accent/15 blur-[80px] right-[-10%] bottom-[15%]"
        style={{ animation: "float-2 14s ease-in-out infinite 1s" }}
      />
      <div
        className="animated-bg-float absolute w-[min(40vw,240px)] h-[min(40vw,240px)] rounded-full bg-accent/10 blur-[60px] left-[40%] top-[60%]"
        style={{ animation: "float-3 16s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] animated-bg-gradient"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241, 245, 249, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241, 245, 249, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          animation: "grid-pulse 8s ease-in-out infinite",
        }}
      />
      {/* Circle detail orbs - profundidade + parallax com o mouse */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {CIRCLE_LAYERS.map((layer, i) => {
          const dx = (mouse.x - 0.5) * MOUSE_INTENSITY * layer.depth;
          const dy = (mouse.y - 0.5) * MOUSE_INTENSITY * layer.depth;
          return (
            <div
              key={i}
              className="absolute bg-circle-float"
              style={{
                ...("left" in layer && { left: layer.left }),
                ...("right" in layer && { right: layer.right }),
                ...("top" in layer && { top: layer.top }),
                ...("bottom" in layer && { bottom: layer.bottom }),
                width: layer.size,
                animationDuration: layer.duration,
                animationDelay: layer.delay,
              }}
            >
              <Image
                src="https://i.imgur.com/WyBAcv0.png"
                alt=""
                width={64}
                height={64}
                className="h-auto w-full transition-transform duration-150 ease-out"
                style={{
                  opacity: layer.opacity,
                  filter: "blur(0.5px)",
                  transform: `translate(${dx}px, ${dy}px)`,
                }}
                sizes="64px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

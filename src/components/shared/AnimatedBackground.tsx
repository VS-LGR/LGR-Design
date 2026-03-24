"use client";

import { useRef, useEffect, useCallback } from "react";

const PARTICLE_COUNT = 130;
const MOUSE_PARALLAX = 28;
/** Pulso visível: piso alto + ciclo mais rápido (antes ficava ~20s por oscilação). */
const TWINKLE_SPEED = 0.0011;
const TWINKLE_FLOOR = 0.78;
const TWINKLE_AMP = 0.22;

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  baseOpacity: number;
  twPhase: number;
  depth: number;
  hue: "cyan" | "mist" | "deep";
};

function randomParticle(w: number, h: number): Particle {
  const hueRoll = Math.random();
  const hue: Particle["hue"] =
    hueRoll < 0.45 ? "cyan" : hueRoll < 0.8 ? "mist" : "deep";
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.1 + 0.5,
    vx: (Math.random() - 0.5) * 0.14,
    vy: -(Math.random() * 0.42 + 0.12),
    baseOpacity: Math.random() * 0.08 + 0.09,
    twPhase: Math.random() * Math.PI * 2,
    depth: Math.random() * 0.55 + 0.25,
    hue,
  };
}

function fillParticles(w: number, h: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => randomParticle(w, h));
}

function particleColor(hue: Particle["hue"], alpha: number): string {
  switch (hue) {
    case "cyan":
      return `rgba(150, 235, 250, ${alpha})`;
    case "mist":
      return `rgba(200, 235, 248, ${alpha * 0.92})`;
    default:
      return `rgba(95, 175, 205, ${alpha * 0.95})`;
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const particlesRef = useRef<Particle[]>([]);
  const reducedMotionRef = useRef(false);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const onMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;

    let raf = 0;
    let running = false;

    const drawAnimated = (time: number) => {
      const { w, h } = dimensionsRef.current;
      if (w === 0 || h === 0) return;

      const particles = particlesRef.current;
      const mx = (mouseRef.current.x - 0.5) * MOUSE_PARALLAX;
      const my = (mouseRef.current.y - 0.5) * MOUSE_PARALLAX;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        const twinkle =
          TWINKLE_FLOOR + TWINKLE_AMP * Math.sin(time * TWINKLE_SPEED + p.twPhase);
        const alpha = p.baseOpacity * twinkle;
        const px = p.x + mx * p.depth;
        const py = p.y + my * p.depth;

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor(p.hue, alpha);
        ctx.fill();
      }
    };

    const drawStatic = () => {
      const { w, h } = dimensionsRef.current;
      if (w === 0 || h === 0) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor(p.hue, p.baseOpacity * 0.92);
        ctx.fill();
      }
    };

    const step = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(step);
      if (document.hidden) return;

      const { w, h } = dimensionsRef.current;
      const particles = particlesRef.current;

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(time * 0.00045 + p.twPhase) * 0.16;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;
      }

      drawAnimated(time);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      dimensionsRef.current = { w, h };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = fillParticles(w, h);

      if (reducedMotionRef.current) {
        drawStatic();
      }
    };

    const startLoop = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMqChange = () => {
      reducedMotionRef.current = mq.matches;
      if (mq.matches) {
        stopLoop();
        drawStatic();
      } else {
        resize();
        drawAnimated(performance.now());
        startLoop();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    mq.addEventListener("change", onMqChange);

    if (!reducedMotionRef.current) {
      drawAnimated(performance.now());
      startLoop();
    } else {
      drawStatic();
    }

    return () => {
      stopLoop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      mq.removeEventListener("change", onMqChange);
    };
  }, [onMove]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="animated-bg-gradient absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 130% 70% at 50% 110%, rgba(15, 90, 105, 0.22) 0%, transparent 52%),
            radial-gradient(ellipse 90% 55% at 15% 25%, rgba(25, 70, 95, 0.14) 0%, transparent 48%),
            radial-gradient(ellipse 70% 50% at 85% 60%, rgba(6, 80, 100, 0.1) 0%, transparent 45%),
            linear-gradient(180deg, #040a10 0%, #0a1520 35%, #071018 72%, #03080c 100%)
          `,
          animation: "gradient-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="animated-bg-float absolute w-[min(85vw,420px)] h-[min(85vw,420px)] rounded-full blur-[110px] -left-[18%] top-[8%]"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 140, 160, 0.14) 0%, transparent 70%)",
          animation: "float-1 14s ease-in-out infinite",
        }}
      />
      <div
        className="animated-bg-float absolute w-[min(70vw,360px)] h-[min(70vw,360px)] rounded-full blur-[95px] right-[-12%] bottom-[12%]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 100, 120, 0.12) 0%, transparent 72%)",
          animation: "float-2 16s ease-in-out infinite 1s",
        }}
      />
      <div
        className="animated-bg-float absolute w-[min(50vw,280px)] h-[min(50vw,280px)] rounded-full blur-[75px] left-[38%] top-[58%]"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 180, 200, 0.08) 0%, transparent 75%)",
          animation: "float-3 18s ease-in-out infinite 0.5s",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />
    </div>
  );
}

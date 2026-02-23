"use client";

export function AnimatedBackground() {
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
    </div>
  );
}

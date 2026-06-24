"use client";

type HubCoreProps = {
  mx: number;
  my: number;
  reducedMotion: boolean;
  introReady: boolean;
};

export function HubCore({ mx, my, reducedMotion, introReady }: HubCoreProps) {
  const glowX = 50 + (mx - 0.5) * 28;
  const glowY = 50 + (my - 0.5) * 28;

  return (
    <div
      className={`hub-core absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 ${introReady ? "hub-core--ready" : ""}`}
      aria-hidden
      style={{
        ["--glow-x" as string]: `${glowX}%`,
        ["--glow-y" as string]: `${glowY}%`,
      }}
    >
      <div
        className={`hub-core-aura pointer-events-none absolute inset-[-18px] rounded-full ${reducedMotion ? "" : "hub-core-aura--pulse"}`}
      />
      <div className="hub-core-ring pointer-events-none absolute inset-[-10px] rounded-full border border-accent/20" />
      <div
        className="relative flex h-[3.6rem] w-[3.6rem] md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-accent/50 bg-dark/90 shadow-[0_0_28px_-4px_rgba(6,182,212,0.45),inset_0_0_20px_-10px_rgba(6,182,212,0.18)]"
        style={{
          backgroundImage: `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(6,182,212,0.22) 0%, transparent 58%), linear-gradient(180deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)`,
        }}
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-accent/80 hub-core-dot" />
          <span className="absolute inset-[-5px] rounded-full border border-accent/35" />
        </span>
      </div>
    </div>
  );
}

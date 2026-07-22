"use client";

type HubCoreProps = {
  mx: number;
  my: number;
  offsetX: number;
  offsetY: number;
  reducedMotion: boolean;
  introReady: boolean;
  monogram: string;
};

export function HubCore({
  mx,
  my,
  offsetX,
  offsetY,
  reducedMotion,
  introReady,
  monogram,
}: HubCoreProps) {
  const glowX = 50 + (mx - 0.5) * 24;
  const glowY = 50 + (my - 0.5) * 24;

  return (
    <div
      className="absolute left-1/2 top-1/2 z-[3] will-change-transform pointer-events-none"
      style={{
        transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
      }}
      aria-hidden
    >
      <div
        className={`hub-core ${introReady ? "hub-core--ready" : ""}`}
        style={{
          ["--glow-x" as string]: `${glowX}%`,
          ["--glow-y" as string]: `${glowY}%`,
        }}
      >
        <div
          className={`hub-core-aura pointer-events-none absolute inset-[-18px] rounded-full ${reducedMotion ? "" : "hub-core-aura--pulse"}`}
        />
        <div className="hub-core-ring pointer-events-none absolute inset-[-10px] rounded-full border border-accent/16" />
        <div
          className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-accent/40 bg-dark/90 shadow-[0_0_24px_-8px_rgba(34,184,207,0.35),inset_0_0_18px_-12px_rgba(34,184,207,0.12)]"
          style={{
            backgroundImage: `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(34,184,207,0.2) 0%, transparent 58%), linear-gradient(180deg, rgba(26,35,50,0.96) 0%, rgba(12,18,34,0.98) 100%)`,
          }}
        >
          <span className="text-sm md:text-base font-bold tracking-[0.08em] text-accent">
            {monogram}
          </span>
        </div>
      </div>
    </div>
  );
}

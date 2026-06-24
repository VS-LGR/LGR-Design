"use client";

type HubCoreProps = {
  mx: number;
  my: number;
  offsetX: number;
  offsetY: number;
  reducedMotion: boolean;
  introReady: boolean;
};

export function HubCore({
  mx,
  my,
  offsetX,
  offsetY,
  reducedMotion,
  introReady,
}: HubCoreProps) {
  const glowX = 50 + (mx - 0.5) * 28;
  const glowY = 50 + (my - 0.5) * 28;

  return (
    <div
      className="absolute left-1/2 top-1/2 z-[3] will-change-transform"
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
          className={`hub-core-aura pointer-events-none absolute inset-[-14px] rounded-full ${reducedMotion ? "" : "hub-core-aura--pulse"}`}
        />
        <div className="hub-core-ring pointer-events-none absolute inset-[-8px] rounded-full border border-accent/18" />
        <div
          className="relative flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-accent/45 bg-dark/92 shadow-[0_0_22px_-6px_rgba(6,182,212,0.4),inset_0_0_16px_-10px_rgba(6,182,212,0.15)]"
          style={{
            backgroundImage: `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(6,182,212,0.22) 0%, transparent 58%), linear-gradient(180deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)`,
          }}
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent/80 hub-core-dot" />
            <span className="absolute inset-[-4px] rounded-full border border-accent/30" />
          </span>
        </div>
      </div>
    </div>
  );
}

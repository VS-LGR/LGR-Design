"use client";

interface CaseProgressProps {
  current: number;
  total: number;
  label: string;
}

export function CaseProgress({ current, total, label }: CaseProgressProps) {
  const safeTotal = Math.max(1, total);
  const percentage = Math.round(((current + 1) / safeTotal) * 100);

  return (
    <div className="w-full" aria-label={label}>
      <div className="h-2 rounded-full bg-surface/70 border border-border-dark/50 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-muted">{percentage}%</p>
    </div>
  );
}

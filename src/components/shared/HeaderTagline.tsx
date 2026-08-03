"use client";

import { useLocale } from "@/contexts/LocaleContext";

type HeaderTaglineProps = {
  compact?: boolean;
};

export function HeaderTagline({ compact = false }: HeaderTaglineProps) {
  const { t } = useLocale();
  return (
    <p
      className={
        compact
          ? "text-[11px] sm:text-xs text-accent font-medium tracking-wide"
          : "text-sm md:text-base text-accent font-medium"
      }
    >
      {t.header.tagline}
    </p>
  );
}

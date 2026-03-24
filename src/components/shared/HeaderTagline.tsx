"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HeaderTagline() {
  const { t } = useLocale();
  return (
    <p className="text-sm md:text-base text-accent font-medium">
      {t.header.tagline}
    </p>
  );
}

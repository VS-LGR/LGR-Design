"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-dark focus:rounded-md"
    >
      {t.skipToContent}
    </a>
  );
}

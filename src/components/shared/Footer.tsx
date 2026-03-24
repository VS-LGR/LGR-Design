"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-auto border-t border-border-dark bg-surface">
      <div className="container mx-auto px-4 py-5 text-center text-sm text-muted">
        <p>{t.footer.line}</p>
      </div>
    </footer>
  );
}

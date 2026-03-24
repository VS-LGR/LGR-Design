"use client";

import { useLocale, type Locale } from "@/contexts/LocaleContext";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const select = (next: Locale) => {
    setLocale(next);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-border-dark/60 bg-surface/50 p-0.5"
      role="group"
      aria-label={t.language.aria}
    >
      <button
        type="button"
        onClick={() => select("pt")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors focus-ring ${
          locale === "pt"
            ? "bg-accent text-dark"
            : "text-muted hover:text-primary"
        }`}
        aria-pressed={locale === "pt"}
      >
        {t.language.pt}
      </button>
      <button
        type="button"
        onClick={() => select("en")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors focus-ring ${
          locale === "en"
            ? "bg-accent text-dark"
            : "text-muted hover:text-primary"
        }`}
        aria-pressed={locale === "en"}
      >
        {t.language.en}
      </button>
    </div>
  );
}

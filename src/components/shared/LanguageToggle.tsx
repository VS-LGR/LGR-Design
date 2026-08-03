"use client";

import { useLocale, type Locale } from "@/contexts/LocaleContext";

type LanguageToggleProps = {
  compact?: boolean;
};

export function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale();

  const select = (next: Locale) => {
    setLocale(next);
  };

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border border-border-dark/60 bg-surface/50 ${
        compact ? "p-0.5" : "p-0.5"
      }`}
      role="group"
      aria-label={t.language.aria}
    >
      <button
        type="button"
        onClick={() => select("pt")}
        className={`font-semibold rounded-md transition-colors focus-ring ${
          compact ? "px-2 py-1 text-[11px]" : "px-2.5 py-1 text-xs"
        } ${
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
        className={`font-semibold rounded-md transition-colors focus-ring ${
          compact ? "px-2 py-1 text-[11px]" : "px-2.5 py-1 text-xs"
        } ${
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

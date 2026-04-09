"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { explorationItems } from "@/lib/exploration";

export function ExploracaoView() {
  const { t } = useLocale();

  return (
    <div className="animate-in w-full max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
          {t.system.explorationTitle}
        </h1>
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {t.system.explorationLead}
        </p>
      </header>

      {explorationItems.length === 0 ? (
        <p className="rounded-2xl border border-border-dark/50 bg-surface/20 px-6 py-10 text-center text-sm text-muted">
          {t.system.explorationEmpty}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {explorationItems.map((item) => (
            <li key={item.id}>
              <article className="rounded-2xl border border-border-dark/50 bg-surface/15 p-5 h-full flex flex-col gap-2">
                <h2 className="text-base font-semibold text-primary">
                  {item.title ?? item.id}
                </h2>
                {item.description ? (
                  <p className="text-sm text-muted flex-1">{item.description}</p>
                ) : null}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-accent hover:text-accent-soft focus-ring rounded-sm w-fit"
                  >
                    {t.nav.exploration}
                  </Link>
                ) : (
                  <span className="text-xs text-muted uppercase tracking-wide">
                    {item.status === "live"
                      ? t.system.explorationLive
                      : t.system.explorationSoon}
                  </span>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}

      <p className="text-center">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.nav.menu}
        </Link>
      </p>
    </div>
  );
}

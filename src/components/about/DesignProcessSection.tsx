"use client";

import { useMemo } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { getDesignProcess } from "@/lib/designProcess";

export function DesignProcessSection() {
  const { locale, t } = useLocale();
  const data = useMemo(() => getDesignProcess(locale), [locale]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.14em]">
          {t.designProcess.sectionKicker}
        </p>
        <h2
          id="design-process-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {t.designProcess.sectionTitle}
        </h2>
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          {data.intro}
        </p>
      </header>

      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
          <h3 className="text-base font-semibold text-primary">
            {t.designProcess.phasesHeading}
          </h3>
          <p className="text-xs text-muted">{t.designProcess.deliverablesLabel}</p>
        </div>
        <div className="space-y-2">
          {data.phases.map((phase) => (
            <details
              key={phase.id}
              className="group rounded-xl border border-border-dark/50 bg-surface/15 open:bg-surface/30 open:border-accent/30 transition-colors"
            >
              <summary className="cursor-pointer list-none flex flex-wrap items-baseline gap-2.5 px-4 py-3.5 font-medium text-primary focus-ring rounded-xl [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-1.5 rounded-md bg-accent/12 text-accent text-xs font-bold tabular-nums shrink-0">
                  {String(phase.id).padStart(2, "0")}
                </span>
                <span className="leading-snug">
                  {phase.title}
                  {phase.subtitle ? (
                    <span className="text-muted font-normal">
                      {" "}
                      — {phase.subtitle}
                    </span>
                  ) : null}
                </span>
              </summary>
              <ul className="px-4 pb-4 pt-0 pl-[3.5rem] space-y-1.5 text-sm text-muted list-none">
                {phase.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-1">
        <h3 className="text-base font-semibold text-primary">
          {data.workModelsSectionTitle}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {data.workModelsSectionIntro}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.workModels.map((wm) => (
            <article
              key={wm.id}
              className="rounded-xl border border-border-dark/45 bg-surface/15 p-4 flex flex-col"
            >
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.12em]">
                {wm.context}
              </p>
              <h4 className="mt-2 text-sm font-semibold text-primary">
                {wm.title}
              </h4>
              <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                {wm.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-2 border-t border-border-dark/35">
        <h3 className="text-base font-semibold text-primary">
          {data.ansoffSectionTitle}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {data.ansoffSectionIntro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
          {data.ansoffQuadrants.map((q, i) => (
            <div
              key={i}
              className="rounded-lg border border-border-dark/45 bg-surface/10 px-3.5 py-3 text-sm text-muted leading-snug"
            >
              {q}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

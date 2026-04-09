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
        <p className="text-xs font-semibold text-accent uppercase tracking-wider">
          {t.designProcess.sectionKicker}
        </p>
        <h2
          id="design-process-heading"
          className="text-lg font-semibold text-primary accent-underline pb-1"
        >
          {t.designProcess.sectionTitle}
        </h2>
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          {data.intro}
        </p>
      </header>

      <div>
        <h3 className="text-base font-semibold text-primary mb-4">
          {t.designProcess.phasesHeading}
        </h3>
        <p className="text-xs text-muted mb-3">
          {t.designProcess.deliverablesLabel}
        </p>
        <div className="space-y-2">
          {data.phases.map((phase) => (
            <details
              key={phase.id}
              className="group rounded-xl border border-border-dark/60 bg-surface/25 open:bg-surface/40 open:border-accent/30 transition-colors"
            >
              <summary className="cursor-pointer list-none flex flex-wrap items-baseline gap-2 px-4 py-3.5 font-medium text-primary focus-ring rounded-xl [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent/15 text-accent text-sm font-bold shrink-0">
                  {phase.id}
                </span>
                <span>
                  {phase.title}
                  {phase.subtitle ? (
                    <span className="text-muted font-normal">
                      {" "}
                      — {phase.subtitle}
                    </span>
                  ) : null}
                </span>
              </summary>
              <ul className="px-4 pb-4 pt-0 pl-[3.25rem] space-y-1.5 text-sm text-muted list-disc marker:text-accent/60">
                {phase.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="text-base font-semibold text-primary">
          {data.workModelsSectionTitle}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {data.workModelsSectionIntro}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.workModels.map((wm) => (
            <article
              key={wm.id}
              className="rounded-xl border border-border-dark/50 bg-surface/20 p-4 flex flex-col"
            >
              <p className="text-[11px] font-semibold text-accent uppercase tracking-wider">
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

      <div className="space-y-4 pt-2 border-t border-border-dark/40">
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
              className="rounded-lg border border-border-dark/50 bg-surface/15 px-3 py-3 text-sm text-muted leading-snug"
            >
              {q}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

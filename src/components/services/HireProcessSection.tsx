"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HireProcessSection() {
  const { services } = useLocale();

  return (
    <section className="space-y-7" aria-labelledby="hire-process-heading">
      <div className="max-w-2xl space-y-2.5">
        <h2
          id="hire-process-heading"
          className="text-xl md:text-2xl font-bold text-primary tracking-tight accent-underline pb-1"
        >
          {services.processTitle}
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {services.processLead}
        </p>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 list-none">
        {services.processSteps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-border-dark/45 bg-surface/20 px-4 py-4 border-l-[3px] border-l-accent/55 space-y-1.5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/90">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-base font-semibold text-primary">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

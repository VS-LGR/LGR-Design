"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HireProcessSection() {
  const { services } = useLocale();

  return (
    <section className="space-y-6" aria-labelledby="hire-process-heading">
      <div className="max-w-2xl space-y-2">
        <h2
          id="hire-process-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {services.processTitle}
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {services.processLead}
        </p>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 list-none">
        {services.processSteps.map((step, index) => (
          <li key={step.title} className="pl-4 border-l-2 border-accent/45 space-y-1.5">
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

"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import type { ServiceOffering } from "@/types";

function ServiceCtas({ offering }: { offering: ServiceOffering }) {
  const { about, services, t } = useLocale();
  const phone = about.contact.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(offering.whatsappPrefill)}`;
  const mailto = `mailto:${about.contact.email}?subject=${encodeURIComponent(offering.emailSubject)}&body=${offering.emailBody}`;

  return (
    <div className="flex flex-wrap gap-3 pt-2" aria-label={t.hire.selectServiceAria}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring text-sm"
      >
        {services.whatsappCta}
      </a>
      <a
        href={mailto}
        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-medium bg-surface border border-border-dark text-primary hover:border-accent/40 transition-colors focus-ring text-sm"
      >
        {services.emailCta}
      </a>
    </div>
  );
}

function ServiceOfferingBlock({ offering }: { offering: ServiceOffering }) {
  const { services, projects, t } = useLocale();
  const related = offering.relatedProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <article
      id={`servico-${offering.id}`}
      className="rounded-2xl border border-border-dark/50 bg-gradient-to-b from-surface/40 to-surface/15 p-6 md:p-8 space-y-6"
    >
      <header className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
          {offering.title}
        </h3>
        <p className="text-muted leading-relaxed">{offering.summary}</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-2">
            {services.audienceLabel}
          </h4>
          <p className="text-sm text-muted leading-relaxed">{offering.audience}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-2">
            {services.timelineLabel}
          </h4>
          <p className="text-sm text-muted leading-relaxed">{offering.timeline}</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
          {services.deliverablesLabel}
        </h4>
        <ul className="space-y-2 list-none">
          {offering.deliverables.map((item) => (
            <li
              key={item}
              className="text-sm text-muted flex items-start gap-2.5 leading-relaxed"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
          {services.stagesLabel}
        </h4>
        <ol className="space-y-2 list-none">
          {offering.stages.map((stage, i) => (
            <li
              key={stage}
              className="text-sm text-muted flex items-start gap-3 leading-relaxed"
            >
              <span className="text-accent font-semibold tabular-nums shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              {stage}
            </li>
          ))}
        </ol>
      </div>

      {related.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
            {services.relatedLabel}
          </h4>
          <ul className="flex flex-wrap gap-2 list-none">
            {related.map((project) =>
              project ? (
                <li key={project.id}>
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-primary/90 border border-border-dark/60 rounded-lg px-3 py-1.5 hover:border-accent/45 hover:text-accent transition-colors focus-ring"
                  >
                    {project.title}
                    <span className="text-muted text-xs">{t.hire.viewCase}</span>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}

      <ServiceCtas offering={offering} />
    </article>
  );
}

export function ServicesSection() {
  const { services } = useLocale();

  return (
    <section className="space-y-8" aria-labelledby="offerings-heading">
      <h2
        id="offerings-heading"
        className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
      >
        {services.offeringsTitle}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {services.offerings.map((offering) => (
          <ServiceOfferingBlock key={offering.id} offering={offering} />
        ))}
      </div>
    </section>
  );
}

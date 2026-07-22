"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { ServicesSection } from "@/components/services/ServicesSection";
import { HireProcessSection } from "@/components/services/HireProcessSection";
import { HireCtaSection } from "@/components/services/HireCtaSection";

export function ContratarView() {
  const { services, t } = useLocale();

  return (
    <div className="animate-in w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {services.heroKicker}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-primary tracking-tight text-balance">
          {services.heroTitle}
        </h1>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          {services.heroLead}
        </p>
        <p className="sr-only">{t.pages.hireHeading}</p>
      </header>

      <div className="section-divider" role="presentation" />

      <ServicesSection />

      <div className="section-divider" role="presentation" />

      <HireProcessSection />

      <div className="section-divider" role="presentation" />

      <HireCtaSection />
    </div>
  );
}

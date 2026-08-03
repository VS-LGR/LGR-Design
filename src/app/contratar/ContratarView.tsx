"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServicesSection } from "@/components/services/ServicesSection";
import { HireProcessSection } from "@/components/services/HireProcessSection";
import { HireCtaSection } from "@/components/services/HireCtaSection";

export function ContratarView() {
  const { services } = useLocale();

  return (
    <div className="animate-in w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16">
      <PageHeader
        kicker={services.heroKicker}
        title={services.heroTitle}
        lead={services.heroLead}
        prominent
      />

      <div className="section-divider" role="presentation" />

      <ServicesSection />

      <div className="section-divider" role="presentation" />

      <HireProcessSection />

      <div className="section-divider" role="presentation" />

      <HireCtaSection />
    </div>
  );
}

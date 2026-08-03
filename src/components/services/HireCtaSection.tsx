"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function HireCtaSection() {
  const { about, services } = useLocale();
  const phone = about.contact.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(
    services.ctaWhatsappPrefill
  )}`;
  const mailto = `mailto:${about.contact.email}?subject=${encodeURIComponent(
    services.ctaEmailSubject
  )}`;

  return (
    <section
      className="rounded-2xl border border-accent/25 bg-gradient-to-b from-accent/10 to-surface/20 px-5 py-7 md:px-8 md:py-9 space-y-5"
      aria-labelledby="hire-cta-heading"
    >
      <div className="max-w-2xl space-y-3">
        <h2
          id="hire-cta-heading"
          className="text-xl md:text-2xl font-bold text-primary tracking-tight"
        >
          {services.ctaTitle}
        </h2>
        <p className="text-muted leading-relaxed">{services.ctaLead}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
        >
          {services.whatsappCta}
        </a>
        <a
          href={mailto}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-surface border border-accent/35 text-accent hover:border-accent/55 transition-colors focus-ring"
        >
          {services.emailCta}
        </a>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import { resolveResumeUrl } from "@/lib/cv";

export function ContatoView() {
  const { about, t, locale } = useLocale();
  const phoneDigits = about.contact.phone.replace(/\D/g, "");
  const waHref = `https://wa.me/55${phoneDigits}`;
  const resumeUrl = resolveResumeUrl(about.resumePdfUrl);
  const freelanceLead =
    locale === "en"
      ? "Freelance scope (LP, institutional, systems):"
      : "Escopo freelance (LP, institucional, sistemas):";

  const linkClass =
    "inline-flex min-h-[2.75rem] items-center rounded-full border border-border-dark/60 px-5 text-sm font-semibold text-primary hover:border-accent/40 transition-colors focus-ring";

  return (
    <div className="animate-in max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
      <PageHeader
        kicker={t.pages.contactKicker}
        title={t.pages.contactHeading}
        lead={t.home.contactLead}
      />

      <div className="mt-10 space-y-8">
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {about.contact.message}
        </p>

        <ul className="space-y-3">
          {about.contact.linkedin ? (
            <li>
              <a
                href={about.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] items-center rounded-full bg-accent px-5 text-sm font-semibold text-dark hover:bg-accent-soft transition-colors focus-ring"
              >
                {t.contact.linkedin}
              </a>
            </li>
          ) : null}
          <li>
            <a href={`mailto:${about.contact.email}`} className={linkClass}>
              {t.contact.email}: {about.contact.email}
            </a>
          </li>
          {about.contact.github ? (
            <li>
              <a
                href={about.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {t.contact.github}
              </a>
            </li>
          ) : null}
          {resumeUrl ? (
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] items-center text-sm font-medium text-accent hover:text-accent-soft focus-ring"
              >
                {t.resume.download}
              </a>
            </li>
          ) : (
            <li className="rounded-xl border border-dashed border-border-dark/55 bg-surface/20 px-4 py-3 text-sm text-muted leading-relaxed">
              {t.contact.cvHint}
            </li>
          )}
          <li>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[2.75rem] items-center text-sm font-medium text-muted hover:text-accent focus-ring"
            >
              {t.contact.whatsapp}: {about.contact.phone}
            </a>
          </li>
        </ul>

        <div className="pt-6 border-t border-border-dark/35">
          <p className="text-sm text-muted mb-3">{freelanceLead}</p>
          <Link
            href={SITE_ROUTES.hire}
            className="text-sm font-medium text-accent hover:text-accent-soft focus-ring"
          >
            {t.contact.hireLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

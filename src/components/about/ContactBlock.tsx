"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function ContactBlock() {
  const { about, t } = useLocale();
  const { contact } = about;
  const whatsappUrl = `https://wa.me/55${contact.phone.replace(/\D/g, "")}`;

  return (
    <section className="space-y-4" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {t.sections.contact}
      </h2>
      <p className="text-muted leading-relaxed">{contact.message}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
        >
          {t.contact.whatsapp}
          <span className="opacity-80 font-normal">{contact.phone}</span>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-surface border border-accent/30 text-accent hover:border-accent/50 transition-colors focus-ring"
        >
          {t.contact.email}
          <span className="opacity-80 font-normal break-all">{contact.email}</span>
        </a>
      </div>
      <p className="pt-1">
        <Link
          href="/contratar"
          className="text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded underline-offset-4 hover:underline"
        >
          {t.contact.hireLink}
        </Link>
      </p>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CaseDeck } from "@/components/case-study/CaseDeck";
import { useLocale } from "@/contexts/LocaleContext";

export function CasePageClient({ slug }: { slug: string }) {
  const { projects, t } = useLocale();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted">{t.caseDeck.caseNotFound}</p>
        <Link
          href="/projetos"
          className="inline-flex mt-4 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.caseDeck.backToProjects}
        </Link>
      </div>
    );
  }

  return <CaseDeck project={project} t={t} />;
}

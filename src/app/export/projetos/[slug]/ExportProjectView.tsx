"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ExportToolbar } from "@/components/export/ExportToolbar";
import { ExportProjectSheet } from "@/components/export/ExportProjectSheet";
import { useLocale } from "@/contexts/LocaleContext";

export function ExportProjectView() {
  const params = useParams<{ slug: string }>();
  const { projects, t, locale } = useLocale();
  const slug = params?.slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="export-doc min-h-screen bg-dark text-primary flex flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-muted">{t.exportDoc.notFound}</p>
        <Link
          href="/export/projetos"
          className="inline-flex mt-4 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          {t.exportDoc.backToSelect}
        </Link>
      </div>
    );
  }

  return (
    <div className="export-doc animate-in min-h-screen bg-dark text-primary">
      <ExportToolbar
        backHref="/export/projetos"
        backLabel={t.exportDoc.backToSelect}
      />
      <ExportProjectSheet project={project} t={t} locale={locale} />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function ExportProjetosIndexView() {
  const { projects, t } = useLocale();

  return (
    <div className="export-doc animate-in min-h-screen bg-dark text-primary">
      <div className="export-doc-toolbar no-print sticky top-0 z-40 border-b border-border-dark/60 bg-dark/95 backdrop-blur px-4 py-3">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/projetos"
            className="text-sm text-accent hover:text-accent-soft focus-ring rounded"
          >
            ← {t.caseDeck.backToProjects}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14 space-y-8">
        <header className="space-y-3 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {t.exportDoc.kicker}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-balance">
            {t.exportDoc.selectHeading}
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {t.exportDoc.selectLead}
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
          {projects.map((project) => {
            const thumb =
              project.thumbnail == null ||
              (typeof project.thumbnail === "string" &&
                project.thumbnail.startsWith("["))
                ? null
                : project.thumbnail;
            return (
              <li key={project.id}>
                <Link
                  href={`/export/projetos/${project.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border-dark/50 bg-surface/25 hover:border-accent/35 transition-colors focus-ring"
                >
                  <div className="relative aspect-[16/10] bg-[#e8eef5]">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={`${t.projects.thumbnailAltPrefix} ${project.title}`}
                        fill
                        className="object-contain object-top p-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 420px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-surface/60" />
                    )}
                  </div>
                  <div className="p-4 space-y-2 flex-1">
                    <span className="inline-flex rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                      {t.deliveryType[project.deliveryType]}
                    </span>
                    <h2 className="text-lg font-semibold text-primary group-hover:text-accent-soft transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="pt-1 text-xs font-medium text-accent">
                      {t.exportDoc.openProjectCta} →
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

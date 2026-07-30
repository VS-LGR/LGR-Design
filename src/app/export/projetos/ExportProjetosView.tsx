"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export function ExportProjetosView() {
  const { projects, t, locale } = useLocale();

  return (
    <div className="export-doc animate-in min-h-screen bg-dark text-primary">
      <div className="export-doc-toolbar no-print sticky top-0 z-40 border-b border-border-dark/60 bg-dark/95 backdrop-blur px-4 py-3">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/projetos"
            className="text-sm text-accent hover:text-accent-soft focus-ring rounded"
          >
            ← {t.caseDeck.backToProjects}
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-muted hidden sm:block max-w-xs">
              {t.exportDoc.linkedinHint}
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
            >
              {t.exportDoc.printCta}
            </button>
          </div>
        </div>
      </div>

      <article className="export-doc-sheet mx-auto max-w-3xl px-5 sm:px-8 py-10 md:py-14 space-y-10">
        <header className="space-y-4 border-b border-border-dark/40 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {t.exportDoc.kicker}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-balance">
            {t.exportDoc.title}
          </h1>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            {t.exportDoc.lead}
          </p>
          <div className="pt-2 space-y-1">
            <p className="text-lg font-semibold text-primary">
              Lucas Gabriel Rodrigues
            </p>
            <p className="text-sm text-accent">{t.header.tagline}</p>
          </div>
        </header>

        <ol className="space-y-8 list-none">
          {projects.map((project, index) => {
            const ctx = project.caseStudy?.context;
            const thumb =
              typeof project.thumbnail === "string" ? project.thumbnail : null;
            return (
              <li
                key={project.id}
                className="export-doc-card rounded-2xl border border-border-dark/50 bg-surface/25 overflow-hidden break-inside-avoid"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-0">
                  <div className="relative aspect-[5/3] sm:aspect-auto sm:min-h-[160px] bg-[#e8eef5]">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        className="object-contain object-top p-1.5"
                        sizes="200px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-surface/40" />
                    )}
                  </div>
                  <div className="p-5 md:p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                        {t.deliveryType[project.deliveryType]}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-primary tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                    {ctx ? (
                      <dl className="grid grid-cols-1 gap-2 pt-1 text-xs">
                        <div>
                          <dt className="text-accent/90 font-semibold uppercase tracking-wide">
                            {t.exportDoc.typeLabel}
                          </dt>
                          <dd className="text-primary/85 mt-0.5">{ctx.type}</dd>
                        </div>
                        <div>
                          <dt className="text-accent/90 font-semibold uppercase tracking-wide">
                            {t.exportDoc.segmentLabel}
                          </dt>
                          <dd className="text-primary/85 mt-0.5">{ctx.segment}</dd>
                        </div>
                        <div>
                          <dt className="text-accent/90 font-semibold uppercase tracking-wide">
                            {t.exportDoc.roleLabel}
                          </dt>
                          <dd className="text-primary/85 mt-0.5">{ctx.role}</dd>
                        </div>
                      </dl>
                    ) : null}
                    {ctx?.overview ? (
                      <p className="text-sm text-primary/80 leading-relaxed border-t border-border-dark/30 pt-3">
                        {ctx.overview}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <footer className="border-t border-border-dark/40 pt-6 space-y-1 text-sm text-muted">
          <p className="font-medium text-primary/90">{t.exportDoc.footer}</p>
          <p>
            {locale === "pt" ? "Portfólio" : "Portfolio"} · lukagabriel.rodrigues@gmail.com
          </p>
        </footer>
      </article>
    </div>
  );
}

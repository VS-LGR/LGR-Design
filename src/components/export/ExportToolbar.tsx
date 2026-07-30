"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

type ExportToolbarProps = {
  backHref: string;
  backLabel: string;
};

export function ExportToolbar({ backHref, backLabel }: ExportToolbarProps) {
  const { t } = useLocale();

  return (
    <div className="export-doc-toolbar no-print sticky top-0 z-40 border-b border-border-dark/60 bg-dark/95 backdrop-blur px-4 py-3">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <Link
          href={backHref}
          className="text-sm text-accent hover:text-accent-soft focus-ring rounded"
        >
          ← {backLabel}
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
  );
}

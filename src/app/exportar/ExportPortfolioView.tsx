"use client";

import { ExportToolbar } from "@/components/export/ExportToolbar";
import { ExportPortfolioSheet } from "@/components/export/ExportPortfolioSheet";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

/** @page 1200×627 only while this route is mounted (overrides square export). */
const PRINT_PAGE_STYLE = `
@media print {
  @page {
    size: 317.5mm 165.89375mm;
    margin: 0;
  }
}
`;

export function ExportPortfolioView() {
  const { t, projects } = useLocale();

  return (
    <div className="export-doc animate-in min-h-screen bg-dark text-primary">
      <style dangerouslySetInnerHTML={{ __html: PRINT_PAGE_STYLE }} />
      <ExportToolbar
        backHref={SITE_ROUTES.home}
        backLabel={t.exportPortfolio.backHome}
      />
      <ExportPortfolioSheet t={t} projects={projects} />
    </div>
  );
}

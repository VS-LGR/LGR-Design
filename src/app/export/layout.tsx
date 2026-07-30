import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Layout enxuto: documento para PDF/LinkedIn sem chrome do site. */
export default function ExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="export-layout" data-export-layout>
      {children}
    </div>
  );
}

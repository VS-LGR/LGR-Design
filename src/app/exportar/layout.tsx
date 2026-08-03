import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exportar portfólio — LinkedIn",
  description:
    "Carrossel 1200×627 para publicar o novo portfólio no LinkedIn.",
  robots: { index: false, follow: false },
};

/** Layout enxuto: slides LinkedIn sem chrome do site. */
export default function ExportarLayout({
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

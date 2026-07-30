import type { Metadata } from "next";
import { ExportProjetosIndexView } from "./ExportProjetosIndexView";

export const metadata: Metadata = {
  title: "Export LinkedIn — Projetos | Lucas Gabriel Rodrigues",
  description:
    "Escolha um projeto e gere um one-pager profissional para PDF e LinkedIn.",
  robots: { index: false, follow: false },
};

export default function ExportProjetosPage() {
  return <ExportProjetosIndexView />;
}

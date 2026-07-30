import type { Metadata } from "next";
import { ExportProjetosView } from "./ExportProjetosView";

export const metadata: Metadata = {
  title: "Export LinkedIn — Projetos | Lucas Gabriel Rodrigues",
  description:
    "Documento profissional com seleção de projetos para PDF e LinkedIn.",
  robots: { index: false, follow: false },
};

export default function ExportProjetosPage() {
  return <ExportProjetosView />;
}

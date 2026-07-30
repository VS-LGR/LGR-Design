import type { Metadata } from "next";
import { ExportProjectView } from "./ExportProjectView";

export const metadata: Metadata = {
  title: "Export LinkedIn — Projeto | Lucas Gabriel Rodrigues",
  description: "One-pager profissional do projeto para PDF e LinkedIn.",
  robots: { index: false, follow: false },
};

export default function ExportProjectPage() {
  return <ExportProjectView />;
}

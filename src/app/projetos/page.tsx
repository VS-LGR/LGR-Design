import type { Metadata } from "next";
import { ProjetosView } from "./ProjetosView";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases em destaque — QualiProc, produtos e experiências web — e explorações. Inclui Hirely (conceito acadêmico Product + IA).",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return <ProjetosView />;
}

import type { Metadata } from "next";
import { ComoTrabalhoView } from "./ComoTrabalhoView";

export const metadata: Metadata = {
  title: "Como trabalho | Lucas Gabriel Rodrigues",
  description:
    "Processo de design, ferramentas, entregáveis e como conduzo projetos de UX e produto digital.",
};

export default function ComoTrabalhoPage() {
  return <ComoTrabalhoView />;
}

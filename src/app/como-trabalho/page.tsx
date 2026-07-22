import type { Metadata } from "next";
import { ComoTrabalhoView } from "./ComoTrabalhoView";

export const metadata: Metadata = {
  title: "Método | Lucas Gabriel Rodrigues",
  description:
    "Princípios, processo de UX e produto, ferramentas e como conduzo projetos digitais — do briefing à entrega.",
};

export default function ComoTrabalhoPage() {
  return <ComoTrabalhoView />;
}

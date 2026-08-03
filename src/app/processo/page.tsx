import type { Metadata } from "next";
import { ComoTrabalhoView } from "@/app/como-trabalho/ComoTrabalhoView";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Princípios, processo e ferramentas para transformar requisitos em interfaces e produtos navegáveis.",
  alternates: { canonical: "/processo" },
};

export default function ProcessoPage() {
  return <ComoTrabalhoView />;
}

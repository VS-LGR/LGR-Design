import type { Metadata } from "next";
import { HistoriaView } from "@/app/historia/HistoriaView";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória, formação e posicionamento — UX, product thinking e execução técnica.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return <HistoriaView />;
}

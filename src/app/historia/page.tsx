import type { Metadata } from "next";
import { HistoriaView } from "./HistoriaView";

export const metadata: Metadata = {
  title: "História | Lucas Gabriel Rodrigues",
  description:
    "Trajetória, formação e posicionamento — UX e Web Design com visão de produto.",
};

export default function HistoriaPage() {
  return <HistoriaView />;
}

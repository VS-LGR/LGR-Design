import type { Metadata } from "next";
import { ExploracaoView } from "./ExploracaoView";

export const metadata: Metadata = {
  title: "Exploração | Lucas Gabriel Rodrigues",
  description:
    "Experimentos interativos e pequenos sites — playground de ideias em UX e front-end.",
};

export default function ExploracaoPage() {
  return <ExploracaoView />;
}

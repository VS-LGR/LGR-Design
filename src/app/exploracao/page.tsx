import type { Metadata } from "next";
import { ExploracaoView } from "./ExploracaoView";

export const metadata: Metadata = {
  title: "Expo | Lucas Gabriel Rodrigues",
  description:
    "Expo — experimentos interativos e pequenos sites; ideias em UX e front-end.",
};

export default function ExploracaoPage() {
  return <ExploracaoView />;
}

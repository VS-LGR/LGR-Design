import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Sistema | Lucas Gabriel Rodrigues",
  description:
    "Acesso ao portfólio — projetos, história, método de trabalho e exploração interativa.",
};

export default function Home() {
  return <HomeClient />;
}

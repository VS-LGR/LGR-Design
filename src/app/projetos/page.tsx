import type { Metadata } from "next";
import { ProjetosView } from "./ProjetosView";

export const metadata: Metadata = {
  title: "Projetos | Lucas Gabriel Rodrigues",
  description:
    "Portfólio de projetos de UX, web design e identidade — produtos digitais, landing pages e sites institucionais.",
};

export default function ProjetosPage() {
  return <ProjetosView />;
}

import type { Metadata } from "next";
import { ProjetosView } from "./ProjetosView";

export const metadata: Metadata = {
  title: "Projetos | Lucas Gabriel Rodrigues",
  description:
    "Cases de landing pages, sites institucionais e sistemas empresariais — incluindo QualiProc, plataforma SaaS de gestão da qualidade para laboratórios.",
};

export default function ProjetosPage() {
  return <ProjetosView />;
}

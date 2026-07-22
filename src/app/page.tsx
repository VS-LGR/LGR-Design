import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Lucas Gabriel Rodrigues | UX, Web Design e Desenvolvimento",
  description:
    "Portfólio de Lucas Gabriel Rodrigues — projetos, trajetória, método e contratação de landing pages, sites institucionais e sistemas empresariais.",
};

export default function Home() {
  return <HomeClient />;
}

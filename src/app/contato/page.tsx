import type { Metadata } from "next";
import { ContatoView } from "./ContatoView";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Lucas Gabriel Rodrigues — recrutamento, produto/design ou escopo freelance.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return <ContatoView />;
}

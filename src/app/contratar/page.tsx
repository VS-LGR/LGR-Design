import type { Metadata } from "next";
import { ContratarView } from "./ContratarView";

export const metadata: Metadata = {
  title: "Contratar | Lucas Gabriel Rodrigues",
  description:
    "Contrate desenvolvimento de landing pages, sites institucionais e sistemas empresariais com escopo claro — sem preços públicos, alinhamento direto.",
};

export default function ContratarPage() {
  return <ContratarView />;
}

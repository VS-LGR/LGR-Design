import type { Metadata } from "next";
import { AtelieView } from "./AtelieView";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

export const metadata: Metadata = {
  title: "Ateliê 3D",
  description:
    "Estudos de cena, luz e apresentação de produto — prática 3D separada dos cases de entrega.",
  alternates: { canonical: SITE_ROUTES.atelier },
};

export default function AteliePage() {
  return <AtelieView />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AtelierPieceClient } from "./AtelierPieceClient";
import { atelierList } from "@/lib/atelier";
import { SITE_URL } from "@/lib/siteMeta";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

type Params = { slug: string };

export function generateStaticParams() {
  return atelierList.map((piece) => ({ slug: piece.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const piece = atelierList.find((item) => item.slug === params.slug);
  if (!piece) {
    return { title: "Peça não encontrada" };
  }

  const url = `${SITE_URL}${SITE_ROUTES.atelierPiece(piece.slug)}`;

  return {
    title: piece.title,
    description: piece.summary,
    alternates: { canonical: SITE_ROUTES.atelierPiece(piece.slug) },
    openGraph: {
      title: `${piece.title} | Lucas Gabriel Rodrigues`,
      description: piece.summary,
      url,
      type: "article",
      images: [{ url: piece.image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${piece.title} | Lucas Gabriel Rodrigues`,
      description: piece.summary,
      images: [piece.image.src],
    },
  };
}

export default function AtelierPiecePage({ params }: { params: Params }) {
  const piece = atelierList.find((item) => item.slug === params.slug);
  if (!piece) notFound();
  return <AtelierPieceClient slug={params.slug} />;
}

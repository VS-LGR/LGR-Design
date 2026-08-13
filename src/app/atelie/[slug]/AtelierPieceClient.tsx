"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import { AtelierSurfaceHero } from "@/components/atelier/AtelierSurfaceHero";

type AtelierPieceClientProps = {
  slug: string;
};

export function AtelierPieceClient({ slug }: AtelierPieceClientProps) {
  const { atelier, t } = useLocale();
  const piece = atelier.find((item) => item.slug === slug);

  if (!piece) {
    return (
      <div className="animate-in max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted">{t.pages.atelierNotFound}</p>
        <Link
          href={SITE_ROUTES.atelier}
          className="inline-flex mt-6 text-sm font-medium text-accent hover:text-accent-soft focus-ring"
        >
          ← {t.pages.atelierBack}
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10">
      <Link
        href={SITE_ROUTES.atelier}
        className="inline-flex mb-6 text-sm font-medium text-accent hover:text-accent-soft focus-ring rounded"
      >
        ← {t.pages.atelierBack}
      </Link>
      <AtelierSurfaceHero piece={piece} />
    </div>
  );
}

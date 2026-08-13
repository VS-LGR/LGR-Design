"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

export function AtelieView() {
  const { atelier, t } = useLocale();

  return (
    <div className="animate-in w-full max-w-[1600px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-10 max-w-3xl space-y-3">
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t.pages.atelierKicker}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight text-balance">
          {t.pages.atelierHeading}
        </h1>
        <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
          {t.pages.atelierLead}
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 list-none">
        {atelier.map((piece) => (
          <li key={piece.id}>
            <Link
              href={SITE_ROUTES.atelierPiece(piece.slug)}
              className="group flex flex-col gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={piece.image.src}
                  alt={piece.image.alt}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2 max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {piece.kicker}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-accent transition-colors tracking-tight">
                  {piece.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {piece.summary}
                </p>
                <p className="pt-1 text-xs font-medium text-accent">
                  {t.pages.atelierOpen} →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

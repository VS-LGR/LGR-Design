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

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none">
        {atelier.map((piece) => (
          <li key={piece.id}>
            <Link
              href={SITE_ROUTES.atelierPiece(piece.slug)}
              className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border-dark/45 bg-gradient-to-b from-surface/40 to-surface/15 transition-[border-color,transform] duration-300 hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              <div className="relative aspect-[4/3] bg-[#05080f] border-b border-border-dark/40">
                <Image
                  src={piece.image.src}
                  alt={piece.image.alt}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2 p-4 md:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {piece.kicker}
                </p>
                <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {piece.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {piece.summary}
                </p>
                <p className="mt-auto pt-2 text-xs font-medium text-accent">
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

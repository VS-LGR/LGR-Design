"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

export function AtelieView() {
  const { atelier, t } = useLocale();

  return (
    <div className="animate-in w-full max-w-[1600px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-10 md:mb-14 max-w-3xl space-y-3">
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t.pages.atelierKicker}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-primary tracking-tight text-balance">
          {t.pages.atelierHeading}
        </h1>
        <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
          {t.pages.atelierLead}
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14 list-none">
        {atelier.map((piece, index) => {
          const stageClass = piece.immersiveTheme
            ? "bg-black"
            : "bg-surface/40";
          const indexLabel = String(index + 1).padStart(2, "0");

          return (
            <li key={piece.id}>
              <Link
                href={SITE_ROUTES.atelierPiece(piece.slug)}
                className="group flex flex-col gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden transition-opacity duration-500 group-hover:opacity-95 ${stageClass}`}
                >
                  <Image
                    src={piece.image.src}
                    alt={piece.image.alt}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col gap-2.5 max-w-xl">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-muted/80">
                      {indexLabel}
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                      {piece.kicker}
                    </p>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-semibold text-primary group-hover:text-accent transition-colors duration-300 tracking-tight text-balance">
                    {piece.title}
                  </h2>

                  <p className="text-sm md:text-[0.9375rem] text-muted leading-relaxed line-clamp-4">
                    {piece.summary}
                  </p>

                  {piece.tags.length > 0 ? (
                    <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 list-none">
                      {piece.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-[11px] font-medium tracking-wide text-primary/55"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <p className="pt-1 text-xs font-medium text-accent inline-flex items-center gap-1.5">
                    <span className="border-b border-transparent group-hover:border-accent/70 transition-[border-color] duration-300">
                      {t.pages.atelierOpen}
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

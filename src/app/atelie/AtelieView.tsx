"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

export function AtelieView() {
  const { atelier, t } = useLocale();

  return (
    <div className="animate-in w-full max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-10 space-y-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {t.pages.atelierKicker}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight text-balance">
          {t.pages.atelierHeading}
        </h1>
        <p className="text-sm text-muted leading-relaxed max-w-xl">
          {t.pages.atelierLead}
        </p>
      </header>

      <ul className="flex flex-col gap-3 list-none border-t border-border-dark/40">
        {atelier.map((piece, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");
          const stageClass = piece.immersiveTheme ? "bg-black" : "bg-surface/50";

          return (
            <li
              key={piece.id}
              className="border-b border-border-dark/40"
            >
              <Link
                href={SITE_ROUTES.atelierPiece(piece.slug)}
                className="group grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7.5rem_1fr] gap-3.5 sm:gap-5 py-4 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm"
              >
                <div
                  className={`relative aspect-square w-full overflow-hidden ring-1 ring-white/5 transition-[ring-color,transform] duration-300 group-hover:ring-accent/30 ${stageClass}`}
                >
                  <Image
                    src={piece.image.src}
                    alt={piece.image.alt}
                    fill
                    className="object-contain p-1 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="120px"
                  />
                </div>

                <div className="min-w-0 flex flex-col justify-center gap-1.5 pr-1">
                  <div className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.14em]">
                    <span className="tabular-nums text-muted/70">
                      {indexLabel}
                    </span>
                    <span className="text-accent truncate">{piece.kicker}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-semibold text-primary tracking-tight text-balance group-hover:text-accent transition-colors duration-300">
                    {piece.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                    {piece.summary}
                  </p>

                  <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {piece.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wide text-primary/45"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-[11px] font-medium text-accent inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="border-b border-transparent group-hover:border-accent/60 transition-[border-color] duration-300">
                        {t.pages.atelierOpen}
                      </span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

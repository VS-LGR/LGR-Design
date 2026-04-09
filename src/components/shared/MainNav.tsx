"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";

/**
 * Mobile: faixa horizontal com pills em scroll (sem hamburger).
 * Desktop: mesmos destinos em linha, estilo mais discreto.
 */
export function MainNav() {
  const pathname = usePathname();
  const { t } = useLocale();

  const items = [
    { href: "/", label: t.nav.menu },
    { href: "/projetos", label: t.nav.projects },
    { href: "/historia", label: t.nav.story },
    { href: "/como-trabalho", label: t.nav.work },
    { href: "/exploracao", label: t.nav.exploration },
  ] as const;

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/projetos"
        ? pathname === "/projetos" || pathname.startsWith("/cases/")
        : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label={t.nav.aria}
      className="w-[calc(100%+2rem)] min-w-0 -mx-4 px-4 md:mx-0 md:w-auto md:px-0"
    >
      <ul
        className="flex flex-nowrap items-stretch gap-2 overflow-x-auto scrollbar-hide pb-1.5 pt-0.5 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:gap-x-6 md:pb-0 md:pt-0 md:snap-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <li key={href} className="snap-start shrink-0 flex">
              <Link
                href={href}
                className={`
                  inline-flex items-center justify-center rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 focus-ring min-h-[2.75rem] sm:text-sm
                  md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:px-1 md:py-1 md:font-medium md:shadow-none
                  ${
                    active
                      ? "border-accent/55 bg-accent/12 text-accent shadow-[0_0_18px_-5px_rgba(6,182,212,0.5)] md:shadow-none"
                      : "border-border-dark/55 bg-surface/35 text-muted hover:border-accent/45 hover:bg-accent/8 hover:text-primary hover:shadow-[0_0_14px_-6px_rgba(6,182,212,0.4)] md:hover:bg-transparent md:hover:shadow-none"
                  }
                `}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

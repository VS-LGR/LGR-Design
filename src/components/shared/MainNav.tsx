"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";

/**
 * Mobile: faixa horizontal com pills em scroll (sem hamburger).
 * Desktop: mesmos destinos em linha, estilo mais discreto.
 * Contratar recebe ênfase leve de accent sem competir com a marca.
 */
export function MainNav() {
  const pathname = usePathname();
  const { t } = useLocale();

  const items = [
    { href: "/", label: t.nav.menu, emphasize: false },
    { href: "/projetos", label: t.nav.projects, emphasize: false },
    { href: "/historia", label: t.nav.story, emphasize: false },
    { href: "/como-trabalho", label: t.nav.work, emphasize: false },
    { href: "/contratar", label: t.nav.hire, emphasize: true },
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
        className="flex flex-nowrap items-stretch gap-2 overflow-x-auto scrollbar-hide pb-1.5 pt-0.5 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:gap-x-5 md:pb-0 md:pt-0 md:snap-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map(({ href, label, emphasize }) => {
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
                      ? emphasize
                        ? "border-accent/60 bg-accent/15 text-accent shadow-[0_0_14px_-6px_rgba(34,184,207,0.28)] md:shadow-none md:text-accent"
                        : "border-accent/45 bg-accent/10 text-accent shadow-[0_0_12px_-6px_rgba(34,184,207,0.22)] md:shadow-none"
                      : emphasize
                        ? "border-accent/40 bg-accent/8 text-accent hover:border-accent/55 hover:bg-accent/12 md:hover:bg-transparent md:text-accent md:hover:text-accent-soft"
                        : "border-border-dark/50 bg-surface/30 text-muted hover:border-accent/35 hover:bg-accent/6 hover:text-primary md:hover:bg-transparent md:hover:shadow-none"
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

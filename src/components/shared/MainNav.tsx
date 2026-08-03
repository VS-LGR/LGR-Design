"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { PRIMARY_NAV, SITE_ROUTES } from "@/lib/siteArchitecture";
import type { NavItemId } from "@/lib/siteArchitecture";

export function MainNav() {
  const pathname = usePathname();
  const { t } = useLocale();

  const labels: Record<NavItemId, string> = {
    home: t.nav.menu,
    projects: t.nav.projects,
    process: t.nav.process,
    about: t.nav.about,
    contact: t.nav.contact,
  };

  const isActive = (href: string) => {
    if (href === SITE_ROUTES.home) return pathname === "/";
    if (href === SITE_ROUTES.projects) {
      return (
        pathname === "/projetos" ||
        pathname.startsWith("/projetos/") ||
        pathname.startsWith("/cases/")
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label={t.nav.aria}
      className="relative w-[calc(100%+2rem)] min-w-0 -mx-4 md:mx-0 md:w-auto"
    >
      {/* Fade indício de scroll no mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-dark via-dark/80 to-transparent md:hidden"
      />

      <ul
        className="flex flex-nowrap items-stretch gap-1.5 overflow-x-auto scrollbar-hide px-4 pb-1 pt-0.5 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:gap-x-5 md:px-0 md:pb-0 md:pt-0 md:snap-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {PRIMARY_NAV.map(({ id, href }) => {
          const active = isActive(href);
          const emphasize = id === "contact";
          return (
            <li key={href} className="snap-start shrink-0 flex">
              <Link
                href={href}
                className={`
                  inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 focus-ring min-h-[2.25rem] sm:px-3.5 sm:text-xs
                  md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:px-1 md:py-1 md:text-sm md:font-medium md:shadow-none
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
                {labels[id]}
              </Link>
            </li>
          );
        })}
        {/* Espaço extra para o último item não ficar sob o fade */}
        <li className="w-4 shrink-0 md:hidden" aria-hidden />
      </ul>
    </nav>
  );
}

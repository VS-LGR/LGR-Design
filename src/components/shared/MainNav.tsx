"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";

const linkBase =
  "text-sm font-medium transition-colors duration-200 focus-ring rounded-md py-2.5 px-1 md:py-0 md:px-0";

export function MainNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = [
    { href: "/", label: t.nav.menu },
    { href: "/projetos", label: t.nav.projects },
    { href: "/historia", label: t.nav.story },
    { href: "/como-trabalho", label: t.nav.work },
    { href: "/exploracao", label: t.nav.exploration },
  ] as const;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/projetos"
        ? pathname === "/projetos" || pathname.startsWith("/cases/")
        : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav aria-label={t.nav.aria} className="w-full md:w-auto">
      <div className="flex justify-end md:hidden">
        <button
          type="button"
          className="focus-ring flex items-center gap-2 rounded-lg border border-border-dark/60 bg-surface/40 px-3 py-2 text-sm font-medium text-primary hover:border-accent/40 hover:bg-surface/60 transition-colors"
          aria-expanded={mobileOpen}
          aria-controls="main-nav-links"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className="flex h-4 w-5 flex-col justify-center gap-1"
            aria-hidden
          >
            <span
              className={`block h-0.5 w-full rounded-full bg-accent transition-transform duration-300 ease-out ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-accent transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-accent transition-transform duration-300 ease-out ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
          <span>{mobileOpen ? t.nav.close : t.nav.openNavigation}</span>
        </button>
      </div>

      <ul
        id="main-nav-links"
        className={`
          mt-3 flex flex-col gap-0.5 rounded-xl border border-border-dark/50 bg-surface/25 p-2 md:mt-0 md:flex-row md:flex-wrap md:items-center md:gap-x-5 md:gap-y-1 md:border-0 md:bg-transparent md:p-0
          ${mobileOpen ? "flex" : "hidden md:flex"}
        `}
      >
        {items.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <li key={href} className="md:inline-block">
              <Link
                href={href}
                className={`${linkBase} block md:inline ${
                  active ? "text-accent" : "text-muted hover:text-primary"
                }`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
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

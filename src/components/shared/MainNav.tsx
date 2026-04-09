"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";

const linkBase =
  "text-xs sm:text-sm font-medium transition-colors duration-200 focus-ring rounded-sm whitespace-nowrap";

export function MainNav() {
  const pathname = usePathname();
  const { t } = useLocale();

  const items = [
    { href: "/", label: t.nav.system },
    { href: "/projetos", label: t.nav.projects },
    { href: "/historia", label: t.nav.story },
    { href: "/como-trabalho", label: t.nav.work },
    { href: "/exploracao", label: t.nav.exploration },
  ] as const;

  return (
    <nav aria-label={t.nav.aria} className="w-full mt-3 md:mt-0 md:w-auto">
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-5 md:justify-end">
        {items.map(({ href, label }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : href === "/projetos"
                ? pathname === "/projetos" || pathname.startsWith("/cases/")
                : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`${linkBase} ${
                  active ? "text-accent" : "text-muted hover:text-primary"
                }`}
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

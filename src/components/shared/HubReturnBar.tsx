"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";

export function HubReturnBar() {
  const pathname = usePathname();
  const { t } = useLocale();

  if (pathname === "/") return null;

  return (
    <div className="border-b border-accent/15 bg-surface/25 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2.5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded-md"
        >
          <span aria-hidden className="text-accent/90">
            ←
          </span>
          {t.nav.backToSelection}
        </Link>
      </div>
    </div>
  );
}

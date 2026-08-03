"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import {
  HUB_MODULES,
  HubModuleIcon,
  type HubModuleId,
} from "./hubModules";

function moduleCopy(
  id: HubModuleId,
  t: ReturnType<typeof useLocale>["t"]
): { short: string; label: string; blurb: string } {
  switch (id) {
    case "projetos":
      return {
        short: t.nav.projects,
        label: t.system.goProjects,
        blurb: t.system.moduleBlurb.projetos,
      };
    case "historia":
      return {
        short: t.nav.story,
        label: t.system.goStory,
        blurb: t.system.moduleBlurb.historia,
      };
    case "como-trabalho":
      return {
        short: t.nav.work,
        label: t.system.goWork,
        blurb: t.system.moduleBlurb["como-trabalho"],
      };
    case "contratar":
      return {
        short: t.nav.hire,
        label: t.system.goHire,
        blurb: t.system.moduleBlurb.contratar,
      };
  }
}

type HubMobileNavProps = {
  introReady: boolean;
};

/** Menu em grade 2×2 no mobile — substitui a órbita apertada. */
export function HubMobileNav({ introReady }: HubMobileNavProps) {
  const { t } = useLocale();

  return (
    <nav
      className={`w-full max-w-md mx-auto ${introReady ? "hub-header--ready" : "opacity-0"}`}
      aria-label={t.system.hubTitle}
    >
      <ul className="grid grid-cols-2 gap-3 list-none">
        {HUB_MODULES.map((mod) => {
          const copy = moduleCopy(mod.id, t);
          const emphasized = mod.id === "contratar";
          return (
            <li key={mod.id}>
              <Link
                href={mod.href}
                className={`group flex flex-col gap-2.5 h-full rounded-2xl border p-4 transition-colors focus-ring ${
                  emphasized
                    ? "border-accent/45 bg-accent/10 hover:bg-accent/15"
                    : "border-border-dark/60 bg-surface/40 hover:border-accent/35 hover:bg-surface/60"
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${
                    emphasized
                      ? "border-accent/50 bg-accent/20 text-accent"
                      : "border-border-dark/70 bg-dark/50 text-primary/90 group-hover:text-accent group-hover:border-accent/40"
                  }`}
                >
                  <HubModuleIcon id={mod.id} className="h-5 w-5" />
                </span>
                <span className="space-y-1">
                  <span className="block text-sm font-semibold text-primary tracking-tight">
                    {copy.short}
                  </span>
                  <span className="block text-[11px] text-muted leading-snug line-clamp-2">
                    {copy.blurb}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import { useLocale } from "@/contexts/LocaleContext";

type JumpItem = { id: string; label: string };

type SectionJumpNavProps = {
  items: JumpItem[];
  activeSectionId?: string | null;
  ariaLabel: string;
};

/** Índice compacto de seções no mobile/tablet (xl usa a sidebar). */
export function SectionJumpNav({
  items,
  activeSectionId,
  ariaLabel,
}: SectionJumpNavProps) {
  return (
    <nav
      className="xl:hidden -mx-1 px-1 mb-6 overflow-x-auto scrollbar-hide"
      aria-label={ariaLabel}
    >
      <ul className="flex gap-2 list-none w-max min-w-full pb-1">
        {items.map((item) => {
          const active = activeSectionId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`inline-flex whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-ring ${
                  active
                    ? "border-accent/45 bg-accent/15 text-accent"
                    : "border-border-dark/60 bg-surface/30 text-muted hover:text-primary hover:border-accent/30"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function useStoryJumpItems(): JumpItem[] {
  const { t } = useLocale();
  return [
    { id: "about-intro", label: t.sections.about },
    { id: "about-formacao", label: t.sidebar.formation },
    { id: "about-reconhecimentos", label: t.sidebar.recognitions },
    { id: "about-posicionamento", label: t.sidebar.positioning },
  ];
}

export function useWorkJumpItems(): JumpItem[] {
  const { t } = useLocale();
  return [
    { id: "about-como-trabalho", label: t.sidebar.howIWork },
    { id: "about-processo", label: t.sidebar.designProcess },
    { id: "about-ferramentas", label: t.sidebar.tools },
    { id: "about-cursor-template", label: t.sidebar.cursorTemplate },
    { id: "about-objetivo", label: t.sidebar.objective },
    { id: "about-contato", label: t.sidebar.contact },
    { id: "about-preferencias", label: t.sidebar.creativity },
  ];
}

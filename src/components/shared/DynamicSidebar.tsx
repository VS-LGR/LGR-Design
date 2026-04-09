"use client";

import { useState, useEffect, useRef } from "react";
import type { SidebarContext } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";
import { STORY_SECTION_IDS, WORK_SECTION_IDS } from "@/lib/about-sections";

const SIDEBAR_TRANSITION_MS = 280;

interface DynamicSidebarProps {
  sidebarContext: SidebarContext;
  /** Quando em história ou método, id da seção em foco (scroll spy). */
  activeSectionId?: string | null;
}

function toolLabelFirstSegment(item: string) {
  const enDash = item.split("–")[0]?.trim();
  if (enDash && enDash !== item) return enDash;
  return item.split("-")[0]?.trim() ?? item;
}

function AboutSidebarContent({ sectionId }: { sectionId: string }) {
  const { about, t } = useLocale();

  switch (sectionId) {
    case "about-intro":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.about}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-4">
            {t.sidebar.aboutBlurb}
          </p>
        </>
      );
    case "about-formacao":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.formation}
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {about.formation.slice(0, 4).map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </>
      );
    case "about-reconhecimentos":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.recognitions}
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {about.recognitions.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </>
      );
    case "about-cursor-template":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.cursorTemplate}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3">
            {about.cursorTemplate.title}
          </p>
        </>
      );
    case "about-posicionamento":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.positioning}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3">
            {about.positioning[0]}
          </p>
        </>
      );
    case "about-como-trabalho":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.howIWork}
          </p>
          <ul className="space-y-1 text-sm text-muted mt-2">
            {about.howIWork.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      );
    case "about-processo":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.designProcess}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-5">
            {t.designProcess.sectionTitle}
          </p>
          <p className="text-xs text-muted/90 mt-2 line-clamp-3">
            {t.designProcess.sectionKicker}
          </p>
        </>
      );
    case "about-ferramentas":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.tools}
          </p>
          <ul className="space-y-1 text-sm text-muted mt-2">
            {about.tools.items.slice(0, 4).map((item, i) => (
              <li key={i} className="line-clamp-1">
                {toolLabelFirstSegment(item)}
              </li>
            ))}
          </ul>
        </>
      );
    case "about-preferencias":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.creativity}
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {about.creativePreferences.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      );
    case "about-objetivo":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.objective}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-6">
            {about.professionalObjective}
          </p>
        </>
      );
    case "about-contato":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.contact}
          </p>
          <p className="text-sm text-muted mt-2">
            📱 {about.contact.phone}
          </p>
          <p className="text-sm text-muted mt-1 line-clamp-2">
            📩 {about.contact.email}
          </p>
        </>
      );
    default:
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.about}
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-4">
            {about.intro[0]}
          </p>
        </>
      );
  }
}

export function DynamicSidebar({
  sidebarContext,
  activeSectionId,
}: DynamicSidebarProps) {
  const { t, projectCategories } = useLocale();
  const sectionIdsForContext =
    sidebarContext === "story"
      ? STORY_SECTION_IDS
      : sidebarContext === "work"
        ? WORK_SECTION_IDS
        : null;
  const isStoryOrWork = sidebarContext === "story" || sidebarContext === "work";
  const defaultSectionId = sectionIdsForContext?.[0] ?? "about-intro";

  const resolvedSectionId =
    isStoryOrWork &&
    activeSectionId &&
    sectionIdsForContext &&
    (sectionIdsForContext as readonly string[]).includes(activeSectionId)
      ? activeSectionId
      : isStoryOrWork
        ? defaultSectionId
        : null;

  const [displayId, setDisplayId] = useState(resolvedSectionId ?? defaultSectionId);
  const [exitingId, setExitingId] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isStoryOrWork || !resolvedSectionId) return;
    if (resolvedSectionId === displayId && !exitingId) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setExitingId(displayId);
    setDisplayId(resolvedSectionId);

    timeoutRef.current = setTimeout(() => {
      setExitingId(null);
      timeoutRef.current = null;
    }, SIDEBAR_TRANSITION_MS);
  }, [isStoryOrWork, resolvedSectionId, displayId, exitingId]);

  if (isStoryOrWork && (displayId || exitingId)) {
    return (
      <aside
        className="hidden xl:block sticky top-32 h-fit opacity-90 transition-opacity duration-300"
        aria-label={t.sidebar.sectionAria}
      >
        <div className="relative min-h-[140px] pl-2 border-l border-accent/20">
          {exitingId && (
            <div
              className="absolute top-0 left-0 right-0 sidebar-fade-out pointer-events-none"
              aria-hidden
            >
              <div className="space-y-6">
                <AboutSidebarContent sectionId={exitingId} />
              </div>
            </div>
          )}
          <div className="sidebar-fade-in relative">
            <div className="space-y-6">
              <AboutSidebarContent sectionId={displayId} />
            </div>
          </div>
        </div>
      </aside>
    );
  }

  if (sidebarContext === "projects") {
    return (
      <aside
        className="hidden xl:block sticky top-32 h-fit opacity-90 transition-opacity duration-300"
        aria-label={t.sidebar.categoriesAria}
      >
        <div className="space-y-6 pl-2 border-l border-accent/20">
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {t.sidebar.categoriesTitle}
          </p>
          <ul className="space-y-2 text-sm text-muted">
            {projectCategories.map((c) => (
              <li key={c.id}>{c.label}</li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  return null;
}

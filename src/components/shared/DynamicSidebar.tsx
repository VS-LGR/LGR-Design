"use client";

import { useState, useEffect, useRef } from "react";
import type { TabId } from "@/types";
import { aboutContent } from "@/lib/about";
import { projectCategories } from "@/lib/projects";
import { hobbiesList } from "@/lib/hobbies";

const ABOUT_SECTION_IDS = [
  "about-intro",
  "about-formacao",
  "about-experiencia",
  "about-especialidades",
  "about-diferencial",
  "about-preferencias",
  "about-objetivo",
] as const;

const SIDEBAR_TRANSITION_MS = 280;

interface DynamicSidebarProps {
  activeTab: TabId;
  /** Quando na aba Sobre Mim, id da seção em foco (scroll spy). */
  activeSectionId?: string | null;
}

function AboutSidebarContent({ sectionId }: { sectionId: string }) {
  switch (sectionId) {
    case "about-intro":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Sobre Mim
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            Designer com foco em UI/UX, desenvolvimento web e criação visual
            estratégica.
          </p>
        </>
      );
    case "about-formacao":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Formação
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.formation.slice(0, 6).map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </>
      );
    case "about-experiencia":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Experiência
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.experience.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </>
      );
    case "about-especialidades":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Especialidades
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.specialties.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      );
    case "about-diferencial":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Diferencial
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.differential.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </>
      );
    case "about-preferencias":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Preferências criativas
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.creativePreferences.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      );
    case "about-objetivo":
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Objetivo
          </p>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-6">
            {aboutContent.professionalObjective}
          </p>
        </>
      );
    default:
      return (
        <>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Especialidades
          </p>
          <ul className="space-y-2 text-sm text-muted mt-2">
            {aboutContent.specialties.slice(0, 8).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      );
  }
}

export function DynamicSidebar({
  activeTab,
  activeSectionId,
}: DynamicSidebarProps) {
  const isAbout = activeTab === "about";
  const resolvedSectionId =
    isAbout && activeSectionId && ABOUT_SECTION_IDS.includes(activeSectionId as (typeof ABOUT_SECTION_IDS)[number])
      ? activeSectionId
      : isAbout
        ? "about-intro"
        : null;

  const [displayId, setDisplayId] = useState(resolvedSectionId ?? "about-intro");
  const [exitingId, setExitingId] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isAbout || !resolvedSectionId) return;
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
  }, [isAbout, resolvedSectionId, displayId, exitingId]);

  if (isAbout && (displayId || exitingId)) {
    return (
      <aside
        className="hidden xl:block sticky top-32 h-fit opacity-90 transition-opacity duration-300"
        aria-label="Resumo da seção em vista"
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

  if (activeTab === "projects") {
    return (
      <aside
        className="hidden xl:block sticky top-32 h-fit opacity-90 transition-opacity duration-300"
        aria-label="Categorias"
      >
        <div className="space-y-6 pl-2 border-l border-accent/20">
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Categorias
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

  if (activeTab === "hobbies") {
    return (
      <aside
        className="hidden xl:block sticky top-32 h-fit opacity-90 transition-opacity duration-300"
        aria-label="Hobbys"
      >
        <div className="space-y-6 pl-2 border-l border-accent/20">
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Hobbys
          </p>
          <ul className="space-y-2 text-sm text-muted">
            {hobbiesList.map((h) => (
              <li key={h.id}>{h.title}</li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  return null;
}

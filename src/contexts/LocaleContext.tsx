"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  AboutContent,
  AtelierPiece,
  Project,
  ProjectCategory,
  ProjectTopic,
  ServicesContent,
} from "@/types";
import { aboutContent } from "@/lib/about";
import { aboutContentEn } from "@/lib/about.en";
import {
  projectsList,
  projectCategories,
  projectTopics,
} from "@/lib/projects";
import {
  projectsListEn,
  projectCategoriesEn,
  projectTopicsEn,
} from "@/lib/projects.en";
import { servicesContent } from "@/lib/services";
import { servicesContentEn } from "@/lib/services.en";
import { atelierList } from "@/lib/atelier";
import { atelierListEn } from "@/lib/atelier.en";
import { uiPt, uiEn, type UiMessages } from "@/lib/i18n/messages";
import { orderProjects } from "@/lib/projectOrder";

export type Locale = "pt" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: UiMessages;
  about: AboutContent;
  projects: Project[];
  atelier: AtelierPiece[];
  projectCategories: { id: ProjectCategory; label: string }[];
  projectTopics: { id: ProjectTopic; label: string }[];
  services: ServicesContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [storedRead, setStoredRead] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s === "en" || s === "pt") setLocaleState(s);
    } catch {
      /* ignore */
    }
    setStoredRead(true);
  }, []);

  useEffect(() => {
    if (!storedRead) return;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, storedRead]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const value = useMemo<LocaleContextValue>(() => {
    const isEn = locale === "en";
    return {
      locale,
      setLocale,
      t: isEn ? uiEn : uiPt,
      about: isEn ? aboutContentEn : aboutContent,
      projects: orderProjects(isEn ? projectsListEn : projectsList),
      atelier: isEn ? atelierListEn : atelierList,
      projectCategories: isEn ? projectCategoriesEn : projectCategories,
      projectTopics: isEn ? projectTopicsEn : projectTopics,
      services: isEn ? servicesContentEn : servicesContent,
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

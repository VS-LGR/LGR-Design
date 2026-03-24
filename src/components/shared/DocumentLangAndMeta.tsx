"use client";

import { useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export function DocumentLangAndMeta() {
  const { locale, t } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
    document.title = t.meta.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t.meta.description);
  }, [locale, t.meta.title, t.meta.description]);

  return null;
}

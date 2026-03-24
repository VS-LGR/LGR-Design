"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { DocumentLangAndMeta } from "@/components/shared/DocumentLangAndMeta";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <DocumentLangAndMeta />
      {children}
    </LocaleProvider>
  );
}

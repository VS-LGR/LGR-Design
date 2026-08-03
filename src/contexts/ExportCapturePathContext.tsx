"use client";

import { createContext, useContext, type ReactNode } from "react";

/** When set, embedded captures pretend this path is active (for /exportar). */
const ExportCapturePathContext = createContext<string | null>(null);

export function ExportCapturePathProvider({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <ExportCapturePathContext.Provider value={path}>
      {children}
    </ExportCapturePathContext.Provider>
  );
}

export function useExportCapturePath(): string | null {
  return useContext(ExportCapturePathContext);
}

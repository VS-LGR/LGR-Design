"use client";

import { useState } from "react";
import type { UiMessages } from "@/lib/i18n/messages";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CasePreviewStepProps {
  title: string;
  description: string;
  previewUrl?: string;
  t: UiMessages;
}

type ViewportPreset = "full" | 390 | 768 | 1024;

export function CasePreviewStep({
  title,
  description,
  previewUrl,
  t,
}: CasePreviewStepProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  const [viewportPreset, setViewportPreset] = useState<ViewportPreset>("full");
  const effectiveViewportPreset: ViewportPreset = isMobile ? 390 : viewportPreset;

  return (
    <section className="rounded-2xl border border-accent/25 bg-surface/25 p-4 md:p-6">
      <p className="text-xs uppercase tracking-wide text-accent font-semibold">
        Preview
      </p>
      <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2">{title}</h2>
      <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>

      {previewUrl ? (
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-border-dark/60 bg-surface/35 px-3 py-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-accent/90 font-medium">{t.projects.width}</span>
            <select
              value={effectiveViewportPreset === "full" ? "full" : effectiveViewportPreset}
              onChange={(event) => {
                const value = event.target.value;
                setViewportPreset(
                  value === "full" ? "full" : (Number(value) as 390 | 768 | 1024)
                );
              }}
              disabled={isMobile}
              className="project-select px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-border-dark/60 text-primary outline-none transition-all cursor-pointer min-w-[9rem] hover:border-accent/40 disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label={t.projects.widthAria}
            >
              <option value="full">{t.projects.viewportFull}</option>
              <option value={390}>{t.projects.viewport390}</option>
              <option value={768}>{t.projects.viewport768}</option>
              <option value={1024}>{t.projects.viewport1024}</option>
            </select>
          </div>
          {!showPreview ? (
            <button
              type="button"
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                setShowPreview(true);
              }}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-accent text-dark font-medium hover:bg-accent-soft transition-colors focus-ring"
            >
              {t.previewCta}
            </button>
          ) : (
            <div className="rounded-xl border border-border-dark/60 overflow-hidden bg-dark min-h-[420px] p-2 md:p-3 flex items-center justify-center">
              {isLoading ? (
                <div className="h-[65vh] min-h-[420px] w-full flex items-center justify-center text-sm text-muted">
                  {t.caseDeck.loadingPreview}
                </div>
              ) : null}
              {hasError ? (
                <div className="h-[65vh] min-h-[420px] w-full flex items-center justify-center text-sm text-muted px-6 text-center">
                  {t.caseDeck.previewError}
                </div>
              ) : null}
              <div
                className={`h-[65vh] min-h-[420px] rounded-xl overflow-hidden border border-border-dark/60 ${
                  effectiveViewportPreset === "full" ? "w-full" : ""
                } ${isLoading || hasError ? "hidden" : "block"}`}
                style={
                  effectiveViewportPreset !== "full"
                    ? { width: `${effectiveViewportPreset}px`, maxWidth: "100%" }
                    : undefined
                }
              >
                <iframe
                  src={previewUrl}
                  title={title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                />
              </div>
            </div>
          )}
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
          >
            {t.caseDeck.openExternal}
          </a>
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted">{t.caseDeck.previewUnavailable}</p>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import type { UiMessages } from "@/lib/i18n/messages";

interface CasePreviewStepProps {
  title: string;
  description: string;
  previewUrl?: string;
  t: UiMessages;
}

type ViewportPreset = "full" | 390 | 768 | 1024;

const previewFrameHeight =
  "min-h-[220px] h-[min(50dvh,440px)] sm:min-h-[280px] sm:h-[min(54dvh,500px)] md:min-h-[360px] md:h-[min(62vh,580px)] lg:h-[min(65vh,640px)]";

function PreviewPlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function CasePreviewStep({
  title,
  description,
  previewUrl,
  t,
}: CasePreviewStepProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [viewportPreset, setViewportPreset] = useState<ViewportPreset>("full");
  const effectiveViewportPreset: ViewportPreset = viewportPreset;

  return (
    <section className="w-full max-w-full min-w-0 rounded-2xl border border-accent/25 bg-surface/25 p-4 md:p-6 box-border">
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
              className="w-full sm:w-auto sm:self-start flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-accent/45 bg-accent/12 text-accent font-semibold text-sm shadow-sm shadow-black/5 hover:bg-accent/20 hover:border-accent/60 active:scale-[0.99] transition-[background-color,border-color,transform] focus-ring"
            >
              <PreviewPlayIcon className="opacity-90 shrink-0" />
              <span className="text-left leading-snug">{t.caseDeck.previewCta}</span>
            </button>
          ) : (
            <div className="rounded-xl border border-border-dark/60 overflow-hidden bg-dark p-2 md:p-3 min-w-0 flex flex-col">
              {isLoading ? (
                <div
                  className={`${previewFrameHeight} w-full min-w-0 flex items-center justify-center text-sm text-muted`}
                >
                  {t.caseDeck.loadingPreview}
                </div>
              ) : null}
              {hasError ? (
                <div
                  className={`${previewFrameHeight} w-full min-w-0 flex items-center justify-center text-sm text-muted px-6 text-center`}
                >
                  {t.caseDeck.previewError}
                </div>
              ) : null}
              {!isLoading && !hasError ? (
                <div
                  className={`${previewFrameHeight} rounded-lg overflow-hidden border border-border-dark/60 min-w-0 mx-auto ${
                    effectiveViewportPreset === "full" ? "w-full" : ""
                  }`}
                  style={
                    effectiveViewportPreset !== "full"
                      ? { width: `min(100%, ${effectiveViewportPreset}px)` }
                      : undefined
                  }
                >
                  <iframe
                    src={previewUrl}
                    title={title}
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                      setIsLoading(false);
                      setHasError(true);
                    }}
                  />
                </div>
              ) : null}
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

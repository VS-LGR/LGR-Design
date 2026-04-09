"use client";

import { useState } from "react";
import type { UiMessages } from "@/lib/i18n/messages";

interface CasePreviewStepProps {
  title: string;
  description: string;
  previewUrl?: string;
  t: UiMessages["caseDeck"];
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

  return (
    <section className="rounded-2xl border border-accent/25 bg-surface/25 p-4 md:p-6">
      <p className="text-xs uppercase tracking-wide text-accent font-semibold">
        Preview
      </p>
      <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2">{title}</h2>
      <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>

      {previewUrl ? (
        <div className="mt-4 space-y-3">
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
            <div className="rounded-xl border border-border-dark/60 overflow-hidden bg-dark min-h-[420px]">
              {isLoading ? (
                <div className="h-[65vh] min-h-[420px] w-full flex items-center justify-center text-sm text-muted">
                  {t.loadingPreview}
                </div>
              ) : null}
              {hasError ? (
                <div className="h-[65vh] min-h-[420px] w-full flex items-center justify-center text-sm text-muted px-6 text-center">
                  {t.previewError}
                </div>
              ) : null}
              <iframe
                src={previewUrl}
                title={title}
                className={`w-full h-[65vh] min-h-[420px] border-0 ${
                  isLoading || hasError ? "hidden" : "block"
                }`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            </div>
          )}
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
          >
            {t.openExternal}
          </a>
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted">{t.previewUnavailable}</p>
      )}
    </section>
  );
}

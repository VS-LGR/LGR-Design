"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import type { ProjectCategory, ProjectTopic } from "@/types";
import { useLocale } from "@/contexts/LocaleContext";

export function ProjectGrid() {
  const { projects, projectCategories, projectTopics, t } = useLocale();

  function getCategoryLabel(category: ProjectCategory) {
    return projectCategories.find((c) => c.id === category)?.label ?? category;
  }

  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic>("saude");
  const projectsInTopic = useMemo(
    () => projects.filter((p) => p.topic === selectedTopic),
    [projects, selectedTopic]
  );
  const [selectedId, setSelectedId] = useState<string>(
    projectsInTopic[0]?.id ?? projects[0]?.id ?? ""
  );
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null);

  const projectInTopic = projectsInTopic.find((p) => p.id === selectedId);
  const projectToShow =
    projectInTopic ?? projectsInTopic[0] ?? projects[0] ?? null;
  const projectUrl =
    projectToShow?.link && projectToShow.link.startsWith("http")
      ? projectToShow.link
      : null;
  const hasDev =
    projectToShow?.developmentExplanation &&
    !projectToShow.developmentExplanation.startsWith("[");

  const currentTopicProjects = projectsInTopic;
  const selectedProjectIndex = currentTopicProjects.findIndex((p) => p.id === selectedId);
  const effectiveIndex = selectedProjectIndex >= 0 ? selectedProjectIndex : 0;

  const scrollToSelectedPreview = useCallback(() => {
    if (!projectPreviewAnchorRef.current) return;
    projectPreviewAnchorRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleSelectProject = useCallback(
    (projectId: string, shouldScroll = true) => {
      setSelectedId(projectId);
      setActivePreviewId(projectId);
      if (shouldScroll) {
        requestAnimationFrame(() => scrollToSelectedPreview());
      }
    },
    [scrollToSelectedPreview]
  );

  const handleTopicChange = (topic: ProjectTopic) => {
    setSelectedTopic(topic);
    const inNewTopic = projects.filter((p) => p.topic === topic);
    if (inNewTopic.length > 0) {
      setSelectedId(inNewTopic[0].id);
      setActivePreviewId(null);
    }
  };

  type PreviewMode = "floating" | "docked";
  const [previewMode, setPreviewMode] = useState<PreviewMode>("docked");
  const [previewPosition, setPreviewPosition] = useState({ x: 24, y: 180 });
  const [previewSize, setPreviewSize] = useState(() => ({
    width: typeof window !== "undefined" ? Math.round(Math.min(1600, window.innerWidth * 0.92)) : 1280,
    height: 640,
  }));
  const [dockedHeight, setDockedHeight] = useState(520);
  type ViewportWidthPreset = "full" | 390 | 768 | 1024;
  const [viewportWidthPreset, setViewportWidthPreset] = useState<ViewportWidthPreset>("full");

  const isPortfolioMobile = useIsMobile();
  const effectiveViewportWidth: ViewportWidthPreset | number =
    isPortfolioMobile ? 390 : viewportWidthPreset;

  const MIN_PREVIEW_W = 320;
  const MIN_PREVIEW_H = 280;
  const PREVIEW_EDGE_MARGIN = 24;
  /** Espaço mínimo no rodapé quando solta, para não “travar” a janela no chão e deixar área útil */
  const FLOATING_BOTTOM_GAP = 160;
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startLeft: 0, startTop: 0 });
  const resizeRef = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const projectPreviewAnchorRef = useRef<HTMLDivElement>(null);
  const projectCardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handlePreviewMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, select")) return;
      if (previewMode !== "floating") return;
      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startLeft: previewPosition.x,
        startTop: previewPosition.y,
      };
    },
    [previewPosition, previewMode]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const win = typeof window !== "undefined" ? window : null;
      const maxW = win ? win.innerWidth - 48 : 1400;
      const maxH = win ? Math.round(win.innerHeight * 0.9) : 900;

      if (isResizing) {
        const dx = e.clientX - resizeRef.current.startX;
        const dy = e.clientY - resizeRef.current.startY;
        if (previewMode === "floating") {
          setPreviewSize({
            width: Math.max(MIN_PREVIEW_W, Math.min(maxW, resizeRef.current.startW + dx)),
            height: Math.max(MIN_PREVIEW_H, Math.min(maxH, resizeRef.current.startH + dy)),
          });
        } else {
          setDockedHeight((h) =>
            Math.max(MIN_PREVIEW_H, Math.min(maxH, resizeRef.current.startH + dy))
          );
        }
        return;
      }
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      const el = previewRef.current;
      const w = win ? win.innerWidth : 1920;
      const h = win ? win.innerHeight : 1080;
      const width = el ? el.offsetWidth : previewSize.width;
      const height = el ? el.offsetHeight : previewSize.height;
      const maxY = h - height - FLOATING_BOTTOM_GAP;
      setPreviewPosition({
        x: Math.max(PREVIEW_EDGE_MARGIN, Math.min(w - width - PREVIEW_EDGE_MARGIN, dragRef.current.startLeft + dx)),
        y: Math.max(PREVIEW_EDGE_MARGIN, Math.min(maxY, dragRef.current.startTop + dy)),
      });
    },
    [isDragging, isResizing, previewMode, previewSize.width, previewSize.height]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsResizing(true);
      if (previewMode === "floating") {
        resizeRef.current = {
          startX: e.clientX,
          startY: e.clientY,
          startW: previewSize.width,
          startH: previewSize.height,
        };
      } else {
        resizeRef.current = {
          startX: 0,
          startY: e.clientY,
          startW: 0,
          startH: dockedHeight,
        };
      }
    },
    [previewMode, previewSize.width, previewSize.height, dockedHeight]
  );

  useEffect(() => {
    const w = typeof window !== "undefined" ? window : null;
    if (!w) return;
    w.addEventListener("mousemove", handleMouseMove);
    w.addEventListener("mouseup", handleMouseUp);
    return () => {
      w.removeEventListener("mousemove", handleMouseMove);
      w.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (isPortfolioMobile) setPreviewMode("docked");
  }, [isPortfolioMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = Math.round(Math.min(1600, window.innerWidth * 0.92));
    const maxH = Math.round(window.innerHeight * 0.85);
    const initialH = Math.max(MIN_PREVIEW_H, Math.min(800, maxH));

    setPreviewSize((s) => ({
      width: s.width !== w ? w : s.width,
      height: s.height !== initialH ? initialH : s.height,
    }));

    setDockedHeight((h) =>
      h !== initialH ? Math.max(MIN_PREVIEW_H, Math.min(maxH, initialH)) : h
    );
  }, []);

  useEffect(() => {
    if (previewMode !== "floating" || typeof window === "undefined") return;
    const maxY = window.innerHeight - previewSize.height - FLOATING_BOTTOM_GAP;
    if (previewPosition.y > maxY && maxY >= PREVIEW_EDGE_MARGIN) {
      setPreviewPosition((p) => ({ ...p, y: maxY }));
    }
    // Run only when switching to floating so the window isn't stuck at bottom
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewMode]);

  useEffect(() => {
    const cardEl = projectCardRefs.current[selectedId];
    if (!cardEl) return;
    cardEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedId]);

  const specsBody = projectToShow && (
    <>
      <p className="text-sm text-accent/90 font-medium mb-1">
        {getCategoryLabel(projectToShow.category)}
      </p>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {projectToShow.description}
      </p>
      {hasDev && (
        <div>
          <p className="text-xs font-medium text-accent/90 uppercase tracking-wider mb-2">
            {t.projects.aboutDev}
          </p>
          <p className="text-muted text-sm leading-relaxed">
            {projectToShow.developmentExplanation}
          </p>
        </div>
      )}
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring"
        >
          {t.projects.openSiteTab}
        </a>
      )}
    </>
  );

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className={`w-full min-w-0 flex flex-col py-6 md:py-8 ${isPortfolioMobile ? "overflow-x-hidden" : ""}`}
    >
      {/* Seletor por tópico + projeto */}
      <div className="mb-5 p-4 md:p-5 rounded-xl border border-border-dark/50 bg-surface/40">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
          {t.projects.byTopic}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projectTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => handleTopicChange(topic.id)}
              className={`
                px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus-ring
                ${
                  selectedTopic === topic.id
                    ? "bg-accent text-dark shadow-glow-sm"
                    : "bg-surface/80 text-muted hover:text-primary border border-border-dark/60 hover:border-accent/40"
                }
              `}
            >
              {topic.label}
            </button>
          ))}
        </div>
        {currentTopicProjects.length > 0 ? (
          <div className="flex flex-wrap items-center gap-4">
            <label
              htmlFor="project-select"
              className="text-sm font-medium text-muted"
            >
              {t.projects.project}
            </label>
            <select
              id="project-select"
              value={selectedId}
              onChange={(e) => handleSelectProject(e.target.value)}
              className="project-select px-4 py-2.5 rounded-xl text-sm font-medium bg-surface border border-border-dark/60 text-primary outline-none transition-all cursor-pointer min-w-[220px] max-w-full hover:border-accent/40"
              aria-label={t.projects.selectProjectAria}
            >
              {currentTopicProjects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <span className="text-xs font-medium text-muted bg-surface/60 px-3 py-1.5 rounded-lg border border-border-dark/40">
              {t.projects.ofTotal
                .replace("{current}", String(effectiveIndex + 1))
                .replace("{total}", String(currentTopicProjects.length))}
            </span>
          </div>
        ) : (
          <p className="text-sm text-muted">
            {t.projects.noneInTopic}
          </p>
        )}
        <p className="mt-3 text-xs text-muted/90 leading-relaxed">
          {t.projects.previewHint}
        </p>
      </div>

      {currentTopicProjects.length > 0 && (
        <section
          className="mb-6"
          aria-labelledby="project-cards-heading"
        >
          <h3
            id="project-cards-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            {t.projects.topicProjects}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {currentTopicProjects.map((project) => {
              const isActive = project.id === selectedId;
              return (
                <button
                  key={project.id}
                  type="button"
                  ref={(el) => {
                    projectCardRefs.current[project.id] = el;
                  }}
                  onClick={() => handleSelectProject(project.id)}
                  className={`text-left rounded-xl border transition-all overflow-hidden focus-ring ${
                    isActive
                      ? "border-accent/70 bg-accent/10 shadow-[0_0_0_1px_rgba(6,182,212,0.25)]"
                      : "border-border-dark/60 bg-surface/40 hover:border-accent/40"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`${t.projects.selectProjectPrefix} ${project.title}`}
                >
                  <div className="h-28 bg-dark/70 border-b border-border-dark/50 overflow-hidden relative">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${t.projects.thumbnailAltPrefix} ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-muted px-2 text-center">
                        {t.projects.thumbnailStatic}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-primary truncate">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      <div ref={projectPreviewAnchorRef} />

      {projectToShow?.keyStages?.length ? (
        <section
          className="mb-5"
          aria-labelledby="key-stages-heading"
        >
          <h3
            id="key-stages-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            {t.projects.keyStages}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {projectToShow.keyStages.map((stage) => (
              <article
                key={stage.title}
                className="rounded-xl border border-border-dark/60 bg-surface/35 p-4"
              >
                <p className="text-sm font-semibold text-primary">
                  {stage.title}
                </p>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* Preview: modo flutuante (arrastável) ou fixo (compacto, especificações visíveis) */}
      {projectToShow && (
        <div
          ref={previewRef}
          className={`preview-window flex flex-col rounded-2xl overflow-hidden border border-accent/30 bg-surface/90 backdrop-blur-xl select-none transition-[box-shadow] duration-300 ${
            previewMode === "floating" ? "fixed z-30 animate-in" : "w-full max-w-[min(1600px,95vw)] mx-auto mb-6"
          }`}
          style={
            previewMode === "floating"
              ? {
                  left: previewPosition.x,
                  top: previewPosition.y,
                  width: previewSize.width,
                  height: previewSize.height,
                  minWidth: MIN_PREVIEW_W,
                  minHeight: MIN_PREVIEW_H,
                  boxShadow:
                    "0 0 0 1px rgba(6,182,212,0.15), 0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px -10px rgba(6,182,212,0.2)",
                }
              : {
                  height: dockedHeight,
                  minHeight: MIN_PREVIEW_H,
                }
          }
        >
          <header
            role={previewMode === "floating" ? "button" : undefined}
            tabIndex={previewMode === "floating" ? 0 : undefined}
            onMouseDown={handlePreviewMouseDown}
            onKeyDown={
              previewMode === "floating"
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ")
                      (e.currentTarget as HTMLElement).click();
                  }
                : undefined
            }
            className={`flex-shrink-0 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-b border-accent/20 bg-surface/80 rounded-t-2xl ${
              previewMode === "floating"
                ? `cursor-grab active:cursor-grabbing ${isDragging ? "cursor-grabbing" : ""}`
                : ""
            }`}
            aria-label={
              previewMode === "floating"
                ? t.projects.dragTitle
                : undefined
            }
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/30" />
              </span>
              <h2 className="text-base font-semibold text-primary truncate">
                {projectToShow.title}
              </h2>
              {previewMode === "floating" && (
                <span className="text-xs text-muted hidden sm:inline">
                  {t.projects.dragHint}
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-shrink-0 pl-3 pr-2 py-2 rounded-xl bg-accent/10 border border-accent/25 w-full sm:w-auto">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider hidden sm:inline">
                {t.projects.adjustments}
              </span>
              {isPortfolioMobile ? (
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-accent/90 bg-accent/15 rounded-lg border border-accent/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>390px</span>
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-accent/90 font-medium hidden md:inline">{t.projects.width}</span>
                  <select
                    value={viewportWidthPreset === "full" ? "full" : viewportWidthPreset}
                    onChange={(e) => {
                      const v = e.target.value;
                      setViewportWidthPreset(
                        v === "full" ? "full" : (Number(v) as 390 | 768 | 1024)
                      );
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-2 text-sm font-medium rounded-lg border border-accent/30 bg-surface text-primary cursor-pointer focus-ring min-w-[8rem] hover:border-accent/50 focus:border-accent"
                    title={t.projects.widthTitle}
                    aria-label={t.projects.widthAria}
                  >
                    <option value="full">{t.projects.viewportFull}</option>
                    <option value={390}>{t.projects.viewport390}</option>
                    <option value={768}>{t.projects.viewport768}</option>
                    <option value={1024}>{t.projects.viewport1024}</option>
                  </select>
                </div>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewMode((m) => (m === "floating" ? "docked" : "floating"));
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-accent hover:bg-accent/15 transition-colors focus-ring border border-transparent hover:border-accent/30"
                title={
                  previewMode === "floating"
                    ? t.projects.dockTitle
                    : t.projects.floatTitle
                }
                aria-label={
                  previewMode === "floating"
                    ? t.projects.dockAria
                    : t.projects.floatAria
                }
              >
                {previewMode === "floating" ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="hidden sm:inline">{t.projects.dock}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">{t.projects.float}</span>
                  </>
                )}
              </button>
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring w-full sm:w-auto"
                >
                  {t.projects.openNewTab}
                </a>
              )}
            </div>
          </header>
          <div className="flex-1 min-h-0 relative bg-dark flex items-center justify-center overflow-hidden">
            {projectUrl && activePreviewId === selectedId ? (
              effectiveViewportWidth !== "full" ? (
                <div
                  className="min-h-[400px] max-h-[700px] h-full flex-shrink-0 rounded-2xl overflow-hidden border-2 border-border-dark/80 bg-surface shadow-xl"
                  style={{
                    width: effectiveViewportWidth,
                    maxWidth: isPortfolioMobile ? "100%" : undefined,
                    boxShadow: "0 0 0 1px rgba(6,182,212,0.2), 0 20px 40px -10px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="w-full h-full pt-2 px-1 box-border">
                    <iframe
                      src={projectUrl}
                      title={projectToShow.title}
                      className="w-full h-full border-0 rounded-xl"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              ) : (
                <iframe
                  src={projectUrl}
                  title={projectToShow.title}
                  className="absolute inset-0 w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                {projectUrl
                  ? t.projects.selectForPreview
                  : t.projects.noPreviewLink}
              </div>
            )}
          </div>
          {/* Alça de redimensionar */}
          <div
            onMouseDown={handleResizeStart}
            className={`absolute z-10 bg-accent/20 hover:bg-accent/30 transition-colors flex items-center justify-center ${
              previewMode === "floating"
                ? "bottom-0 right-0 w-6 h-6 cursor-nwse-resize rounded-tl-lg"
                : "left-0 right-0 bottom-0 h-3 cursor-ns-resize"
            }`}
            title={previewMode === "floating" ? t.projects.resizeCorner : t.projects.resizeHeight}
            aria-label={previewMode === "floating" ? t.projects.resizeWindowAria : t.projects.resizeHeightAria}
          >
            {previewMode === "floating" && (
              <svg className="w-3.5 h-3.5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20L20 4M20 4h-8M20 4v8" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Especificações: no fluxo quando Presa, painel fixo quando Solta */}
      {projectToShow && previewMode === "docked" && (
        <section
          className="mt-6 py-6 px-4 md:px-6 rounded-xl border border-border-dark/50 bg-surface/20"
          aria-labelledby="specs-heading"
        >
          <h3
            id="specs-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-4"
          >
            {t.projects.specs}
          </h3>
          {specsBody}
        </section>
      )}

      {projectToShow && previewMode === "floating" && (
        <div
          className="fixed bottom-0 left-0 right-0 z-20 max-h-[45vh] overflow-y-auto border-t border-border-dark/60 bg-surface/95 backdrop-blur-md shadow-[0_-8px 32px -8px rgba(0,0,0,0.4)]"
          aria-labelledby="specs-heading-floating"
        >
          <div className="py-4 px-4 md:px-6 max-w-4xl mx-auto">
            <h3
              id="specs-heading-floating"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              {t.projects.specs}
            </h3>
            {specsBody}
          </div>
        </div>
      )}
    </div>
  );
}

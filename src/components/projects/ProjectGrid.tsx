"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { projectsList, projectTopics } from "@/lib/projects";
import { projectCategories } from "@/lib/projects";
import type { ProjectCategory, ProjectTopic } from "@/types";

function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export function ProjectGrid() {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic>("saude");
  const projectsInTopic = useMemo(
    () => projectsList.filter((p) => p.topic === selectedTopic),
    [selectedTopic]
  );
  const [selectedId, setSelectedId] = useState<string>(
    projectsInTopic[0]?.id ?? projectsList[0]?.id ?? ""
  );

  const projectInTopic = projectsInTopic.find((p) => p.id === selectedId);
  const projectToShow =
    projectInTopic ?? projectsInTopic[0] ?? projectsList[0] ?? null;
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

  const handleTopicChange = (topic: ProjectTopic) => {
    setSelectedTopic(topic);
    const inNewTopic = projectsList.filter((p) => p.topic === topic);
    if (inNewTopic.length > 0) {
      setSelectedId(inNewTopic[0].id);
    }
  };

  const MIN_PREVIEW_W = 320;
  const MIN_PREVIEW_H = 280;

  type PreviewMode = "floating" | "docked";
  const [previewMode, setPreviewMode] = useState<PreviewMode>("floating");
  const [previewPosition, setPreviewPosition] = useState({ x: 24, y: 180 });
  const [previewSize, setPreviewSize] = useState({ width: 960, height: 600 });
  const [dockedHeight, setDockedHeight] = useState(420);
  const [viewportMode, setViewportMode] = useState<"web" | "mobile">("web");
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startLeft: 0, startTop: 0 });
  const resizeRef = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePreviewMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) return;
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
      setPreviewPosition({
        x: Math.max(0, Math.min(w - width, dragRef.current.startLeft + dx)),
        y: Math.max(0, Math.min(h - height, dragRef.current.startTop + dy)),
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

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="w-full min-w-0 flex flex-col py-6 md:py-8"
    >
      {/* Seletor por tópico + projeto */}
      <div className="mb-5 p-4 md:p-5 rounded-xl border border-border-dark/50 bg-surface/40">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
          Projetos por tópico
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
              Projeto
            </label>
            <select
              id="project-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="project-select px-4 py-2.5 rounded-xl text-sm font-medium bg-surface border border-border-dark/60 text-primary outline-none transition-all cursor-pointer min-w-[220px] max-w-full hover:border-accent/40"
              aria-label="Selecionar projeto"
            >
              {currentTopicProjects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <span className="text-xs font-medium text-muted bg-surface/60 px-3 py-1.5 rounded-lg border border-border-dark/40">
              {effectiveIndex + 1} de {currentTopicProjects.length}
            </span>
          </div>
        ) : (
          <p className="text-sm text-muted">
            Nenhum projeto neste tópico no momento.
          </p>
        )}
      </div>

      {/* Preview: modo flutuante (arrastável) ou fixo (compacto, especificações visíveis) */}
      {projectToShow && (
        <div
          ref={previewRef}
          className={`preview-window flex flex-col rounded-2xl overflow-hidden border border-accent/30 bg-surface/90 backdrop-blur-xl select-none transition-[box-shadow] duration-300 ${
            previewMode === "floating" ? "fixed z-30 animate-in" : "w-full max-w-4xl mx-auto mb-6"
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
            className={`flex-shrink-0 flex items-center justify-between gap-4 px-4 py-3 border-b border-accent/20 bg-surface/80 ${
              previewMode === "floating"
                ? `cursor-grab active:cursor-grabbing ${isDragging ? "cursor-grabbing" : ""}`
                : ""
            }`}
            aria-label={
              previewMode === "floating"
                ? "Arrastar janela de preview"
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
                  — arraste para mover
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-muted mr-1 hidden md:inline">Resolução:</span>
              <div className="flex rounded-lg border border-border-dark/60 overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewportMode("web");
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                    viewportMode === "web"
                      ? "bg-accent/20 text-accent border-accent/40"
                      : "text-muted hover:text-primary bg-surface/50"
                  }`}
                  title="Visualização desktop (largura total)"
                  aria-label="Ver em resolução web"
                  aria-pressed={viewportMode === "web"}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Web</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewportMode("mobile");
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                    viewportMode === "mobile"
                      ? "bg-accent/20 text-accent border-accent/40"
                      : "text-muted hover:text-primary bg-surface/50"
                  }`}
                  title="Visualização mobile (390px)"
                  aria-label="Ver em resolução mobile"
                  aria-pressed={viewportMode === "mobile"}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewMode((m) => (m === "floating" ? "docked" : "floating"));
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-accent hover:bg-accent/10 transition-colors focus-ring"
                title={
                  previewMode === "floating"
                    ? "Prender preview (deixar especificações visíveis)"
                    : "Soltar preview (modo flutuante, arrastável)"
                }
                aria-label={
                  previewMode === "floating"
                    ? "Prender preview"
                    : "Soltar preview para modo flutuante"
                }
              >
                {previewMode === "floating" ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="hidden sm:inline">Prender</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Soltar</span>
                  </>
                )}
              </button>
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
                >
                  Abrir em nova guia
                </a>
              )}
            </div>
          </header>
          <div className="flex-1 min-h-0 relative bg-dark flex items-center justify-center">
            {projectUrl ? (
              viewportMode === "mobile" ? (
                <div
                  className="w-[390px] min-h-[400px] max-h-[700px] h-full flex-shrink-0 rounded-[2rem] overflow-hidden border-2 border-border-dark/80 bg-surface shadow-xl"
                  style={{ boxShadow: "0 0 0 1px rgba(6,182,212,0.2), 0 20px 40px -10px rgba(0,0,0,0.4)" }}
                >
                  <iframe
                    src={projectUrl}
                    title={projectToShow.title}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
                Sem link de preview
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
            title={previewMode === "floating" ? "Arrastar para redimensionar" : "Arrastar para alterar altura"}
            aria-label={previewMode === "floating" ? "Redimensionar janela" : "Redimensionar altura"}
          >
            {previewMode === "floating" && (
              <svg className="w-3.5 h-3.5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20L20 4M20 4h-8M20 4v8" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Especificações do projeto: abaixo do iframe */}
      {projectToShow && (
        <section
          className="mt-6 py-6 px-4 md:px-6 rounded-xl border border-border-dark/50 bg-surface/20"
          aria-labelledby="specs-heading"
        >
          <h3
            id="specs-heading"
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-4"
          >
            Especificações
          </h3>
          <p className="text-sm text-accent/90 font-medium mb-1">
            {getCategoryLabel(projectToShow.category)}
          </p>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {projectToShow.description}
          </p>
          {hasDev && (
            <div>
              <p className="text-xs font-medium text-accent/90 uppercase tracking-wider mb-2">
                Sobre o desenvolvimento
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
              Abrir site em nova guia
            </a>
          )}
        </section>
      )}
    </div>
  );
}

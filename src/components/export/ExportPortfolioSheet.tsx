"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { UiMessages } from "@/lib/i18n/messages";
import { SITE_URL } from "@/lib/siteMeta";
import { SITE_ROUTES } from "@/lib/siteArchitecture";
import { ExportCapturePathProvider } from "@/contexts/ExportCapturePathContext";
import { Header } from "@/components/shared/Header";
import { HomeClient } from "@/app/HomeClient";
import { ProjetosView } from "@/app/projetos/ProjetosView";
import { ComoTrabalhoView } from "@/app/como-trabalho/ComoTrabalhoView";
import { HistoriaView } from "@/app/historia/HistoriaView";
import { ContatoView } from "@/app/contato/ContatoView";

/** Desktop width so the capture matches the live site layout. */
const DESIGN_WIDTH = 1440;

type ExportPortfolioSheetProps = {
  t: UiMessages;
};

function PageCapture({
  index,
  total,
  path,
  t,
  children,
}: {
  index: number;
  total: number;
  path: string;
  t: UiMessages;
  children: ReactNode;
}) {
  const host = SITE_URL.replace(/^https?:\/\//, "");
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const update = () => {
      const w = stage.clientWidth;
      if (w > 0) setScale(w / DESIGN_WIDTH);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      className="export-landscape-slide relative flex flex-col overflow-hidden rounded-xl border border-border-dark/50 bg-dark"
      aria-label={`${index} ${t.exportDoc.slideOf} ${total} · ${path}`}
    >
      <div className="relative z-[2] flex shrink-0 items-center gap-2 border-b border-border-dark/60 bg-[#0b1220] px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
        <div className="ml-2 min-w-0 flex-1 truncate rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[10px] text-muted">
          {host}
          {path}
        </div>
        <span className="shrink-0 text-[10px] font-semibold tabular-nums tracking-wider text-accent/90">
          {String(index).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      <div
        ref={stageRef}
        className="relative z-[1] min-h-0 flex-1 overflow-hidden bg-dark"
      >
        <div
          className="export-live-canvas pointer-events-none origin-top-left"
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${scale})`,
          }}
        >
          <ExportCapturePathProvider path={path}>
            <div className="export-live-content min-h-[900px] bg-dark text-primary">
              <Header />
              {children}
            </div>
          </ExportCapturePathProvider>
        </div>
      </div>
    </section>
  );
}

export function ExportPortfolioSheet({ t }: ExportPortfolioSheetProps) {
  const ep = t.exportPortfolio;
  const pages = [
    { path: SITE_ROUTES.home, view: <HomeClient /> },
    { path: SITE_ROUTES.projects, view: <ProjetosView /> },
    { path: SITE_ROUTES.process, view: <ComoTrabalhoView /> },
    { path: SITE_ROUTES.about, view: <HistoriaView /> },
    { path: SITE_ROUTES.contact, view: <ContatoView /> },
  ] as const;

  return (
    <article className="export-doc-sheet export-carousel export-landscape mx-auto max-w-[1200px] px-3 sm:px-4 py-8 md:py-10 space-y-6 md:space-y-8">
      <p className="no-print text-center text-xs text-muted px-2">
        {ep.carouselLabel} · 1200×627 · {ep.linkedinHint}
      </p>

      {pages.map((page, i) => (
        <PageCapture
          key={page.path}
          index={i + 1}
          total={pages.length}
          path={page.path}
          t={t}
        >
          {page.view}
        </PageCapture>
      ))}
    </article>
  );
}

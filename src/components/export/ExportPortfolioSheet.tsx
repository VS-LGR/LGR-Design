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
import {
  HomeFeaturedProjects,
  HomeHero,
} from "@/components/home/HomeSections";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ContatoView } from "@/app/contato/ContatoView";
import { PageHeader } from "@/components/shared/PageHeader";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutWorkSection } from "@/components/about/AboutWorkSection";
import { useLocale } from "@/contexts/LocaleContext";

const DESIGN_WIDTH = 1180;

type ExportPortfolioSheetProps = {
  t: UiMessages;
};

function LiveSlide({
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
  const [scale, setScale] = useState(0.55);

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

  const navActive = (href: string) =>
    href === "/"
      ? path === "/"
      : path === href || path.startsWith(`${href}/`);

  return (
    <section
      className="export-landscape-slide relative flex flex-col overflow-hidden rounded-xl border border-accent/20 bg-dark"
      aria-label={`${index} ${t.exportDoc.slideOf} ${total}`}
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

      <div className="relative z-[2] flex shrink-0 items-center justify-between gap-3 border-b border-border-dark/50 bg-dark/95 px-4 py-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold tracking-tight text-primary">
            Lucas Gabriel Rodrigues
          </p>
          <p className="truncate text-[9px] text-muted">{t.header.tagline}</p>
        </div>
        <nav
          className="hidden sm:flex shrink-0 items-center gap-3 text-[9px] font-medium text-muted"
          aria-hidden
        >
          <span className={navActive("/") ? "text-accent" : undefined}>Home</span>
          <span
            className={
              navActive(SITE_ROUTES.projects) ? "text-accent" : undefined
            }
          >
            {t.nav.projects}
          </span>
          <span
            className={
              navActive(SITE_ROUTES.process) ? "text-accent" : undefined
            }
          >
            {t.nav.process}
          </span>
          <span
            className={navActive(SITE_ROUTES.about) ? "text-accent" : undefined}
          >
            {t.nav.about}
          </span>
          <span
            className={
              navActive(SITE_ROUTES.contact) ? "text-accent" : undefined
            }
          >
            {t.nav.contact}
          </span>
        </nav>
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
          <div className="export-live-content bg-dark text-primary">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessScreen() {
  const { t } = useLocale();
  return (
    <div className="px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        kicker={t.nav.work}
        title={t.pages.workHeading}
        lead={t.pages.workLead}
      />
      <div className="mt-8">
        <AboutWorkSection />
      </div>
    </div>
  );
}

function AboutScreen() {
  const { t } = useLocale();
  return (
    <div className="px-4 md:px-8 py-8 md:py-10">
      <PageHeader
        kicker={t.pages.historiaKicker}
        title={t.pages.historiaHeading}
        lead={t.pages.historiaLead}
      />
      <div className="mt-8">
        <AboutStorySection />
      </div>
    </div>
  );
}

function ProjectsScreen() {
  const { t } = useLocale();
  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 md:py-10 max-w-6xl mx-auto">
      <PageHeader
        kicker={t.pages.projectsKicker}
        title={t.pages.projectsHeading}
        lead={t.pages.projectsLead}
      />
      <div className="mt-8">
        <ProjectGrid />
      </div>
    </div>
  );
}

export function ExportPortfolioSheet({ t }: ExportPortfolioSheetProps) {
  const ep = t.exportPortfolio;
  const total = 6;
  let n = 0;
  const next = () => ++n;

  return (
    <article className="export-doc-sheet export-carousel export-landscape mx-auto max-w-[1200px] px-3 sm:px-4 py-8 md:py-10 space-y-6 md:space-y-8">
      <p className="no-print text-center text-xs text-muted px-2">
        {ep.carouselLabel} · 1200×627 · {ep.linkedinHint}
      </p>

      <LiveSlide index={next()} total={total} path="/" t={t}>
        <HomeHero />
      </LiveSlide>

      <LiveSlide index={next()} total={total} path="/" t={t}>
        <HomeFeaturedProjects />
      </LiveSlide>

      <LiveSlide index={next()} total={total} path={SITE_ROUTES.projects} t={t}>
        <ProjectsScreen />
      </LiveSlide>

      <LiveSlide index={next()} total={total} path={SITE_ROUTES.process} t={t}>
        <ProcessScreen />
      </LiveSlide>

      <LiveSlide index={next()} total={total} path={SITE_ROUTES.about} t={t}>
        <AboutScreen />
      </LiveSlide>

      <LiveSlide index={next()} total={total} path={SITE_ROUTES.contact} t={t}>
        <ContatoView />
      </LiveSlide>
    </article>
  );
}

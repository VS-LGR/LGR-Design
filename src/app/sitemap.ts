import type { MetadataRoute } from "next";
import { projectsList } from "@/lib/projects";
import { atelierList } from "@/lib/atelier";
import { SITE_URL } from "@/lib/siteMeta";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    SITE_ROUTES.home,
    SITE_ROUTES.projects,
    SITE_ROUTES.atelier,
    SITE_ROUTES.process,
    SITE_ROUTES.about,
    SITE_ROUTES.contact,
    SITE_ROUTES.hire,
  ].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const projectRoutes = projectsList.map((project) => ({
    url: `${SITE_URL}${SITE_ROUTES.project(project.slug)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const atelierRoutes = atelierList.map((piece) => ({
    url: `${SITE_URL}${SITE_ROUTES.atelierPiece(piece.slug)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...projectRoutes, ...atelierRoutes];
}

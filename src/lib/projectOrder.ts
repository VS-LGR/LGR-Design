import type { Project } from "@/types";
import { FEATURED_PROJECT_ORDER } from "@/lib/siteArchitecture";

/** Ordena pela lista de destaque; o restante mantém ordem de declaração. */
export function orderProjects(projects: Project[]): Project[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  const ordered: Project[] = [];

  for (const slug of FEATURED_PROJECT_ORDER) {
    const project = bySlug.get(slug);
    if (project) {
      ordered.push(project);
      bySlug.delete(slug);
    }
  }

  for (const project of projects) {
    if (bySlug.has(project.slug)) {
      ordered.push(project);
      bySlug.delete(project.slug);
    }
  }

  return ordered;
}

export function featuredProjects(projects: Project[]): Project[] {
  return orderProjects(projects).filter(
    (p) => (p.visibility ?? "featured") !== "secondary"
  );
}

export function secondaryProjects(projects: Project[]): Project[] {
  return orderProjects(projects).filter((p) => p.visibility === "secondary");
}

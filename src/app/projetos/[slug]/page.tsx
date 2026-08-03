import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePageClient } from "./CasePageClient";
import { projectsList } from "@/lib/projects";
import { SITE_URL } from "@/lib/siteMeta";
import { SITE_ROUTES } from "@/lib/siteArchitecture";

type Params = { slug: string };

export function generateStaticParams() {
  return projectsList.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const project = projectsList.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Case não encontrado" };
  }

  const title = `${project.title}`;
  const description = project.description;
  const url = `${SITE_URL}${SITE_ROUTES.project(project.slug)}`;
  const images =
    typeof project.thumbnail === "string"
      ? [{ url: project.thumbnail }]
      : undefined;

  return {
    title,
    description,
    alternates: { canonical: SITE_ROUTES.project(project.slug) },
    openGraph: {
      title: `${project.title} | Lucas Gabriel Rodrigues`,
      description,
      url,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Lucas Gabriel Rodrigues`,
      description,
      images: images?.map((img) => img.url),
    },
  };
}

export default function ProjectCasePage({ params }: { params: Params }) {
  const project = projectsList.find((item) => item.slug === params.slug);
  if (!project) notFound();
  return <CasePageClient slug={params.slug} />;
}

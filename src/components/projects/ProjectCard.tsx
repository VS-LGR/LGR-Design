import Image from "next/image";
import { Card } from "@/components/shared/Card";
import type { Project } from "@/types";
import { projectCategories } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

function getCategoryLabel(category: Project["category"]) {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabel = getCategoryLabel(project.category);
  const href = project.link && !project.link.startsWith("[") ? project.link : "#";

  return (
    <Card as="article" className="group">
      {project.thumbnail && !project.thumbnail.startsWith("[") ? (
        <div className="relative aspect-video bg-cool-steel-2/20">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          className="aspect-video bg-cool-steel/20 flex items-center justify-center text-cool-steel-2 text-sm"
          aria-hidden
        >
          Thumbnail
        </div>
      )}
      <div className="p-4">
        <p className="text-xs font-medium text-cool-steel-2 uppercase tracking-wide">
          {categoryLabel}
        </p>
        <h3 className="mt-1 font-semibold text-ash-brown">{project.title}</h3>
        <p className="mt-2 text-sm text-dim-grey line-clamp-2">
          {project.description}
        </p>
        <a
          href={href}
          className="mt-3 inline-block text-sm font-medium text-cool-steel hover:text-ash-brown focus-ring rounded"
        >
          Ver projeto
        </a>
      </div>
    </Card>
  );
}

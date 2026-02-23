import Image from "next/image";
import { Card } from "@/components/shared/Card";
import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const hasImage = hobby.image && !hobby.image.startsWith("[");
  const hasLink = hobby.link && !hobby.link.startsWith("[");

  return (
    <Card as="article" className="group flex flex-col">
      {hasImage ? (
        <div className="relative aspect-video bg-surface-hover overflow-hidden">
          <Image
            src={hobby.image!}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div
          className="aspect-video bg-surface-hover flex items-center justify-center text-muted text-sm border-b border-border-dark/50"
          aria-hidden
        >
          <span className="opacity-60">{hobby.title}</span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-primary text-lg">{hobby.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
          {hobby.description}
        </p>
        {hasLink && (
          <a
            href={hobby.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors focus-ring rounded self-start"
          >
            Ver mais
          </a>
        )}
      </div>
    </Card>
  );
}

import Image from "next/image";
import { Card } from "@/components/shared/Card";
import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const hasImage = hobby.image && !hobby.image.startsWith("[");
  const hasLink = hobby.link && !hobby.link.startsWith("[");

  const content = (
    <>
      {hasImage ? (
        <div className="relative aspect-video bg-cool-steel-2/20">
          <Image
            src={hobby.image!}
            alt=""
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div
          className="aspect-video bg-cool-steel/20 flex items-center justify-center text-cool-steel-2 text-sm"
          aria-hidden
        >
          {hobby.title}
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-ash-brown">{hobby.title}</h3>
        <p className="mt-2 text-sm text-dim-grey leading-relaxed">
          {hobby.description}
        </p>
        {hasLink && (
          <a
            href={hobby.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-cool-steel hover:text-ash-brown focus-ring rounded"
          >
            Ver mais
          </a>
        )}
      </div>
    </>
  );

  return (
    <Card as="article" className="group">
      {content}
    </Card>
  );
}

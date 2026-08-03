"use client";

import { useId } from "react";
import type { Project } from "@/types";
import { PROJECT_COVER_ICONS, IconProjectDefault } from "./ProjectCoverIcons";

type ProjectCoverProps = {
  project: Project;
  variant?: "default" | "flagship";
  className?: string;
};

/**
 * Capa vetorial responsiva por projeto.
 * Decorative: o título do card/case carrega o nome acessível.
 */
export function ProjectCover({
  project,
  variant = "default",
  className = "",
}: ProjectCoverProps) {
  const uid = useId().replace(/:/g, "");
  const Icon = PROJECT_COVER_ICONS[project.slug] ?? IconProjectDefault;
  const isFlagship = variant === "flagship";
  const patternId = `cover-grid-${project.slug}-${variant}-${uid}`;

  return (
    <div
      className={`relative isolate overflow-hidden bg-dark/80 border-b border-border-dark/40 ${className}`}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 18% 20%, rgba(34,184,207,0.18), transparent 55%),
            radial-gradient(ellipse 55% 50% at 88% 78%, rgba(34,184,207,0.08), transparent 50%),
            linear-gradient(160deg, #0f1728 0%, #0c1222 48%, #101a2c 100%)
          `,
        }}
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] text-accent"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width={isFlagship ? 28 : 22}
            height={isFlagship ? 28 : 22}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${isFlagship ? 28 : 22} 0 L 0 0 0 ${isFlagship ? 28 : 22}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="pointer-events-none absolute inset-3 sm:inset-4 md:inset-5 border border-accent/15 rounded-xl" />

      <div className="relative z-[1] flex h-full w-full items-center justify-center p-5 sm:p-6 md:p-8">
        <div
          className={`
            relative flex items-center justify-center text-accent
            transition-transform duration-500 ease-out
            group-hover:scale-[1.04]
            motion-reduce:transition-none motion-reduce:group-hover:scale-100
            ${
              isFlagship
                ? "w-[min(42%,11rem)] sm:w-[min(36%,13rem)] md:w-[min(28%,14rem)]"
                : "w-[42%] sm:w-[38%] max-w-[7.5rem] sm:max-w-[8.5rem]"
            }
          `}
        >
          <div
            className="absolute inset-[-18%] rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(34,184,207,0.22) 0%, transparent 68%)",
            }}
          />
          <Icon className="relative h-full w-full drop-shadow-[0_0_24px_rgba(34,184,207,0.2)]" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-80"
        style={{
          background:
            "linear-gradient(to top, rgba(12,18,34,0.55), transparent)",
        }}
      />
    </div>
  );
}

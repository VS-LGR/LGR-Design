"use client";

import { Carousel } from "@/components/shared/Carousel";
import { aboutContent } from "@/lib/about";

export function CreativePreferencesCarousel() {
  const { creativePreferences } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="creative-heading">
      <h2
        id="creative-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Criatividade que Sustenta o Processo
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        Minha base criativa vem de áreas que expandem minha visão estrutural e
        estética:
      </p>
      <Carousel gap="gap-3" fadeWidth="w-12" className="min-w-0">
        {creativePreferences.map((item, index) => (
          <span
            key={index}
            className="shrink-0 px-4 py-2.5 rounded-lg bg-surface border border-border-dark/60 text-sm font-medium text-primary hover:border-accent/40 hover:text-accent transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </Carousel>
      <p className="text-sm text-muted pt-1">
        Essas práticas fortalecem minha capacidade de construir experiências com
        profundidade, narrativa e intenção.
      </p>
    </section>
  );
}

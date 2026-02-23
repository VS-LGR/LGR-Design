"use client";

import { Carousel } from "@/components/shared/Carousel";
import { aboutContent } from "@/lib/about";

export function SpecialtiesCarousel() {
  const { specialties } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="specialties-heading">
      <h2
        id="specialties-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Minhas Especialidades
      </h2>
      <Carousel gap="gap-3" fadeWidth="w-12" className="min-w-0">
        {specialties.map((item, index) => (
          <span
            key={index}
            className="shrink-0 px-4 py-2.5 rounded-lg bg-surface border border-border-dark/60 text-sm font-medium text-primary hover:border-accent/40 hover:text-accent transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </Carousel>
    </section>
  );
}

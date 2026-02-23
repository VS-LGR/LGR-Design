"use client";

import { Carousel } from "@/components/shared/Carousel";
import { aboutContent } from "@/lib/about";

export function DifferentialBlock() {
  const { differential } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="differential-heading">
      <h2
        id="differential-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Diferencial Profissional
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        Meu diferencial está na integração entre arte e estrutura técnica. Eu
        não apenas crio algo bonito — eu penso em:
      </p>
      <Carousel gap="gap-3" fadeWidth="w-12" className="min-w-0">
        {differential.map((item, index) => (
          <span
            key={index}
            className="shrink-0 px-4 py-2.5 rounded-lg bg-surface border border-accent/30 text-sm font-medium text-accent"
          >
            {item}
          </span>
        ))}
      </Carousel>
      <p className="text-sm text-muted italic pt-1">
        Tenho mentalidade de construtor. Gosto de entender o problema
        profundamente antes de propor uma solução visual.
      </p>
    </section>
  );
}

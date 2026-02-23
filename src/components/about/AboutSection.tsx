import { IntroBlock } from "./IntroBlock";
import { FormationBlock } from "./FormationBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { SpecialtiesCarousel } from "./SpecialtiesCarousel";
import { DifferentialBlock } from "./DifferentialBlock";
import { CreativePreferencesCarousel } from "./CreativePreferencesCarousel";
import { ObjectiveBlock } from "./ObjectiveBlock";
import { aboutContent } from "@/lib/about";

/**
 * Layout contínuo: sem cards rígidos, uso de opacidade e fade.
 * - Faixas full-width com bg em opacity alternada (surface/10, surface/5).
 * - Separadores em gradiente (transparente → accent → transparente).
 * - Coluna direita em telas grandes com conteúdo em baixa opacidade para preencher o espaço e dar continuidade visual.
 */
export function AboutSection() {
  const { specialties } = aboutContent;

  return (
    <div
      role="tabpanel"
      id="panel-about"
      aria-labelledby="tab-about"
      className="w-full"
    >
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] xl:gap-12 xl:max-w-7xl xl:mx-auto xl:px-6">
        <div className="min-w-0 stagger-children">
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
            aria-labelledby="intro-heading"
          >
            <div className="max-w-3xl mx-auto">
              <IntroBlock />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
            aria-labelledby="formation-heading"
          >
            <div className="max-w-3xl mx-auto">
              <FormationBlock />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
            aria-labelledby="experience-heading"
          >
            <div className="max-w-3xl mx-auto">
              <ExperienceBlock />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
            aria-labelledby="specialties-heading"
          >
            <div className="max-w-3xl mx-auto">
              <SpecialtiesCarousel />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
            aria-labelledby="differential-heading"
          >
            <div className="max-w-3xl mx-auto">
              <DifferentialBlock />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
            aria-labelledby="creative-heading"
          >
            <div className="max-w-3xl mx-auto">
              <CreativePreferencesCarousel />
            </div>
          </section>
          <div className="section-divider w-full" aria-hidden />
          <section
            className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
            aria-labelledby="objective-heading"
          >
            <div className="max-w-3xl mx-auto">
              <ObjectiveBlock />
            </div>
          </section>
        </div>

        {/* Coluna direita: conteúdo em baixa opacidade para preencher e dar continuidade (evita “meia página vazia”) */}
        <aside
          className="hidden xl:block sticky top-32 h-fit opacity-50"
          aria-label="Resumo visual"
        >
          <div className="space-y-6 pl-2 border-l border-accent/20">
            <p className="text-xs font-medium text-accent uppercase tracking-wider">
              Especialidades
            </p>
            <ul className="space-y-2 text-sm text-muted">
              {specialties.slice(0, 8).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

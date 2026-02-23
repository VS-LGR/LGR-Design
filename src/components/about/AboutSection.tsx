import { IntroBlock } from "./IntroBlock";
import { FormationBlock } from "./FormationBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { SpecialtiesCarousel } from "./SpecialtiesCarousel";
import { DifferentialBlock } from "./DifferentialBlock";
import { CreativePreferencesCarousel } from "./CreativePreferencesCarousel";
import { ObjectiveBlock } from "./ObjectiveBlock";

export function AboutSection() {
  return (
    <div
      role="tabpanel"
      id="panel-about"
      aria-labelledby="tab-about"
      className="w-full min-w-0"
    >
      <div className="stagger-children">
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
    </div>
  );
}

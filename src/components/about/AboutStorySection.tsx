import { IntroBlock } from "./IntroBlock";
import { FormationBlock } from "./FormationBlock";
import { RecognitionsBlock } from "./RecognitionsBlock";
import { PositioningBlock } from "./PositioningBlock";

export function AboutStorySection() {
  return (
    <div className="w-full min-w-0">
      <div className="stagger-children">
        <section
          id="about-intro"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="intro-heading"
        >
          <div className="max-w-3xl mx-auto">
            <IntroBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-formacao"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="formation-heading"
        >
          <div className="max-w-3xl mx-auto">
            <FormationBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-reconhecimentos"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="recognitions-heading"
        >
          <div className="max-w-3xl mx-auto">
            <RecognitionsBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-posicionamento"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="positioning-heading"
        >
          <div className="max-w-3xl mx-auto">
            <PositioningBlock />
          </div>
        </section>
      </div>
    </div>
  );
}

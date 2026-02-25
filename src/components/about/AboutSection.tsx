import { IntroBlock } from "./IntroBlock";
import { FormationBlock } from "./FormationBlock";
import { RecognitionsBlock } from "./RecognitionsBlock";
import { CursorTemplateBlock } from "./CursorTemplateBlock";
import { PositioningBlock } from "./PositioningBlock";
import { HowIWorkBlock } from "./HowIWorkBlock";
import { ToolsBlock } from "./ToolsBlock";
import { CreativePreferencesCarousel } from "./CreativePreferencesCarousel";
import { ObjectiveBlock } from "./ObjectiveBlock";
import { ContactBlock } from "./ContactBlock";

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
          id="about-cursor-template"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="cursor-template-heading"
        >
          <div className="max-w-3xl mx-auto">
            <CursorTemplateBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-posicionamento"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="positioning-heading"
        >
          <div className="max-w-3xl mx-auto">
            <PositioningBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-como-trabalho"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="how-i-work-heading"
        >
          <div className="max-w-3xl mx-auto">
            <HowIWorkBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-ferramentas"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="tools-heading"
        >
          <div className="max-w-3xl mx-auto">
            <ToolsBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-preferencias"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="creative-heading"
        >
          <div className="max-w-3xl mx-auto">
            <CreativePreferencesCarousel />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-objetivo"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="objective-heading"
        >
          <div className="max-w-3xl mx-auto">
            <ObjectiveBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-contato"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-3xl mx-auto">
            <ContactBlock />
          </div>
        </section>
      </div>
    </div>
  );
}

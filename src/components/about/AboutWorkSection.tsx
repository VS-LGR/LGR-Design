import { CursorTemplateBlock } from "./CursorTemplateBlock";
import { HowIWorkBlock } from "./HowIWorkBlock";
import { DesignProcessSection } from "./DesignProcessSection";
import { ToolsBlock } from "./ToolsBlock";
import { CreativePreferencesCarousel } from "./CreativePreferencesCarousel";
import { ObjectiveBlock } from "./ObjectiveBlock";
import { ContactBlock } from "./ContactBlock";

export function AboutWorkSection() {
  return (
    <div className="w-full min-w-0">
      <div className="stagger-children">
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
          id="about-como-trabalho"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/10"
          aria-labelledby="how-i-work-heading"
        >
          <div className="max-w-3xl mx-auto">
            <HowIWorkBlock />
          </div>
        </section>
        <div className="section-divider w-full" aria-hidden />
        <section
          id="about-processo"
          className="w-full py-10 md:py-14 px-4 md:px-8 bg-surface/5"
          aria-labelledby="design-process-heading"
        >
          <div className="max-w-3xl mx-auto">
            <DesignProcessSection />
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

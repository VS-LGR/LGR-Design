import type { ReactNode } from "react";
import { HowIWorkBlock } from "./HowIWorkBlock";
import { DesignProcessSection } from "./DesignProcessSection";
import { ToolsBlock } from "./ToolsBlock";
import { CursorTemplateBlock } from "./CursorTemplateBlock";
import { CreativePreferencesCarousel } from "./CreativePreferencesCarousel";
import { ObjectiveBlock } from "./ObjectiveBlock";
import { ContactBlock } from "./ContactBlock";

function WorkSection({
  id,
  labelledBy,
  children,
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="w-full py-10 md:py-12 px-4 md:px-8"
      aria-labelledby={labelledBy}
    >
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
}

export function AboutWorkSection() {
  return (
    <div className="w-full min-w-0">
      <div className="stagger-children">
        <WorkSection id="about-como-trabalho" labelledBy="how-i-work-heading">
          <HowIWorkBlock />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection id="about-processo" labelledBy="design-process-heading">
          <DesignProcessSection />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection id="about-ferramentas" labelledBy="tools-heading">
          <ToolsBlock />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection
          id="about-cursor-template"
          labelledBy="cursor-template-heading"
        >
          <CursorTemplateBlock />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection id="about-preferencias" labelledBy="creative-heading">
          <CreativePreferencesCarousel />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection id="about-objetivo" labelledBy="objective-heading">
          <ObjectiveBlock />
        </WorkSection>
        <div className="section-divider w-full" aria-hidden />
        <WorkSection id="about-contato" labelledBy="contact-heading">
          <ContactBlock />
        </WorkSection>
      </div>
    </div>
  );
}

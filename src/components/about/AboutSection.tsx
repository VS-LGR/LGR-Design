import { Card } from "@/components/shared/Card";
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
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <div className="max-w-3xl space-y-8">
        <Card as="section" className="p-6 md:p-8">
          <IntroBlock />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <FormationBlock />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <ExperienceBlock />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <SpecialtiesCarousel />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <DifferentialBlock />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <CreativePreferencesCarousel />
        </Card>

        <Card as="section" className="p-6 md:p-8">
          <ObjectiveBlock />
        </Card>
      </div>
    </div>
  );
}

import { ResumeBlock } from "./ResumeBlock";
import { EducationBlock } from "./EducationBlock";
import { PersonalHistoryBlock } from "./PersonalHistoryBlock";
import { Card } from "@/components/shared/Card";

export function AboutSection() {
  return (
    <div
      role="tabpanel"
      id="panel-about"
      aria-labelledby="tab-about"
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <div className="max-w-2xl space-y-8">
        <Card as="section" className="p-6 md:p-8">
          <ResumeBlock />
        </Card>
        <Card as="section" className="p-6 md:p-8">
          <EducationBlock />
        </Card>
        <Card as="section" className="p-6 md:p-8">
          <PersonalHistoryBlock />
        </Card>
      </div>
    </div>
  );
}

import { aboutContent } from "@/lib/about";

export function ObjectiveBlock() {
  const { professionalObjective } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="objective-heading">
      <h2
        id="objective-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Objetivo Profissional
      </h2>
      <p className="text-muted leading-relaxed">{professionalObjective}</p>
    </section>
  );
}

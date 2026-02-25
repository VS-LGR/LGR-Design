import { aboutContent } from "@/lib/about";

export function HowIWorkBlock() {
  const { howIWork } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="how-i-work-heading">
      <h2
        id="how-i-work-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Como Eu Trabalho
      </h2>
      <p className="text-muted leading-relaxed">{howIWork.intro}</p>
      <ul className="space-y-2 list-none">
        {howIWork.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-muted text-sm sm:text-base"
          >
            <span className="text-accent shrink-0 mt-0.5">✔</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {howIWork.closing && (
        <p className="text-muted leading-relaxed pt-2 italic">
          {howIWork.closing}
        </p>
      )}
    </section>
  );
}

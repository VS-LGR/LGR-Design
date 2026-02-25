import { aboutContent } from "@/lib/about";

export function CursorTemplateBlock() {
  const { cursorTemplate } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="cursor-template-heading">
      <h2
        id="cursor-template-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        {cursorTemplate.title}
      </h2>
      <p className="text-muted leading-relaxed">{cursorTemplate.intro}</p>
      <ul className="space-y-2 list-none">
        {cursorTemplate.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-muted text-sm sm:text-base"
          >
            <span className="text-accent shrink-0 mt-0.5">✔</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="text-muted leading-relaxed pt-2">
        {cursorTemplate.closing}
      </p>
    </section>
  );
}

import { aboutContent } from "@/lib/about";

export function EducationBlock() {
  const { education } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Formação
      </h2>
      <ul className="space-y-3 list-none">
        {education.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-accent/60 text-muted"
          >
            <span className="font-medium text-primary">{item.title}</span>
            <span className="text-muted"> — {item.institution}</span>
            {item.period && (
              <span className="text-sm block mt-0.5 text-muted/90">
                {item.period}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

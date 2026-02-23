import { aboutContent } from "@/lib/about";

export function EducationBlock() {
  const { education } = aboutContent;

  return (
    <section className="space-y-3" aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-lg font-semibold text-ash-brown">
        Formação
      </h2>
      <ul className="space-y-2 list-none">
        {education.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-cool-steel text-dim-grey"
          >
            <span className="font-medium text-ash-brown">{item.title}</span>
            <span className="text-cool-steel-2"> — {item.institution}</span>
            {item.period && (
              <span className="text-sm block mt-0.5">{item.period}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

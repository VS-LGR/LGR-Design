import { aboutContent } from "@/lib/about";

export function FormationBlock() {
  const { formation } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="formation-heading">
      <h2
        id="formation-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Formação & Especialização
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        Minha formação é direcionada à construção de experiências digitais
        estratégicas, unindo usabilidade, negócio e execução técnica.
      </p>
      <ul className="space-y-4 list-none">
        {formation.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-accent/60 text-muted"
          >
            <div className="flex items-start gap-2">
              {item.icon && (
                <span className="text-lg shrink-0" aria-hidden>
                  {item.icon}
                </span>
              )}
              <div>
                <span className="font-medium text-primary">{item.title}</span>
                {item.institution && (
                  <span className="text-muted"> — {item.institution}</span>
                )}
                {item.description && (
                  <p className="text-sm mt-1 text-muted/95 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

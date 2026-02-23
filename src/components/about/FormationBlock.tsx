import { aboutContent } from "@/lib/about";

export function FormationBlock() {
  const { formation } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="formation-heading">
      <h2
        id="formation-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Formação e Capacitação
      </h2>
      <ul className="space-y-2.5 list-none">
        {formation.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-l-2 border-accent/60 text-muted"
          >
            <span className="font-medium text-primary">{item.title}</span>
            {item.institution && (
              <span className="text-muted"> — {item.institution}</span>
            )}
            {item.period && (
              <span className="text-sm block mt-0.5 text-muted/90">
                {item.period}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted pt-2">
        Tenho facilidade em aprendizado técnico e me destaco em lógica,
        organização de sistemas e resolução de problemas complexos.
      </p>
    </section>
  );
}

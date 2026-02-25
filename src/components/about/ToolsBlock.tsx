import { aboutContent } from "@/lib/about";

export function ToolsBlock() {
  const { tools } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="tools-heading">
      <h2
        id="tools-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Ferramentas Estratégicas
      </h2>
      {tools.intro && (
        <p className="text-muted leading-relaxed">{tools.intro}</p>
      )}
      <ul className="space-y-2 list-none pl-0">
        {tools.items.map((item, i) => (
          <li
            key={i}
            className="pl-4 border-l-2 border-accent/40 text-muted text-sm sm:text-base leading-relaxed"
          >
            {item}
          </li>
        ))}
      </ul>
      {tools.closing && (
        <p className="text-muted leading-relaxed pt-2 font-medium">
          {tools.closing}
        </p>
      )}
    </section>
  );
}

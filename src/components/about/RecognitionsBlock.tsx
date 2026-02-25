import { aboutContent } from "@/lib/about";

export function RecognitionsBlock() {
  const { recognitions } = aboutContent;

  return (
    <section className="space-y-6" aria-labelledby="recognitions-heading">
      <h2
        id="recognitions-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Reconhecimentos & Destaques
      </h2>
      <ul className="space-y-6 list-none">
        {recognitions.map((item, index) => (
          <li key={index} className="pl-4 border-l-2 border-accent/40">
            <div className="flex items-start gap-2">
              {item.icon && (
                <span className="text-xl shrink-0" aria-hidden>
                  {item.icon}
                </span>
              )}
              <div>
                <h3 className="font-medium text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
                {item.items && item.items.length > 0 && (
                  <ul className="mt-3 space-y-1.5 list-none">
                    {item.items.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

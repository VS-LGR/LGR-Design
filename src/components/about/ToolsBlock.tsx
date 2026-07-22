"use client";

import { useLocale } from "@/contexts/LocaleContext";

function parseTool(item: string): { name: string; detail?: string } {
  const parts = item.split(/\s+[—–-]\s+/);
  if (parts.length >= 2) {
    return { name: parts[0].trim(), detail: parts.slice(1).join(" — ").trim() };
  }
  return { name: item };
}

export function ToolsBlock() {
  const { about, t } = useLocale();
  const { tools } = about;

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2
          id="tools-heading"
          className="text-lg md:text-xl font-semibold text-primary accent-underline pb-1"
        >
          {t.sections.tools}
        </h2>
        {tools.intro && (
          <p className="text-muted leading-relaxed">{tools.intro}</p>
        )}
      </header>
      <ul className="space-y-3 list-none">
        {tools.items.map((item, i) => {
          const { name, detail } = parseTool(item);
          return (
            <li
              key={i}
              className="pl-4 border-l-2 border-accent/45 space-y-0.5"
            >
              <p className="text-sm font-medium text-primary">{name}</p>
              {detail ? (
                <p className="text-sm text-muted leading-relaxed">{detail}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
      {tools.closing && (
        <p className="text-sm text-muted leading-relaxed pt-1 italic">
          {tools.closing}
        </p>
      )}
    </div>
  );
}

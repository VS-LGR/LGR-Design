import { aboutContent } from "@/lib/about";

export function PersonalHistoryBlock() {
  const { personalHistory } = aboutContent;
  const paragraphs = personalHistory.split(/\n\n+/).filter(Boolean);

  return (
    <section className="space-y-4" aria-labelledby="history-heading">
      <h2
        id="history-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        História pessoal
      </h2>
      <div className="space-y-3 text-muted leading-relaxed">
        {paragraphs.length > 0 ? (
          paragraphs.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{personalHistory}</p>
        )}
      </div>
    </section>
  );
}

import { aboutContent } from "@/lib/about";

export function PersonalHistoryBlock() {
  const { personalHistory } = aboutContent;
  const paragraphs = personalHistory.split(/\n\n+/).filter(Boolean);

  return (
    <section className="space-y-3" aria-labelledby="history-heading">
      <h2 id="history-heading" className="text-lg font-semibold text-ash-brown">
        História pessoal
      </h2>
      <div className="space-y-3 text-dim-grey leading-relaxed">
        {paragraphs.length > 0 ? (
          paragraphs.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{personalHistory}</p>
        )}
      </div>
    </section>
  );
}

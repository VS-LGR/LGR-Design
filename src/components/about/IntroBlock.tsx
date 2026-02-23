import { aboutContent } from "@/lib/about";

export function IntroBlock() {
  const { intro, resumePdfUrl } = aboutContent;

  return (
    <section className="space-y-4" aria-labelledby="intro-heading">
      <h2
        id="intro-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Sobre Mim
      </h2>
      <div className="space-y-4 text-muted leading-relaxed">
        {intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {resumePdfUrl && (
        <a
          href={resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring mt-2"
        >
          Baixar currículo (PDF)
        </a>
      )}
    </section>
  );
}

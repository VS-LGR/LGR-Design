import { aboutContent } from "@/lib/about";

export function ResumeBlock() {
  const { resume } = aboutContent;
  const hasPdf = resume.pdfUrl && !resume.pdfUrl.startsWith("[");

  return (
    <section className="space-y-4" aria-labelledby="resume-heading">
      <h2
        id="resume-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Currículo
      </h2>
      <p className="text-muted leading-relaxed">{resume.summary}</p>
      {hasPdf && (
        <a
          href={resume.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
        >
          Baixar currículo (PDF)
        </a>
      )}
    </section>
  );
}

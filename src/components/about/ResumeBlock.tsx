import { aboutContent } from "@/lib/about";

export function ResumeBlock() {
  const { resume } = aboutContent;
  const hasPdf = resume.pdfUrl && !resume.pdfUrl.startsWith("[");

  return (
    <section className="space-y-3" aria-labelledby="resume-heading">
      <h2 id="resume-heading" className="text-lg font-semibold text-ash-brown">
        Currículo
      </h2>
      <p className="text-dim-grey leading-relaxed">{resume.summary}</p>
      {hasPdf && (
        <a
          href={resume.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-md font-medium bg-ash-brown text-pale-sky hover:bg-ash-brown/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cool-steel focus-visible:ring-offset-2"
        >
          Baixar currículo (PDF)
        </a>
      )}
    </section>
  );
}

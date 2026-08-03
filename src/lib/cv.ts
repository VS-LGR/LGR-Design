/**
 * CV em PDF sob `/public/cv/`.
 * Quando o arquivo existir, defina `CV_AVAILABLE = true` (ou `about.resumePdfUrl`).
 */
export const CV_FILENAME = "lucas-gabriel-rodrigues.pdf";
export const CV_PUBLIC_PATH = `/cv/${CV_FILENAME}`;

/** Mude para true após adicionar o PDF em public/cv/ */
export const CV_AVAILABLE = true;

export function resolveResumeUrl(aboutUrl?: string): string | undefined {
  if (aboutUrl) return aboutUrl;
  if (CV_AVAILABLE) return CV_PUBLIC_PATH;
  return undefined;
}

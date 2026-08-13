/**
 * CVs em PDF sob `/public/cv/`.
 * O idioma vem de `about.resumePdfUrl` (PT/EN no LocaleContext).
 */
export const CV_PUBLIC_PATH_PT = "/cv/lucas-gabriel-rodrigues.pdf";
export const CV_PUBLIC_PATH_EN = "/cv/lucas-gabriel-rodrigues-en.pdf";

export const CV_AVAILABLE = true;

export function resolveResumeUrl(aboutUrl?: string): string | undefined {
  if (aboutUrl) return aboutUrl;
  if (CV_AVAILABLE) return CV_PUBLIC_PATH_PT;
  return undefined;
}

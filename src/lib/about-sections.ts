export const STORY_SECTION_IDS = [
  "about-intro",
  "about-formacao",
  "about-reconhecimentos",
  "about-posicionamento",
] as const;

export const WORK_SECTION_IDS = [
  "about-cursor-template",
  "about-como-trabalho",
  "about-processo",
  "about-ferramentas",
  "about-preferencias",
  "about-objetivo",
  "about-contato",
] as const;

export type StorySectionId = (typeof STORY_SECTION_IDS)[number];
export type WorkSectionId = (typeof WORK_SECTION_IDS)[number];

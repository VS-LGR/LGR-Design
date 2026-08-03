export const STORY_SECTION_IDS = [
  "about-intro",
  "about-formacao",
  "about-reconhecimentos",
  "about-posicionamento",
] as const;

export const WORK_SECTION_IDS = [
  "about-como-trabalho",
  "about-processo",
  "about-ferramentas",
  "about-cursor-template",
  "about-objetivo",
  "about-contato",
  "about-preferencias",
] as const;

export type StorySectionId = (typeof STORY_SECTION_IDS)[number];
export type WorkSectionId = (typeof WORK_SECTION_IDS)[number];

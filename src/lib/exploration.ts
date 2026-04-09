export type ExplorationItemStatus = "soon" | "live";

export interface ExplorationItem {
  id: string;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  href?: string;
  status: ExplorationItemStatus;
}

/** Lista editável: adicionar mini-sites interativos quando estiverem prontos. */
export const explorationItems: ExplorationItem[] = [];

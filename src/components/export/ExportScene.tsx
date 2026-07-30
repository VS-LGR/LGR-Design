"use client";

import { useId } from "react";
import type { DeliveryType } from "@/types";
import {
  Frame,
  getPackCaptions,
  resolveScenePack,
  type ExportSceneId,
} from "@/components/export/scenes";

export type { ExportSceneId };

type ExportSceneProps = {
  id: ExportSceneId;
  projectSlug?: string;
  deliveryType?: DeliveryType;
  stepIndex?: number;
  className?: string;
  title?: string;
  locale?: "pt" | "en";
};

export function ExportScene({
  id,
  projectSlug,
  stepIndex = 0,
  className = "",
  title,
  locale = "pt",
}: ExportSceneProps) {
  const uid = useId().replace(/:/g, "");
  const ids = {
    bg: `es-bg-${uid}`,
    glow: `es-glow-${uid}`,
    bar: `es-bar-${uid}`,
    soft: `es-soft-${uid}`,
  };

  const pack = resolveScenePack(projectSlug);
  const body = pack.render(id, { ids, stepIndex, title, locale });

  return (
    <Frame className={className} ids={ids}>
      {body}
    </Frame>
  );
}

export const PRODUCT_SCENE_IDS: ExportSceneId[] = [
  "product-hub",
  "product-flow",
  "product-trust",
];

export { getPackCaptions };

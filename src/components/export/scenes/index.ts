import type { ScenePack } from "./shared";
import { dversoPack } from "./dverso";
import { grimorioPack } from "./grimorio";
import { ofagPack } from "./ofag";
import { pharmatechPack } from "./pharmatech";
import { psiBiaPack } from "./psiBia";
import { qualiprocPack } from "./qualiproc";

const PACKS: Record<string, ScenePack> = {
  "qualiproc-ctli": qualiprocPack,
  "clinica-dverso": dversoPack,
  "lp-farma-com": pharmatechPack,
  "ofag-revamp": ofagPack,
  "psi-bia-rossi": psiBiaPack,
  "grimorio-aventureiro": grimorioPack,
};

export function resolveScenePack(slug?: string): ScenePack {
  if (slug && PACKS[slug]) return PACKS[slug];
  // fallback: QualiProc density for unknown sistemas; Dverso-like LPs use pharmatech structure lightly
  return qualiprocPack;
}

export function getPackCaptions(
  slug: string | undefined,
  locale: "pt" | "en"
): { hub: string; flow: string; trust: string } {
  const pack = resolveScenePack(slug);
  return {
    hub: pack.captions.hub[locale],
    flow: pack.captions.flow[locale],
    trust: pack.captions.trust[locale],
  };
}

export type { ExportSceneId, ScenePack } from "./shared";
export { Frame } from "./shared";

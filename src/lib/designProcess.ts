import type { DesignProcessContent } from "@/types";
import { designProcessPt } from "@/lib/designProcess.pt";
import { designProcessEn } from "@/lib/designProcess.en";

export function getDesignProcess(locale: "pt" | "en"): DesignProcessContent {
  return locale === "en" ? designProcessEn : designProcessPt;
}

export { designProcessPt, designProcessEn };

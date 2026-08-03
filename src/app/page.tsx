import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";
import { defaultDescription, defaultTitle, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomeClient />;
}

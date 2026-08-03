import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://lucasgabriel.vercel.app";

export const siteName = "Lucas Gabriel Rodrigues";

export const defaultTitle =
  "Lucas Gabriel Rodrigues | UX, Product & Desenvolvimento";

export const defaultDescription =
  "Portfólio de Lucas Gabriel Rodrigues — UX/UI, product thinking e desenvolvimento digital. Cases de sistemas, produtos e experiências web.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
};

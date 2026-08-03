import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteMeta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/export/", "/exportar"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";

import { getAllProjects } from "@/lib/projects";
import { localeAlternates } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects", ...getAllProjects().map(({ slug }) => `/projects/${slug}`)];
  return paths.flatMap((path) =>
    (["fr", "en"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(Object.entries(localeAlternates(path)).map(([key, value]) => [key, `${SITE_URL}${value}`])),
      },
    })),
  );
}

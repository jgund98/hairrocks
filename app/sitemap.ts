import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.domain}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/services/", 0.9),
    ...SERVICE_PAGES.map((s) => page(`/services/${s.slug}/`, 0.8)),
    page("/book/", 0.9),
    page("/about/", 0.7),
    page("/reviews/", 0.7),
    page("/contact/", 0.7),
  ];
}

/**
 * Site-wide configuration — the single source of truth for SEO.
 *
 * Consumed by the metadata generator, `robots.ts`, `sitemap.ts`, and the
 * JSON-LD structured-data helper. Update the placeholder values per project.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "World's Fastest UAE Residency Program | A&A Associate",
  description:
    "Get a two-year UAE investor residency and free-zone company in five working days with A&A Associate.",
  /**
   * Public origin, no trailing slash. Drives canonical URLs, OG tags, the
   * sitemap, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production.
   */
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * Default Open Graph / Twitter share image. The live image is generated at
   * `src/app/opengraph-image.tsx`; this path is the JSON-LD fallback.
   */
  ogImage: "/opengraph-image",
  twitterHandle: "@aaassociate",
  author: "A&A Associate",
  /** Browser theme-color (address bar / PWA). */
  themeColor: "#0a0a0a",
} as const;

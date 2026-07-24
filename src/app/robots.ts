import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://neustroev-ai.ru/sitemap.xml",
    host: "https://neustroev-ai.ru",
  }
}

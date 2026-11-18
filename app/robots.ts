import { MetadataRoute } from "next";

// TODO: Replace the placeholder domain with the actual production domain
// before launch (client to provide).
const DOMAIN = "https://andy-portfolio.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}

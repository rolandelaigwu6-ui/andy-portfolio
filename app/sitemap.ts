import { MetadataRoute } from "next";

// TODO: Replace the placeholder domain with the actual production domain
// before launch (client to provide). .example is a reserved test TLD (RFC 2606).
const DOMAIN = "https://andy-portfolio.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/experience", "/portfolio", "/insights", "/contact"];
  return pages.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

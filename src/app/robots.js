import { SITE_URL } from "@/libs/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/login", "/blog-upload", "/service-upload", "/api"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

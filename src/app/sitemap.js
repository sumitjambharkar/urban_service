import connectDatabase from "@/libs/database";
import Blog from "@/model/Blog";
import Service from "@/model/Service";
import { SITE_URL } from "@/libs/seo";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/chandelier-cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/home-cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/water-tank-cleaning", priority: 0.7, changeFrequency: "monthly" },
  { path: "/window-cleaning", priority: 0.7, changeFrequency: "monthly" },
  { path: "/home-interior", priority: 0.7, changeFrequency: "monthly" },
  { path: "/house-painting", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gym-trainers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/house-keeping-contract", priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap() {
  try {
    await connectDatabase();

    const [blogs, services] = await Promise.all([
      Blog.find().select("slug updatedAt").lean(),
      Service.find().select("slug updatedAt").lean(),
    ]);

    const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }));

    const blogEntries = blogs
      .filter((blog) => blog.slug)
      .map((blog) => ({
        url: `${SITE_URL}/blog/${blog.slug}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      }));

    const serviceEntries = services
      .filter((service) => service.slug)
      .map((service) => ({
        url: `${SITE_URL}/service/${service.slug}`,
        lastModified: service.updatedAt ? new Date(service.updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      }));

    return [...staticEntries, ...blogEntries, ...serviceEntries];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [{ url: SITE_URL, lastModified: new Date() }];
  }
}

import connectDatabase from "@/libs/database";
import Blog from "@/model/Blog";
import Service from "@/model/Service";
import ServiceTile from "@/model/ServiceTile";
import ServicePackage from "@/model/ServicePackage";
import { SITE_URL } from "@/libs/seo";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default async function sitemap() {
  try {
    await connectDatabase();

    const [blogs, services, tiles, packages] = await Promise.all([
      Blog.find().select("slug updatedAt").lean(),
      Service.find().select("slug updatedAt").lean(),
      ServiceTile.find({ status: { $ne: "inactive" } }).select("href updatedAt").lean(),
      ServicePackage.find({ status: { $ne: "inactive" } }).select("serviceTileId slug updatedAt").lean(),
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

    const tilesById = new Map(tiles.map((tile) => [tile._id.toString(), tile]));

    const categoryEntries = tiles
      .filter((tile) => tile.href)
      .map((tile) => ({
        url: `${SITE_URL}/${tile.href}`,
        lastModified: tile.updatedAt ? new Date(tile.updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      }));

    const packageEntries = packages
      .filter((pkg) => pkg.slug && tilesById.has(pkg.serviceTileId.toString()))
      .map((pkg) => ({
        url: `${SITE_URL}/${tilesById.get(pkg.serviceTileId.toString()).href}/${pkg.slug}`,
        lastModified: pkg.updatedAt ? new Date(pkg.updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));

    return [...staticEntries, ...blogEntries, ...serviceEntries, ...categoryEntries, ...packageEntries];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [{ url: SITE_URL, lastModified: new Date() }];
  }
}

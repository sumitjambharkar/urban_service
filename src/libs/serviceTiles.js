import connectDatabase from "@/libs/database";
import ServiceTile from "@/model/ServiceTile";

export async function getServiceTiles({ limit } = {}) {
  await connectDatabase();

  let query = ServiceTile.find({ status: { $ne: "inactive" } }).sort({ order: 1, createdAt: 1 });
  if (limit) {
    query = query.limit(limit);
  }

  const tiles = await query.lean();

  return tiles.map((tile) => ({
    _id: tile._id.toString(),
    title: tile.title,
    description: tile.description,
    icon: tile.icon,
    href: tile.href,
  }));
}

export async function getServiceTileByHref(href) {
  await connectDatabase();

  const tile = await ServiceTile.findOne({ href, status: { $ne: "inactive" } }).lean();
  if (!tile) return null;

  return {
    _id: tile._id.toString(),
    title: tile.title,
    description: tile.description,
    icon: tile.icon,
    href: tile.href,
    seo: tile.seo || {},
  };
}

import connectDatabase from "@/libs/database";
import ServiceTile from "@/model/ServiceTile";

export async function getServiceTiles({ limit } = {}) {
  await connectDatabase();

  let query = ServiceTile.find().sort({ order: 1, createdAt: 1 });
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

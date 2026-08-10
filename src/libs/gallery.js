import connectDatabase from "@/libs/database";
import Gallery from "@/model/Gallery";

export async function getGalleryImages({ limit } = {}) {
  await connectDatabase();

  let query = Gallery.find().sort({ order: 1, createdAt: 1 });
  if (limit) {
    query = query.limit(limit);
  }

  const images = await query.lean();

  return images.map((image) => ({
    _id: image._id.toString(),
    image: image.image,
    alt: image.alt,
  }));
}

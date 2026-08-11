import connectDatabase from "@/libs/database";
import ServicePackage from "@/model/ServicePackage";

const toPlain = (pkg) => ({
  _id: pkg._id.toString(),
  serviceTileId: pkg.serviceTileId.toString(),
  title: pkg.title,
  slug: pkg.slug,
  image: pkg.image,
  description: pkg.description,
  price: pkg.price,
  priceOptions: pkg.priceOptions || [],
  phone: pkg.phone,
  whatsapp: pkg.whatsapp,
  supportNumber: pkg.supportNumber,
  freeHomeVisit: pkg.freeHomeVisit,
  detailsSummary: pkg.detailsSummary,
  detailsBody: pkg.detailsBody,
  timing: pkg.timing,
});

export async function getServicePackages(serviceTileId) {
  await connectDatabase();

  const packages = await ServicePackage.find({
    serviceTileId,
    status: { $ne: "inactive" },
  })
    .sort({ order: 1, createdAt: 1 })
    .lean();

  return packages.map(toPlain);
}

export async function getServicePackageBySlug(serviceTileId, slug) {
  await connectDatabase();

  const pkg = await ServicePackage.findOne({
    serviceTileId,
    slug,
    status: { $ne: "inactive" },
  }).lean();

  if (!pkg) return null;
  return toPlain(pkg);
}

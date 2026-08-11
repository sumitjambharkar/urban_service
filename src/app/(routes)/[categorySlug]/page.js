import Link from "next/link"
import { notFound } from "next/navigation"
import { getServiceTileByHref, getServiceTiles } from "@/libs/serviceTiles"
import { getServicePackages } from "@/libs/servicePackages"
import {
  sectionTitleClass,
  blogSectionClass,
  blogRowClass,
  postImageCardClass,
  postImageHeaderClass,
  postImageClass,
  postBodyClass,
  postBodyLinkClass,
  galleryEmptyClass,
} from "@/app/uiClasses"

export const revalidate = 60

export async function generateStaticParams() {
  const tiles = await getServiceTiles()
  return tiles.map((tile) => ({ categorySlug: tile.href }))
}

export async function generateMetadata({ params }) {
  const tile = await getServiceTileByHref(params.categorySlug)
  if (!tile) return {}

  return {
    title: tile.seo?.metaTitle || `${tile.title} | Chandelite`,
    description: tile.seo?.metaDescription || tile.description,
  }
}

const CategoryPage = async ({ params }) => {
  const tile = await getServiceTileByHref(params.categorySlug)
  if (!tile) notFound()

  const packages = await getServicePackages(tile._id)

  return (
    <div className={blogSectionClass}>
      <h1 className={sectionTitleClass}>{tile.title}</h1>
      <p className="mx-auto mb-9 max-w-[640px] text-center text-ink-soft">{tile.description}</p>

      {packages.length === 0 ? (
        <p className={galleryEmptyClass}>Packages coming soon.</p>
      ) : (
        <div className={blogRowClass}>
          {packages.map((pkg) => (
            <Link key={pkg._id} href={`/${tile.href}/${pkg.slug}`} className={postImageCardClass}>
              <div className={postImageHeaderClass}>
                <img src={pkg.image} alt={pkg.title} className={postImageClass} />
              </div>
              <div className={postBodyClass}>
                <p className={postBodyLinkClass}>{pkg.title}</p>
                {pkg.price && <p className="mt-1 text-sm font-bold text-navy-deep">{pkg.price}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage

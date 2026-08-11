import Link from "next/link"
import { notFound } from "next/navigation"
import { getServiceTileByHref, getServiceTiles } from "@/libs/serviceTiles"
import { getServicePackageBySlug, getServicePackages } from "@/libs/servicePackages"
import {
  productDetailClass,
  productImagesClass,
  mainImageClass,
  productInfoClass,
  productInfoTitleClass,
  skuClass,
  priceClass,
  actionsWrapperClass,
  actionsRowClass,
  addToCartClass,
  additionalInfoClass,
  breadcrumbClass,
  breadcrumbLinkClass,
  breadcrumbCurrentClass,
} from "@/app/uiClasses"

export const revalidate = 60

export async function generateStaticParams() {
  const tiles = await getServiceTiles()
  const params = []

  for (const tile of tiles) {
    const packages = await getServicePackages(tile._id)
    packages.forEach((pkg) => params.push({ categorySlug: tile.href, packageSlug: pkg.slug }))
  }

  return params
}

export async function generateMetadata({ params }) {
  const tile = await getServiceTileByHref(params.categorySlug)
  if (!tile) return {}

  const pkg = await getServicePackageBySlug(tile._id, params.packageSlug)
  if (!pkg) return {}

  return {
    title: `${pkg.title} | ${tile.title} | Chandelite`,
    description: pkg.description || tile.description,
  }
}

const PackagePage = async ({ params }) => {
  const tile = await getServiceTileByHref(params.categorySlug)
  if (!tile) notFound()

  const pkg = await getServicePackageBySlug(tile._id, params.packageSlug)
  if (!pkg) notFound()

  return (
    <div>
      <nav className={`mx-auto max-w-container px-7 pt-6 max-md:px-4 ${breadcrumbClass}`}>
        <Link href="/" className={breadcrumbLinkClass}>Home</Link>
        {" / "}
        <Link href={`/${tile.href}`} className={breadcrumbLinkClass}>{tile.title}</Link>
        {" / "}
        <span className={breadcrumbCurrentClass}>{pkg.title}</span>
      </nav>

      <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img src={pkg.image} alt={pkg.title} className={mainImageClass} />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>{pkg.title}</h1>
          {pkg.description && <p className={skuClass}>{pkg.description}</p>}
          {pkg.price && <p className={priceClass}>{pkg.price}</p>}
          {pkg.priceOptions.map((line, i) => (
            <p key={i}>{line}</p>
          ))}

          {(pkg.phone || pkg.whatsapp) && (
            <div className={actionsWrapperClass}>
              <div className={actionsRowClass}>
                {pkg.phone && (
                  <button className={addToCartClass}>
                    <a href={`tel:${pkg.phone}`}>Call Now</a>
                  </button>
                )}
                {pkg.whatsapp && (
                  <button className={addToCartClass}>
                    <a href={`https://api.whatsapp.com/send?phone=${pkg.whatsapp}`}>Contact Us</a>
                  </button>
                )}
              </div>
            </div>
          )}

          <div className={additionalInfoClass}>
            {pkg.freeHomeVisit && (
              <p>
                <strong>Free Home Visit</strong>
              </p>
            )}
            {pkg.supportNumber && (
              <p>
                <strong>Customer Support Number:</strong> {pkg.supportNumber}
              </p>
            )}
            {pkg.detailsBody && (
              <p>
                <details>
                  <summary>
                    <strong>{pkg.detailsSummary}</strong>
                  </summary>
                  <p className="whitespace-pre-line">{pkg.detailsBody}</p>
                </details>
              </p>
            )}
            {pkg.timing && (
              <p>
                <strong>Timing:</strong> {pkg.timing}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagePage

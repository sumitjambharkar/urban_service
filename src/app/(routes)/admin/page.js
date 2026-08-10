import Link from "next/link"
import {
  adminWrapClass,
  adminHeaderClass,
  adminHeaderTitleClass,
  adminHeaderTextClass,
  adminDashboardLinksClass,
  adminDashboardCardClass,
  adminDashboardCardTitleClass,
  adminDashboardCardTextClass,
} from "@/app/uiClasses"

const AdminHomePage = () => {
  return (
    <div className={adminWrapClass}>
      <div className={adminHeaderClass}>
        <h1 className={adminHeaderTitleClass}>Admin Dashboard</h1>
        <p className={adminHeaderTextClass}>Manage your site content from here.</p>
      </div>
      <div className={adminDashboardLinksClass}>
        <Link href="/admin/gallery" className={adminDashboardCardClass}>
          <h3 className={adminDashboardCardTitleClass}>Gallery</h3>
          <p className={adminDashboardCardTextClass}>Upload, reorder, and remove gallery photos.</p>
        </Link>
        <Link href="/admin/service-tiles" className={adminDashboardCardClass}>
          <h3 className={adminDashboardCardTitleClass}>Service Tiles</h3>
          <p className={adminDashboardCardTextClass}>Add, edit, reorder, or remove the homepage service cards.</p>
        </Link>
        <Link href="/service-upload" className={adminDashboardCardClass}>
          <h3 className={adminDashboardCardTitleClass}>Service Posts</h3>
          <p className={adminDashboardCardTextClass}>Manage long-form service content.</p>
        </Link>
        <Link href="/blog-upload" className={adminDashboardCardClass}>
          <h3 className={adminDashboardCardTitleClass}>Blog</h3>
          <p className={adminDashboardCardTextClass}>Manage blog posts.</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminHomePage

import { getGalleryImages } from "@/libs/gallery"
import {
  sectionTitleClass,
  galleryGridClass,
  galleryImageCardClass,
  galleryImageClass,
  galleryEmptyClass,
} from "../uiClasses"

const Gallery = async () => {
  const images = await getGalleryImages({ limit: 8 })

  return (
    <div>
      <h4 className={sectionTitleClass}>Our Gallery</h4>
      <section className={galleryGridClass}>
        {images.length === 0 && (
          <p className={galleryEmptyClass}>Gallery photos coming soon.</p>
        )}
        {images.map((img) => (
          <div className={galleryImageCardClass} key={img._id}>
            <img src={img.image} alt={img.alt || "Chandelite work"} loading="lazy" className={galleryImageClass} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Gallery

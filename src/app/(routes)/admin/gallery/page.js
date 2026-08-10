"use client"
import { useEffect, useState } from "react"
import api from "@/libs/api"
import Swal from "sweetalert2"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import {
  adminWrapClass,
  adminHeaderClass,
  adminHeaderTitleClass,
  adminHeaderTextClass,
  adminUploadCardClass,
  adminUploadDropClass,
  fileInputClass,
  inputFieldClass,
  submitButtonClass,
  adminGalleryImgGridClass,
  adminGalleryEmptyClass,
  adminGalleryCardClass,
  adminGalleryCardOverlayClass,
  adminGalleryCardActionsClass,
  adminGalleryActionBtnClass,
  adminGalleryDeleteBtnClass,
} from "@/app/uiClasses"

const AdminGalleryPage = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [alt, setAlt] = useState("")
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const result = await api.get("/api/gallery")
      setImages(result.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected || null)
    setPreview(selected ? URL.createObjectURL(selected) : null)
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) {
      Swal.fire({ title: "Please choose an image first", icon: "error" })
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("alt", alt)

    setUploading(true)
    try {
      await api.post("/api/gallery", formData)
      Swal.fire({ title: "Image added to gallery!", icon: "success" })
      setFile(null)
      setAlt("")
      setPreview(null)
      fetchImages()
    } catch (error) {
      Swal.fire({ title: "Upload failed", text: "Please try again.", icon: "error" })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Remove this image?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d64545",
    })

    if (!confirmation.isConfirmed) return

    try {
      await api.delete(`/api/gallery/${id}`)
      setImages((prev) => prev.filter((img) => img._id !== id))
    } catch (error) {
      Swal.fire({ title: "Delete failed", icon: "error" })
    }
  }

  const handleReorder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= images.length) return

    const current = images[index]
    const target = images[targetIndex]

    const reordered = [...images]
    reordered[index] = target
    reordered[targetIndex] = current
    setImages(reordered)

    try {
      await Promise.all([
        api.put(`/api/gallery/${current._id}`, { order: target.order }),
        api.put(`/api/gallery/${target._id}`, { order: current.order }),
      ])
      fetchImages()
    } catch (error) {
      fetchImages()
    }
  }

  return (
    <div className={adminWrapClass}>
      <div className={adminHeaderClass}>
        <h1 className={adminHeaderTitleClass}>Manage Gallery</h1>
        <p className={adminHeaderTextClass}>Upload new work photos or remove old ones — changes appear on the public gallery instantly.</p>
      </div>

      <form className={adminUploadCardClass} onSubmit={handleUpload}>
        <label className={adminUploadDropClass} htmlFor="gallery-file">
          {preview ? (
            <img src={preview} alt="Preview" className="h-full w-full object-cover" />
          ) : (
            <>
              <CloudUploadIcon className="!text-[36px] text-gold" />
              <span>Click to choose an image</span>
            </>
          )}
        </label>
        <input
          id="gallery-file"
          className={fileInputClass}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />

        <input
          className={inputFieldClass}
          type="text"
          placeholder="Alt text / caption (optional)"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
        />

        <button className={submitButtonClass} type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Add to Gallery"}
        </button>
      </form>

      <div className={adminGalleryImgGridClass}>
        {loading && <p className={adminGalleryEmptyClass}>Loading images...</p>}
        {!loading && images.length === 0 && (
          <p className={adminGalleryEmptyClass}>No images yet. Upload your first one above.</p>
        )}
        {images.map((img, index) => (
          <div className={adminGalleryCardClass} key={img._id}>
            <img src={img.image} alt={img.alt || "Gallery image"} className="h-full w-full object-cover" />
            <div className={adminGalleryCardOverlayClass}>
              <div className={adminGalleryCardActionsClass}>
                <button
                  type="button"
                  className={adminGalleryActionBtnClass}
                  onClick={() => handleReorder(index, "up")}
                  disabled={index === 0}
                  title="Move up"
                >
                  <ArrowUpwardIcon fontSize="small" />
                </button>
                <button
                  type="button"
                  className={adminGalleryActionBtnClass}
                  onClick={() => handleReorder(index, "down")}
                  disabled={index === images.length - 1}
                  title="Move down"
                >
                  <ArrowDownwardIcon fontSize="small" />
                </button>
                <button
                  type="button"
                  className={`${adminGalleryActionBtnClass} ${adminGalleryDeleteBtnClass}`}
                  onClick={() => handleDelete(img._id)}
                  title="Delete"
                >
                  <DeleteIcon fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminGalleryPage

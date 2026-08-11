"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import slugify from "slugify"
import api from "@/libs/api"
import Swal from "sweetalert2"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
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
  adminGalleryEmptyClass,
  adminGalleryActionBtnClass,
  adminGalleryDeleteBtnClass,
  adminServiceGridClass,
  adminServiceCardClass,
  adminServiceCardActionsClass,
  adminServiceEditInputClass,
  adminServiceEditLabelClass,
  adminServiceStatusBadgeClass,
  adminServiceStatusActiveClass,
  adminServiceStatusInactiveClass,
  adminPackageFormGridClass,
  adminPackageTextareaClass,
  adminPackageCheckboxRowClass,
  adminPackageCardImgClass,
  adminPackageBackLinkClass,
} from "@/app/uiClasses"

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  price: "",
  priceOptions: "",
  phone: "",
  whatsapp: "",
  supportNumber: "",
  freeHomeVisit: true,
  detailsSummary: "We Do",
  detailsBody: "",
  timing: "",
}

const AdminServicePackagesPage = () => {
  const { tileId } = useParams()

  const [tile, setTile] = useState(null)
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [uploading, setUploading] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(emptyForm)

  useEffect(() => {
    fetchTile()
    fetchPackages()
  }, [tileId])

  const fetchTile = async () => {
    try {
      const result = await api.get(`/api/service-tiles/${tileId}`)
      setTile(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPackages = async () => {
    try {
      const result = await api.get(`/api/service-packages?serviceTileId=${tileId}`)
      setPackages(result.data)
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

  const handleTitleChange = (title) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug && prev.slug !== slugify(prev.title, { lower: true, strict: true }) ? prev.slug : slugify(title, { lower: true, strict: true }),
    }))
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file || !form.title || !form.slug) {
      Swal.fire({ title: "Title, slug and an image are required", icon: "error" })
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("serviceTileId", tileId)
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value)
    })

    setUploading(true)
    try {
      await api.post("/api/service-packages", formData)
      Swal.fire({ title: "Package added!", icon: "success" })
      setFile(null)
      setPreview(null)
      setForm(emptyForm)
      fetchPackages()
    } catch (error) {
      Swal.fire({
        title: "Upload failed",
        text: error?.response?.data?.error || "Please try again.",
        icon: "error",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Remove this package?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d64545",
    })

    if (!confirmation.isConfirmed) return

    try {
      await api.delete(`/api/service-packages/${id}`)
      setPackages((prev) => prev.filter((pkg) => pkg._id !== id))
    } catch (error) {
      Swal.fire({ title: "Delete failed", icon: "error" })
    }
  }

  const startEdit = (pkg) => {
    setEditingId(pkg._id)
    setEditForm({
      title: pkg.title,
      slug: pkg.slug,
      description: pkg.description || "",
      price: pkg.price || "",
      priceOptions: (pkg.priceOptions || []).join("\n"),
      phone: pkg.phone || "",
      whatsapp: pkg.whatsapp || "",
      supportNumber: pkg.supportNumber || "",
      freeHomeVisit: pkg.freeHomeVisit !== false,
      detailsSummary: pkg.detailsSummary || "We Do",
      detailsBody: pkg.detailsBody || "",
      timing: pkg.timing || "",
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(emptyForm)
  }

  const saveEdit = async (id) => {
    try {
      const payload = {
        ...editForm,
        priceOptions: editForm.priceOptions
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      }
      await api.put(`/api/service-packages/${id}`, payload)
      Swal.fire({ title: "Package updated!", icon: "success", timer: 1200, showConfirmButton: false })
      cancelEdit()
      fetchPackages()
    } catch (error) {
      Swal.fire({
        title: "Update failed",
        text: error?.response?.data?.message || "Please try again.",
        icon: "error",
      })
    }
  }

  const toggleStatus = async (pkg) => {
    const nextStatus = pkg.status === "inactive" ? "active" : "inactive"
    try {
      await api.put(`/api/service-packages/${pkg._id}`, { status: nextStatus })
      setPackages((prev) => prev.map((p) => (p._id === pkg._id ? { ...p, status: nextStatus } : p)))
    } catch (error) {
      Swal.fire({ title: "Status update failed", icon: "error" })
    }
  }

  const handleReorder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= packages.length) return

    const current = packages[index]
    const target = packages[targetIndex]

    const reordered = [...packages]
    reordered[index] = target
    reordered[targetIndex] = current
    setPackages(reordered)

    try {
      await Promise.all([
        api.put(`/api/service-packages/${current._id}`, { order: target.order }),
        api.put(`/api/service-packages/${target._id}`, { order: current.order }),
      ])
      fetchPackages()
    } catch (error) {
      fetchPackages()
    }
  }

  return (
    <div className={adminWrapClass}>
      <Link href="/admin/service-tiles" className={adminPackageBackLinkClass}>
        ← Back to Service Tiles
      </Link>
      <div className={adminHeaderClass}>
        <h1 className={adminHeaderTitleClass}>
          Manage Packages{tile ? ` — ${tile.title}` : ""}
        </h1>
        <p className={adminHeaderTextClass}>
          Add, edit, reorder, or remove the packages shown on {tile ? `/${tile.href}` : "this category"}.
        </p>
      </div>

      <form className={`${adminUploadCardClass} !max-w-[640px]`} onSubmit={handleUpload}>
        <label className={adminUploadDropClass} htmlFor="package-file">
          {preview ? (
            <img src={preview} alt="Preview" className="h-full w-full object-contain" />
          ) : (
            <>
              <CloudUploadIcon className="!text-[36px] text-gold" />
              <span>Click to choose a package image</span>
            </>
          )}
        </label>
        <input id="package-file" className={fileInputClass} type="file" accept="image/*" onChange={handleFileChange} hidden />

        <div className={adminPackageFormGridClass}>
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Title (e.g. Classic - 1 BHK Home Cleaning)"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Slug (e.g. classic-1-bhk-home-cleaning)"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
        </div>

        <textarea
          className={adminPackageTextareaClass}
          rows={2}
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <div className={adminPackageFormGridClass}>
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Price (e.g. ₹ 1,800 To ₹ 2,500)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Timing (e.g. 3 - 5 Working Hours)"
            value={form.timing}
            onChange={(e) => setForm({ ...form, timing: e.target.value })}
          />
        </div>

        <textarea
          className={adminPackageTextareaClass}
          rows={2}
          placeholder={"Extra price lines, one per line (e.g. 2BHK : ₹2,499 To ₹2,999)"}
          value={form.priceOptions}
          onChange={(e) => setForm({ ...form, priceOptions: e.target.value })}
        />

        <div className={adminPackageFormGridClass}>
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Phone (e.g. 7021595850)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            className={inputFieldClass}
            type="text"
            placeholder="Whatsapp number (e.g. 917021595850)"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          />
        </div>

        <input
          className={inputFieldClass}
          type="text"
          placeholder="Customer support number"
          value={form.supportNumber}
          onChange={(e) => setForm({ ...form, supportNumber: e.target.value })}
        />

        <input
          className={inputFieldClass}
          type="text"
          placeholder='Details section heading (e.g. "We Do")'
          value={form.detailsSummary}
          onChange={(e) => setForm({ ...form, detailsSummary: e.target.value })}
        />

        <textarea
          className={adminPackageTextareaClass}
          rows={4}
          placeholder="Details body — what's included, terms, etc."
          value={form.detailsBody}
          onChange={(e) => setForm({ ...form, detailsBody: e.target.value })}
        />

        <label className={adminPackageCheckboxRowClass}>
          <input
            type="checkbox"
            checked={form.freeHomeVisit}
            onChange={(e) => setForm({ ...form, freeHomeVisit: e.target.checked })}
          />
          Free Home Visit
        </label>

        <button className={submitButtonClass} type="submit" disabled={uploading}>
          {uploading ? "Adding..." : "Add Package"}
        </button>
      </form>

      <div className={adminServiceGridClass}>
        {loading && <p className={adminGalleryEmptyClass}>Loading packages...</p>}
        {!loading && packages.length === 0 && (
          <p className={adminGalleryEmptyClass}>No packages yet. Add your first one above.</p>
        )}
        {packages.map((pkg, index) => (
          <div className={adminServiceCardClass} key={pkg._id}>
            {editingId === pkg._id ? (
              <div className="flex flex-col gap-2">
                <label className={adminServiceEditLabelClass}>Title</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Slug</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.slug}
                  onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Description</label>
                <textarea
                  className={adminServiceEditInputClass}
                  rows={2}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Price</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Extra price lines</label>
                <textarea
                  className={adminServiceEditInputClass}
                  rows={2}
                  value={editForm.priceOptions}
                  onChange={(e) => setEditForm({ ...editForm, priceOptions: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Phone</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Whatsapp</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.whatsapp}
                  onChange={(e) => setEditForm({ ...editForm, whatsapp: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Support number</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.supportNumber}
                  onChange={(e) => setEditForm({ ...editForm, supportNumber: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Details heading</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.detailsSummary}
                  onChange={(e) => setEditForm({ ...editForm, detailsSummary: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Details body</label>
                <textarea
                  className={adminServiceEditInputClass}
                  rows={3}
                  value={editForm.detailsBody}
                  onChange={(e) => setEditForm({ ...editForm, detailsBody: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Timing</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.timing}
                  onChange={(e) => setEditForm({ ...editForm, timing: e.target.value })}
                />
                <label className={adminPackageCheckboxRowClass}>
                  <input
                    type="checkbox"
                    checked={editForm.freeHomeVisit}
                    onChange={(e) => setEditForm({ ...editForm, freeHomeVisit: e.target.checked })}
                  />
                  Free Home Visit
                </label>
                <div className={adminServiceCardActionsClass}>
                  <button type="button" onClick={() => saveEdit(pkg._id)} className={`${adminGalleryActionBtnClass} !w-auto px-3`}>
                    Save
                  </button>
                  <button type="button" onClick={cancelEdit} className={`${adminGalleryActionBtnClass} !w-auto px-3`}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-3">
                  <img src={pkg.image} alt={pkg.title} className={adminPackageCardImgClass} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-navy">{pkg.title}</p>
                    <p className="text-xs text-gold-dark">/{tile?.href}/{pkg.slug}</p>
                    <p className="text-xs text-ink-soft">{pkg.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleStatus(pkg)}
                    title="Click to toggle"
                    className={`${adminServiceStatusBadgeClass} ${
                      pkg.status === "inactive" ? adminServiceStatusInactiveClass : adminServiceStatusActiveClass
                    }`}
                  >
                    {pkg.status === "inactive" ? "Inactive" : "Active"}
                  </button>
                </div>
                <div className={adminServiceCardActionsClass}>
                  <button
                    type="button"
                    onClick={() => handleReorder(index, "up")}
                    disabled={index === 0}
                    title="Move up"
                    className={adminGalleryActionBtnClass}
                  >
                    <ArrowUpwardIcon fontSize="small" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReorder(index, "down")}
                    disabled={index === packages.length - 1}
                    title="Move down"
                    className={adminGalleryActionBtnClass}
                  >
                    <ArrowDownwardIcon fontSize="small" />
                  </button>
                  <button type="button" onClick={() => startEdit(pkg)} title="Edit" className={adminGalleryActionBtnClass}>
                    <EditIcon fontSize="small" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(pkg._id)}
                    title="Delete"
                    className={`${adminGalleryActionBtnClass} ${adminGalleryDeleteBtnClass}`}
                  >
                    <DeleteIcon fontSize="small" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminServicePackagesPage

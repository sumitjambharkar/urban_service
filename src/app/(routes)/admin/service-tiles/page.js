"use client"
import { useEffect, useState } from "react"
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
  adminServiceCardHeaderClass,
  adminServiceCardIconClass,
  adminServiceCardTitleClass,
  adminServiceCardDescClass,
  adminServiceCardHrefClass,
  adminServiceCardActionsClass,
  adminServiceEditInputClass,
  adminServiceEditLabelClass,
} from "@/app/uiClasses"

const emptyForm = { title: "", description: "", href: "" }

const AdminServiceTilesPage = () => {
  const [tiles, setTiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [uploading, setUploading] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(emptyForm)

  useEffect(() => {
    fetchTiles()
  }, [])

  const fetchTiles = async () => {
    try {
      const result = await api.get("/api/service-tiles")
      setTiles(result.data)
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
    if (!file || !form.title || !form.description || !form.href) {
      Swal.fire({ title: "Please fill in every field and choose an icon image", icon: "error" })
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("title", form.title)
    formData.append("description", form.description)
    formData.append("href", form.href)

    setUploading(true)
    try {
      await api.post("/api/service-tiles", formData)
      Swal.fire({ title: "Service added!", icon: "success" })
      setFile(null)
      setPreview(null)
      setForm(emptyForm)
      fetchTiles()
    } catch (error) {
      Swal.fire({ title: "Upload failed", text: "Please try again.", icon: "error" })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Remove this service?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d64545",
    })

    if (!confirmation.isConfirmed) return

    try {
      await api.delete(`/api/service-tiles/${id}`)
      setTiles((prev) => prev.filter((tile) => tile._id !== id))
    } catch (error) {
      Swal.fire({ title: "Delete failed", icon: "error" })
    }
  }

  const startEdit = (tile) => {
    setEditingId(tile._id)
    setEditForm({ title: tile.title, description: tile.description, href: tile.href })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(emptyForm)
  }

  const saveEdit = async (id) => {
    try {
      await api.put(`/api/service-tiles/${id}`, editForm)
      setTiles((prev) => prev.map((tile) => (tile._id === id ? { ...tile, ...editForm } : tile)))
      cancelEdit()
    } catch (error) {
      Swal.fire({ title: "Update failed", icon: "error" })
    }
  }

  const handleReorder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= tiles.length) return

    const current = tiles[index]
    const target = tiles[targetIndex]

    const reordered = [...tiles]
    reordered[index] = target
    reordered[targetIndex] = current
    setTiles(reordered)

    try {
      await Promise.all([
        api.put(`/api/service-tiles/${current._id}`, { order: target.order }),
        api.put(`/api/service-tiles/${target._id}`, { order: current.order }),
      ])
      fetchTiles()
    } catch (error) {
      fetchTiles()
    }
  }

  return (
    <div className={adminWrapClass}>
      <div className={adminHeaderClass}>
        <h1 className={adminHeaderTitleClass}>Manage Service Tiles</h1>
        <p className={adminHeaderTextClass}>
          Add, edit, reorder, or remove the service cards shown on the homepage and the Services page.
        </p>
      </div>

      <form className={adminUploadCardClass} onSubmit={handleUpload}>
        <label className={adminUploadDropClass} htmlFor="service-tile-file">
          {preview ? (
            <img src={preview} alt="Preview" className="h-full w-full object-contain" />
          ) : (
            <>
              <CloudUploadIcon className="!text-[36px] text-gold" />
              <span>Click to choose an icon image</span>
            </>
          )}
        </label>
        <input
          id="service-tile-file"
          className={fileInputClass}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />

        <input
          className={inputFieldClass}
          type="text"
          placeholder="Title (e.g. Chandelier Cleaning Services)"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className={inputFieldClass}
          type="text"
          placeholder="Short description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className={inputFieldClass}
          type="text"
          placeholder="Link (e.g. chandelier-cleaning)"
          value={form.href}
          onChange={(e) => setForm({ ...form, href: e.target.value })}
        />

        <button className={submitButtonClass} type="submit" disabled={uploading}>
          {uploading ? "Adding..." : "Add Service"}
        </button>
      </form>

      <div className={adminServiceGridClass}>
        {loading && <p className={adminGalleryEmptyClass}>Loading services...</p>}
        {!loading && tiles.length === 0 && (
          <p className={adminGalleryEmptyClass}>No services yet. Add your first one above.</p>
        )}
        {tiles.map((tile, index) => (
          <div className={adminServiceCardClass} key={tile._id}>
            {editingId === tile._id ? (
              <div className="flex flex-col gap-2">
                <label className={adminServiceEditLabelClass}>Title</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Description</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
                <label className={adminServiceEditLabelClass}>Link</label>
                <input
                  className={adminServiceEditInputClass}
                  value={editForm.href}
                  onChange={(e) => setEditForm({ ...editForm, href: e.target.value })}
                />
                <div className={adminServiceCardActionsClass}>
                  <button type="button" onClick={() => saveEdit(tile._id)} className={`${adminGalleryActionBtnClass} !w-auto px-3`}>
                    Save
                  </button>
                  <button type="button" onClick={cancelEdit} className={`${adminGalleryActionBtnClass} !w-auto px-3`}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={adminServiceCardHeaderClass}>
                  <img src={tile.icon} alt={tile.title} className={adminServiceCardIconClass} />
                  <div>
                    <p className={adminServiceCardTitleClass}>{tile.title}</p>
                    <p className={adminServiceCardHrefClass}>/{tile.href}</p>
                  </div>
                </div>
                <p className={adminServiceCardDescClass}>{tile.description}</p>
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
                    disabled={index === tiles.length - 1}
                    title="Move down"
                    className={adminGalleryActionBtnClass}
                  >
                    <ArrowDownwardIcon fontSize="small" />
                  </button>
                  <button
                    type="button"
                    onClick={() => startEdit(tile)}
                    title="Edit"
                    className={adminGalleryActionBtnClass}
                  >
                    <EditIcon fontSize="small" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(tile._id)}
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

export default AdminServiceTilesPage

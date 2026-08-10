import Gallery from "@/model/Gallery";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
import cloudinary from "@/libs/cloudinary";
import { getTokenData } from "@/helpers/auth";

connectDatabase();

export async function PUT(request, { params }) {
  try {
    getTokenData(request);
  } catch (error) {
    return NextResponse.json({ error: error.message, code: error.code || "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const updated = await Gallery.findByIdAndUpdate(params.id, payload, { new: true });

    if (!updated) {
      return NextResponse.json({ message: "Image not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Image updated successfully", updated });
  } catch (error) {
    return NextResponse.json({ message: "Error updating image" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    getTokenData(request);
  } catch (error) {
    return NextResponse.json({ error: error.message, code: error.code || "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const deleted = await Gallery.findOneAndDelete({ _id: params.id });

    if (!deleted) {
      return NextResponse.json({ message: "Image not found" }, { status: 404 });
    }

    if (deleted.publicId) {
      await cloudinary.uploader.destroy(deleted.publicId).catch(() => {});
    }

    return NextResponse.json({ message: "Image deleted successfully", deleted });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting image" }, { status: 500 });
  }
}

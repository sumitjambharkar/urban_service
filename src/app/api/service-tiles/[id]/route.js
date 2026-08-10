import ServiceTile from "@/model/ServiceTile";
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
    const updated = await ServiceTile.findByIdAndUpdate(params.id, payload, { new: true });

    if (!updated) {
      return NextResponse.json({ message: "Service tile not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service tile updated successfully", updated });
  } catch (error) {
    return NextResponse.json({ message: "Error updating service tile" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    getTokenData(request);
  } catch (error) {
    return NextResponse.json({ error: error.message, code: error.code || "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const deleted = await ServiceTile.findOneAndDelete({ _id: params.id });

    if (!deleted) {
      return NextResponse.json({ message: "Service tile not found" }, { status: 404 });
    }

    if (deleted.iconPublicId) {
      await cloudinary.uploader.destroy(deleted.iconPublicId).catch(() => {});
    }

    return NextResponse.json({ message: "Service tile deleted successfully", deleted });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting service tile" }, { status: 500 });
  }
}

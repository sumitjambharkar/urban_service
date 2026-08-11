import ServicePackage from "@/model/ServicePackage";
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
    const updated = await ServicePackage.findByIdAndUpdate(params.id, payload, { new: true });

    if (!updated) {
      return NextResponse.json({ message: "Service package not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service package updated successfully", updated });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "A package with this slug already exists in this category." },
        { status: 409 }
      );
    }
    return NextResponse.json({ message: "Error updating service package" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    getTokenData(request);
  } catch (error) {
    return NextResponse.json({ error: error.message, code: error.code || "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const deleted = await ServicePackage.findOneAndDelete({ _id: params.id });

    if (!deleted) {
      return NextResponse.json({ message: "Service package not found" }, { status: 404 });
    }

    if (deleted.imagePublicId) {
      await cloudinary.uploader.destroy(deleted.imagePublicId).catch(() => {});
    }

    return NextResponse.json({ message: "Service package deleted successfully", deleted });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting service package" }, { status: 500 });
  }
}

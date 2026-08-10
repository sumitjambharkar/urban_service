import Gallery from "@/model/Gallery";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
import cloudinary from "@/libs/cloudinary";
import { getTokenData } from "@/helpers/auth";

connectDatabase();

export async function GET() {
  try {
    const images = await Gallery.find().sort({ order: 1, createdAt: 1 });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load gallery images." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    getTokenData(request);
  } catch (error) {
    return NextResponse.json({ error: error.message, code: error.code || "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const alt = formData.get("alt");

    if (!file) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const fileData = Buffer.from(fileBuffer).toString("base64");

    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.type};base64,${fileData}`,
      { folder: "gallery" }
    );

    const lastImage = await Gallery.findOne().sort({ order: -1 });
    const order = lastImage ? lastImage.order + 1 : 0;

    const newImage = await Gallery.create({
      image: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      alt: alt || "Chandelite work",
      order,
    });

    return NextResponse.json({ data: newImage });
  } catch (error) {
    console.error("Error uploading gallery image:", error);
    return NextResponse.json({ error: "An error occurred while uploading the image." }, { status: 500 });
  }
}

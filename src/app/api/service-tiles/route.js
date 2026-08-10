import ServiceTile from "@/model/ServiceTile";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
import cloudinary from "@/libs/cloudinary";
import { getTokenData } from "@/helpers/auth";

connectDatabase();

export async function GET() {
  try {
    const tiles = await ServiceTile.find().sort({ order: 1, createdAt: 1 });
    return NextResponse.json(tiles);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load service tiles." }, { status: 500 });
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
    const title = formData.get("title");
    const description = formData.get("description");
    const href = formData.get("href");
    const file = formData.get("file");

    if (!title || !description || !href || !file) {
      return NextResponse.json({ error: "Title, description, link and icon image are all required." }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const fileData = Buffer.from(fileBuffer).toString("base64");

    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.type};base64,${fileData}`,
      { folder: "service-tiles" }
    );

    const lastTile = await ServiceTile.findOne().sort({ order: -1 });
    const order = lastTile ? lastTile.order + 1 : 0;

    const newTile = await ServiceTile.create({
      title,
      description,
      href,
      icon: uploadResult.secure_url,
      iconPublicId: uploadResult.public_id,
      order,
    });

    return NextResponse.json({ data: newTile });
  } catch (error) {
    console.error("Error creating service tile:", error);
    return NextResponse.json({ error: "An error occurred while creating the service tile." }, { status: 500 });
  }
}

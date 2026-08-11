import ServicePackage from "@/model/ServicePackage";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
import cloudinary from "@/libs/cloudinary";
import { getTokenData } from "@/helpers/auth";

connectDatabase();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceTileId = searchParams.get("serviceTileId");

    const filter = serviceTileId ? { serviceTileId } : {};
    const packages = await ServicePackage.find(filter).sort({ order: 1, createdAt: 1 });
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load service packages." }, { status: 500 });
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
    const serviceTileId = formData.get("serviceTileId");
    const title = formData.get("title");
    const slug = formData.get("slug");
    const description = formData.get("description") || "";
    const price = formData.get("price") || "";
    const priceOptions = (formData.get("priceOptions") || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const phone = formData.get("phone") || "";
    const whatsapp = formData.get("whatsapp") || "";
    const supportNumber = formData.get("supportNumber") || "";
    const freeHomeVisit = formData.get("freeHomeVisit") === "true";
    const detailsSummary = formData.get("detailsSummary") || "We Do";
    const detailsBody = formData.get("detailsBody") || "";
    const timing = formData.get("timing") || "";
    const file = formData.get("file");

    if (!serviceTileId || !title || !slug || !file) {
      return NextResponse.json(
        { error: "Category, title, slug and image are all required." },
        { status: 400 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const fileData = Buffer.from(fileBuffer).toString("base64");

    const uploadResult = await cloudinary.uploader.upload(`data:${file.type};base64,${fileData}`, {
      folder: "service-packages",
    });

    const lastPackage = await ServicePackage.findOne({ serviceTileId }).sort({ order: -1 });
    const order = lastPackage ? lastPackage.order + 1 : 0;

    const newPackage = await ServicePackage.create({
      serviceTileId,
      title,
      slug,
      description,
      price,
      priceOptions,
      phone,
      whatsapp,
      supportNumber,
      freeHomeVisit,
      detailsSummary,
      detailsBody,
      timing,
      image: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      order,
    });

    return NextResponse.json({ data: newPackage });
  } catch (error) {
    console.error("Error creating service package:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A package with this slug already exists in this category." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "An error occurred while creating the service package." }, { status: 500 });
  }
}

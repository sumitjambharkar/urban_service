import mongoose, { Schema } from "mongoose";

const servicePackageSchema = new Schema(
  {
    serviceTileId: {
      type: Schema.Types.ObjectId,
      ref: "ServiceTile",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    priceOptions: {
      type: [String],
      default: [],
    },
    phone: {
      type: String,
      default: "",
    },
    whatsapp: {
      type: String,
      default: "",
    },
    supportNumber: {
      type: String,
      default: "",
    },
    freeHomeVisit: {
      type: Boolean,
      default: true,
    },
    detailsSummary: {
      type: String,
      default: "We Do",
    },
    detailsBody: {
      type: String,
      default: "",
    },
    timing: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

servicePackageSchema.index({ serviceTileId: 1, slug: 1 }, { unique: true });

const ServicePackage =
  mongoose.models.ServicePackage || mongoose.model("ServicePackage", servicePackageSchema);

export default ServicePackage;

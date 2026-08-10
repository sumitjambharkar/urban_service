import mongoose, { Schema } from "mongoose";

const serviceTileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconPublicId: {
      type: String,
    },
    href: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceTile = mongoose.models.ServiceTile || mongoose.model("ServiceTile", serviceTileSchema);

export default ServiceTile;

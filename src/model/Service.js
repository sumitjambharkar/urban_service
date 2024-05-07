import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    content: {
      type: String,
    },
    seoTitle: {
      type: String,
    },
    seoDescription: {
      type: String,
    },
    image: {
      type: String,
    },
    service: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

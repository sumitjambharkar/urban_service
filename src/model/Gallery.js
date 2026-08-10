import mongoose, { Schema } from "mongoose";

const gallerySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
    },
    alt: {
      type: String,
      default: "Chandelite work",
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

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default Gallery;

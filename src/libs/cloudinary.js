import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "clennation",
  api_key: process.env.CLOUDINARY_API_KEY || "171362321243793",
  api_secret: process.env.CLOUDINARY_API_SECRET || "0qTa9v3UcUJdNboehCWCDuv951Y",
});

export default cloudinary;

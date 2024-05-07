import Service from "@/model/Service";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
import slugify from "slugify";
const cloudinary = require('cloudinary').v2;
connectDatabase();

cloudinary.config({
  cloud_name: 'clennation',
  api_key: '171362321243793',
  api_secret: '0qTa9v3UcUJdNboehCWCDuv951Y'
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    console.log(formData);
    const name = formData.get('name')
    const service = formData.get('service')
    console.log(name);
    const slug = formData.get('slug');
    console.log(slug);
    const content = formData.get('content');
    const seoTitle = formData.get('seoTitle');
    const seoDescription = formData.get('seoDescription');
    const file = formData.get('file');
    console.log(content,"content");
    console.log(service,"service");
    if (!file) {
      return NextResponse.json({ error: 'File is required.' });
    }
    
    // Get file buffer
    const fileBuffer = await file.arrayBuffer();
    const fileData = Buffer.from(fileBuffer).toString('base64');
    
    // Upload file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(`data:image/jpeg;base64,${fileData}`, {
      folder: 'images'
    });
    
    // Create new Blog post
    const newService = new Service({
      name,
      service,
      slug,
      content:content,
      seoTitle,
      seoDescription,
      image: uploadResult.secure_url,
    });
    
    // Save new post
    await newService.save();
    
    // Return success response
    return NextResponse.json({ data: newService });
  } catch (error) {
    // Handle errors
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'An error occurred while creating the post.' });
  }
}


export async function GET () {
    try {
        const showData = await Service.find().sort({ createdAt: -1 });
        return NextResponse.json(showData);
    } catch (error) {
        return NextResponse.error({ error: error.message });
    }
}


import Blog from "@/model/Blog";
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
    console.log(name);
    const slug = formData.get('slug');
    console.log(slug);
    const content = formData.get('content');
    const seoTitle = formData.get('seoTitle');
    const seoDescription = formData.get('seoDescription');
    const file = formData.get('file');
    
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
    const newPost = new Blog({
      name,
      slug,
      content,
      seoTitle,
      seoDescription,
      image: uploadResult.secure_url,
    });
    
    // Save new post
    await newPost.save();
    
    // Return success response
    return NextResponse.json({ data: newPost });
  } catch (error) {
    // Handle errors
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'An error occurred while creating the post.' });
  }
}


export async function GET () {
    try {
        const showData = await Blog.find().sort({ createdAt: -1 });
        return NextResponse.json(showData);
    } catch (error) {
        return NextResponse.error({ error: error.message });
    }
}


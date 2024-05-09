import Blog from "@/model/Blog";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
connectDatabase();


export  async function GET(req,content) {
   try {
    
    console.log("Name:",content.params.id);
    const blog = await Blog.findOne({slug:content.params.id}).exec();
    return NextResponse.json(blog)
   } catch (error) {
    return NextResponse.json("not")
   }
}

export async function PUT(req, content) {
   const id = content.params.id;
   const payload = await req.json();
 
   try {
     const updatedBlog = await Blog.findByIdAndUpdate(id, payload, { new: true });
 
     if (!updatedBlog) {
       return NextResponse.json({ message: 'Blog not found' });
     }
 
     return NextResponse.json({ message: 'Blog updated successfully', updatedBlog });
   } catch (error) {
     return NextResponse.json({ message: 'Error updating blog', error });
   }
 }
 
 
 export  async function DELETE(req,content) {
     const id = content.params.id
     console.log(id);
     try {
       const deletedBlog = await Blog.findOneAndDelete({ _id: id });
   
       if (!deletedBlog) {
         return NextResponse.json({ message: 'Blog not found' })
       }
       return NextResponse.json({ message: 'Blog deleted successfully', deletedBlog })
     } catch (error) {
      return NextResponse.json("not")
     }
 }
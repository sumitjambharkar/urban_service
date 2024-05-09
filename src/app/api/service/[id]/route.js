import Service from "@/model/Service";
import { NextResponse } from "next/server";
import connectDatabase from "@/libs/database";
connectDatabase();


export  async function GET(req,content) {
   try {
    
    console.log("Name:",content.params.id);
    const service = await Service.findOne({slug:content.params.id}).exec();
    return NextResponse.json(service)
   } catch (error) {
    return NextResponse.json("not")
   }
}

export async function PUT(req, content) {
   const id = content.params.id;
   const payload = await req.json();
 
   try {
     const updatedBlog = await Service.findByIdAndUpdate(id, payload, { new: true });
 
     if (!updatedBlog) {
       return NextResponse.json({ message: 'Service not found' });
     }
 
     return NextResponse.json({ message: 'Service updated successfully', updatedBlog });
   } catch (error) {
     return NextResponse.json({ message: 'Error updating blog', error });
   }
 }
 
 
 export  async function DELETE(req,content) {
     const id = content.params.id
     console.log(id);
     try {
       const deletedBlog = await Service.findOneAndDelete({ _id: id });
   
       if (!deletedBlog) {
         return NextResponse.json({ message: 'Service not found' })
       }
       return NextResponse.json({ message: 'Service deleted successfully', deletedBlog })
     } catch (error) {
      return NextResponse.json("not")
     }
 }
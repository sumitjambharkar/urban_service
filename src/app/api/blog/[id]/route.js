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
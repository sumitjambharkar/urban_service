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
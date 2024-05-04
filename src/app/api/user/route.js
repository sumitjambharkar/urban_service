import User from "@/model/User";
import {NextResponse,NextRequest} from "next/server";
import Database from "@/libs/database";
import connectDatabase from "@/libs/database";
import { getTokenData } from "@/helpers/getTokenData";
Database(connectDatabase)

export const dynamic = 'force-dynamic';
export async function GET (req) {
    
    try {
       const userId = await getTokenData(req);
       const user = await User.findById({_id:userId}).select("-password");
       return NextResponse.json({message:"User Found",data:user})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}

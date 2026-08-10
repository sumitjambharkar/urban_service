import User from "@/model/User";
import {NextResponse,NextRequest} from "next/server";
import connectDatabase from "@/libs/database";
import { getTokenData } from "@/helpers/auth";
connectDatabase();

export const dynamic = 'force-dynamic';
export async function GET (req) {

    try {
       const userId = getTokenData(req);
       const user = await User.findById({_id:userId}).select("-password -refreshToken");
       return NextResponse.json({message:"User Found",data:user})
    } catch (error) {
        return NextResponse.json({error:error.message,code:error.code||"UNAUTHORIZED"},{status:401})
    }
}

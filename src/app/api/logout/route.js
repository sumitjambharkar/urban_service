import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDatabase from "@/libs/database";
import { verifyRefreshToken } from "@/helpers/auth";

connectDatabase();

export async function GET(request) {
    try {
        const refreshToken = request.cookies.get("refreshToken")?.value || "";

        if (refreshToken) {
            try {
                const decoded = verifyRefreshToken(refreshToken);
                await User.findByIdAndUpdate(decoded.id, { refreshToken: null });
            } catch (error) {
                // token already invalid/expired - nothing to clear in DB
            }
        }

        const response = NextResponse.json({ message: "Logout Successfully" }, { status: 200 });
        response.cookies.set("refreshToken", "", { httpOnly: true, expires: new Date(0), path: "/" });
        return response;
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 500 })
    }
}

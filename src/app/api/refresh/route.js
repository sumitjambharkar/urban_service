import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDatabase from "@/libs/database";
import { generateAccessToken, verifyRefreshToken } from "@/helpers/auth";

connectDatabase();

export async function POST(request) {
    const refreshToken = request.cookies.get("refreshToken")?.value || "";

    if (!refreshToken) {
        return NextResponse.json({ message: "No refresh token" }, { status: 401 });
    }

    let decoded;
    try {
        decoded = verifyRefreshToken(refreshToken);
    } catch (error) {
        return NextResponse.json({ message: "Refresh token invalid or expired" }, { status: 401 });
    }

    try {
        const user = await User.findById(decoded.id);

        if (!user || !user.refreshToken || user.refreshToken !== refreshToken) {
            return NextResponse.json({ message: "Refresh token does not match" }, { status: 401 });
        }

        const accessToken = generateAccessToken({ id: user._id, email: user.email });
        return NextResponse.json({ accessToken }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Unable to refresh session" }, { status: 500 });
    }
}

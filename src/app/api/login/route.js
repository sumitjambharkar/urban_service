import { NextResponse } from "next/server";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import connectDatabase from "@/libs/database";
import {
    generateAccessToken,
    generateRefreshToken,
    REFRESH_TOKEN_MAX_AGE_SECONDS,
} from "@/helpers/auth";

connectDatabase()

export async function POST(request) {

    const { email, password } = await request.json();
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json({ message: "User not registered" }, { status: 404 });
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return NextResponse.json({ message: "Password not matched" }, { status: 401 });
        }

        const payload = { id: user._id, email: user.email };
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        user.refreshToken = refreshToken;
        await user.save();

        const response = NextResponse.json(
            { message: "Login Success", accessToken },
            { status: 200 }
        );
        response.cookies.set("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: REFRESH_TOKEN_MAX_AGE_SECONDS,
            path: "/",
        });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

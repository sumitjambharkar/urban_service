import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connectDatabase()

export async function POST(request) {
    
    const { email, password } = await request.json();
    console.log(email,password);
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json({ message: "User not registered" }, { status: 404 });
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return NextResponse.json({ message: "Password not matched" }, { status: 401 });
        }
        const createToken = { id: user._id, email: user.email };
        const token = await jwt.sign(createToken, "FHFOQFPFGDSGSHEPGOEHCMC", { expiresIn: "1h" });
        const response = NextResponse.json({ message: "Login Success" }, { status: 200 });
        response.cookies.set("token", token, { httpOnly: true });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}

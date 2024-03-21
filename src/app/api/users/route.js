import User from "@/model/User";
import { NextResponse } from "next/server";
import Database from "@/libs/database";
import connectDatabase from "@/libs/database";
Database(connectDatabase)

export async function POST(request) {
  try {
    const { userName, email, password } = await request.json();
    await User.create({ userName, email, password });
    return NextResponse.json({ message: "User created" });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json("Internal Server Error",error.message);
  }
}

export async function GET() {
  try {
    const data = await User.find();
    return NextResponse.json({data });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error("Internal Server Error");
  }
}

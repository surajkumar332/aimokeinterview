import { NextResponse } from "next/server";
import { connectDB } from "@/lib/Mongodb";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { type, name, email, password } = await req.json();

    // ---------------- SIGNUP ----------------
    if (type === "signup") {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 400 }
        );
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      return NextResponse.json({
        message: "User created successfully",
        user,
      });
    }

    // ---------------- LOGIN ----------------
    if (type === "login") {
      const user = await User.findOne({ email, password });

      if (!user) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 }
        );
      }

      return NextResponse.json({
        message: "Login successful",
        user,
      });
    }

    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, question, answer, feedback, score } = await req.json();

    if (!userId || !question || !answer) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Result received",
      data: { userId, question, answer, feedback, score },
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
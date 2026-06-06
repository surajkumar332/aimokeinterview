import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { category, level } = await req.json();

    const result = await model.generateContent(
      `Generate only 10 interview questions on ${category} ${level} .

      Rules:
        - Only questions, no extra text
        - Each question must be numbered (1 to 10)
        - One question per line
        - Do not add explanations or headings
        - Keep questions short and clear
        - If the category is not related to programming or coding, return only: "Related to coding languages"`
    );

    const question = result.response.text();

    return NextResponse.json({ success: true, question });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { success: false, message: "AI failed" },
      { status: 500 }
    );
  }
}
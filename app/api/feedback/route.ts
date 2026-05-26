import { NextResponse } from "next/server";
import { model } from "../../../lib/gemini";

export async function POST(req: Request) {
  const { question, answer } = await req.json();

  const result = await model.generateContent(`You are an expert technical interviewer.

Task:
Evaluate the candidate's answer.

Input:
Question: ${question}
Answer: ${answer}

Output rules:
- Give short feedback (2-3 lines only)
- Give a score out of 10
- Must include score in format: Score: X/10
- No extra text, no explanation headings
`);

  const feedback = result.response.text();

  return NextResponse.json({ success: true, feedback });
}
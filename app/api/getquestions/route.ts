import { model } from "@/lib/gemini";

export async function POST(req: Request) {
    const { company, role } = await req.json();

    const prompt = `
You are a senior technical interviewer with 15+ years of experience hiring frontend and full-stack developers for top IT companies.

Your task is to conduct a realistic mock interview.

Generate exactly 5 interview questions for the candidate.

Details:
- Company: ${company}
- Role: ${role}

Rules:
1. Questions must feel like real interview questions asked in ${company}.
2. Include a balanced mix:
   - 2 Technical questions (core concepts, coding, system design basics)
   - 1 JavaScript/React practical question
   - 1 problem-solving or scenario-based question
   - 1 HR/behavioral question
3. Adjust difficulty based on company:
   - TCS / Wipro / Infosys → Easy to Medium
   - Tech Mahindra / startups → Medium
   - Google / top product companies → Medium to Hard
4. Do NOT add explanations or * or extra text.
5. Output ONLY the questions in a clean numbered list format.
6. Tell with questions which categories of questions.

Example format:
1. ...
2. ...
3. ...
4. ...
5. ...
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return Response.json({ questions: text });
}
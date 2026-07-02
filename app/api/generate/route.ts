import { NextResponse } from "next/server";
import groq from "@/lib/groq";
import { buildPrompt } from "@/lib/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = buildPrompt(body);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content ?? "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const email = JSON.parse(cleaned);

    return NextResponse.json(email);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        subject: "",
        body: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
import { EmailRequest } from "@/types/email";

export function buildPrompt(data: EmailRequest) {
  return `
You are an expert business communication assistant.

Generate ONLY a JSON object in the following format:

{
  "subject":"...",
  "body":"..."
}

Requirements:

Purpose:
${data.purpose}

Recipient:
${data.recipient}

Tone:
${data.tone}

Extra Information:
${data.additionalInfo}

Rules:

- Subject should be concise.
- Body should be professional.
- No markdown.
- No explanations.
- No bullet points unless necessary.
- Keep formatting with paragraphs.
- Return valid JSON only.
`;
}
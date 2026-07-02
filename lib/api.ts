export async function generateEmail(data: {
  purpose: string;
  tone: string;
  keywords: string;
}) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to generate email");
  }

  return res.json();
}
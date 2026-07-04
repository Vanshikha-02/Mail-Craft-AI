"use client";

import { useState } from "react";
import ToneSelector from "./ToneSelector";
import PromptExamples from "./PromptExamples";
import Loading from "./Loading";
import OutputCard from "./OutputCard";

interface EmailResponse {
  subject: string;
  body: string;
}

export default function EmailForm() {
  const [purpose, setPurpose] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tone, setTone] = useState("Professional");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<EmailResponse | null>(null);

  async function generateEmail() {
    if (!purpose.trim()) {
      alert("Please enter the purpose of the email.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          purpose,
          recipient,
          tone,
          additionalInfo,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate email");
      }

      const data = await res.json();

      setResult({
        subject: data.subject,
        body: data.body,
      });
    } catch (error) {
      console.error(error);

      setResult({
        subject: "Error",
        body: "Unable to generate email.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <PromptExamples setPurpose={setPurpose} />

      <input
        type="text"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Purpose"
        className="w-full rounded-xl border p-4 bg-transparent"
      />

      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient"
        className="w-full rounded-xl border p-4 bg-transparent"
      />

      <ToneSelector
        value={tone as any}
        onChange={setTone as any}
      />

      <textarea
        rows={6}
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Additional Details..."
        className="w-full rounded-xl border p-4 bg-transparent"
      />

      <button
        onClick={generateEmail}
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>

      {loading && <Loading />}

      {result && (
        <OutputCard
          subject={result.subject}
          body={result.body}
        />
      )}
    </div>
  );
}
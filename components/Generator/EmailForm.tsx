"use client";

import { useState } from "react";
import ToneSelector from "./ToneSelector";
import PromptExamples from "./PromptExamples";
import Loading from "./Loading";
import OutputCard from "./OutputCard";

export default function EmailForm() {
  const [purpose, setPurpose] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tone, setTone] = useState("Professional");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  async function generateEmail() {
    setLoading(true);

    setResult(null);

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

    const data = await res.json();

    setResult(data);

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      <PromptExamples setPurpose={setPurpose} />

      <input
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Purpose"
        className="w-full rounded-xl border p-4 bg-transparent"
      />

      <input
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
        className="w-full rounded-xl bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition"
      >
        Generate Email
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
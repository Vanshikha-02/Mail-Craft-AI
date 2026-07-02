"use client";

import { useState } from "react";
import { Loader2, Wand2, Lightbulb } from "lucide-react";

export default function EmailGenerator() {
  const [template, setTemplate] = useState("Job Application");
  const [tone, setTone] = useState("Professional");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function generateEmail() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          purpose: template,
          tone,
          keywords: prompt,
        }),
      });

      const data = await res.json();

      setEmail(data.email);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <section
      id="generator"
      className="mx-auto mt-24 grid max-w-7xl gap-8 px-6 lg:grid-cols-3"
    >
      {/* Left */}

      <div className="rounded-3xl border border-border bg-background p-8 shadow-lg lg:col-span-2">

        <h2 className="text-3xl font-bold">
          Generate Your Email
        </h2>

        <p className="mt-2 text-muted-foreground">
          Fill in the details below and let MailCraft AI create a professional email.
        </p>

        {/* Template */}

        <div className="mt-8">

          <label className="mb-2 block text-sm font-medium">
            Email Type
          </label>

          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full rounded-xl border border-border bg-background p-4"
          >
            <option>Job Application</option>
            <option>Leave Request</option>
            <option>Business Proposal</option>
            <option>Meeting Request</option>
            <option>Follow Up</option>
            <option>Complaint</option>
          </select>

        </div>

        {/* Tone */}

        <div className="mt-6">

          <label className="mb-2 block text-sm font-medium">
            Writing Style
          </label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full rounded-xl border border-border bg-background p-4"
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Formal</option>
            <option>Confident</option>
            <option>Persuasive</option>
          </select>

        </div>

        {/* Prompt */}

        <div className="mt-6">

          <label className="mb-2 block text-sm font-medium">
            Describe your email
          </label>

          <textarea
            rows={7}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: I want to apply for a Frontend Developer role and mention my React and Next.js experience."
            className="w-full rounded-xl border border-border bg-background p-4 outline-none"
          />

          <div className="mt-2 text-right text-sm text-muted-foreground">
            {prompt.length}/500
          </div>

        </div>

        <button
          onClick={generateEmail}
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-5 w-5" />
              Generate Email
            </>
          )}
        </button>

      </div>

      {/* Right */}

      <div className="rounded-3xl border border-border bg-background p-8 shadow-lg">

        <div className="flex items-center gap-3">

          <Lightbulb className="text-yellow-500" />

          <h3 className="text-xl font-semibold">
            Tips
          </h3>

        </div>

        <div className="mt-6 space-y-5 text-muted-foreground">

          <p>✓ Mention the recipient.</p>

          <p>✓ Clearly explain the purpose.</p>

          <p>✓ Add important details.</p>

          <p>✓ Keep the prompt concise.</p>

        </div>

        {email && (
          <div className="mt-10 rounded-2xl border border-border p-5">

            <h4 className="font-semibold">
              Preview
            </h4>

            <p className="mt-3 whitespace-pre-wrap text-sm">
              {email}
            </p>

          </div>
        )}

      </div>

    </section>
  );
}
"use client";

import { useState } from "react";
import {
  Loader2,
  Wand2,
  Lightbulb,
  Copy,
  Check,
} from "lucide-react";

interface EmailResponse {
  subject: string;
  body: string;
}

export default function EmailGenerator() {
  const [template, setTemplate] = useState("Job Application");
  const [tone, setTone] = useState("Professional");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState<EmailResponse>({
    subject: "",
    body: "",
  });

  const [copied, setCopied] = useState(false);

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

      if (!res.ok) {
        throw new Error("Failed to generate email");
      }

      const data = await res.json();

      setEmail({
        subject: data.subject,
        body: data.body,
      });
    } catch (err) {
      console.error(err);

      setEmail({
        subject: "Error",
        body: "Unable to generate email. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function copyEmail() {
    const text = `Subject: ${email.subject}\n\n${email.body}`;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
          Fill in the details below and let MailCraft AI create a professional
          email.
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
            maxLength={500}
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
          className="mt-8 flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
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

        {email.body && (
          <div className="mt-10 rounded-2xl border border-border p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">
                Generated Email
              </h4>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-muted-foreground">
                Subject
              </p>

              <div className="mt-2 rounded-lg border bg-muted/40 p-3 font-medium">
                {email.subject}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-muted-foreground">
                Email
              </p>

              <div className="mt-2 whitespace-pre-wrap rounded-lg border bg-muted/40 p-4 leading-7">
                {email.body}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
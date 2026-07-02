"use client";

import { useState } from "react";
import { Copy, Trash2, CheckCircle2 } from "lucide-react";

interface Props {
  email: string;
  onClear: () => void;
}

export default function EmailOutput({
  email,
  onClear,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    if (!email) return;

    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="rounded-3xl border border-border bg-background p-8 shadow-lg">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Generated Email
        </h2>

        {email && (
          <div className="flex gap-3">

            <button
              onClick={copyEmail}
              className="rounded-xl border border-border px-4 py-2 transition hover:bg-muted"
            >
              {copied ? (
                <span className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 size={18} />
                  Copied
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Copy size={18} />
                  Copy
                </span>
              )}
            </button>

            <button
              onClick={onClear}
              className="rounded-xl border border-red-300 px-4 py-2 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Trash2 size={18} />
            </button>

          </div>
        )}

      </div>

      <div className="mt-8 min-h-[350px] rounded-2xl border border-border bg-muted/30 p-6">

        {email ? (
          <pre className="whitespace-pre-wrap font-sans leading-8">
            {email}
          </pre>
        ) : (
          <div className="flex h-full items-center justify-center">

            <div className="text-center">

              <div className="text-6xl">
                ✉️
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Your generated email will appear here
              </h3>

              <p className="mt-3 text-muted-foreground">
                Fill the form and click Generate Email.
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}
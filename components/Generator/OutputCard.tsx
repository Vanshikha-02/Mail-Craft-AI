"use client";

import { Copy, Check } from "lucide-react";
import useCopy from "@/hooks/useCopy";

interface Props {
  subject: string;
  body: string;
}

export default function OutputCard({ subject, body }: Props) {
  const { copied, copy } = useCopy();

  return (
    <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-8 shadow-xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Generated Email
        </h2>

        <button
          onClick={() => copy(`Subject: ${subject}\n\n${body}`)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          {copied ? <Check size={18}/> : <Copy size={18}/>}

          {copied ? "Copied" : "Copy"}
        </button>

      </div>

      <div className="space-y-6">

        <div>

          <h3 className="font-semibold text-blue-600 mb-2">
            Subject
          </h3>

          <p>{subject}</p>

        </div>

        <div>

          <h3 className="font-semibold text-blue-600 mb-2">
            Body
          </h3>

          <pre className="whitespace-pre-wrap font-sans leading-7">
            {body}
          </pre>

        </div>

      </div>

    </div>
  );
}
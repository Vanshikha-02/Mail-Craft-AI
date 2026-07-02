"use client";

import { EmailTone } from "@/types/email";

const tones: EmailTone[] = [
  "Professional",
  "Friendly",
  "Formal",
  "Persuasive",
  "Apology",
  "Thank You",
  "Follow Up",
  "Sales",
];

interface Props {
  value: EmailTone;
  onChange: (tone: EmailTone) => void;
}

export default function ToneSelector({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {tones.map((tone) => (
        <button
          key={tone}
          type="button"
          onClick={() => onChange(tone)}
          className={`rounded-xl border px-4 py-3 transition-all duration-300
          ${
            value === tone
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "bg-white dark:bg-zinc-900 hover:border-blue-500 dark:border-zinc-700"
          }`}
        >
          {tone}
        </button>
      ))}
    </div>
  );
}
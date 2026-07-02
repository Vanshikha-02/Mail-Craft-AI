"use client";

interface Props {
  setPurpose: (value: string) => void;
}

const examples = [
  "Job Application",
  "Leave Request",
  "Internship Inquiry",
  "Business Proposal",
  "Meeting Request",
  "Project Follow Up",
];

export default function PromptExamples({ setPurpose }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {examples.map((example) => (
        <button
          key={example}
          onClick={() => setPurpose(example)}
          className="rounded-full border px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition"
        >
          {example}
        </button>
      ))}
    </div>
  );
}
"use client";

import { useState } from "react";

export default function useCopy() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return {
    copied,
    copy,
  };
}
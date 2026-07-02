"use client";

export default function Loading() {
  return (
    <div className="w-full rounded-2xl border p-8 bg-white dark:bg-zinc-900 animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded w-1/2 mb-6"></div>

      <div className="space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-3/4"></div>
      </div>
    </div>
  );
}
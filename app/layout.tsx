import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailCraft AI",
  description: "Craft Professional Emails Instantly using AI",
  keywords: [
    "AI",
    "Email Generator",
    "Next.js",
    "Groq",
    "MailCraft AI",
  ],
  authors: [{ name: "Vanshikha Singh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.1)",
              },
            }}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
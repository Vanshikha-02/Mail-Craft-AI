"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-[999] w-full"
    >
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-border bg-background/80 px-6 py-4 shadow-xl backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Mail size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              MailCraft AI
            </h1>

            <p className="text-xs text-muted-foreground">
              Professional Email Generator
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          {isHome && (
            <>

              <Link
                href="/#about"
                className="text-sm font-medium hover:text-blue-600 transition"
              >
                About
              </Link>

              <Link
                href="/#features"
                className="text-sm font-medium hover:text-blue-600 transition"
              >
                Features
              </Link>
              
            </>
          )}

          <Link
            href="/generate"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Generate
          </Link>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <ThemeToggle />

          {pathname !== "/generate" ? (
            <Link
              href="/generate"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          ) : (
            <Link
              href="/"
              className="rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:bg-muted"
            >
              Back Home
            </Link>
          )}

        </div>

      </div>
    </motion.header>
  );
}
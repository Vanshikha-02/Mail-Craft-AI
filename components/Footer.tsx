"use client";

import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="about"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
                <Mail size={20} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  MailCraft AI
                </h2>

                <p className="text-sm text-muted-foreground">
                  Craft Professional Emails Instantly
                </p>

              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              MailCraft AI helps professionals, students and businesses
              generate well-written emails in seconds.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

<Link
                href="/#about"
                className="transition hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/#features"
                className="transition hover:text-blue-600"
              >
                Features
              </Link>

              <Link
                href="/generate"
                className="transition hover:text-blue-600"
              >
                Generate Email
              </Link>

              

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="flex gap-4">

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/vanshikha-singh06/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-muted"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}

              <a
                href="mailto:singhvan06@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-muted"
              >
                <Mail size={20} />
              </a>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Have questions or feedback?
              <br />
              Feel free to reach out anytime.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">

          <p>
            © {year} MailCraft AI. All rights reserved.
          </p>

          <p className="flex items-center gap-2">

            Built with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            by

            <span className="font-semibold">
              Vanshikha Singh
            </span>

          </p>

        </div>

      </div>
    </footer>
  );
}
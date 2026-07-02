"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-8 rounded-full border border-blue-200/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400"
        >
          Professional Email Writing Assistant
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
        >
          Write Better Emails.
          <br />
          <span className="text-blue-600 dark:text-blue-400">
            Faster.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          Generate clear, professional emails for work,
          academics, business and personal communication —
          all in just a few seconds.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/generate"
            className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="ml-2 inline" size={18} />
          </a>

          <a
            href="#features"
            className="rounded-xl border border-border bg-background px-7 py-4 font-semibold transition hover:bg-muted"
          >
            Learn More
          </a>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            "Job Applications",
            "Business Emails",
            "Leave Requests",
            "Meeting Invitations",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 shadow-sm"
            >
              <CheckCircle2
                size={18}
                className="text-green-500"
              />
              <span className="text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
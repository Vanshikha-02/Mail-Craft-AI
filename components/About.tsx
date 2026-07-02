"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description:
      "Generate professional emails, cover letters, and messages in seconds with advanced AI.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Create polished content instantly without wasting time writing from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Quality",
    description:
      "Emails are structured with proper tone, grammar, and formatting for real-world communication.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Focus on your work while MailCraft AI handles the writing for you.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-4 py-2 text-sm font-semibold">
            About MailCraft AI
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Write Better. Faster. Smarter.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            MailCraft AI is an intelligent writing assistant that helps
            professionals, students, and job seekers create high-quality emails,
            cover letters, follow-ups, LinkedIn messages, and more in just a few
            seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              10K+
            </h3>
            <p className="mt-2 text-gray-500">
              Emails Generated
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              98%
            </h3>
            <p className="mt-2 text-gray-500">
              User Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              15+
            </h3>
            <p className="mt-2 text-gray-500">
              Writing Templates
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              24/7
            </h3>
            <p className="mt-2 text-gray-500">
              AI Availability
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
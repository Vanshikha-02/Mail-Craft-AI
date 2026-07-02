"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  FileText,
  Sparkles,
  Copy,
} from "lucide-react";

const steps = [
  {
    icon: LayoutTemplate,
    title: "Choose a Template",
    description:
      "Select the type of email you want to create, such as a job application, leave request or business email.",
  },
  {
    icon: FileText,
    title: "Describe Your Email",
    description:
      "Briefly explain your purpose and include any important details you want in the email.",
  },
  {
    icon: Sparkles,
    title: "Generate Instantly",
    description:
      "Create a polished, professional email in just a few seconds.",
  },
  {
    icon: Copy,
    title: "Copy & Use",
    description:
      "Copy your generated email with one click and use it anywhere.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl font-bold">
            How it works
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Create professional emails in four simple steps.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
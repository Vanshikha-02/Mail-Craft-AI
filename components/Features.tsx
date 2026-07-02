"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PencilLine,
  Copy,
  MoonStar,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Templates",
    description:
      "Choose from common email categories like job applications, leave requests and business communication.",
  },
  {
    icon: PencilLine,
    title: "Personalized Writing",
    description:
      "Generate clear and professional emails based on your specific requirements.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your generated email instantly and use it anywhere without additional formatting.",
  },
  {
    icon: MoonStar,
    title: "Dark & Light Mode",
    description:
      "Enjoy a comfortable writing experience with built-in theme support.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: Zap,
    title: "Fast Workflow",
    description:
      "Generate professional emails in just a few simple steps.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold">
          Everything you need
          <br />
          to write better emails
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Designed to help you create professional emails quickly,
          with a clean interface and an efficient workflow.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Icon size={26} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
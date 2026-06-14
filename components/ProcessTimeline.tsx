"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Define the need", description: "We capture the exact business requirement and the outcome the company is pursuing." },
  { title: "Map the network", description: "We identify the right partners, advisors, vendors, and opportunity sources that fit the need." },
  { title: "Qualify the match", description: "Each introduction is reviewed for strategic fit, shared value, and execution readiness." },
  { title: "Facilitate the introduction", description: "We connect both sides and help start the relationship with clarity and purpose." },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="space-y-4">
          <div className="rounded-3xl bg-cyan-500/10 p-6 text-cyan-100">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Turning Business Needs Into Valuable Introductions</h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-slate-300">
            We make introductions with precision, matching real business needs to the right partners and opportunities without hype.
          </p>
        </div>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-4 text-cyan-300">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-sm font-semibold text-cyan-100">{index + 1}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

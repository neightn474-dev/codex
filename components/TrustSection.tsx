"use client";

import { motion } from "framer-motion";

const principles = [
  "Clear needs lead to better matches.",
  "Private relationships outperform public outreach.",
  "Shared purpose makes introductions stick.",
  "Strategic context turns contacts into conversations.",
];

const sectors = [
  "Leadership & talent",
  "Wealth & private capital",
  "Professional services",
  "Technology & growth partners",
  "Healthcare & financial services",
  "Distribution & go-to-market",
];

export default function TrustSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">How we connect</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Trust comes from a clear introduction process, not from claims.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            We build trust by aligning needs, networks, and context before the first introduction happens.
          </p>
          <div className="grid gap-3">
            {principles.map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-base text-slate-200">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sectors.map((sector, index) => (
            <motion.div key={sector} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="glass-panel rounded-[32px] border border-white/10 p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Sector</div>
              <div className="mt-4 text-lg font-semibold text-white">{sector}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

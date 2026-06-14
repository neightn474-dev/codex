"use client";

import { motion } from "framer-motion";

const introductions = [
  {
    label: "Leadership search",
    need: "A company needs proven talent support for a senior role.",
    match: "Executive search partner with sector credibility.",
  },
  {
    label: "Channel expansion",
    need: "A business needs new distribution channels in a specific market.",
    match: "A vetted growth partner with the right buyer relationships.",
  },
  {
    label: "Wealth access",
    need: "A manager seeks qualified access to high-net-worth investors.",
    match: "A wealth advisor with a trusted HNWI network.",
  },
];

export default function QualificationEngine() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Introduction map</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How we turn a need into a precise introduction.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            Each introduction is grounded in clarity, relevance, and mutual potential. We connect one business need to one qualified match, not dozens of unfocused leads.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div whileHover={{ y: -6 }} className="glass-panel rounded-3xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Primary focus</p>
              <p className="mt-3 text-3xl font-semibold text-white">Right-fit introductions</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="glass-panel rounded-3xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">What matters</p>
              <p className="mt-3 text-3xl font-semibold text-white">Shared value and conviction</p>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[36px] border border-cyan-400/10 bg-slate-950/90 p-6 shadow-2xl shadow-cyan-500/10">
          <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="grid gap-5">
            {introductions.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-slate-900/95 p-5">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-slate-400">
                  <span>{item.label}</span>
                  <span className="text-cyan-200">Match path</span>
                </div>
                <div className="mt-5 grid gap-3 rounded-3xl bg-white/5 p-4 text-sm text-slate-200">
                  <div className="rounded-3xl bg-slate-950/90 p-3">
                    <p className="text-slate-400">Need</p>
                    <p className="mt-2 text-white">{item.need}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-3">
                    <p className="text-slate-400">Connector</p>
                    <p className="mt-2 text-cyan-200">NexusForge guides the match.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-3">
                    <p className="text-slate-400">Outcome</p>
                    <p className="mt-2 text-white">{item.match}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

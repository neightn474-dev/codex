"use client";

import { motion } from "framer-motion";

const needs = [
  "A better executive search partner",
  "A wealth advisor with the right network",
  "A specialist vendor for a complex initiative",
  "A channel partner that understands your market",
];

const lostPaths = [
  "Relationships that never form",
  "Introductions that fall short of fit",
  "Opportunities hidden inside private networks",
  "Value left on the table by poor discovery",
];

export default function ProblemSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            When the right opportunity exists, it should not stay invisible.
          </motion.h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Most companies know what they need, but they don’t always know where to find it. We bridge that gap with curated, strategic introductions.
          </p>
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-slate-950/80 p-6 shadow-xl shadow-cyan-500/10">
                <div className="text-sm uppercase tracking-[0.18em] text-cyan-300/70">Companies are looking for</div>
              </div>
              <div className="rounded-[28px] bg-slate-950/80 p-6 shadow-xl shadow-fuchsia-500/10">
                <div className="text-sm uppercase tracking-[0.18em] text-fuchsia-300/70">What gets lost</div>
              </div>
            </div>
            <div className="grid gap-3">
              {needs.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  className="group relative grid gap-3 rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-black/10 transition duration-300 sm:grid-cols-[1fr_1fr]"
                >
                  <div className="flex min-h-[3.5rem] items-center rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                    {item}
                  </div>
                  <div className="flex min-h-[3.5rem] items-center rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                    {lostPaths[index]}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-full sm:block">
                    <div className="absolute left-[50%] top-1/2 h-px w-24 -translate-y-1/2 transform bg-cyan-400/15 blur-sm" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-white/5 to-slate-950/40 p-6 shadow-2xl shadow-cyan-500/10">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-400/20 to-transparent" />
          <div className="grid gap-4">
            <div className="glass-panel rounded-[28px] border border-white/10 p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Why introductions matter</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">Focused</span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-900/90 p-3">Precise fit beats broad outreach.</div>
                <div className="rounded-3xl bg-slate-900/90 p-3">Trusted introductions shorten decision cycles.</div>
                <div className="rounded-3xl bg-slate-900/90 p-3">Mutual relevance reduces friction.</div>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 text-slate-200">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Why introductions matter</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-[24px] border border-white/10 bg-slate-900/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-900/75">
                    <div className="text-sm font-semibold text-white">Faster discovery</div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">Find relevant partners without months of searching.</p>
                  </div>
                  <div className="group rounded-[24px] border border-white/10 bg-slate-900/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-900/75">
                    <div className="text-sm font-semibold text-white">Better fit</div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">Introductions are based on alignment rather than cold outreach.</p>
                  </div>
                  <div className="group rounded-[24px] border border-white/10 bg-slate-900/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-900/75">
                    <div className="text-sm font-semibold text-white">Warmer conversations</div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">Mutual context creates more productive first discussions.</p>
                  </div>
                  <div className="group rounded-[24px] border border-white/10 bg-slate-900/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-900/75">
                    <div className="text-sm font-semibold text-white">Hidden opportunities</div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">Access relationships that may never appear through traditional channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

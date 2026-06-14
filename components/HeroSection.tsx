"use client";

import { motion } from "framer-motion";
import GlowButton from "@/components/GlowButton";
import { Sparkles } from "lucide-react";

const exampleFlows = [
  {
    title: "Executive leadership talent",
    bottleneck: "Needs senior leaders for the next growth phase.",
    supply: "Mandate criteria satisfied and talent placed.",
  },
  {
    title: "HNWI access",
    bottleneck: "Needs high-net-worth access without sales overhead.",
    supply: "HNWI access secured and margins improved.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-12">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-400/8 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Strategic introductions for growing businesses
          </div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            The right business opportunity often starts with the right introduction.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We identify companies with complementary needs and introduce them to the exact partners, advisors, vendors, or channels that move them forward.
          </motion.p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <GlowButton href="#who-we-connect" className="bg-transparent border-cyan-300/30 text-cyan-100 hover:bg-cyan-500/10">
              See who we connect
            </GlowButton>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="glass-panel rounded-3xl border border-white/10 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">What we do</p>
              <p className="mt-3 text-sm leading-7">
                Discover and facilitate introductions for companies that need the right relationship, not another directory.
              </p>
            </div>
            <div className="glass-panel rounded-3xl border border-white/10 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Who it is for</p>
              <p className="mt-3 text-sm leading-7">
                Founders, operators, advisors, and business leaders seeking partners, expertise, or access to new opportunity networks.
              </p>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="relative isolate overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/20 to-transparent blur-2xl" />
          <div className="relative grid gap-6 rounded-[32px] bg-slate-950/90 p-6">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/75">Introduction examples</div>
              <div className="text-2xl font-semibold text-white">Connections that explain what we are.</div>
            </div>
            <div className="grid gap-4">
              {exampleFlows.map((flow) => (
                <div key={flow.title} className="group rounded-[28px] border border-white/10 bg-slate-900/95 p-5 transition hover:border-cyan-300/30">
                  <div className="text-sm uppercase tracking-[0.08em] text-cyan-300/80">{flow.title}</div>
                  <div className="mt-4 grid gap-3 rounded-3xl bg-white/5 p-4 text-sm text-slate-200">
                    <div className="grid gap-2 sm:grid-cols-[96px_1fr]">
                      <span className="text-slate-400">Bottleneck</span>
                      <span className="text-white">{flow.bottleneck}</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-[96px_1fr]">
                      <span className="text-slate-400">Connector</span>
                      <span className="text-cyan-200">NexusForge</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-[96px_1fr]">
                      <span className="text-slate-400">Outcome</span>
                      <span className="text-white">{flow.supply}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

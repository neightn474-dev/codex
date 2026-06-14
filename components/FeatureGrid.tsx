"use client";

import { motion } from "framer-motion";

const pairs = [
  {
    demand: "Companies Hiring Talent",
    supply: "Executive Search Firms",
  },
  {
    demand: "Firms Seeking HNWI Access",
    supply: "Wealth Advisory Firms",
  },
  {
    demand: "Companies Seeking Distribution",
    supply: "Distribution Partners",
  },
  {
    demand: "Businesses Requiring Specialized Expertise",
    supply: "Professional Service Providers",
  },
  {
    demand: "Companies Seeking Strategic Alliances",
    supply: "Strategic Consultants",
  },
  {
    demand: "Businesses Seeking Capital Access",
    supply: "Investor Networks",
  },
];

export default function FeatureGrid() {
  return (
    <section id="who-we-connect" className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Who we connect</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Demand and supply meet through a high-touch introduction process.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            We identify opportunities hidden within business needs and facilitate introductions to the partners, providers, and organizations best positioned to deliver results.
          </p>
        </div>
        <div className="glass-panel rounded-[32px] border border-white/10 p-6">
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
            <div className="text-sm uppercase tracking-[0.06em] text-cyan-300/80 text-center">Demand side</div>
            <div className="text-sm uppercase tracking-[0.06em] text-cyan-300/80 text-center">Supply side</div>
          </div>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="mx-auto mt-4 flex items-center gap-2 max-w-xl">
            <div className="h-px flex-1 bg-cyan-400/10" />
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Demand side</span>
            <span className="text-cyan-200">→</span>
            <div className="rounded-full border border-cyan-300/20 bg-slate-950/90 px-4 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
              NexusForge
            </div>
            <span className="text-cyan-200">→</span>
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Supply side</span>
            <div className="h-px flex-1 bg-cyan-400/10" />
          </motion.div>
          <div className="mt-6 grid gap-4">
            {pairs.map((pair) => (
              <div key={pair.demand} className="relative grid gap-4 sm:grid-cols-[1fr_1fr] items-stretch">
                <div className="flex min-h-[3.5rem] items-center rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-left text-slate-200">
                  {pair.demand}
                </div>
                <div className="flex min-h-[3.5rem] items-center rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-left text-slate-200">
                  {pair.supply}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-full sm:block">
                  <div className="absolute left-[50%] top-1/2 h-px w-24 -translate-y-1/2 transform bg-cyan-400/10 blur-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const opportunities = [
  {
    title: "Leadership introductions",
    subtitle: "Match top executives with recruiters who understand your market.",
    meaning: "Introductions to executive search partners with access to senior candidates and a record of confidential board-level placements.",
    bestFor: "Companies hiring C-suite or senior leadership where fit, sector experience, and discretion are critical.",
    unlocks: "A shorter leadership search by engaging recruiters who can move a targeted shortlist through the process.",
    why: "Senior searches depend on trusted relationships; the right bridge reduces time to hire and preserves employer reputation.",
  },
  {
    title: "Wealth advisory partnerships",
    subtitle: "Connect with advisors trusted by high-net-worth stakeholders.",
    meaning: "Introductions to wealth advisory teams that serve high-net-worth individuals, family offices, and private capital relationships.",
    bestFor: "Firms seeking access to advisors with established private client networks and capital relationships.",
    unlocks: "Qualified meetings with advisors who can evaluate your opportunity and route it to relevant investor or family-office channels.",
    why: "This space is relationship-driven; a trusted introduction creates access that direct outreach rarely delivers.",
  },
  {
    title: "Specialist vendor selection",
    subtitle: "Find providers that understand your technical and operational requirements.",
    meaning: "Introductions to specialist providers whose capabilities match your technical, compliance, or operational needs.",
    bestFor: "Teams sourcing niche vendors for technology, compliance, or industry-specific operations.",
    unlocks: "Faster vendor evaluation by connecting with providers already aligned to your scope and requirements.",
    why: "Generic marketplaces create noise; a precise introduction helps avoid misaligned proposals and wasted review cycles.",
  },
  {
    title: "Growth channel introductions",
    subtitle: "Identify distribution partners that fit your go-to-market model.",
    meaning: "Introductions to distribution and channel partners with established access to the customers or verticals you need.",
    bestFor: "Companies expanding into new markets or customer segments through partner-led distribution.",
    unlocks: "Partnerships that create predictable pipelines instead of relying on transactional lead generation.",
    why: "Channel growth depends on partner fit; a vetted introduction improves the likelihood of a productive commercial relationship.",
  },
  {
    title: "Strategic advisory access",
    subtitle: "Link with consultants who can shape your next phase of growth.",
    meaning: "Introductions to advisors with relevant sector experience who can support strategy, funding, or execution decisions.",
    bestFor: "Leadership teams seeking advisory support for scaling, transaction readiness, or strategic change.",
    unlocks: "Access to advisors who can turn business priorities into practical plans and stakeholder-ready recommendations.",
    why: "The right advisor adds clarity and reduces risk by aligning strategy with execution capability.",
  },
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = opportunities[activeIndex];

  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="space-y-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Introduction opportunities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            The most valuable introductions are the ones that clearly match a real need.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            Explore the types of connections we facilitate for founders, operators, and advisors who need clearer access to opportunity.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {opportunities.map((opportunity, index) => (
              <motion.button
                key={opportunity.title}
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-[28px] border px-5 py-4 text-left transition duration-300 ${
                  activeIndex === index
                    ? "border-cyan-300/30 bg-slate-950/90 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
                    : "border-white/10 bg-slate-950/80 hover:border-cyan-300/20"
                }`}
              >
                <div className="text-sm font-semibold text-slate-200">{opportunity.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{opportunity.subtitle}</p>
              </motion.button>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-violet-500/10">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Selected introduction type</div>
            <div className="mt-6 space-y-6 text-sm leading-7 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white">{active.title}</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-200">What this means:</p>
                    <p className="mt-2">{active.meaning}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Best for:</p>
                    <p className="mt-2">{active.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">What it unlocks:</p>
                    <p className="mt-2">{active.unlocks}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Why this matters:</p>
                    <p className="mt-2">{active.why}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const networkAreas = [
  {
    title: "Matching demand to supply",
    detail: "We connect companies seeking a specific expertise with partners that can deliver it.",
  },
  {
    title: "Creating high-quality referral paths",
    detail: "Our introductions are built for relevance, not volume or vanity metrics.",
  },
  {
    title: "Aligning business intent",
    detail: "We separate serious, actionable needs from exploratory outreach.",
  },
  {
    title: "Curating trusted advisors",
    detail: "We introduce firms that have proven relationships and contextual fit.",
  },
  {
    title: "Building private networks",
    detail: "We work with relationships that are not visible on public marketplaces.",
  },
  {
    title: "Supporting early-stage and enterprise needs",
    detail: "From leadership hiring to growth partnerships, we connect the right people at the right time.",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Network</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">How we connect demand and supply with clarity.</h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Our process is designed around precise need definition, network curation, and introductions that are actionable from the first conversation.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {networkAreas.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-black/20">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-slate-300 leading-7">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

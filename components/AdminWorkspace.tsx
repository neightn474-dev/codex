"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Firm, Lead } from "@/lib/store";
import GlowButton from "@/components/GlowButton";

const updateLeadStatus = async (id: string, status: string) => {
  await fetch(`/api/leads`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
};

export default function AdminWorkspace() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [firms, setFirms] = useState<Firm[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [leadsRes, firmsRes] = await Promise.all([fetch("/api/leads"), fetch("/api/firms")]);
      const leadsData = await leadsRes.json();
      const firmsData = await firmsRes.json();
      setLeads(leadsData);
      setFirms(firmsData);
      setSelectedLead(leadsData[0] ?? null);
      setIsLoading(false);
    };
    load();
  }, []);

  const recommendations = useMemo(() => {
    if (!selectedLead) return [];
    const query = selectedLead.hiringNeed.toLowerCase();
    return firms
      .map((firm) => ({
        ...firm,
        score:
          (firm.specialization.toLowerCase().includes("advisor") ? 16 : 8) +
          (firm.industries.some((item) => query.includes(item.toLowerCase())) ? 12 : 0) +
          (firm.roles.some((item) => query.includes(item.toLowerCase())) ? 14 : 0) +
          Math.round(firm.rating * 6),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [firms, selectedLead]);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-cyan-500/10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Active leads</p>
          <div className="mt-4 text-4xl font-semibold text-white">{leads.length}</div>
          <p className="mt-2 text-sm text-slate-400">New inquiries and active opportunity processes.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-violet-500/10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Partners</p>
          <div className="mt-4 text-4xl font-semibold text-white">{firms.length}</div>
          <p className="mt-2 text-sm text-slate-400">Verified partners loaded into the matching workspace.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-emerald-500/10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Match recommendations</p>
          <div className="mt-4 text-4xl font-semibold text-white">{recommendations.length}</div>
          <p className="mt-2 text-sm text-slate-400">Contextual recommendations for the selected lead.</p>
        </motion.div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Opportunity pipeline</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Inquiry pipeline</h2>
              </div>
              <GlowButton href="/admin" className="!px-6 !py-3 text-sm">Refresh</GlowButton>
            </div>
            <div className="mt-6 space-y-4">
              {isLoading ? <p className="text-slate-400">Loading leads…</p> : null}
              {leads.map((lead) => (
                <div key={lead.id} className="rounded-[28px] border border-white/10 bg-slate-900/90 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{lead.company}</p>
                      <p className="mt-2 text-base font-semibold text-white">{lead.name} — {lead.title}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{lead.stage}</span>
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">{lead.urgency}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{lead.hiringNeed}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[("Discovery" as const), ("Qualified" as const), ("Matched" as const), ("Closed" as const)].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={async () => {
                          await updateLeadStatus(lead.id, status);
                          const updated = leads.map((item) => (item.id === lead.id ? { ...item, status } : item));
                          setLeads(updated);
                        }}
                        className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${lead.status === status ? "bg-cyan-500 text-black" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Matching workspace</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Partner recommendations</h2>
            {selectedLead ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-[28px] bg-white/5 p-4 text-slate-300">
                  <p className="text-sm text-slate-400">Selected lead</p>
                  <p className="mt-2 text-base text-white">{selectedLead.company} — {selectedLead.title}</p>
                  <p className="mt-2 text-sm leading-6">{selectedLead.hiringNeed}</p>
                </div>
                {recommendations.map((firm) => (
                  <div key={firm.id} className="rounded-[28px] border border-white/10 bg-slate-900/95 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{firm.name}</p>
                        <p className="mt-1 text-sm text-slate-400">{firm.specialization}</p>
                      </div>
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">Score {firm.score}</span>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-slate-300">
                      <p>{firm.review}</p>
                      <p className="text-slate-400">Industry: {firm.industries.join(", ")}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-[28px] bg-white/5 p-4 text-slate-300">
                  <p className="text-sm">Tip: Choose the partner aligned to the lead’s sector, objective, and timeline.</p>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-slate-400">Select a lead from the pipeline to display recommendations.</p>
            )}
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Partner database</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Saved partners</h2>
            <div className="mt-6 space-y-4">
              {firms.map((firm) => (
                <div key={firm.id} className="rounded-[28px] bg-slate-900/95 p-4 text-slate-300">
                  <p className="font-semibold text-white">{firm.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{firm.specialization}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">Industries: {firm.industries.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

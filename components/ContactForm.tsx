"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/GlowButton";

const initialForm = {
  name: "",
  email: "",
  company: "",
  title: "",
  hiringNeed: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <motion.form onSubmit={handleSubmit} whileTap={{ scale: 0.995 }} className="grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Discovery call</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tell us what opportunity you’re pursuing.</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">We’ll respond with tailored next steps and a discovery call slot.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-100">
          Name
          <input required name="name" value={form.name} onChange={handleChange} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          Email
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-100">
          Company
          <input required name="company" value={form.company} onChange={handleChange} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          Role / title
          <input required name="title" value={form.title} onChange={handleChange} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-100">
        What are you looking for?
        <textarea required name="hiringNeed" value={form.hiringNeed} onChange={handleChange} rows={4} className="rounded-[28px] border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
      </label>
      <label className="grid gap-2 text-sm text-slate-100">
        Additional context
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="rounded-[28px] border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <GlowButton type="submit" className="!px-8 !py-4">
          {status === "sending" ? "Sending…" : "Send Inquiry"}
        </GlowButton>
        <p className="text-sm text-slate-400">We respond within 24 hours to qualified founder requests.</p>
      </div>
      {status === "success" ? <p className="text-sm text-emerald-300">Thanks — your inquiry has been received.</p> : null}
      {status === "error" ? <p className="text-sm text-rose-300">Something went wrong. Please try again.</p> : null}
    </motion.form>
  );
}

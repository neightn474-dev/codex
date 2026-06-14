"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GlowButton from "@/components/GlowButton";

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      router.push("/admin");
      return;
    }

    setStatus("error");
  };

  return (
    <main className="relative overflow-hidden bg-[#060708] text-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Admin login</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Secure access for internal operations.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Use your administrator credentials to access leads, partner records, and matching analytics.
            </p>
          </div>
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-slate-100">
              Email
              <input required type="email" value={credentials.email} onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
            <label className="grid gap-2 text-sm text-slate-100">
              Password
              <input required type="password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
            <div className="flex items-center justify-between gap-4 sm:flex-row sm:items-center">
              <GlowButton type="submit" className="!px-8 !py-4">
                {status === "sending" ? "Signing in…" : "Sign in"}
              </GlowButton>
            </div>
            {status === "error" ? <p className="text-sm text-rose-300">Unable to sign in. Check your credentials.</p> : null}
          </form>
        </div>
      </div>
    </main>
  );
}

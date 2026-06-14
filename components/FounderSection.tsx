"use client";

export default function FounderSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Founder story</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Built to connect businesses that already belong together.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            The business world is full of missed introductions. Our founder created this service to remove noise, focus on fit, and help companies find the exact partners, advisors, and channels they need.
          </p>
        </div>
        <div className="glass-panel rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-cyan-500/10">
          <div className="space-y-5">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Our approach</div>
            <div className="rounded-[28px] bg-white/5 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Focus</p>
              <p className="mt-3 leading-7">
                We focus on relationships that are more than transactions: the ones that unlock access, credibility, and long-term value.
              </p>
            </div>
            <div className="rounded-[28px] bg-white/5 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Value</p>
              <p className="mt-3 leading-7">
                Every introduction is reviewed on alignment, relevance, and whether it gives both sides a clear next step.
              </p>
            </div>
            <div className="rounded-[28px] bg-white/5 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Outcome</p>
              <p className="mt-3 leading-7">
                We help companies stop searching in the dark and start making introductions that are easier to evaluate and act on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

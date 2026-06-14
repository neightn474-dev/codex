import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Deliver — NexusForge",
  description: "How we deliver high-confidence introductions, vetting, and matchmaking services.",
};

export default function HowWeDeliverPage() {
  return (
    <main className="relative overflow-hidden bg-[#060708] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">How we deliver</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Structured process, curated introductions, and measurable outcomes.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We combine precise need-definition, targeted network mapping, and thoughtful qualification to ensure every introduction has context, relevance, and a clear next step.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-8">
              <h2 className="text-2xl font-semibold text-white">Our process</h2>
              <p className="text-slate-300 leading-8">
                We begin with discovery, map potential partners, qualify matches, and then facilitate introductions with clear objectives and follow-up.
              </p>
            </section>

            <section className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-8">
              <h2 className="text-2xl font-semibold text-white">Quality controls</h2>
              <ul className="space-y-3 text-slate-300">
                <li>Targeted fit criteria to avoid noise.</li>
                <li>Contextual briefing for both parties.</li>
                <li>Follow-up and outcome tracking for improvement.</li>
              </ul>
            </section>
          </div>

          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/90 p-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">Outcomes we measure</h2>
              <p className="mt-4 text-slate-300 leading-8">
                Relevance of connections, engagement quality, and progress toward the stated business outcome—our work is measured by how quickly conversations become productive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

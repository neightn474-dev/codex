import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusForge",
  description: "Connector services for strategic introductions, partner matching, and opportunity discovery.",
};

const services = [
  {
    title: "Strategic introductions",
    description: "We match your company with partners, advisors, vendors, and investors aligned with your growth objectives.",
  },
  {
    title: "Network vetting",
    description: "Every relationship is vetted for relevance, credibility, and the right fit before we make an introduction.",
  },
  {
    title: "Opportunity discovery",
    description: "We help uncover high-value connections that are often hidden in adjacent markets and professional networks.",
  },
  {
    title: "Engagement guidance",
    description: "We support the introductory conversation and help both sides move toward a productive, outcome-driven relationship.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#060708] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Services</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Connecting your business to the right opportunities.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We help companies find the partners, clients, advisors, and go-to-market relationships that create momentum and unlock growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-lg shadow-black/20">
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-slate-300 leading-7">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

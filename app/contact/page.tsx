import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — NexusForge",
  description: "Connect with our team to uncover partnership, advisory, and growth opportunities.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#060708] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Start the conversation that finds the right opportunity.</h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Tell us what you’re looking for and we’ll match you with partners, advisors, clients, or professional relationships that can move your business forward.
              </p>
            </div>
            <div className="mt-10 grid gap-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-6 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Calendar booking</p>
                <p className="mt-3 leading-7">Prefer to schedule a quick discovery conversation? Book directly through our calendar experience.</p>
              </div>
              <a
                href="https://app.cal.com/neightn-6ccu8l/signal-audit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-cyan-500/15 px-5 py-4 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/25"
                data-cal-link="neightn-6ccu8l/signal-audit"
                data-cal-namespace="signal-audit"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                Book a discovery call
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

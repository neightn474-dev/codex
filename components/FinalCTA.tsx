"use client";

import GlowButton from "@/components/GlowButton";

export default function FinalCTA() {
  return (
    <section className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl lg:p-12">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 p-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-cyan-300/40 to-transparent" />
        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Ready to move forward</p>
            <h2 className="mt-4 text-[1.85rem] font-semibold tracking-[-0.03em] text-white sm:text-[2.15rem]">Start the introduction with clarity, not guesswork.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              If you need partners, advisors, vendors, or growth channels, we help you get to the right conversation quickly and intentionally.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3 sm:gap-4">
            <GlowButton
              href="https://app.cal.com/neightn-6ccu8l/signal-audit"
              className="!w-[14rem] !px-8 !py-4 bg-transparent border-cyan-300/30 text-cyan-100 hover:bg-cyan-500/10"
              data-cal-link="neightn-6ccu8l/signal-audit"
              data-cal-namespace="signal-audit"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a discovery call
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

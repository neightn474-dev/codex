"use client";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <div className="absolute left-[-10%] top-8 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-floatSlow" />
      <div className="absolute right-[-5%] top-24 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl animate-floatSlow" />
      <div className="absolute left-1/2 top-[36%] h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#020203] via-transparent to-transparent" />
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
    </div>
  );
}

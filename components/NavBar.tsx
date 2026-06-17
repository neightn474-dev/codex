import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060708]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2.5 text-white" aria-label="NexusForge home">
          <Image
            src="/codex/nexusforge-logo-transparent.png"
            alt="NexusForge logo"
            width={132}
            height={32}
            priority
            className="h-7 w-auto object-contain sm:h-8 md:h-8"
          />
          <span className="font-mono text-[0.98rem] font-semibold tracking-[0.18em] text-white uppercase sm:text-base">NexusForge</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/how-we-deliver" className="transition hover:text-white">How we deliver</Link>
          <Link href="/services" className="transition hover:text-white">Services</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

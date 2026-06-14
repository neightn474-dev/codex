"use client";

import { type ReactNode } from "react";

type GlowButtonProps = {
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function GlowButton(props: GlowButtonProps) {
  const { href, external, className = "", children, ...rest } = props;
  const baseClass =
    "relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 will-change-transform shadow-lg shadow-cyan-500/10 backdrop-blur-xl hover:-translate-y-0.5 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30";

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={`${baseClass} ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";

/* Solid, readable CTAs — no ghost buttons anywhere on this site. */

export function BookButton({
  className = "",
  label = "Book Online",
  dark = false,
}: {
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={SITE.booking}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-bold tracking-wide transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-[-1deg] shadow-chip ${
        dark
          ? "bg-leaf text-forest hover:bg-leaf-bright"
          : "bg-forest text-leaf-bright hover:bg-pine"
      } ${className}`}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function CallChip({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-bold tracking-wide transition-colors ${
        dark
          ? "bg-cream/10 text-cream ring-1 ring-cream/40 hover:bg-cream/20"
          : "bg-paper text-forest ring-2 ring-forest/70 hover:bg-forest hover:text-cream"
      } ${className}`}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .5 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1l-2.2 2.2Z" />
      </svg>
      {SITE.phone}
    </a>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.6 1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

/* Review trust marker — links out, never states a number. */
export function GoogleRating({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={SITE.googleReviews}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-2.5 text-sm font-bold ${dark ? "text-cream/90" : "text-ink"}`}
    >
      <Stars className="text-leaf" />
      <span className="border-b-2 border-transparent transition-colors group-hover:border-leaf">
        Loved on Google — read the reviews
      </span>
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "leaf",
}: {
  children: React.ReactNode;
  tone?: "leaf" | "rose" | "cream";
}) {
  const tones = {
    leaf: "text-moss",
    rose: "text-rose-deep",
    cream: "text-leaf-bright",
  };
  return (
    <p className={`mb-4 text-[13px] font-extrabold uppercase tracking-[0.22em] ${tones[tone]}`}>
      {children}
    </p>
  );
}

/* Accent word in the logo's calligraphic voice, underlined with a swish that
   draws itself on scroll. */
export function Swish({ children, color = "var(--color-leaf)" }: { children: React.ReactNode; color?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="accent relative inline-block whitespace-nowrap pr-[0.05em]">
      {children}
      <svg
        className="absolute -bottom-[0.08em] left-[-2%] h-[0.32em] w-[104%] overflow-visible"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M2 9.5C22 4.5 60 3 98 6.5"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.9"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </span>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-bold ${dark ? "text-leaf-bright" : "text-moss"}`}
    >
      <span className="border-b-2 border-current/30 transition-colors group-hover:border-current">{children}</span>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

/* OYA partner chip — real brand, real logo, on a white chip so it sits on any bg. */
export function OyaChip({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2.5 pr-5 shadow-chip ring-1 ring-forest/10 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/oya-logo.png" alt="OYA — Own Your Art" width={40} height={40} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
      <span className="text-left text-[13px] font-bold leading-tight text-ink">
        Proudly an
        <br />
        OYA salon
      </span>
    </span>
  );
}

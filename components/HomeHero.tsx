"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import FlipImage from "@/components/FlipImage";
import LogoStamp from "@/components/LogoStamp";
import { BookButton, CallChip, GoogleRating } from "@/components/ui";

const line1 = ["Come", "as", "you", "are."];

/* Sticker chips — priced like the wall menu, stuck on like merch */
function Sticker({
  children,
  className = "",
  tilt = "-5deg",
  tone = "lime",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
  tone?: "lime" | "pink";
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
      style={{ "--tilt": tilt } as React.CSSProperties}
      className={`float-soft absolute z-10 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 font-display text-[13px] font-extrabold uppercase tracking-wider shadow-chip sm:text-sm ${
        tone === "lime" ? "bg-leaf-bright text-forest" : "bg-rose text-forest"
      } ${className}`}
    >
      {children}
    </motion.span>
  );
}

export default function HomeHero() {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrap}
      className="relative mx-auto grid w-full max-w-7xl flex-1 content-center gap-x-14 gap-y-6 px-4 py-6 [grid-template-areas:'a'_'v'_'b'] sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:grid-rows-[auto_auto] lg:gap-y-0 lg:[grid-template-areas:'a_v'_'b_v'] lg:px-8 lg:py-10"
    >
      {/* Ghost logo watermark — the brand literally behind everything */}
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={700}
        priority
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 hidden w-[540px] -translate-y-1/2 rotate-[-9deg] opacity-[0.05] lg:block"
      />

      <div className="relative text-center [grid-area:a] lg:self-end lg:text-left">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-forest py-2 pl-3 pr-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-leaf-bright"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-leaf-bright" aria-hidden>
            <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            <path d="m8.2 7.4 12 8.8m-12-.4 12-8.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Boynton Beach hair studio
        </motion.p>

        <h1 className="font-display text-[13.2vw] font-extrabold leading-[0.98] text-forest sm:text-[64px] xl:text-[78px]">
          <span className="block">
            {line1.map((w, i) => (
              <motion.span
                key={w}
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: "0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
                {i < line1.length - 1 && " "}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="mt-1 block"
            initial={reduce ? false : { opacity: 0, y: "0.35em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Let us make you{" "}
            <span className="whitespace-nowrap">a{" "}
            <span className="accent relative inline-block whitespace-nowrap pr-[0.06em] font-medium italic text-moss">
              star.
              <svg className="absolute -bottom-[0.06em] left-[-2%] h-[0.3em] w-[104%] overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden>
                <motion.path
                  d="M2 9.5C22 4.5 60 3 98 6.5"
                  fill="none"
                  stroke="var(--color-rose-deep)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.75, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>
            </span></span>
          </motion.span>
        </h1>
      </div>

      {/* On mobile the hair itself comes right after the headline — you know
          it's a salon before you scroll */}
      <div className="relative text-center [grid-area:b] lg:self-start lg:text-left">
        {/* Content lands fast — never waits on theatrics */}
        <p className="mx-auto mt-0 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0 lg:mt-5">
          Balayage, precision cuts, gray coverage, perms &amp; keratin — in clean
          OYA color, inside Artisans Salon on Congress&nbsp;Avenue.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
          <BookButton label="Book Your Appointment" />
          <CallChip />
        </div>
        <div className="mt-6 flex justify-center pb-1 lg:justify-start">
          <GoogleRating />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[400px] pt-2 [grid-area:v] sm:max-w-[460px] lg:place-self-center lg:pt-0">
        <div className="arch relative overflow-hidden bg-clay shadow-lift">
          <FlipImage
            src="/images/hero-flip.jpg"
            alt="Layered brunette bob caught mid hair-flip — cut and color by Hair Rocks @Artisans, Boynton Beach"
            width={2000}
            height={1334}
            priority
            sizes="(max-width: 1024px) 92vw, 440px"
            imgClassName="aspect-[16/11] object-[62%_30%] lg:aspect-[5/6]"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center pr-24 sm:pr-16">
            <span className="rounded-full bg-forest/75 px-4 py-2 text-xs font-bold tracking-wide text-cream backdrop-blur-sm">
              psst — tap her for a hair&nbsp;flip
            </span>
          </span>
        </div>

        {/* Live-from-the-chair video bubble, story-style */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 20 }}
          className="absolute -left-3 -top-4 z-10 sm:-left-8 sm:-top-6"
        >
          <div className="rounded-full bg-cream p-1.5 shadow-lift ring-2 ring-leaf">
            <video
              className="h-[86px] w-[86px] rounded-full object-cover sm:h-[104px] sm:w-[104px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/chair-loop-poster.jpg"
              aria-label="Live from the chair — combing freshly styled hair"
            >
              <source src="/videos/chair-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-leaf-bright">
            at the chair
          </span>
        </motion.div>

        <Sticker tone="pink" tilt="5deg" delay={0.65} className="-right-2 top-[16%] sm:-right-6">
          Balayage · $165
        </Sticker>
        <Sticker tone="lime" tilt="-6deg" delay={0.8} className="-left-2 bottom-[22%] sm:-left-7">
          Cuts · from $25
        </Sticker>

        {/* Spinning stamp — bottom right, overlapping the arch edge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, rotate: -30, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 180, damping: 16 }}
          className="absolute -bottom-6 -right-2 z-10 sm:-right-5"
        >
          <LogoStamp size={104} />
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Stars } from "@/components/ui";

/* One warm hello from Tiffany. Past the hero OR 10s — whichever comes first.
   Once per session. Trivially easy to dismiss. Perfectly centered. */
export default function OwnerPopup() {
  const [open, setOpen] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem("hr-popup")) return;
    const show = () => {
      if (fired.current) return;
      fired.current = true;
      sessionStorage.setItem("hr-popup", "1");
      setOpen(true);
    };
    const timer = window.setTimeout(show, 10000);
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest/55 p-4 backdrop-blur-[3px]"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="A note from Tiffany"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[400px] overflow-hidden rounded-3xl bg-paper shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors hover:bg-forest/10"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="bg-blush px-7 pt-8 text-center">
              <div className="arch-full mx-auto flex h-24 w-24 items-center justify-center overflow-hidden bg-cream ring-4 ring-paper">
                <Image src="/images/logo.png" alt="" width={96} height={96} className="h-16 w-16 object-contain" />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 pb-5 text-sm font-bold text-ink">
                <Stars className="text-leaf" />
                {" Loved on Google"}
              </div>
            </div>

            <div className="px-7 pb-7 pt-5 text-center">
              <h3 className="font-display text-[26px] font-semibold leading-tight text-forest">
                Hi, I&rsquo;m Tiffany — this chair&rsquo;s for&nbsp;you.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Thirty years behind the chair, and I still love a good before&nbsp;&amp;&nbsp;after.
                Come as you are — my team and I will take it from&nbsp;there.
              </p>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener"
                className="mt-5 block rounded-full bg-forest py-4 font-bold text-cream shadow-chip transition-colors hover:bg-pine"
              >
                Book an Appointment
              </a>
              <a href={SITE.phoneHref} className="mt-3 block text-sm font-bold text-moss hover:text-forest">
                or call {SITE.phone}
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-4 text-sm text-ink-soft/80 underline-offset-2 hover:underline"
              >
                No thanks — just looking around
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

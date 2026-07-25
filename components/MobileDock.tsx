"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

/* Fixed Call / Book bar — appears once the visitor scrolls past the hero. */
export default function MobileDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="mx-auto flex max-w-md gap-2.5 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-2">
            <a
              href={SITE.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-cream py-4 font-bold text-forest shadow-lift ring-1 ring-forest/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .5 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1l-2.2 2.2Z" />
              </svg>
              Call
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
              className="flex flex-[1.6] items-center justify-center rounded-full bg-forest py-4 font-bold text-cream shadow-lift"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

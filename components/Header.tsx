"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 border-b ${
        scrolled ? "border-forest/15 shadow-[0_6px_30px_-18px_rgba(20,32,18,0.4)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[96px] lg:px-8">
        {/* Real logo, real size — always returns to the top of home */}
        <Link href="/" aria-label="Hair Rocks @Artisans — home" className="shrink-0" onClick={() => window.scrollTo({ top: 0 })}>
          <Image
            src="/images/logo.png"
            alt="Hair Rocks @Artisans"
            width={144}
            height={144}
            priority
            className="h-[66px] w-[66px] object-contain transition-transform duration-300 hover:rotate-[-4deg] hover:scale-105 lg:h-[76px] lg:w-[76px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.slice(0, -1));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 font-display text-[15px] font-bold tracking-wide transition-colors ${
                  active ? "text-moss" : "text-ink hover:text-moss"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[3px] rounded-full bg-leaf transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-bold text-forest ring-2 ring-forest/60 transition-colors hover:bg-forest hover:text-cream sm:inline-flex"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .5 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1l-2.2 2.2Z" />
            </svg>
            {SITE.phone}
          </a>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center rounded-full bg-forest px-5 py-2.5 font-display text-sm font-bold tracking-wide text-leaf-bright shadow-chip transition-transform duration-300 hover:-translate-y-0.5 hover:bg-pine"
          >
            Book Online
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-2 ring-forest/40 lg:hidden"
          >
            <div className="relative h-[14px] w-[19px]">
              <span className={`absolute left-0 top-0 h-[2.5px] w-full rounded bg-forest transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-[2.5px] w-full rounded bg-forest transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[12px] h-[2.5px] w-full rounded bg-forest transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Scroll progress — a thin lime thread under the header */}
      <motion.div
        className="absolute inset-x-0 bottom-[-2px] h-[3px] origin-left bg-leaf"
        style={{ scaleX: progress }}
        aria-hidden
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-forest/10 bg-cream lg:hidden"
          >
            <div className="space-y-1 px-5 pb-6 pt-3">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-3 font-display text-2xl font-bold text-forest active:bg-sand"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href={SITE.phoneHref}
                  className="flex-1 rounded-full bg-paper py-3.5 text-center font-bold text-forest ring-2 ring-forest/60"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

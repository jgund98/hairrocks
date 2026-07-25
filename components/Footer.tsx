import Image from "next/image";
import Link from "next/link";
import { SITE, HOURS, AREAS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-forest pb-28 text-cream lg:pb-10">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Hair Rocks @Artisans"
              width={200}
              height={200}
              className="h-32 w-32 object-contain"
            />
            <p className="mt-5 max-w-sm text-cream/80">
              Come as you are &amp; let us make you a&nbsp;star. Clean OYA color and
              30+&nbsp;years of craft inside Artisans Salon, Boynton&nbsp;Beach.
              Big hair? Always&nbsp;welcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-leaf px-6 py-3 font-bold text-forest transition-colors hover:bg-leaf-bright"
              >
                Book Online
              </a>
              <a
                href={SITE.giftCards}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-cream/10 px-6 py-3 font-bold text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream/20"
              >
                Gift Cards
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-leaf-bright">Find the studio</h3>
            <address className="mt-4 space-y-2.5 not-italic text-cream/85">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="block hover:text-cream">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </a>
              <a href={SITE.phoneHref} className="block font-bold text-cream hover:text-leaf-bright">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block hover:text-cream">
                {SITE.email}
              </a>
            </address>
            <ul className="mt-5 space-y-1.5 text-sm text-cream/70">
              {HOURS.filter((h) => !["Wednesday", "Thursday", "Saturday"].includes(h.day)).map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-cream/10 pb-1.5">
                  <span>{h.day === "Tuesday" ? "Tue – Thu" : h.day === "Friday" ? "Fri – Sat" : h.day}</span>
                  <span className="text-cream/90">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-leaf-bright">Services</h3>
            <ul className="mt-4 space-y-2 text-cream/85">
              <li><Link href="/services/haircuts/" className="hover:text-cream">Haircuts</Link></li>
              <li><Link href="/services/color/" className="hover:text-cream">Hair Color &amp; Balayage</Link></li>
              <li><Link href="/services/styling/" className="hover:text-cream">Styling &amp; Treatments</Link></li>
              <li><Link href="/services/perms-keratin/" className="hover:text-cream">Perms &amp; Keratin</Link></li>
              <li><Link href="/services/waxing/" className="hover:text-cream">Facial Waxing</Link></li>
              <li><Link href="/book/" className="hover:text-cream">Booking &amp; Gift Cards</Link></li>
            </ul>
          </div>
        </div>

        {/* Proudly serving — real local SEO signal, real copy */}
        <p className="mt-12 border-t border-cream/10 pt-8 text-sm leading-relaxed text-cream/60">
          Proudly serving {AREAS.slice(0, -1).join(", ")} &amp; {AREAS[AREAS.length - 1]} — every
          neighbor within a short drive of Congress&nbsp;Avenue.
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-cream/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-cream/55">
            © {new Date().getFullYear()} {SITE.legalName} · All rights reserved
          </p>
          <a
            href="https://www.epicdevsolutions.com"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2.5 text-sm text-cream/60 transition-colors hover:text-cream"
          >
            Site by
            <Image
              src="/images/epic-logo-white.png"
              alt="Epic Dev Solutions"
              width={110}
              height={28}
              className="h-6 w-auto opacity-75 transition-opacity group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

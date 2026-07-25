import type { Metadata } from "next";
import { SITE, HOURS } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CallChip, Eyebrow, Swish } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book an Appointment Online — Boynton Beach Hair Salon",
  description:
    "Book your Hair Rocks @Artisans appointment online in about a minute through Rosy, the salon's secure scheduler. Or call (561) 964-0120. Gift cards available online too.",
  alternates: { canonical: "/book/" },
};

const STEPS = [
  {
    title: "Pick your service",
    text: "Cut, color, treatment, or the whole package — the online menu mirrors the studio's own.",
  },
  {
    title: "Pick your stylist & time",
    text: "Choose the stylist you click with — or take first available — then grab a real-time slot, Tuesday through Saturday. Monday and Sunday are appointment-only; call and we'll find a spot.",
  },
  {
    title: "Done — see you soon",
    text: "You'll get a confirmation right away. Need to change it? The same link handles rescheduling.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title={
          <>
            <span className="block">A minute now,</span>
            <span className="block">
              a new you&nbsp;<Swish>later.</Swish>
            </span>
          </>
        }
        intro={
          <p>
            Appointments run through Rosy, the studio&rsquo;s secure salon
            scheduler — the same system the front desk runs on, so what you
            book is exactly what&rsquo;s&nbsp;reserved.
          </p>
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-lg font-bold text-cream shadow-chip transition-transform duration-300 hover:-translate-y-0.5 hover:bg-pine"
          >
            Book Online Now
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <CallChip />
        </div>
      </PageHero>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="font-display text-4xl font-semibold text-forest">
                Three <span className="whitespace-nowrap">taps, roughly.</span>
              </h2>
            </Reveal>
            <div className="mt-9 space-y-0">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div className="flex gap-5 border-l-2 border-leaf pb-9 pl-6 last:pb-0">
                    <div>
                      <p className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-moss">
                        Step {i + 1}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-forest">{s.title}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl bg-blush p-7">
                <h3 className="font-display text-xl font-semibold text-forest">
                  Gift cards, minus the guesswork
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                  A Hair Rocks gift card is the rare gift that&rsquo;s never the
                  wrong size. Buy one online in any amount — delivered
                  instantly.
                </p>
                <a
                  href={SITE.giftCards}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex rounded-full bg-rose-deep px-6 py-3 font-bold text-cream shadow-chip transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Buy a Gift Card
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[32px] bg-forest text-cream shadow-lift">
                <div className="grain relative px-8 pb-8 pt-8">
                  <h3 className="relative font-display text-2xl font-semibold text-leaf-bright">
                    Studio hours
                  </h3>
                  <ul className="relative mt-5 space-y-2.5">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4 border-b border-cream/10 pb-2.5 text-[15px]">
                        <span className="font-semibold">{h.day}</span>
                        <span className="text-cream/80">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="relative mt-5 text-sm leading-relaxed text-cream/60">
                    Inside Artisans Salon · {SITE.address.street},{" "}
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 rounded-3xl bg-cream p-7 ring-1 ring-forest/10">
                <h3 className="font-display text-xl font-semibold text-forest">
                  First visit?
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  Come as you are — really. Every appointment starts with a
                  consultation, so if you&rsquo;re not sure what to book, choose
                  a haircut or base color and we&rsquo;ll fine-tune the plan
                  together at the&nbsp;chair.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

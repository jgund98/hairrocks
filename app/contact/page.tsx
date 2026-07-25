import type { Metadata } from "next";
import { SITE, HOURS, AREAS } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BookButton, CallChip, Eyebrow, Swish } from "@/components/ui";

export const metadata: Metadata = {
  title: "Visit the Studio — Congress Ave, Boynton Beach, FL",
  description:
    "Find Hair Rocks @Artisans inside Artisans Salon at 4772 N Congress Ave #204, Boynton Beach, FL 33426. Hours, directions & parking — minutes from Delray Beach, Lake Worth & Lantana.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        mirrored
        title={
          <>
            <span className="block">Easy to find,</span>
            <span className="block">
              hard to&nbsp;<Swish>leave.</Swish>
            </span>
          </>
        }
        intro={
          <p>
            The studio lives inside Artisans Salon on North Congress Avenue —
            suite&nbsp;204 — an easy hop from I-95 or Congress, with parking
            right outside the&nbsp;door.
          </p>
        }
      >
        <div className="flex flex-wrap gap-3.5">
          <BookButton />
          <CallChip />
        </div>
      </PageHero>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-cream p-7 ring-1 ring-forest/10">
                <Eyebrow>The address</Eyebrow>
                <address className="not-italic">
                  <p className="font-display text-2xl font-semibold leading-snug text-forest">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </address>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-pine"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="rounded-full bg-sand px-5 py-2.5 text-sm font-bold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest hover:text-cream"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="rounded-3xl bg-cream p-7 ring-1 ring-forest/10">
                <Eyebrow>Hours</Eyebrow>
                <ul className="space-y-2.5">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-b border-forest/10 pb-2.5 text-[15px] last:border-0 last:pb-0">
                      <span className="font-bold text-forest">{h.day}</span>
                      <span className="text-ink-soft">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-3xl bg-blush p-7">
                <Eyebrow tone="rose">Worth the drive</Eyebrow>
                <p className="leading-relaxed text-ink">
                  Clients make the short trip from{" "}
                  {AREAS.slice(0, 6).join(", ")} — most of Palm Beach County is
                  within fifteen&nbsp;minutes.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-[32px] shadow-lift ring-1 ring-forest/10">
              <iframe
                title="Map to Hair Rocks @Artisans, 4772 N Congress Ave #204, Boynton Beach"
                src="https://www.google.com/maps?q=Hair%20Rocks%20%40Artisans%2C%204772%20N%20Congress%20Ave%20%23204%2C%20Boynton%20Beach%2C%20FL%2033426&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

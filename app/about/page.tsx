import type { Metadata } from "next";
import Image from "next/image";
import { SITE, OYA_FREE_OF } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TownsMarquee from "@/components/TownsMarquee";
import { BookButton, Eyebrow, GoogleRating, OyaChip, Swish } from "@/components/ui";

export const metadata: Metadata = {
  title: "About the Studio — Certified Stylists in Boynton Beach",
  description:
    "Inside Hair Rocks @Artisans: owner Tiffany (certified color specialist & OYA Educator) and a team of certified stylists trained in the latest techniques. Come as you are.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        mirrored
        title={
          <>
            <span className="block">Thirty years.</span>
            <span className="block">
              Still <Swish>obsessed.</Swish>
            </span>
          </>
        }
        intro={
          <p>
            Hair Rocks @Artisans is a studio of certified stylists inside
            Artisans Salon on Congress Avenue — small on purpose, personal by
            design. Here&rsquo;s the story from Tiffany, its founder, plus the
            team that makes it&nbsp;rock.
          </p>
        }
      />

      {/* The letter — first person, signed */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
          <Reveal>
            <article className="relative rounded-[32px] bg-cream p-8 shadow-lift ring-1 ring-forest/10 sm:p-12">
              <p className="font-display text-2xl font-medium leading-relaxed text-forest sm:text-[26px]">
                Hi — I&rsquo;m&nbsp;Tiffany.
              </p>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink">
                <p>
                  I&rsquo;ve spent more than thirty years in hair design, and I
                  still get a little thrill every time someone catches their
                  reflection on the way out. I&rsquo;m a certified color
                  specialist and an OYA&nbsp;Educator, which is a fancy way of
                  saying I geek out on color placement, cutting techniques, and
                  teaching other stylists to love this craft as much as
                  I&nbsp;do.
                </p>
                <p>
                  My philosophy has never changed: natural-looking
                  transformations. Hair that moves, color that could have grown
                  in that way, and a consultation honest enough that you always
                  know what&rsquo;s possible — and what to expect.
                </p>
                <p>
                  I chose OYA for this studio because what goes on your hair
                  matters. Every formula is free of{" "}
                  {OYA_FREE_OF.slice(0, -1).join(", ").toLowerCase()} and
                  pre-sulfates, with natural nutrients like green tea extract
                  and sea kelp doing the repair work while the color does the
                  wow&nbsp;work.
                </p>
                <p>
                  When I&rsquo;m not behind the chair, I&rsquo;m outside —
                  camping, biking, or kayaking somewhere green — usually with my
                  spouse and our three&nbsp;pets.
                </p>
                <p>
                  One warning: the studio playlist leans classic rock, and the
                  volume knob has opinions. Come as you are. We&rsquo;ll take it
                  from&nbsp;there.
                </p>
              </div>
              <p className="mt-8 font-display text-4xl font-semibold italic text-moss" aria-hidden>
                — Tiffany
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-forest/10 pt-6">
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-full bg-sand px-5 py-2.5 text-sm font-bold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest hover:text-cream"
                >
                  {SITE.email}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="rounded-full bg-sand px-5 py-2.5 text-sm font-bold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest hover:text-cream"
                >
                  {SITE.phone}
                </a>
              </div>
            </article>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.08}>
              <div className="arch overflow-hidden shadow-lift">
                <Image
                  src="/images/blowdry.jpg"
                  alt="A round-brush blowout in progress — the studio at work"
                  width={1600}
                  height={1064}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="aspect-[4/5] w-full object-cover object-[35%_50%]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-3xl bg-blush p-7">
                <Eyebrow tone="rose">The credentials</Eyebrow>
                <ul className="space-y-3 text-[16px] font-semibold text-ink">
                  {[
                    "30+ years in hair design",
                    "Certified color specialist",
                    "OYA Educator",
                    "Focus: natural transformations, color placement & cutting technique",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="mt-1 shrink-0 text-rose-deep" fill="currentColor" aria-hidden>
                        <path d="M12 2c1 4 2.5 6.5 4 8-1.5 1.5-3 4-4 8-1-4-2.5-6.5-4-8 1.5-1.5 3-4 4-8Z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <OyaChip />
                  <GoogleRating />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-forest p-7 text-cream">
                <p className="font-display text-xl font-semibold text-leaf-bright">
                  Not a one-chair show
                </p>
                <p className="mt-2.5 leading-relaxed text-cream/80">
                  Every Hair Rocks stylist is a certified hair professional
                  trained in the latest techniques — classic or trendy — and
                  encouraged to keep growing into certified educators, platform
                  artists, and color directors. Pick your stylist when you book,
                  or take first&nbsp;available.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-center lg:py-20">
        <Reveal className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-semibold text-forest sm:text-5xl">
            Ready when you&nbsp;are.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
            A minute to book, a chair with your name on it.
          </p>
          <div className="mt-7 flex justify-center">
            <BookButton label="Book an Appointment" />
          </div>
        </Reveal>
      </section>
      <TownsMarquee />
    </>
  );
}

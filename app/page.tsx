import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, MENU, PACKAGES, REVIEWS, OYA_FREE_OF, HOURS, fromPrice } from "@/lib/site";
import MenuList from "@/components/MenuList";
import HomeHero from "@/components/HomeHero";
import TownsMarquee from "@/components/TownsMarquee";
import ServicesMarquee from "@/components/ServicesMarquee";
import ColorReveal from "@/components/ColorReveal";
import LazyVideo from "@/components/LazyVideo";
import Reveal from "@/components/Reveal";
import { BookButton, CallChip, Eyebrow, OyaChip, Stars, Swish, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hair Salon in Boynton Beach, FL | Hair Rocks @Artisans",
  description:
    "Come as you are & let us make you a star. Boynton Beach hair studio for cuts, balayage, gray coverage, perms, keratin & clean OYA color. Book online today.",
  alternates: { canonical: "/" },
};

const SERVICE_LINKS = [
  { section: MENU[0], img: "/images/haircut.jpg" },
  { section: MENU[3], img: "/images/honey.webp" },
  { section: MENU[1], img: "/images/blowdry.jpg" },
  { section: MENU[4], img: "/images/perm-curls.jpg" },
  { section: MENU[2], img: "/images/brow.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="flex min-h-[100svh] flex-col overflow-x-clip bg-cream pt-[84px] lg:pt-[96px]">
        <HomeHero />
        <ServicesMarquee />
        <TownsMarquee />
      </section>

      {/* ── SERVICE MENU, EDITORIAL ──────────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <Eyebrow>Services &amp; pricing</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] text-forest sm:text-5xl">
                The menu,
                <br />
                priced <Swish color="var(--color-rose-deep)">upfront.</Swish>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                No mystery pricing, no upsell ambush. Every service and every
                dollar, published right here — the way it should&nbsp;be.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mt-9 overflow-hidden rounded-3xl bg-forest p-7 text-cream shadow-lift">
                <div className="grain absolute inset-0" aria-hidden />
                <Image
                  src="/images/logo-white.png"
                  alt=""
                  width={300}
                  height={300}
                  aria-hidden
                  className="absolute -bottom-8 -right-4 w-48 rotate-[-8deg] opacity-[0.13]"
                />
                <p className="relative text-[13px] font-extrabold uppercase tracking-[0.2em] text-leaf-bright">
                  Bundle &amp; save
                </p>
                <MenuList items={PACKAGES} dark className="relative mt-4" />
                <p className="relative mt-4 text-sm text-cream/65">
                  Cut, color &amp; treatment in one visit — the full&nbsp;transformation.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            {SERVICE_LINKS.map(({ section, img }, i) => (
              <Reveal key={section.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${section.slug}/`}
                  className="group flex items-center gap-5 border-b-2 border-forest/10 py-5 transition-colors first:border-t-2 hover:bg-sand/60 sm:gap-7 sm:px-3"
                >
                  <span className="arch-full block h-16 w-16 shrink-0 overflow-hidden bg-sand ring-2 ring-forest/10 sm:h-20 sm:w-20">
                    <Image
                      src={img}
                      alt=""
                      width={160}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-display text-2xl font-extrabold text-forest transition-colors group-hover:text-moss sm:text-[27px]">
                        {section.title}
                      </span>
                      <span className="rounded-full bg-blush px-2.5 py-0.5 text-[13px] font-extrabold text-rose-deep">
                        from {fromPrice(section)}
                      </span>
                    </span>
                    <span className="mt-1 block max-w-md text-[15px] leading-snug text-ink-soft">
                      {section.blurb}
                    </span>
                  </span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-moss transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="pt-6">
                <TextLink href="/services/">See the full menu &amp; prices</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COLOR REVEAL · the signature moment ──────────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-20 text-cream lg:py-28">
        <div className="grain absolute inset-0" aria-hidden />
        <Image
          src="/images/logo-white.png"
          alt=""
          width={700}
          height={700}
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 hidden w-[420px] rotate-[10deg] opacity-[0.04] lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <Eyebrow tone="cream">Our favorite part of the job</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl">
                Gray walks&nbsp;in.
                <br />
                <em className="font-medium text-rose">Wow</em>
                {" walks out."}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/80">
                Color is where Hair Rocks earns its name — balayage, dimensional
                highlights, gray coverage that looks born,&nbsp;not&nbsp;bottled.
                Go ahead: bring this one back to&nbsp;life.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-[13px] font-extrabold uppercase tracking-[0.2em] text-leaf-bright">
                Every OYA formula is free&nbsp;of
              </p>
              {/* Deliberate 3/2 rows — never a lone orphan pill on a wrap line */}
              <ul className="mt-3 space-y-2">
                {[OYA_FREE_OF.slice(0, 3), OYA_FREE_OF.slice(3)].map((row) => (
                  <li key={row.join()} className="flex flex-wrap gap-2">
                    {row.map((x) => (
                      <span key={x} className="rounded-full bg-cream/10 px-4 py-1.5 text-sm font-bold text-cream/90 ring-1 ring-leaf/40">
                        {x}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <OyaChip />
                <TextLink href="/services/color/" dark>
                  Explore color services
                </TextLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="mx-auto w-full max-w-[400px]">
            <ColorReveal
              src="/images/perm-curls.jpg"
              bwSrc="/images/perm-curls-bw.jpg"
              alt="Spiral curls with caramel-blonde dimension — run your hand across to bring the color back"
            />
          </Reveal>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-blush py-20 lg:py-28">
        <Image
          src="/images/logo.png"
          alt=""
          width={700}
          height={700}
          aria-hidden
          className="pointer-events-none absolute -left-28 bottom-0 w-[440px] rotate-[8deg] opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="rose">Word travels fast in Boynton</Eyebrow>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] text-forest sm:text-5xl">
              The chair everyone{" "}
              <em className="font-medium text-rose-deep">comes back&nbsp;to.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mx-auto mt-12 max-w-3xl">
            <figure className="relative rotate-[-0.6deg] rounded-[32px] bg-paper p-8 text-center shadow-lift sm:p-12">
              <Stars className="justify-center text-leaf" />
              <blockquote className="mt-5 font-display text-2xl font-bold leading-snug text-forest sm:text-[28px]">
                &ldquo;{REVIEWS[0].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-ink-soft">
                {REVIEWS[0].name} · Google
              </figcaption>
            </figure>
          </Reveal>
          <div className="mx-auto mt-6 grid max-w-5xl gap-5 sm:grid-cols-3">
            {[REVIEWS[1], REVIEWS[3], REVIEWS[4]].map((r, i) => (
              <Reveal key={r.name} delay={0.1 + i * 0.07}>
                <figure className={`h-full rounded-3xl bg-paper/80 p-6 ring-2 ring-rose/30 ${i % 2 ? "rotate-[0.5deg]" : "rotate-[-0.5deg]"}`}>
                  <Stars className="text-leaf" />
                  <blockquote className="mt-3 leading-relaxed text-ink">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-ink-soft">
                    {r.name} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-10 text-center">
            <a
              href={SITE.googleReviews}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 font-display font-bold text-leaf-bright shadow-chip transition-transform duration-300 hover:-translate-y-0.5"
            >
              Read the reviews on Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── MEET THE STUDIO ──────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <Reveal className="relative mx-auto w-full max-w-[420px]">
            <div className="arch overflow-hidden shadow-lift">
              <Image
                src="/images/color-mix.jpg"
                alt="OYA color being measured into the bowl against the studio's living plant wall"
                width={1600}
                height={1600}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 bottom-8 rotate-3 rounded-2xl bg-forest px-5 py-3.5 text-cream shadow-chip sm:-right-6">
              <p className="font-display text-2xl font-extrabold text-leaf-bright">30+ years</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-cream/75">behind the chair</p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Meet the studio</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] text-forest sm:text-5xl">
                Small studio.
                <br />
                Serious&nbsp;<Swish>craft.</Swish>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Hair Rocks is led by Tiffany — certified color specialist,
                OYA&nbsp;Educator, thirty-plus years behind the chair — alongside
                stylists trained in the latest techniques and pushed to keep
                growing into educators, platform artists, and
                color&nbsp;directors.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
                Whoever&rsquo;s chair you land in, the philosophy is the same:
                honest consultations, natural-looking results, and products that
                treat your hair — and&nbsp;you — kindly.
              </p>
              <div className="mt-8">
                <TextLink href="/about/">Get to know the studio</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOOK BAND · subtle video backdrop ────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-24 text-center text-cream lg:py-32">
        <LazyVideo
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
          src="/videos/salon-loop.mp4"
          poster="/videos/salon-loop-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest/70" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-5xl font-extrabold leading-[1.0] sm:text-6xl">
              Your new <em className="font-medium text-leaf-bright">you&nbsp;awaits.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-cream/80">
              Open Tuesday through Saturday, with Monday &amp; Sunday by
              appointment. Booking takes about a&nbsp;minute.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <BookButton dark label="Book Your Appointment" />
              <CallChip dark />
            </div>
            <p className="mt-7 text-sm text-cream/60">
              Tue – Thu · {HOURS[1].hours} &nbsp;·&nbsp; Fri – Sat · {HOURS[4].hours}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

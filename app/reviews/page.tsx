import type { Metadata } from "next";
import Image from "next/image";
import { SITE, REVIEWS } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BookButton, Stars, Swish } from "@/components/ui";

export const metadata: Metadata = {
  title: "Reviews — What Boynton Beach Says",
  description:
    "Real Google reviews for Hair Rocks @Artisans in Boynton Beach: cuts, color, and consultations that actually listen. Read them all, then grab a chair.",
  alternates: { canonical: "/reviews/" },
};

const GALLERY = [
  { src: "/images/duo.jpg", alt: "Espresso brunette and golden blonde color, glass-glossy", w: 1920, h: 1188 },
  { src: "/images/pink-bob.jpg", alt: "Rose-pink layered bob with soft volume", w: 1920, h: 2780 },
  { src: "/images/perm-curls.jpg", alt: "Spiral curls with dimensional highlights, fresh from the chair", w: 1400, h: 2100 },
  { src: "/images/couple-pink.jpg", alt: "Fresh cuts, big moods — copper curls and a sharp men's cut", w: 1920, h: 1280 },
  { src: "/images/green-hair.jpg", alt: "Emerald-and-jade fashion color, razor-straight", w: 538, h: 538 },
  { src: "/images/honey.webp", alt: "Honey-bronde dimension with a brighter money piece", w: 501, h: 640 },
  { src: "/images/mens-cut.jpg", alt: "A crisp silver men's cut mid-fade at the chair", w: 1400, h: 934 },
  { src: "/images/blowdry.jpg", alt: "Round-brush blowout mid-appointment", w: 1600, h: 1064 },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={
          <>
            <span className="block">Don&rsquo;t take</span>
            <span className="block">
              our word for&nbsp;<Swish>it.</Swish>
            </span>
          </>
        }
        intro={
          <div>
            <p>
              The studio&rsquo;s favorite marketing department: the people who
              just got out of the&nbsp;chair.
            </p>
            <a
              href={SITE.googleReviews}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-forest px-6 py-3 font-display font-bold text-leaf-bright shadow-chip transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Stars className="text-leaf-bright" />
              Read them all on Google
            </a>
          </div>
        }
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.07}>
                <figure className={`h-full rounded-3xl bg-cream p-8 ring-2 ring-forest/10 ${i % 2 ? "rotate-[0.4deg]" : "rotate-[-0.4deg]"}`}>
                  <Stars className="text-leaf" />
                  <blockquote className="mt-4 font-display text-xl font-bold leading-relaxed text-forest sm:text-[22px]">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-ink-soft">
                    {r.name} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <h2 className="font-display text-4xl font-extrabold text-forest sm:text-5xl">
              The look&nbsp;book.
            </h2>
            <p className="mt-3 max-w-xl text-lg text-ink-soft">
              The range this studio plays in — lived-in blonde, sharp silver
              cuts, full-throttle fashion&nbsp;color.
            </p>
          </Reveal>
          <div className="mt-10 columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 0.06}>
                <figure className="group overflow-hidden rounded-3xl">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 30vw"
                    className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush py-16 text-center lg:py-20">
        <Reveal className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-extrabold text-forest sm:text-5xl">
            Your turn in the&nbsp;chair.
          </h2>
          <div className="mt-7 flex justify-center">
            <BookButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}

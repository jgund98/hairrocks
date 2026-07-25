import type { Metadata } from "next";
import Link from "next/link";
import { MENU, PACKAGES, SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import Reveal from "@/components/Reveal";
import TownsMarquee from "@/components/TownsMarquee";
import { BookButton, CallChip, Swish } from "@/components/ui";

export const metadata: Metadata = {
  title: "Salon Services & Prices — Cuts, Color, Perms, Keratin & Waxing",
  description:
    "The full Hair Rocks @Artisans price list: haircuts from $25, OYA color from $30, balayage $165+, perms $90+, keratin $235, facial waxing $10. Boynton Beach, FL.",
  alternates: { canonical: "/services/" },
};

function BreadcrumbLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.domain}/services/` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbLd />
      <PageHero
        eyebrow="Services & pricing"
        title={
          <>
            <span className="block">Every service.</span>
            <span className="block">
              Every <Swish>price.</Swish>
            </span>
          </>
        }
        intro={
          <p>
            The whole menu, published like it should be. Cuts, clean OYA color,
            perms, keratin, and waxing — in the same order the studio has always
            offered them. Tap any section for details and&nbsp;FAQs.
          </p>
        }
      >
        <div className="flex flex-wrap gap-3.5">
          <BookButton />
          <CallChip />
        </div>
      </PageHero>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
            {MENU.map((section, i) => (
              <Reveal key={section.slug} delay={(i % 2) * 0.07}>
                <div className="flex h-full flex-col border-t-2 border-forest/15 pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-display text-3xl font-semibold text-forest">
                      {section.title}
                    </h2>
                    <Link
                      href={`/services/${section.slug}/`}
                      className="text-sm font-bold text-moss underline-offset-4 hover:underline"
                    >
                      Details &amp; FAQs →
                    </Link>
                  </div>
                  <p className="mt-2 max-w-lg text-[15px] text-ink-soft">{section.blurb}</p>
                  <MenuList items={section.items} className="mt-6" />
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.07}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-forest p-8 text-cream shadow-lift">
                <div className="grain absolute inset-0" aria-hidden />
                <h2 className="relative font-display text-3xl font-semibold text-leaf-bright">
                  Packages
                </h2>
                <p className="relative mt-2 max-w-lg text-[15px] text-cream/70">
                  The full transformation, bundled kindly.
                </p>
                <MenuList items={PACKAGES} dark className="relative mt-6" />
                <div className="relative mt-auto pt-8">
                  <BookButton dark label="Book a Package" />
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Prices are for Designer-level services and may vary with hair length
            and density — your stylist confirms everything during the
            consultation, before any work begins. Questions? Call{" "}
            <a href={SITE.phoneHref} className="font-bold text-moss">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>
      <TownsMarquee />
    </>
  );
}

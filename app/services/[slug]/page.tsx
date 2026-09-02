import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, lowestPrice } from "@/lib/site";
import { SERVICE_PAGES, getMenuSection, getServicePage } from "@/lib/services";
import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { BookButton, CallChip, Eyebrow, GoogleRating, Swish } from "@/components/ui";

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDesc,
    alternates: { canonical: `/services/${page.slug}/` },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const menu = getMenuSection(slug);
  if (!page || !menu) notFound();

  const index = SERVICE_PAGES.findIndex((p) => p.slug === slug);
  const mirrored = index % 2 === 1; // she flips her hair as you move between pages
  const others = SERVICE_PAGES.filter((p) => p.slug !== slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${menu.title} — ${SITE.name}`,
      serviceType: menu.title,
      provider: { "@id": `${SITE.domain}/#salon` },
      areaServed: "Boynton Beach, FL and surrounding Palm Beach County",
      offers: menu.items.map((i) => ({
        "@type": "Offer",
        name: i.name,
        price: lowestPrice(i),
        priceCurrency: "USD",
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.domain}/services/` },
        { "@type": "ListItem", position: 3, name: menu.title, item: `${SITE.domain}/services/${slug}/` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={page.eyebrow}
        mirrored={mirrored}
        title={
          <>
            <span className="block">{page.h1a}</span>
            <span className="block">
              <Swish>{page.h1b}</Swish>
            </span>
          </>
        }
        intro={<p>{page.intro}</p>}
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <BookButton />
          <CallChip />
        </div>
        <div className="mt-6">
          <GoogleRating />
        </div>
      </PageHero>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
          <div>
            {page.body.map((block, i) => (
              <Reveal key={block.heading} delay={i * 0.05}>
                <div className={i === 0 ? "" : "mt-10"}>
                  <h2 className="font-display text-[26px] font-semibold text-forest sm:text-3xl">
                    {block.heading}
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{block.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <div className="mt-12 rounded-3xl bg-cream p-7 ring-1 ring-forest/10">
                <Eyebrow>{menu.title} · pricing</Eyebrow>
                <MenuList items={menu.items} />
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-2">
            <Reveal>
              <div className="arch mx-auto max-w-[380px] overflow-hidden shadow-lift lg:sticky lg:top-28">
                <Image
                  src={page.img}
                  alt={page.imgAlt}
                  width={page.imgW}
                  height={page.imgH}
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="font-display text-4xl font-semibold text-forest">
              Asked all the&nbsp;<Swish color="var(--color-rose)">time.</Swish>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-9">
              <Faq items={page.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-moss">
            Keep browsing
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}/`}
                className="rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest hover:text-cream"
              >
                {o.eyebrow[0].toUpperCase() + o.eyebrow.slice(1)}
              </Link>
            ))}
            <Link
              href="/services/"
              className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-pine"
            >
              Full menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SITE, HOURS_SCHEMA, AREAS, MENU, PRICE_RANGE, lowestPrice } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import OwnerPopup from "@/components/OwnerPopup";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Hair Salon in Boynton Beach, FL | Hair Rocks @Artisans",
    template: "%s | Hair Rocks @Artisans · Boynton Beach, FL",
  },
  description:
    "Boynton Beach's clean-color hair studio. Cuts, balayage, gray coverage, perms & keratin with OYA color free of parabens and PPD. Book online in about a minute.",
  keywords: [
    "hair salon Boynton Beach",
    "organic hair salon Boynton Beach FL",
    "balayage Boynton Beach",
    "hair color Delray Beach",
    "keratin treatment Lake Worth",
    "haircut near me Boynton Beach",
    "OYA salon Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: "Hair Rocks @Artisans | Hair Salon in Boynton Beach, FL",
    description:
      "Come as you are — let us make you a star. Clean OYA color, precision cuts, and 30+ years of craft. Book online.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${SITE.domain}/#salon`,
    name: SITE.name,
    alternateName: SITE.legalName,
    url: SITE.domain,
    telephone: "+1-561-964-0120",
    email: SITE.email,
    image: `${SITE.domain}/images/duo.jpg`,
    logo: `${SITE.domain}/images/logo.png`,
    priceRange: PRICE_RANGE,
    slogan: "Come as you are & let us make you a star",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
        geoRadius: "16000",
      },
      ...AREAS.map((city) => ({ "@type": "City", name: `${city}, FL` })),
    ],
    openingHoursSpecification: HOURS_SCHEMA,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon Services",
      itemListElement: MENU.map((s) => ({
        "@type": "OfferCatalog",
        name: s.title,
        itemListElement: s.items.map((i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: i.name },
          price: lowestPrice(i),
          priceCurrency: "USD",
        })),
      })),
    },
    sameAs: [SITE.googleReviews, SITE.mapsUrl, SITE.booking],
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: SITE.booking },
      result: { "@type": "Reservation", name: "Salon appointment" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${fraunces.variable} ${nunito.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <MobileDock />
        <OwnerPopup />
      </body>
    </html>
  );
}

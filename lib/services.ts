import { MENU, type MenuSection } from "@/lib/site";

export type ServicePage = {
  slug: string;
  seoTitle: string;
  seoDesc: string;
  eyebrow: string;
  h1a: string;
  h1b: string; // second line, swished word included by page
  intro: string;
  body: { heading: string; text: string }[];
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
  faqs: { q: string; a: string }[];
};

const bySlug = Object.fromEntries(MENU.map((s) => [s.slug, s]));

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "haircuts",
    seoTitle: "Haircuts in Boynton Beach, FL — Women, Men & Kids from $25",
    seoDesc:
      "Precision haircuts in Boynton Beach at Hair Rocks @Artisans. Women's cut & blow-dry $60, men's cuts $35, kids $25. Consultation first, always. Book online.",
    eyebrow: "Haircuts",
    h1a: "A cut that grows",
    h1b: "out gracefully.",
    intro:
      "Every haircut starts in the mirror, not at the shampoo bowl — a real consultation about your hair's texture, your mornings, and what you actually want. Then we cut for the shape it holds three weeks from now, not just the blowout it leaves with.",
    body: [
      {
        heading: "For women",
        text: "Bobs, layers, long trims, big chops — cut wet or dry depending on your curl pattern, finished with a blow-dry style you can recreate at home.",
      },
      {
        heading: "For men & kids",
        text: "Clean, sharp men's cuts without the barbershop wait, and patient kid-friendly cuts that end in high fives instead of tears.",
      },
    ],
    img: "/images/haircut.jpg",
    imgAlt: "Stylist's shears and comb detailing the ends of a haircut",
    imgW: 1500,
    imgH: 1000,
    faqs: [
      {
        q: "How much is a haircut at Hair Rocks in Boynton Beach?",
        a: "A women's haircut with blow-dry is $60, a wet cut is $45, men's haircuts are $35, and kids' cuts are $25. Prices are published upfront — no surprises at checkout.",
      },
      {
        q: "Do I need an appointment, or do you take walk-ins?",
        a: "Booking ahead is best — the studio runs Tuesday through Saturday, with Monday and Sunday reserved for appointment-only visits. You can book online in about a minute or call (561) 964-0120.",
      },
      {
        q: "Do you cut curly and textured hair?",
        a: "Yes. Your consultation covers texture, density, and curl pattern before any scissors come out, and the cutting approach (wet or dry) is chosen to suit your hair.",
      },
    ],
  },
  {
    slug: "color",
    seoTitle: "Hair Color & Balayage in Boynton Beach, FL — Clean OYA Color",
    seoDesc:
      "Balayage, highlights, gray coverage & color correction in Boynton Beach. OYA color free of parabens, PPD & 4-ABP. Base color $70, balayage from $165. Book online.",
    eyebrow: "Hair color",
    h1a: "Color that looks",
    h1b: "born, not bottled.",
    intro:
      "This is the studio's signature craft: dimensional balayage, hand-placed highlights, gray coverage that fools daylight, and rescues for color gone wrong elsewhere. All of it in OYA — clean color free of parabens, PPD, 4-ABP, gluten, and pre-sulfates.",
    body: [
      {
        heading: "Blondes, brunettes & bold",
        text: "Face-framing brightness, half-head dimension, or a full transformation — highlights are mapped to your haircut so they fall exactly where light should.",
      },
      {
        heading: "Gray, handled your way",
        text: "Full coverage, a soft root smudge that blurs the line, or men's camo that just takes the edge off — graying on your terms, never a flat helmet of color.",
      },
      {
        heading: "Color correction",
        text: "Box-dye mishaps and banding fixed in stages that protect the integrity of your hair. It starts with an honest consultation about what's possible and when.",
      },
    ],
    img: "/images/duo.jpg",
    imgAlt: "Espresso brunette and golden blonde worn side by side — glass-glossy OYA color",
    imgW: 1920,
    imgH: 1188,
    faqs: [
      {
        q: "What makes OYA color different?",
        a: "OYA formulas are free of parabens, PPD, 4-ABP, gluten, and pre-sulfates, and carry natural nutrients like green tea extract and sea kelp — gentler on your scalp and kinder to the hair it touches.",
      },
      {
        q: "How much does balayage cost in Boynton Beach?",
        a: "Balayage at Hair Rocks starts at $165. Partial highlights run $60–$85, full highlights are $115, and an all-over base color is $70. Toner and gloss finishes are $30.",
      },
      {
        q: "Can you fix a color job I got somewhere else?",
        a: "That's what color correction is for — from $150 depending on what your hair needs. Tiffany is a certified color specialist and will map out a realistic plan before anything is applied.",
      },
      {
        q: "How often should I refresh my color?",
        a: "Base color and root work typically every 4–6 weeks; balayage and dimensional work can stretch 8–12 weeks. We'll set a cadence that fits your grow-out and your budget.",
      },
    ],
  },
  {
    slug: "styling",
    seoTitle: "Blowouts, Styling & Hair Treatments in Boynton Beach, FL",
    seoDesc:
      "Blowouts, special-occasion styling, deep conditioning & clarifying treatments in Boynton Beach. Blow-dry $35, treatments from $25. Book online at Hair Rocks.",
    eyebrow: "Styling & treatments",
    h1a: "Great hair days,",
    h1b: "on demand.",
    intro:
      "A polished blowout before a night out, or a repair plan for hair that's been through it — this is the maintenance menu that keeps color glossy and strands strong between bigger visits.",
    body: [
      {
        heading: "Blowouts & occasions",
        text: "Smooth, bouncy, or beachy — a $35 blow-dry that holds up in Florida humidity. Heading somewhere special? Tell us when you book and we'll build in the time.",
      },
      {
        heading: "Deep repair",
        text: "Deep conditioning rebuilds softness and shine; a clarifying treatment strips buildup from hard water, chlorine, and product. Add either to a color visit and it's just $10–$15.",
      },
    ],
    img: "/images/blowdry.jpg",
    imgAlt: "Round-brush blowout in progress at the salon chair",
    imgW: 1600,
    imgH: 1064,
    faqs: [
      {
        q: "How long does a blowout last?",
        a: "With a good dry shampoo and a loose overnight bun, most clients get three to five days — even in South Florida humidity. Ask for product tips at the chair; recommendations are free.",
      },
      {
        q: "Which treatment does my hair need?",
        a: "If hair feels dry or brittle, deep conditioning ($25, or $10 with color) restores moisture. If it feels coated, dull, or heavy, clarifying ($30, or $15 with color) resets it. Not sure? We'll tell you honestly.",
      },
      {
        q: "Do you do styling for weddings or events?",
        a: "Yes — book a blow-dry and note the occasion. For updos and formal styling, call (561) 964-0120 so we can plan timing and pricing for exactly what you have in mind.",
      },
    ],
  },
  {
    slug: "perms-keratin",
    seoTitle: "Perms & Keratin Treatments in Boynton Beach, FL",
    seoDesc:
      "Modern perms from $90 and smoothing keratin treatments ($235) in Boynton Beach. Lasting waves or months of frizz-free hair — book online at Hair Rocks @Artisans.",
    eyebrow: "Perms & keratin",
    h1a: "Texture, either",
    h1b: "direction.",
    intro:
      "Want waves your hair never grew, or smoothness Florida humidity can't touch? Perms build lasting texture in; keratin seals frizz out. Both start with a consultation about your hair's history, because chemistry deserves honesty.",
    body: [
      {
        heading: "Modern perms",
        text: "Today's perms are soft body and movement — not 1985. A traditional wrap is $90; specialty wraps for spiral curls or long hair start at $110.",
      },
      {
        heading: "Keratin smoothing",
        text: "One $235 appointment, then months of faster mornings: frizz tamed, shine up, blow-dry time cut dramatically. The August-in-Florida cheat code.",
      },
    ],
    img: "/images/perm-curls.jpg",
    imgAlt: "Fresh spiral curls with dimensional highlights, still in the salon cape",
    imgW: 1400,
    imgH: 2100,
    faqs: [
      {
        q: "How long does a keratin treatment last?",
        a: "Typically three to five months, depending on how often you wash and the products you use. Sulfate-free care stretches it — we'll show you what works before you leave.",
      },
      {
        q: "Will a perm damage my hair?",
        a: "Healthy hair perms beautifully. That's why every perm starts with an honest look at your hair's history — if a perm isn't right for your hair yet, you'll hear it straight, with a plan to get there.",
      },
      {
        q: "How much do perms cost?",
        a: "A traditional perm is $90; specialty wraps — spirals, piggyback wraps, longer lengths — start at $110. Both include the shaping and finish.",
      },
    ],
  },
  {
    slug: "waxing",
    seoTitle: "Facial Waxing in Boynton Beach, FL — Brow, Lip & Chin from $10",
    seoDesc:
      "Quick, tidy facial waxing in Boynton Beach: eyebrows $10, lip $10, chin $10, full facial $30. Easy to add to any hair appointment at Hair Rocks @Artisans.",
    eyebrow: "Facial waxing",
    h1a: "Tidy, quick,",
    h1b: "done right.",
    intro:
      "The finishing touch most salons treat as an afterthought. Brows shaped to flatter your face — not a trend — plus lip, chin, and full-face waxing that takes minutes to add onto any visit.",
    body: [
      {
        heading: "Add it on",
        text: "Brow, lip, and chin waxes are $10 each and slot neatly into any cut or color visit. A full facial wax is $30. Just mention it when you book, or ask at the chair.",
      },
    ],
    img: "/images/brow.jpg",
    imgAlt: "Cleanly shaped brow after a quick wax — tidy, natural, defined",
    imgW: 1400,
    imgH: 934,
    faqs: [
      {
        q: "Can I add waxing to my hair appointment?",
        a: "Yes — that's exactly how most clients do it. Brow, lip, or chin waxing adds about ten minutes. Mention it when booking online or just ask when you arrive.",
      },
      {
        q: "How much is eyebrow waxing?",
        a: "Eyebrow waxing is $10, and so are lip and chin. A full facial wax is $30. Add any of them to a cut or color without a separate trip.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}

export function getMenuSection(slug: string): MenuSection | undefined {
  return bySlug[slug];
}

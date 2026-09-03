// ─── Hair Rocks @Artisans · single source of truth ───────────────────────────
// Every fact here is sourced from hairrocksstudio.com, the salon's Rosy booking
// profile, or its public Google listing. Nothing invented.

export const SITE = {
  name: "Hair Rocks @Artisans",
  legalName: "Hair Rocks Studio, LLC",
  domain: "https://www.hairrocksstudio.com",
  phone: "(561) 964-0120",
  phoneHref: "tel:+15619640120",
  email: "beyou@hairrocksstudio.com",
  address: {
    street: "4772 N Congress Ave #204",
    city: "Boynton Beach",
    state: "FL",
    zip: "33426",
  },
  geo: { lat: 26.556, lng: -80.0907 },
  booking: "https://online.rosysalonsoftware.com/about/50395",
  giftCards: "https://online.rosysalonsoftware.com/giftcard?id=50395",
  googleReviews:
    "https://www.google.com/search?q=hair+rocks+studio+boynton+beach+fl+33426",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hair+Rocks+%40Artisans+4772+N+Congress+Ave+%23204+Boynton+Beach+FL+33426",
  rating: { value: 4.7, count: 27 },
  owner: "Tiffany",
} as const;

export const HOURS = [
  { day: "Monday", hours: "Appointment only" },
  { day: "Tuesday", hours: "10 AM – 6 PM" },
  { day: "Wednesday", hours: "10 AM – 6 PM" },
  { day: "Thursday", hours: "10 AM – 6 PM" },
  { day: "Friday", hours: "10 AM – 5 PM" },
  { day: "Saturday", hours: "10 AM – 5 PM" },
  { day: "Sunday", hours: "Appointment only" },
] as const;

// Schema.org openingHoursSpecification
export const HOURS_SCHEMA = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "18:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "10:00", closes: "17:00" },
];

// Towns within a ~10–15 minute drive of 4772 N Congress Ave.
export const AREAS = [
  "Boynton Beach",
  "Delray Beach",
  "Lake Worth Beach",
  "Lantana",
  "Hypoluxo",
  "Ocean Ridge",
  "Gulf Stream",
  "Manalapan",
  "Atlantis",
  "Greenacres",
  "Village of Golf",
  "Briny Breezes",
] as const;

// Prices from Tiffany's 2026 price menu (PriceMenuHairRocks-2026.xlsx). The
// workbook has Designer / Senior / Master sheets; per Tiffany (2026-09-03) the
// site LISTS ONLY THE DESIGNER PRICE, framed as "starting at" — she is the
// Master stylist, has no Senior, and doesn't always charge more. The other two
// columns are kept in data for reference but never rendered.
export const TIERS = [
  { key: "designer", label: "Designer" },
  { key: "senior", label: "Senior" },
  { key: "master", label: "Master" },
] as const;
export type TierKey = (typeof TIERS)[number]["key"];

/** prices = [Designer, Senior, Master]; `plus` = "and up" / "starting at";
 *  `addon` = a small extra, not a "from" price for the section. */
export type MenuItem = {
  name: string;
  prices: readonly [number, number, number];
  plus?: boolean;
  addon?: boolean;
  note?: string;
};
export type MenuSection = {
  slug: string;
  title: string;
  blurb: string;
  items: MenuItem[];
  /** Advertised "from" price when the cheapest line would mislead (e.g. a clipper cut or a kids' starting-at price). */
  from?: number;
};

export const fmtPrice = (n: number, plus?: boolean) => `$${n}${plus ? "+" : ""}`;
/** The price we publish: the Designer column, always a starting point. */
export const listPrice = (item: MenuItem) => item.prices[0];
/** Advertised "from" price: the section's explicit override, else the cheapest
 *  regular service (add-ons like a bang trim excluded). */
export const fromPrice = (section: MenuSection) =>
  fmtPrice(section.from ?? Math.min(...section.items.filter((i) => !i.addon).map(listPrice)));

// Menu order follows the printed price menu (Haircuts → Styling → Waxing →
// Color → Perms & Keratin), then length charges and packages.
export const MENU: MenuSection[] = [
  {
    slug: "haircuts",
    title: "Haircuts",
    blurb: "Precision cuts for women, men, and kids — always with a consultation first.",
    // Tiffany: advertise from the men's cut, not the clipper cut or the kids' starting-at price.
    from: 35,
    items: [
      { name: "Haircut & Blow-Dry", prices: [60, 65, 65] },
      { name: "Haircut Only", prices: [45, 50, 50] },
      { name: "Men's Haircut", prices: [35, 40, 40] },
      { name: "Clipper Cut · All Over", prices: [22, 25, 25] },
      { name: "Bang Trim", prices: [7, 10, 7], addon: true },
      { name: "Kid's Cut", prices: [25, 30, 35], plus: true },
    ],
  },
  {
    slug: "styling",
    title: "Styling & Treatments",
    blurb: "Blowouts, up-dos, and deep repair for hair that behaves between visits.",
    items: [
      { name: "Iron Set", prices: [10, 15, 15], addon: true },
      { name: "Blow-Dry", prices: [35, 40, 35] },
      { name: "Blow-Dry Straight", prices: [45, 55, 45] },
      { name: "Designer Up-Do", prices: [70, 85, 90], plus: true },
      { name: "Deep Conditioning", prices: [25, 25, 25] },
      { name: "Clarifying Treatment", prices: [30, 30, 30] },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    blurb: "Quick, tidy facial waxing — easy to add on to any appointment.",
    items: [
      { name: "Eyebrow", prices: [10, 15, 10] },
      { name: "Between the Brows", prices: [5, 5, 5], addon: true },
      { name: "Lip", prices: [10, 12, 10] },
      { name: "Chin", prices: [10, 10, 10] },
      { name: "Facial", prices: [30, 33, 35] },
    ],
  },
  {
    slug: "color",
    title: "Hair Color",
    blurb:
      "From gray coverage to hand-painted balayage — clean OYA color, placed with intent. Color services include a blow-dry.",
    items: [
      { name: "Men's Camo", prices: [30, 35, 35] },
      { name: "Base Color", prices: [70, 75, 70] },
      { name: "Roots / Hairline Only", prices: [35, 35, 35], note: "No blow-dry" },
      { name: "Additional Color", prices: [35, 35, 35] },
      { name: "Wet Toner", prices: [35, 30, 35] },
      { name: "Dry Toner", prices: [50, 45, 50] },
      { name: "Clear Gloss", prices: [35, 30, 35] },
      { name: "Partial Highlight · Face Frame", prices: [60, 55, 65] },
      { name: "Partial Highlight · Half Head", prices: [85, 90, 90] },
      { name: "Partial Highlight · ¾ Head", prices: [100, 105, 105] },
      { name: "Full Highlight", prices: [115, 120, 120] },
      { name: "Balayage", prices: [165, 165, 175], plus: true },
      { name: "Color Correction", prices: [150, 125, 150], plus: true },
    ],
  },
  {
    slug: "perms-keratin",
    title: "Perms & Keratin",
    blurb: "Lasting texture either direction — soft waves in, or frizz smoothed away for months.",
    items: [
      { name: "Traditional Perm", prices: [90, 90, 90] },
      { name: "Specialty Wrap Perm", prices: [110, 120, 110], plus: true },
      { name: "Keratin Treatment", prices: [235, 250, 235], plus: true, note: "Formaldehyde-free" },
    ],
  },
];

// Same at every stylist level.
export const LENGTH_CHARGES: MenuItem[] = [
  { name: '1" to Mid-Back', prices: [10, 10, 10] },
  { name: "Mid-Back and Longer", prices: [20, 20, 20] },
  { name: "Thickness", prices: [10, 10, 10], note: "When applicable" },
];

export const PACKAGES: MenuItem[] = [
  { name: "Cut, Color & Treatment", prices: [130, 140, 130] },
  { name: "Cut, Color, Highlight & Treatment", prices: [245, 260, 260] },
];

const ALL_ITEMS = [...MENU.flatMap((s) => s.items), ...LENGTH_CHARGES, ...PACKAGES];
/** Schema.org priceRange, e.g. "$5 - $260". */
export const PRICE_RANGE = `${fmtPrice(Math.min(...ALL_ITEMS.map(listPrice)))} - ${fmtPrice(
  Math.max(...ALL_ITEMS.map(listPrice)),
)}`;

// Real, recent Google reviews (via the salon's public review profiles). Verbatim.
export const REVIEWS = [
  {
    quote:
      "OH MY GOODNESS!!! THIS PLACE IS THE BEST!! Tiffany cuts hair so good!! I showed her the picture and she gave me exactly what I wanted!",
    name: "Addy M.",
  },
  {
    quote:
      "I couldn't recommend Tiffany (the owner) more highly. She always does a fantastic job, she's super attentive to what you want and it's great to be in the chair — she's super funny so it's an all around pleasant experience.",
    name: "David B.",
  },
  {
    quote:
      "Awesome experience!!! Tiffany is the sweetest, most knowledgeable!! I leave happy every time. Great prices too.",
    name: "Nilda P.",
  },
  {
    quote:
      "Tiffany always gives a great men's haircut—clean, sharp, and exactly what I ask for. The shop has a great vibe with good music playing, and the head wash comes with a nice, relaxing massage.",
    name: "Eran B.",
  },
  {
    quote:
      "Tiffany takes the time for a consultation before cutting and coloring to ensure I always get what I want.",
    name: "Google review",
  },
] as const;

export const OYA_FREE_OF = ["Parabens", "PPD", "4-ABP", "Gluten", "Pre-Sulfates"] as const;

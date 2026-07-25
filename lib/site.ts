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

export type MenuItem = { name: string; price: string; note?: string };
export type MenuSection = {
  slug: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

// Exact menu + prices from hairrocksstudio.com/services, original order preserved
// (Haircuts → Styling → Waxing → Color → Perms → Keratin → Packages).
export const MENU: MenuSection[] = [
  {
    slug: "haircuts",
    title: "Haircuts",
    blurb: "Precision cuts for women, men, and kids — always with a consultation first.",
    items: [
      { name: "Haircut & Blow-Dry", price: "$60" },
      { name: "Men's Haircut", price: "$35" },
      { name: "Wet Cut", price: "$45" },
      { name: "Kid's Cut", price: "$25" },
    ],
  },
  {
    slug: "styling",
    title: "Styling & Treatments",
    blurb: "Blowouts, updos, and deep repair for hair that behaves between visits.",
    items: [
      { name: "Blow-Dry", price: "$35" },
      { name: "Deep Conditioning", price: "$25", note: "$10 with color service" },
      { name: "Clarifying Treatment", price: "$30", note: "$15 with color service" },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    blurb: "Quick, tidy facial waxing — easy to add on to any appointment.",
    items: [
      { name: "Eyebrow", price: "$10" },
      { name: "Lip", price: "$10" },
      { name: "Chin", price: "$10" },
      { name: "Facial", price: "$30" },
    ],
  },
  {
    slug: "color",
    title: "Hair Color",
    blurb: "From gray coverage to hand-painted balayage — clean OYA color, placed with intent.",
    items: [
      { name: "Base Color", price: "$70" },
      { name: "Root Smudge", price: "$55" },
      { name: "Toner & Gloss", price: "$30" },
      { name: "Men's Camo", price: "$30" },
      { name: "Partial Highlight · Face Frame", price: "$60" },
      { name: "Partial Highlight · Half Head", price: "$85" },
      { name: "Full Highlight", price: "$115" },
      { name: "Balayage", price: "$165+" },
      { name: "Color Correction", price: "$150+" },
    ],
  },
  {
    slug: "perms-keratin",
    title: "Perms & Keratin",
    blurb: "Lasting texture either direction — soft waves in, or frizz smoothed away for months.",
    items: [
      { name: "Traditional Perm", price: "$90" },
      { name: "Specialty Wrap Perm", price: "$110+" },
      { name: "Keratin Treatment", price: "$235" },
    ],
  },
];

export const PACKAGES: MenuItem[] = [
  { name: "Cut, Color & Treatment", price: "$120" },
  { name: "Cut, Color, Highlight & Treatment", price: "$230" },
];

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

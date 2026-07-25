import Marquee from "@/components/Marquee";

const WORDS = [
  "Balayage",
  "Bobs",
  "Blowouts",
  "Gray coverage",
  "Perms",
  "Keratin",
  "Highlights",
  "Men's cuts",
  "Color correction",
  "Kids' cuts",
  "Toner & gloss",
  "Brows",
];

function Scissors() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-forest/80" aria-hidden>
      <circle cx="6" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.2 7.6 12 8.6m-12-.4 12-8.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* A quiet nod to the owner's 80s-rock heart — every other beat is a bolt. */
function Bolt() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-forest/80" aria-hidden>
      <path d="M13.2 2 5 13.4h5l-1.6 8.6L17 10.4h-5.2L13.2 2Z" />
    </svg>
  );
}

/* The loud lime band — you know it's a hair salon in half a second. */
export default function ServicesMarquee() {
  return (
    <div className="border-y-2 border-forest bg-leaf text-forest" aria-label={`Services: ${WORDS.join(", ")}`}>
      <Marquee speed={80} className="py-3.5">
        {WORDS.map((w, i) => (
          <span key={w} className="flex items-center gap-6 whitespace-nowrap pr-6">
            <span className="font-display text-lg font-extrabold uppercase tracking-wide">{w}</span>
            {i % 2 ? <Bolt /> : <Scissors />}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

import { AREAS } from "@/lib/site";
import Marquee from "@/components/Marquee";

/* Locally meaningful strip — spot your town before you scroll. */
export default function TownsMarquee() {
  return (
    <div
      className="border-y border-forest bg-forest text-cream"
      aria-label={`Serving ${AREAS.join(", ")}`}
    >
      <Marquee speed={50} className="py-3">
        {AREAS.map((t) => (
          <span key={t} className="flex items-center whitespace-nowrap">
            <span className="px-5 text-[15px] font-bold tracking-wide">{t}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" className="text-leaf-bright" fill="currentColor" aria-hidden>
              <path d="M12 2c1 4 2.5 6.5 4 8-1.5 1.5-3 4-4 8-1-4-2.5-6.5-4-8 1.5-1.5 3-4 4-8Z" />
            </svg>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

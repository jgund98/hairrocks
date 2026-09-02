import { TIERS, fmtPrice, lowestPrice, type MenuItem } from "@/lib/site";

/* Editorial price list — dotted leaders, real prices, no card grids.
   Three price columns (Designer · Senior · Master) unless `tiers={false}`,
   for add-ons that cost the same at every stylist level. */
export default function MenuList({
  items,
  dark = false,
  tiers = true,
  className = "",
}: {
  items: readonly MenuItem[];
  dark?: boolean;
  tiers?: boolean;
  className?: string;
}) {
  const name = `font-display text-lg font-medium leading-snug ${dark ? "text-cream" : "text-forest"}`;
  const leader = `min-w-4 flex-1 border-b-2 border-dotted ${dark ? "border-cream/25" : "border-forest/20"}`;
  const price = `text-right font-display text-lg font-semibold tabular-nums ${dark ? "text-leaf-bright" : "text-moss"}`;
  const note = `text-sm ${dark ? "text-cream/60" : "text-ink-soft"}`;
  const cols = tiers
    ? "grid grid-cols-[minmax(0,1fr)_3.5rem_3.5rem_3.5rem] gap-x-1.5 sm:grid-cols-[minmax(0,1fr)_3.75rem_3.75rem_3.75rem] sm:gap-x-2"
    : "grid grid-cols-[minmax(0,1fr)_auto] gap-x-2";

  return (
    <div className={className}>
      {tiers && (
        <div
          className={`${cols} items-end border-b pb-2 ${dark ? "border-cream/15" : "border-forest/10"}`}
          aria-hidden
        >
          <span
            className={`text-[10.5px] font-extrabold uppercase tracking-[0.18em] ${dark ? "text-cream/55" : "text-ink-soft"}`}
          >
            Stylist level
          </span>
          {TIERS.map((t) => (
            <span
              key={t.key}
              className={`text-right text-[9.5px] font-extrabold uppercase tracking-[0.03em] sm:text-[10.5px] sm:tracking-[0.16em] ${dark ? "text-leaf-bright/80" : "text-moss"}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      )}
      <ul className={`space-y-4 ${tiers ? "mt-4" : ""}`}>
        {items.map((item) => (
          <li key={item.name}>
            <div className={`${cols} items-baseline`}>
              <span className="flex min-w-0 items-baseline gap-3">
                <span className={name}>{item.name}</span>
                <span aria-hidden className={leader} />
              </span>
              {tiers ? (
                item.prices.map((p, i) => (
                  <span key={TIERS[i].key} className={price}>
                    <span className="sr-only">{TIERS[i].label}: </span>
                    {fmtPrice(p, item.plus)}
                  </span>
                ))
              ) : (
                <span className={price}>{fmtPrice(lowestPrice(item), item.plus)}</span>
              )}
            </div>
            {item.note && <p className={`mt-1 ${note}`}>{item.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

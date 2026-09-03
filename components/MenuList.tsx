import { fmtPrice, listPrice, type MenuItem } from "@/lib/site";

/* Editorial price list — dotted leaders, real prices, no card grids.
   One price per line: the Designer-level number from Tiffany's menu, framed
   as a starting point ("Starting at" header; `plus` items carry a "+"). */
export default function MenuList({
  items,
  dark = false,
  startingAt = true,
  className = "",
}: {
  items: readonly MenuItem[];
  dark?: boolean;
  startingAt?: boolean;
  className?: string;
}) {
  const name = `font-display text-lg font-medium leading-snug ${dark ? "text-cream" : "text-forest"}`;
  const leader = `min-w-6 flex-1 border-b-2 border-dotted ${dark ? "border-cream/25" : "border-forest/20"}`;
  const price = `font-display text-lg font-semibold tabular-nums ${dark ? "text-leaf-bright" : "text-moss"}`;
  const note = `text-sm ${dark ? "text-cream/60" : "text-ink-soft"}`;

  return (
    <div className={className}>
      {startingAt && (
        <div
          className={`flex items-end justify-between border-b pb-2 text-[10.5px] font-extrabold uppercase tracking-[0.18em] ${
            dark ? "border-cream/15 text-cream/55" : "border-forest/10 text-ink-soft"
          }`}
          aria-hidden
        >
          <span>Service</span>
          <span className={dark ? "text-leaf-bright/80" : "text-moss"}>Starting at</span>
        </div>
      )}
      <ul className={`space-y-4 ${startingAt ? "mt-4" : ""}`}>
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-baseline gap-3">
              <span className={name}>{item.name}</span>
              <span aria-hidden className={leader} />
              <span className={price}>{fmtPrice(listPrice(item), item.plus)}</span>
            </div>
            {item.note && <p className={`mt-1 ${note}`}>{item.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { MenuItem } from "@/lib/site";

/* Editorial price list — dotted leaders, real prices, no card grids. */
export default function MenuList({
  items,
  dark = false,
  className = "",
}: {
  items: readonly MenuItem[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <li key={item.name}>
          <div className="flex items-baseline gap-3">
            <span className={`font-display text-lg font-medium ${dark ? "text-cream" : "text-forest"}`}>
              {item.name}
            </span>
            <span
              aria-hidden
              className={`min-w-6 flex-1 border-b-2 border-dotted ${dark ? "border-cream/25" : "border-forest/20"}`}
            />
            <span className={`font-display text-lg font-semibold ${dark ? "text-leaf-bright" : "text-moss"}`}>
              {item.price}
            </span>
          </div>
          {item.note && (
            <p className={`mt-1 text-sm ${dark ? "text-cream/60" : "text-ink-soft"}`}>{item.note}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

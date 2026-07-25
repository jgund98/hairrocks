import Image from "next/image";

/* Her real logo, pressed into a slowly-spinning wax-stamp ring —
   the kind of detail that makes a site feel like merch. */
export default function LogoStamp({
  size = 116,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const id = `stamp-${size}`;
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-forest shadow-chip ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-leaf-bright" style={{ fontSize: "10.5px", fontWeight: 800, letterSpacing: "0.22em" }}>
          <textPath href={`#${id}`}>
            BOYNTON BEACH · HAIR STUDIO · EST&nbsp;IN&nbsp;FLORIDA ·
          </textPath>
        </text>
      </svg>
      <Image
        src="/images/logo-white.png"
        alt=""
        width={size}
        height={size}
        className="h-1/2 w-1/2 object-contain"
      />
    </div>
  );
}

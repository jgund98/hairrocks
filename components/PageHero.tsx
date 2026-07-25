import Image from "next/image";
import FlipImage from "@/components/FlipImage";
import LogoStamp from "@/components/LogoStamp";
import { Eyebrow } from "@/components/ui";

/* Inner-page header. The homage: the same model rides along from page to
   page, mirrored on alternating routes — she flips her hair as you browse. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  mirrored = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  mirrored?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-[84px] lg:pt-[96px]">
      {/* Ghost logo — brand texture behind every page opening */}
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={700}
        aria-hidden
        className={`pointer-events-none absolute top-8 w-[380px] rotate-[-8deg] opacity-[0.05] ${
          mirrored ? "-left-24" : "-right-24 rotate-[8deg]"
        }`}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-14">
        <div className={mirrored ? "lg:order-2" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{intro}</div>
          {children && <div className="mt-7">{children}</div>}
        </div>
        <div className={mirrored ? "lg:order-1" : ""}>
          {/* The flip rides along on every screen size */}
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[340px]">
            <div className="arch relative overflow-hidden bg-clay shadow-lift">
              <FlipImage
                src="/images/hero-flip.jpg"
                alt="Fresh layered bob mid hair-flip — styled at Hair Rocks @Artisans in Boynton Beach"
                width={2000}
                height={1334}
                mirrored={mirrored}
                auto={false}
                sizes="(max-width: 1024px) 300px, 340px"
                imgClassName="aspect-[5/6] object-[62%_30%] lg:aspect-[680/900]"
              />
            </div>
            <div className={`absolute -bottom-5 ${mirrored ? "-left-3" : "-right-3"}`}>
              <LogoStamp size={88} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

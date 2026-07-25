"use client";

import { useAnimationFrame, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Seamless marquee: rAF + pixel modulo. No CSS-percentage drift, no visible
   seam, pauses when offscreen. Content is rendered twice; we scroll by
   exactly one copy's width. */
export default function Marquee({
  children,
  speed = 60, // px per second
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const half = useRef(0);
  const x = useRef(0);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => {
      half.current = el.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduce || !visible || !track.current || !half.current) return;
    x.current = (x.current + (speed * delta) / 1000) % half.current;
    track.current.style.transform = `translate3d(${-x.current}px,0,0)`;
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max" aria-hidden>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}

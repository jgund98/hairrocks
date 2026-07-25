"use client";

import { useEffect, useRef, useState } from "react";

/* Identical rendering to a plain <video>, but the file doesn't download until
   the section approaches the viewport — autoplay videos otherwise ignore
   preload="none" and drag 2MB+ into the initial load. */
export default function LazyVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (load) ref.current?.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}

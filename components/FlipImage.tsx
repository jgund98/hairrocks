"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* The signature move, borrowed straight from her old site — the model "flips
   her hair" by mirroring. Here it's a real animation: a quick 3D turn with a
   blur kiss at the midpoint, auto-firing occasionally and on tap. */
export default function FlipImage({
  src,
  alt,
  width,
  height,
  priority = false,
  mirrored = false,
  auto = true,
  className = "",
  imgClassName = "",
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  mirrored?: boolean;
  auto?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}) {
  const [flip, setFlip] = useState(mirrored ? -1 : 1);
  const [spin, setSpin] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const doFlip = () => {
    if (reduce) {
      setFlip((f) => -f);
      return;
    }
    setSpin(true);
  };

  useEffect(() => {
    if (!auto || reduce) return;
    let id: number;
    const schedule = () => {
      id = window.setTimeout(() => {
        // only flip when visible
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.bottom > 0 && rect.top < window.innerHeight) doFlip();
        schedule();
      }, 9000);
    };
    schedule();
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, reduce]);

  return (
    <div ref={ref} className={`[perspective:1400px] ${className}`}>
      <motion.div
        animate={spin ? { rotateY: flip === 1 ? 180 : 0 } : { rotateY: flip === 1 ? 0 : 180 }}
        initial={false}
        transition={{ duration: 0.9, ease: [0.68, -0.05, 0.27, 1.05] }}
        onAnimationComplete={() => {
          if (spin) {
            setFlip((f) => -f);
            setSpin(false);
          }
        }}
        onClick={doFlip}
        className="h-full w-full cursor-pointer [transform-style:preserve-3d]"
        title="Give it a flip"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-full w-full object-cover [backface-visibility:visible] ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}

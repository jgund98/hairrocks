"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ── The garage-door moment ──────────────────────────────────────────────────
   A colorist's site should let you *color*. The photo starts black & white;
   moving your hand (or finger) across it paints the color back in, stroke by
   stroke. The B&W cover is a precomputed image drawn with plain drawImage —
   no canvas blend modes, which silently fail on some mobile browsers —
   and strokes erase it with destination-out (universally supported). */
export default function ColorReveal({
  src,
  bwSrc,
  alt,
}: {
  src: string;
  bwSrc: string;
  alt: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const coverImg = useRef<HTMLImageElement | null>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const img = coverImg.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return; // layout not ready — retry comes via ResizeObserver
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = bwSrc;
    coverImg.current = img;
    // decode() guarantees the bitmap is actually ready before first paint
    const ready = img.decode ? img.decode().catch(() => {}) : Promise.resolve();
    ready.then(() => {
      paintCover();
      // one retry on the next frame covers late layout on slow mobiles
      requestAnimationFrame(paintCover);
    });
    const ro = new ResizeObserver(paintCover);
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [bwSrc, paintCover]);

  const stroke = (x: number, y: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = Math.max(canvas.width, canvas.height) * 0.055;
    ctx.globalCompositeOperation = "destination-out";
    const prev = last.current ?? { x, y };
    const dist = Math.hypot(x - prev.x, y - prev.y);
    const steps = Math.max(1, Math.floor(dist / (r * 0.35)));
    for (let i = 0; i <= steps; i++) {
      const px = prev.x + ((x - prev.x) * i) / steps;
      const py = prev.y + ((y - prev.y) * i) / steps;
      const g = ctx.createRadialGradient(px * dpr, py * dpr, 0, px * dpr, py * dpr, r);
      g.addColorStop(0, "rgba(0,0,0,0.9)");
      g.addColorStop(0.6, "rgba(0,0,0,0.45)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px * dpr, py * dpr, r, 0, Math.PI * 2);
      ctx.fill();
    }
    last.current = { x, y };
  };

  const pos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const revealAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.transition = "opacity 1.4s ease";
    canvas.style.opacity = "0";
    setDone(true);
    setTouched(true);
  };

  const reset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.transition = "";
    canvas.style.opacity = "1";
    setDone(false);
    setTouched(false);
    paintCover();
  };

  return (
    <div className="relative">
      <div className="arch relative overflow-hidden shadow-lift">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full select-none" draggable={false} />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full cursor-crosshair [touch-action:pan-y]"
          onPointerDown={(e) => {
            drawing.current = true;
            setTouched(true);
            last.current = null;
            const p = pos(e);
            stroke(p.x, p.y);
          }}
          onPointerMove={(e) => {
            // desktop: hover paints; touch: drag paints
            if (e.pointerType === "mouse" || drawing.current) {
              if (!touched) setTouched(true);
              const p = pos(e);
              stroke(p.x, p.y);
            }
          }}
          onPointerUp={() => {
            drawing.current = false;
            last.current = null;
          }}
          onPointerLeave={() => {
            drawing.current = false;
            last.current = null;
          }}
          onPointerCancel={() => {
            drawing.current = false;
            last.current = null;
          }}
          aria-label="Interactive photo — move your cursor or finger across it to bring the color back"
          role="img"
        />
        {/* Instruction chip — fades once they start */}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-6 flex justify-center transition-opacity duration-700 ${
            touched ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex items-center gap-2.5 rounded-full bg-forest/85 px-5 py-3 text-sm font-bold text-cream backdrop-blur-sm">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="animate-pulse" aria-hidden>
              <path d="M9 11.5a5.5 5.5 0 0 1 11 0c0 4-3 5.5-5.5 9.5-2.5-4-5.5-5.5-5.5-9.5Z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 20c3-1 4-3.5 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Run your hand through it
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={done || touched ? reset : revealAll}
          className="rounded-full bg-cream/10 px-5 py-2.5 text-sm font-bold text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream/20"
        >
          {done || touched ? "Encore" : "Just show me"}
        </button>
      </div>
    </div>
  );
}

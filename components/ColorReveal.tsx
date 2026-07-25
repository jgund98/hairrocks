"use client";

import { useEffect, useRef, useState } from "react";

/* ── The garage-door moment ──────────────────────────────────────────────────
   A colorist's site should let you *color*. The photo starts in black & white;
   moving your hand (or finger) across it paints the pink back in, stroke by
   stroke — like color melting through a rinse. GPU-cheap: one canvas, strokes
   erase a desaturated cover to reveal the color image beneath. */
export default function ColorReveal({ src, alt }: { src: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  // Paint the desaturated cover
  const paintCover = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !img.complete) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "source-over";
    // cover = the same photo, drained of color
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "saturation";
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // warm it slightly so B&W doesn't feel cold
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgba(248,244,236,0.92)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over";
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    imgRef.current = img;
    img.onload = paintCover;
    const ro = new ResizeObserver(paintCover);
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

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
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
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
      <div ref={wrapRef} className="arch relative overflow-hidden shadow-lift">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full select-none" draggable={false} />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full cursor-crosshair touch-none"
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

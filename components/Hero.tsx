"use client";

import { useEffect, useRef, useState } from "react";
import VariableProximity from "./VariableProximity";

/** Cuenta de 0 al valor con easing; cada dígito reacciona al cursor (VariableProximity). */
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const numberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (value - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  const displayValue = `${prefix}${count}${suffix}`;

  return (
    <div
      ref={numberRef}
      className="inline-block"
      style={{ position: "relative", display: "inline-block", width: "fit-content" }}
    >
      <VariableProximity
        label={displayValue}
        containerRef={numberRef}
        radius={180}
        falloff="linear"
        className={className}
        fromFontVariationSettings="'wght' 500, 'opsz' 18"
        toFontVariationSettings="'wght' 1000, 'opsz' 60"
        style={{ display: "inline-block", fontSize: "2rem", lineHeight: 1.2, fontWeight: 900, color: "#facc15" }}
      />
    </div>
  );
}

export interface HeroProps {
  totalItems?: number;
  totalMarcas?: number;
  galleryItems?: { image: string; text: string }[];
}

/** Bloque principal del home: copy + CTAs + stats. Sin galería para mejor rendimiento. */
export function Hero({
  totalItems = 0,
  totalMarcas = 12,
}: HeroProps) {
  const statsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent text-white">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="animate-fade-up flex flex-col items-center">
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300 sm:px-4 sm:text-[11px]">
            Catálogo profesional • +{totalItems} herramientas
          </span>
          <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Todo para trabajar duro, seguro y bien hecho.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            En YAWELMAQ encontrarás herramientas, accesorios y maquinaria para construcción, mantenimiento y obra, organizados por marca para que elijas rápido y con confianza.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href="#marcas"
              className="touch-lift w-full rounded-full bg-yellow-400 px-7 py-3 text-center text-sm font-black text-black transition hover:bg-yellow-300 active:scale-[0.98] sm:w-auto"
            >
              Ver marcas
            </a>
            <a
              href="#beneficios"
              className="touch-lift w-full rounded-full border border-yellow-400/40 bg-transparent px-7 py-3 text-center text-sm font-semibold text-yellow-200 transition hover:bg-yellow-400/10 active:scale-[0.98] sm:w-auto"
            >
              ¿Por qué YAWELMAQ?
            </a>
          </div>

          <div ref={statsRef} className="mt-10 grid w-full max-w-sm gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-4 shadow-sm transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-400/5">
              <div className="relative">
                <AnimatedCounter value={totalItems} prefix="+" className="variable-proximity-stat" />
                <span className="mt-1 block text-sm text-slate-300">Herramientas</span>
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-4 shadow-sm transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-400/5">
              <div className="relative">
                <AnimatedCounter value={totalMarcas} className="variable-proximity-stat" />
                <span className="mt-1 block text-sm text-slate-300">Marcas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

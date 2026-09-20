"use client";

import { useEffect, useRef, useState } from "react";
import CircularGallery from "./CircularGallery";
import VariableProximity from "./VariableProximity";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
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

  const displayValue = `${count}${suffix}`;

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

export function Hero() {
  const statsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent text-white">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:gap-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300 sm:px-4 sm:text-[11px]">
            Catálogo profesional • +200 herramientas
          </span>
          <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Todo para trabajar duro, seguro y bien hecho.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            En YAWELMAQ encontrarás herramientas, accesorios y materiales para construcción, mantenimiento y obra, organizados por categoría para que elijas rápido y con confianza.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#categorias"
              className="touch-lift w-full rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-black text-black transition hover:bg-yellow-300 active:scale-[0.98] sm:w-auto"
            >
              Ver catálogo
            </a>
            <a
              href="#categorias"
              className="touch-lift w-full rounded-full border border-yellow-400/40 bg-transparent px-5 py-3 text-center text-sm font-semibold text-yellow-200 transition hover:bg-yellow-400/10 active:scale-[0.98] sm:w-auto"
            >
              ¿Por qué YAWELMAQ?
            </a>
          </div>

          <div ref={statsRef} className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-4 shadow-sm transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-400/5">
              <div className="relative">
                <AnimatedCounter value={200} suffix="+" className="variable-proximity-stat" />
                <span className="mt-1 block text-sm text-slate-300">Herramientas</span>
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-4 shadow-sm transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-400/5">
              <div className="relative">
                <AnimatedCounter value={12} className="variable-proximity-stat" />
                <span className="mt-1 block text-sm text-slate-300">Categorías</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="h-[310px] w-full overflow-hidden rounded-[22px] border border-yellow-200/80 bg-[#111111]/60 shadow-[0_25px_80px_rgba(17,17,17,0.18)] ring-1 ring-yellow-300/20 backdrop-blur-[2px] sm:h-[360px] lg:h-[500px]">
            <CircularGallery
              items={[
                { image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", text: "Taladros" },
                { image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", text: "Sierras" },
                { image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", text: "Accesorios" },
                { image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", text: "Herramientas" },
                { image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80", text: "Ferretería" },
                { image: "https://images.unsplash.com/photo-1590793892454-8d1d0e7a4fbe?auto=format&fit=crop&w=900&q=80", text: "Electricidad" },
              ]}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
              font="bold 30px Orbitron"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

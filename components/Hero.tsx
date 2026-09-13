"use client";

import { useEffect, useRef, useState } from "react";
import TiltedCard from "./TiltedCard";
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
    <section id="inicio" className="relative overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,200,76,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(245,200,76,0.1),transparent_25%)]" />
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

        <div className="relative mx-auto w-full max-w-[420px]">
          <TiltedCard
            imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"
            altText="Herramientas YAWELMAQ"
            captionText="YAWELMAQ"
            containerHeight="310px"
            containerWidth="100%"
            imageHeight="310px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent
            overlayContent={
              <div className="flex h-full w-full flex-col justify-between rounded-[15px] bg-gradient-to-br from-[#111111]/80 via-[#111111]/70 to-[#f5c84c]/20 p-5 text-white backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                    YAWELMAQ
                  </span>
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-black">
                    Calidad
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-yellow-300/30 bg-[#171717]/80 p-3">
                    <div className="mb-2 text-2xl">🛠️</div>
                    <p className="text-xs text-slate-200">Herramientas</p>
                    <p className="mt-1 text-lg font-bold">Profesionales</p>
                  </div>
                  <div className="rounded-2xl border border-yellow-300/30 bg-[#171717]/80 p-3">
                    <div className="mb-2 text-2xl">🏗️</div>
                    <p className="text-xs text-slate-200">Materiales</p>
                    <p className="mt-1 text-lg font-bold">De obra</p>
                  </div>
                  <div className="rounded-2xl border border-yellow-300/30 bg-[#171717]/80 p-3 sm:col-span-2">
                    <div className="mb-2 text-2xl">🚚</div>
                    <p className="text-xs text-slate-200">Entrega y asesoría</p>
                    <p className="mt-1 text-lg font-bold">Rápida y confiable</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

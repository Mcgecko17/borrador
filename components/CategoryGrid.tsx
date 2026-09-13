"use client";

import { useState } from "react";

const categories = [
  {
    name: "Herramientas eléctricas",
    icon: "⚡",
    text: "Taladros, sierras y herramientas de alto rendimiento.",
    count: "36 productos",
    items: [
      { name: "Taladro Percutor", code: "HT-201", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80" },
      { name: "Sierra Circular", code: "HT-202", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80" },
      { name: "Pulidora Angular", code: "HT-203", image: "https://images.unsplash.com/photo-1590793892454-8d1d0e7a4fbe?auto=format&fit=crop&w=900&q=80" },
      { name: "Rotomartillo", code: "HT-204", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80" },
      { name: "Llave Impacto", code: "HT-205", image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80" },
      { name: "Sierra Oscilante", code: "HT-206", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80" },
      { name: "Amoladora", code: "HT-207", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80" },
      { name: "Atornillador", code: "HT-208", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    name: "Materiales de construcción",
    icon: "🧱",
    text: "Cemento, bloques, arena y materiales para obra.",
    count: "48 productos",
    items: [
      { name: "Cemento Gris", code: "MC-101", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" },
      { name: "Bloque Hueco", code: "MC-102", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" },
      { name: "Arena Lavada", code: "MC-103", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" },
      { name: "Grava 3/4", code: "MC-104", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=900&q=80" },
      { name: "Ladrillo King", code: "MC-105", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80" },
      { name: "Yeso Para Pared", code: "MC-106", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80" },
      { name: "Mortero", code: "MC-107", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80" },
      { name: "Piedra Chancada", code: "MC-108", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    name: "Plomería y fontanería",
    icon: "🚿",
    text: "Tuberías, accesorios y soluciones para agua y desagües.",
    count: "29 productos",
    items: [
      { name: "Tubo PPR", code: "PF-301", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" },
      { name: "Codo 90°", code: "PF-302", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80" },
      { name: "Tees PVC", code: "PF-303", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" },
      { name: "Llave de paso", code: "PF-304", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80" },
      { name: "Valvula Unión", code: "PF-305", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" },
      { name: "Sifón Lavabo", code: "PF-306", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80" },
      { name: "Niple", code: "PF-307", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" },
      { name: "Conector Flexible", code: "PF-308", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    name: "Seguridad industrial",
    icon: "🛡️",
    text: "Protección personal y equipos para trabajos seguros.",
    count: "22 productos",
    items: [
      { name: "Casco de seguridad", code: "SI-401", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80" },
      { name: "Guantes dieléctricos", code: "SI-402", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
      { name: "Lentes de protección", code: "SI-403", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
      { name: "Chaleco reflectivo", code: "SI-404", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80" },
      { name: "Botas anti-slip", code: "SI-405", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
      { name: "Arnés de seguridad", code: "SI-406", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80" },
      { name: "Mameluco", code: "SI-407", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
      { name: "Careta facial", code: "SI-408", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    name: "Pinturas y acabados",
    icon: "🎨",
    text: "Colores, acabados y soluciones para remodelación.",
    count: "31 productos",
    items: [
      { name: "Pintura Interior", code: "PA-501", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=900&q=80" },
      { name: "Brocha de cerdas", code: "PA-502", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" },
      { name: "Rodillo texturizado", code: "PA-503", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" },
      { name: "Sellador acrílico", code: "PA-504", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=900&q=80" },
      { name: "Masilla plástica", code: "PA-505", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80" },
      { name: "Laca brillante", code: "PA-506", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=900&q=80" },
      { name: "Espátula", code: "PA-507", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" },
      { name: "Pintura exterior", code: "PA-508", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    name: "Ferretería en general",
    icon: "🔧",
    text: "Todo lo necesario para mantenimiento y hogar.",
    count: "54 productos",
    items: [
      { name: "Tuerca Hexagonal", code: "FG-601", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80" },
      { name: "Clavo de concreto", code: "FG-602", image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80" },
      { name: "Cinta aislante", code: "FG-603", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
      { name: "Destornillador", code: "FG-604", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" },
      { name: "Llave inglesa", code: "FG-605", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80" },
      { name: "Pegamento multiuso", code: "FG-606", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
      { name: "Martillo", code: "FG-607", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" },
      { name: "Alicate", code: "FG-608", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
    ],
  },
];

export function CategoryGrid() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 text-center animate-fade-up sm:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-700 sm:text-sm">Categorías</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">Catálogo por especialidad</h3>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {categories.map((category) => {
          const isOpen = expandedCategory === category.name;
          const visibleItems = isOpen ? category.items : category.items.slice(0, 6);

          return (
            <div
              key={category.name}
              className="overflow-hidden rounded-[24px] border border-yellow-200 bg-[#171717] shadow-sm sm:rounded-[28px]"
            >
              <button
                type="button"
                onClick={() => setExpandedCategory(isOpen ? null : category.name)}
                className="touch-lift flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 text-xl shadow-sm sm:h-12 sm:w-12 sm:text-2xl">
                    {category.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h4 className="text-base font-black text-white sm:text-lg lg:text-xl">{category.name}</h4>
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-yellow-700 sm:text-[10px]">
                        {category.count}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">{category.text}</p>
                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yellow-200 bg-yellow-50 text-lg font-bold text-yellow-700 sm:h-10 sm:w-10 sm:text-xl">
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              <div className="px-3 pb-4 sm:px-6 sm:pb-5">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleItems.map((item) => (
                    <article
                      key={item.code}
                      className="overflow-hidden rounded-2xl border border-slate-700 bg-[#1d1d1d] shadow-sm transition duration-200 hover:-translate-y-1 hover:border-yellow-300"
                    >
                      <div className="relative h-40 overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-[#111111] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-yellow-300">
                          {item.code}
                        </span>
                      </div>

                      <div className="p-4">
                        <h5 className="text-base font-bold text-white">{item.name}</h5>
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                          Código: {item.code}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {category.items.length > 6 && (
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setExpandedCategory(isOpen ? null : category.name)}
                      className="touch-lift inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-800 transition hover:bg-yellow-100"
                    >
                      {isOpen ? "Ver menos" : "Ver más"}
                      <span className={`text-base transition ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        ↓
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

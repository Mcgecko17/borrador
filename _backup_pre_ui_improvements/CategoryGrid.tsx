import Link from "next/link";

import { featuredCategories } from "../app/catalogo-data";

/** Tarjetas del home; cada una abre /catalogo/[slug]. */
export function CategoryGrid() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 text-center animate-fade-up sm:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-700 sm:text-sm">Categorías</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">Catálogo por especialidad</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/catalogo/${category.slug}`}
            className="group block overflow-hidden rounded-[26px] border border-yellow-200/20 bg-[#171717] text-left shadow-[0_18px_40px_rgba(17,17,17,0.14)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/70"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            </div>

            <div className="p-5">
              <h4 className="text-xl font-black text-white">{category.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

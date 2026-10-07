import Link from "next/link";
import { MarcaInfo, getProductImageUrl } from "@/lib/supabase";
import { BrandCardImage } from "./BrandCardImage";

export interface CategoryGridProps {
  marcas?: MarcaInfo[];
}

/** Tarjetas del home: marcas oficiales de Supabase; cada una abre /catalogo/[slug]. */
export function CategoryGrid({ marcas = [] }: CategoryGridProps) {
  return (
    <section id="marcas" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 text-center animate-fade-up sm:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm">
          Marcas Oficiales
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
          Catálogo por marca
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-300">
          Encuentra las mejores marcas profesionales para construcción, industria y taller.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {marcas.map((marca) => {
          const fallbackProductImg = marca.products[0]
            ? getProductImageUrl(marca.products[0].codigo_producto)
            : "/wallpaperflare.com_wallpaper.jpg";

          return (
            <Link
              key={marca.slug}
              href={`/catalogo/${marca.slug}`}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-yellow-200/20 bg-[#171717] text-left shadow-[0_18px_40px_rgba(17,17,17,0.14)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/70"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-900">
                <BrandCardImage
                  src={marca.imageUrl}
                  fallbackSrc={fallbackProductImg}
                  alt={`Marca ${marca.name}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-yellow-400/30 bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
                  {marca.productCount} {marca.productCount === 1 ? "producto" : "productos"}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-yellow-400/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                  Oficial
                </span>
              </div>

              <div className="flex flex-1 items-center justify-between p-5">
                <div>
                  <h4 className="text-xl font-black text-white transition-colors group-hover:text-yellow-300">
                    {marca.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Ver herramientas y accesorios
                  </p>
                </div>
                <span className="text-xl text-yellow-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

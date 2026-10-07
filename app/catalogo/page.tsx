import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandCardImage } from "@/components/BrandCardImage";
import { getMarcas, getProductos, getProductImageUrl } from "@/lib/supabase";

export const metadata = {
  title: "Catálogo de Marcas | Ferretería YAWELMAQ",
  description:
    "Explora todas las marcas oficiales y herramientas profesionales de ferretería YAWELMAQ.",
};

export const revalidate = 30;

export default async function CatalogoIndexPage() {
  const [marcas, productos] = await Promise.all([getMarcas(), getProductos()]);
  const totalProducts = productos.length;

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Header del Catálogo */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-yellow-300/20 pb-8">
          <div>
            <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">
              Catálogo Oficial • {marcas.length} Marcas
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Todas las Marcas
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Más de {totalProducts} herramientas y accesorios profesionales para construcción, obra y mantenimiento.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/50 bg-transparent px-5 py-2 text-sm font-bold text-yellow-200 transition hover:bg-yellow-400/10"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Grilla completa de marcas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marcas.map((marca) => {
            const fallbackImg = marca.products[0]
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
                    fallbackSrc={fallbackImg}
                    alt={marca.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-yellow-400/30 bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
                    {marca.productCount}{" "}
                    {marca.productCount === 1 ? "producto" : "productos"}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-yellow-400/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                    Oficial
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h2 className="text-xl font-black text-white transition-colors group-hover:text-yellow-300">
                      {marca.name}
                    </h2>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Explora la línea completa de herramientas y repuestos de {marca.name}.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs font-bold text-yellow-300">
                    <span>Ver productos</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

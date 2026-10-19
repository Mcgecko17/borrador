import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BrandCardImage } from "@/components/BrandCardImage";
import { getProductosByMarcaSlug, getProductImageUrl, getMarcas } from "@/lib/supabase";
import { categories } from "../../catalogo-data";

export const revalidate = 30;

export async function generateStaticParams() {
  try {
    const marcas = await getMarcas();
    if (marcas.length > 0) {
      return marcas.map((m) => ({ slug: m.slug }));
    }
  } catch {
    // fallback
  }
  return categories.map((category) => ({ slug: category.slug }));
}

/** Página de catálogo de marca: productos de la base de datos sin mostrar precio y con botón de WhatsApp. */
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Buscar primero en las marcas de Supabase
  const marcaData = await getProductosByMarcaSlug(slug);

  if (marcaData) {
    return (
      <main className="min-h-screen bg-transparent text-white">
        <Navbar />

        <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-yellow-300/20 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400">
                Marca Oficial
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {marcaData.marcaName}
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                {marcaData.products.length}{" "}
                {marcaData.products.length === 1
                  ? "herramienta disponible"
                  : "herramientas disponibles"}{" "}
                en catálogo
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:hidden">
              
              <Link
                href="/catalogo"
                className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/30 bg-white/5 px-4 py-2 text-xs font-bold text-yellow-200 transition hover:bg-yellow-400/10"
              >
                Todas las marcas
              </Link>
              <Link
                href="/"
                className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/50 bg-transparent px-4 py-2 text-xs font-bold text-yellow-200 transition hover:bg-yellow-400/10"
              >
                Inicio
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {marcaData.products.map((product) => {
              const imageUrl = getProductImageUrl(product.codigo_producto);

              return (
                <article
                  key={product.codigo_producto}
                  className="flex flex-col overflow-hidden rounded-[22px] border border-yellow-200/15 bg-[#171717] shadow-[0_18px_38px_rgba(17,17,17,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/60"
                >
                  <div className="relative h-32 sm:h-56 overflow-hidden bg-zinc-900">
                    <BrandCardImage
                      src={imageUrl}
                      fallbackSrc="/wallpaperflare.com_wallpaper.jpg"
                      alt={product.nombre_producto}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#111111]/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-yellow-300 ring-1 ring-yellow-300/35">
                      {product.codigo_producto}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-yellow-400/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-black">
                      {marcaData.marcaName}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-3 sm:p-5">
                    <div>
                      <h3 className="text-sm sm:text-xl font-black text-white">
                        {product.nombre_producto}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-slate-400">
                        Código de referencia:{" "}
                        <span className="text-yellow-300 font-semibold">
                          {product.codigo_producto}
                        </span>
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-300/90">
                          <span
                            className={`h-2 w-2 rounded-full ${product.stock_producto > 0
                              ? "bg-emerald-400 animate-pulse"
                              : "bg-amber-400"
                              }`}
                          />
                          {product.stock_producto > 0
                            ? `Stock disponible (${product.stock_producto} unid.)`
                            : "Bajo pedido"}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/+59175921002?text=${encodeURIComponent(
                          `Hola YAWELMAQ, deseo cotizar el producto: ${product.nombre_producto} (Código: ${product.codigo_producto}) de la marca ${marcaData.marcaName}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[11px] sm:px-3.5 sm:py-1.5 sm:text-xs font-black text-black transition hover:bg-yellow-300 active:scale-95"
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // 2. Fallback a categorías tradicionales si no es una marca
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-yellow-300/20 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400">
              Categoría
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {category.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:hidden">
            <Link
              href="/catalogo"
              className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/30 bg-white/5 px-4 py-2 text-xs font-bold text-yellow-200 transition hover:bg-yellow-400/10"
            >
              Todas las marcas
            </Link>
            <Link
              href="/"
              className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/50 bg-transparent px-4 py-2 text-xs font-bold text-yellow-200 transition hover:bg-yellow-400/10"
            >
              Inicio
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {category.products.map((product) => (
            <article
              key={product.code}
              className="flex flex-col overflow-hidden rounded-[22px] border border-yellow-200/15 bg-[#171717] shadow-[0_18px_38px_rgba(17,17,17,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/60"
            >
              <div className="relative h-32 sm:h-56 overflow-hidden bg-zinc-900">
                <img
                  src={product.image || "/wallpaperflare.com_wallpaper.jpg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#111111]/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-yellow-300 ring-1 ring-yellow-300/35">
                  {product.code}
                </span>
                {product.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-yellow-400/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-black">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between p-3 sm:p-5">
                <div>
                  <h3 className="text-sm sm:text-xl font-black text-white">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{product.description}</p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-300/80">
                      {product.inStock !== false ? "Stock en tienda" : "Bajo pedido"}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/+59175921002?text=${encodeURIComponent(
                      `Hola YAWELMAQ, deseo cotizar el producto: ${product.name} (Código: ${product.code})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[11px] sm:px-3.5 sm:py-1.5 sm:text-xs font-black text-black transition hover:bg-yellow-300 active:scale-95"
                  >
                    Cotizar
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

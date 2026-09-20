import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { categories } from "../../catalogo-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400">Categoría</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{category.name}</h1>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-full border border-yellow-300/50 bg-transparent px-4 py-2 text-sm font-bold text-yellow-200 transition hover:bg-yellow-400/10"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {category.products.map((product) => (
            <article
              key={product.code}
              className="overflow-hidden rounded-[22px] border border-yellow-200/15 bg-[#171717] shadow-[0_18px_38px_rgba(17,17,17,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/60"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-[#111111]/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-yellow-300 ring-1 ring-yellow-300/35">
                  {product.code}
                </span>
              </div>

              <div className="p-5">
                <div>
                  <h3 className="text-xl font-black text-white">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{product.description}</p>
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

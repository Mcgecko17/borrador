const featuredProducts = [
  { title: "Taladros y sierras", description: "Potencia, precisión y durabilidad para cada trabajo.", tag: "Herramienta" },
  { title: "Cemento y materiales", description: "Base sólida para construcción y remodelación eficiente.", tag: "Obra" },
  { title: "Tuberías y accesorios", description: "Sistemas seguros para agua, desagües y conexiones.", tag: "Plomería" },
  { title: "Seguridad y protección", description: "Equipo para trabajos más seguros y responsables.", tag: "Seguridad" },
];

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-700">Destacados</p>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">Productos que impulsan tu proyecto</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <article key={product.title} className="rounded-3xl border border-yellow-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 text-3xl shadow-sm">🧰</div>
            <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-700">
              {product.tag}
            </span>
            <h4 className="mt-4 text-xl font-bold text-[#111111]">{product.title}</h4>
            <p className="mt-2 text-slate-600">{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

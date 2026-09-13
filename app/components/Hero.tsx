// components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-slate-50">
      {/* Título Principal */}
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl">
        Construye tu aplicación en tiempo récord
      </h1>

      {/* Subtítulo / Descripción */}
      <p className="mt-6 text-lg text-slate-600 max-w-xl">
        La plataforma todo en uno para diseñar, desarrollar y lanzar tu proyecto web sin complicaciones.
      </p>

      {/* Botones de Acción (CTA) */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Comenzar gratis
        </button>
        <button className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-100 transition">
          Saber más
        </button>
      </div>
    </section>
  );
}
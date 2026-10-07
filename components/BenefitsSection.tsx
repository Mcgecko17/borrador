/** Sección no montada en page.tsx; se puede reusar o borrar. */
const benefits = [
  { title: "Amplio catálogo", text: "Más de 200 herramientas y materiales para obra y hogar." },
  { title: "Precios justos", text: "Soluciones competitivas con excelente relación calidad-precio." },
  { title: "Asesoría real", text: "Te orientamos para elegir la herramienta correcta según tu proyecto." },
  { title: "Entrega confiable", text: "Servicio ágil y atención cercana para minimizar tiempos y riesgos." },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 text-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div>
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300 sm:text-[11px]">
            Confianza y respaldo
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
            Tu socio para construir con seguridad.
          </h3>
          <p className="mt-5 max-w-xl text-slate-300 leading-relaxed">
            En YAWELMAQ combinamos variedad, productos confiables y atención técnica para ayudarte a cumplir cada trabajo sin complicaciones.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl border border-yellow-400/20 bg-[#171717]/80 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-yellow-300/60 hover:-translate-y-0.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-black text-black">
                ✓
              </div>
              <div>
                <p className="text-base font-bold text-white">{benefit.title}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

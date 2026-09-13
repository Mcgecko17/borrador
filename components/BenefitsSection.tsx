const benefits = [
  { title: "Amplio catálogo", text: "Más de 200 herramientas y materiales para obra y hogar." },
  { title: "Precios justos", text: "Soluciones competitivas con excelente relación calidad-precio." },
  { title: "Asesoría real", text: "Te orientamos para elegir la herramienta correcta según tu proyecto." },
  { title: "Entrega confiable", text: "Servicio ágil y atención cercana para minimizar tiempos y riesgos." },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-[#111111] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">¿Por qué elegirnos?</p>
          <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Tu socio para construir con seguridad.</h3>
          <p className="mt-5 max-w-xl text-slate-300">
            En YAWELMAQ combinamos variedad, productos confiables y atención técnica para ayudarte a cumplir cada trabajo sin complicaciones.
          </p>
        </div>

        <div className="grid gap-5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 rounded-2xl border border-yellow-400/20 bg-white/5 p-5">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-black">✓</div>
              <div>
                <p className="text-lg font-semibold text-white">{benefit.title}</p>
                <p className="mt-1 text-sm text-slate-300">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

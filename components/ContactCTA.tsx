export function ContactCTA() {
  return (
    <section id="contacto" className="bg-gradient-to-r from-yellow-400 to-[#f0b800] py-16 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-black/70">Cotiza con nosotros</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Haz crecer tu proyecto con YAWELMAQ</h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="tel:+51999999999" className="rounded-full bg-[#111111] px-7 py-3 text-base font-black text-yellow-300 transition hover:bg-black">
            Llamar ahora
          </a>
          <a href="mailto:ventas@yawelmaq.com" className="rounded-full border border-black/20 bg-white/40 px-7 py-3 text-base font-black text-black transition hover:bg-white/70">
            Escríbenos
          </a>
        </div>
      </div>
    </section>
  );
}

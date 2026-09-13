export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300/60 bg-[#111111]/90 text-yellow-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-base font-black text-black shadow-lg shadow-yellow-500/30 sm:h-11 sm:w-11 sm:text-lg">
            Y
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-yellow-300 sm:text-[10px]">Ferretería</p>
            <h1 className="truncate text-sm font-black tracking-tight text-white sm:text-lg">YAWELMAQ</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-yellow-50/80 md:flex">
          <a href="#inicio" className="transition hover:text-yellow-300">Inicio</a>
          <a href="#categorias" className="transition hover:text-yellow-300">Categorías</a>
          <a href="#contacto" className="transition hover:text-yellow-300">Contacto</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-yellow-400/40 bg-yellow-300/5 px-3 py-1 text-[10px] font-medium text-yellow-200 lg:inline-flex">
            Lun - Sáb • 7:00 - 19:00
          </span>
          <a
            href="#contacto"
            className="rounded-full bg-yellow-400 px-3.5 py-2 text-[11px] font-black text-black shadow-md shadow-yellow-500/30 transition hover:bg-yellow-300 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Cotiza
          </a>
        </div>
      </div>
    </header>
  );
}

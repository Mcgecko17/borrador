import Link from "next/link";

/** Cabecera fija. En móvil oculta los enlaces y deja logo + horario. */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300/60 bg-[#111111]/90 text-yellow-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src="/uwu.svg" alt="YAWELMAQ" className="h-10 w-10 rounded-xl object-contain sm:h-11 sm:w-11" />
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-yellow-300 sm:text-[10px]">Ferretería</p>
            <h1 className="truncate text-sm font-black tracking-tight text-white sm:text-lg">YAWELMAQ</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-yellow-50/80 md:flex">
          {/* Anclas: coinciden con id="inicio", id="categorias", id="contacto" */}
          <Link href="/#inicio" className="transition hover:text-yellow-300">Inicio</Link>
          <Link href="/#categorias" className="transition hover:text-yellow-300">Categorías</Link>
          <Link href="/#pandita-card" className="transition hover:text-yellow-300">Contacto</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-yellow-400/40 bg-yellow-300/5 px-3 py-1 text-[10px] font-medium text-yellow-200 lg:inline-flex">
            Lun - Sáb • 7:00 - 19:00
          </span>
        </div>
      </div>
    </header>
  );
}

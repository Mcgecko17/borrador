import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-yellow-300/20 bg-[#0d0d0d]/90 py-8 text-slate-300 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center text-sm lg:flex-row lg:px-8 lg:text-left">
        <div className="flex items-center gap-3">
          <img src="/uwu.svg" alt="YAWELMAQ" className="h-10 w-10 rounded-xl object-contain" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-300">Ferretería</p>
            <h3 className="text-sm font-black text-white">YAWELMAQ</h3>
          </div>
        </div>

        <div className="flex gap-5 text-yellow-300">
          <Link href="/#inicio" className="transition hover:text-yellow-200">Inicio</Link>
          <Link href="/#categorias" className="transition hover:text-yellow-200">Categorías</Link>
          <Link href="/#contacto" className="transition hover:text-yellow-200">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}

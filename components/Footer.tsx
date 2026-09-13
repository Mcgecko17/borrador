export function Footer() {
  return (
    <footer className="bg-[#111111] py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm lg:flex-row lg:px-8 lg:text-left">
        <p>© 2026 YAWELMAQ. Ferretería de confianza.</p>
        <div className="flex gap-5 text-yellow-300">
          <a href="#inicio" className="hover:text-yellow-200">Inicio</a>
          <a href="#categorias" className="hover:text-yellow-200">Categorías</a>
          <a href="#contacto" className="hover:text-yellow-200">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import CircularGallery from "@/components/CircularGallery";
import "@/components/CircularGallery.css";

const productItems = [
  {
    image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80",
    text: "Taladros",
  },
  {
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    text: "Sierras",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    text: "Accesorios",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    text: "Herramientas",
  },
  {
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80",
    text: "Ferretería",
  },
  {
    image: "https://images.unsplash.com/photo-1590793892454-8d1d0e7a4fbe?auto=format&fit=crop&w=900&q=80",
    text: "Electricidad",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm">Productos</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Selección destacada</h3>
        </div>
        <div className="h-[320px] w-full overflow-hidden rounded-[24px] border border-yellow-200 bg-[#111111] shadow-[0_25px_80px_rgba(17,17,17,0.18)] sm:h-[380px] lg:h-[500px]">
          <CircularGallery
            items={productItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
            font="bold 30px Orbitron"
          />
        </div>
      </section>

      <CategoryGrid />
      <ContactCTA />
      <Footer />
    </main>
  );
}
